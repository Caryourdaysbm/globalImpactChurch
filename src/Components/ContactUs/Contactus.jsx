import React from "react";
import { useState } from "react";

const Contactus = () => {
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Help, setHelp] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    setName("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setHelp("");
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center  px-10 max-w-6xl mx-auto gap-x-20 py-8">
      <div className="md:w-1/2 space-y-5">
        <h1>Have Questions?</h1>
        <h1>Get in Touch!</h1>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <form>
            <label for="name" className="contact-label ">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="contact-input"
              placeholder="name"
              required
              onChange={(event) => setName(event.target.value)}
              value={Name}
            />
          </form>{" "}
          <div>
            <label for="phone" className="contact-label">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="contact-input"
              placeholder="123-45-678"
              pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
              required
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={PhoneNumber}
            />
          </div>
        </div>
        <div className="mb-6">
          <label for="email" className="contact-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="contact-input"
            placeholder="name@companymail.com"
            required
            onChange={(event) => setEmail(event.target.value)}
            value={Email}
          />
        </div>
        <div className="mb-6">
          <label for="default-input" className="contact-label">
            Subject
          </label>
          <input
            type="text"
            id="default-input"
            className="contact-input"
            onChange={(event) => setSubject(event.target.value)}
            value={Subject}
          />
        </div>
        <div className="mb-6">
          <label for="large-input" className="contact-label">
            How can we help you?
          </label>
          <input
            type="text"
            id="large-input"
            className="contact-input"
            onChange={(event) => setHelp(event.target.value)}
            value={Help}
          />
        </div>
        <button type="submit" className="home-btn">
          Get in Touch!
        </button>
      </form>
    </section>
  );
};
export default Contactus;
