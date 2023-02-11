const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios").default;
require("dotenv").config();
const cors = require("cors");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    autoIndex: false,
  },
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const { Schema } = mongoose;

const paymentSchema = new Schema({
  data: { type: Object, required: true },
  email: String,
});

const Payments = mongoose.model("Payments", paymentSchema);

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ success: true });
});

app.post("/get-flutterwave-link", async (req, res) => {
  const { pledgeAmount, email, name, pledgeOption, currency } = req.body;
  try {
    const responseFromFlutterwave = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      {
        tx_ref: uuidv4(),
        amount: `${pledgeAmount}`,
        currency: currency,
        redirect_url: "https://localhost:5000",
        meta: {
          name: name,
          pledgeOption,
        },
        customer: {
          email: email,
          phonenumber: "",
          name: name,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
      }
    );

    const { data } = responseFromFlutterwave.data;
    console.log(data);
    return res.status(200).json({
      success: true,
      repayment_link: data.link,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ success: false });
  }
});

app.post("/flw-verify-payment", async (req, res) => {
  try {
    // If you specified a secret hash, check for the signature
    // const secretHash = process.env.FLW_SECRET_HASH;
    const signature = req.headers["verif-hash"];

    // if (!signature || signature !== secretHash) {
    //   // This request isn't from Flutterwave; discard
    //   res.status(401).end();
    // }

    const payload = req.body;
    // It's a good idea to log all received events.
    const doc = new Payments();
    doc.data = payload;
    doc.email = payload.data.customer.email;
    await doc.save();
    // Do something (that doesn't take too long) with the payload
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ success: false });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
