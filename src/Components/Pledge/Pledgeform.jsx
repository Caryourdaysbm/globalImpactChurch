import axios from "axios";
import react from "react";
import { useState } from "react";

const Pledgeform = () => {
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [Words, setWords] = useState("");
  const [Select, setSelect] = useState("");

  const handleSubmit = async (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/get-flutterwave-link",
        {
          email: Email,
          pledgeAmount: parseFloat(Amount.replace(",", "")),
          currency: currency,
          pledgeOption: Select,
          name: Name,
        }
      );
      window.open(data.repayment_link, "_blank");
      setName("");
      setPhoneNumber("");
      setEmail("");
      setAmount("");
      setCurrency("");
      setWords("");
      setSelect("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className=" bg-slate-200 max-w-6xl mx-auto p-10">
      <h1 className="text-center mb-10">FORMS </h1>
      <h1>Please Pay into</h1>
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="  flex flex-col gap-6">
          <div className="">
            <h1 className="text-xl">GTBANK</h1>
            <p>₦ - 0007948647</p>
            <p> $ - 0007948685</p>
          </div>
          <div>
            <h1 className="text-xl">International Transfer</h1>
            <p>
              <p>USA Cashapp/$globalimpactng</p>
              <p> Canada interac - globalimpact.canada@gmail.com</p>
            </p>
            <p>NOTE: PLEDGES ARE REDEEMABLE BETWEEN January to March 2023</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input-home w-full"
                placeholder="name"
                required
                onChange={(event) => setName(event.target.value)}
                value={Name}
              />
            </div>{" "}
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="input-home"
                placeholder="123-45-678"
              
                required
                onChange={(event) => setPhoneNumber(event.target.value)}
                value={PhoneNumber}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="input-home"
              placeholder="name@companymail.com"
              required
              onChange={(event) => setEmail(event.target.value)}
              value={Email}
            />
          </div>
          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Pledge Amount
            </label>
            <input
              type="text"
              id="default-input"
              placeholder="10,000"
              className="input-home"
              required
              onChange={(event) => setAmount(event.target.value)}
              value={Amount}
            />
          </div>
          <div className="mb-6">
            <label
              for="currency"
              className="block mb-2 text-sm font-medium text-gray-900 mt-3"
            >
              Currency
            </label>
            <select
              id="currency"
              className="input-home"
              required
              onChange={(event) => setCurrency(event.target.value)}
              value={currency}
            >
              <option selected></option>
              <option value="NGN">Naira</option>
              <option value="USD">Dollar</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Amount Pledged in Words
            </label>
            <input
              type="text"
              id="large-input"
              class="input-home"
              required
              onChange={(event) => setWords(event.target.value)}
              value={Words}
            />
            <label
              for="pledgeOption"
              className="block mb-2 text-sm font-medium text-gray-900 mt-3"
            >
              Select pledge option
            </label>
            <select
              id="pledgeOption"
              className="input-home"
              required
              onChange={(event) => setSelect(event.target.value)}
              value={Select}
            >
              <option selected></option>
              <option value="1">Pledge Form</option>
              <option value="2">Kingdom Advancement Commitment Card</option>
            </select>
          </div>
          <button type="submit" className="home-btn">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default Pledgeform;
