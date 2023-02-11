import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import FormValidation from "../UI/Form";

function NeedPrayer() {
  const [form, setForm] = useState(false);

  const showForm = () => {
    setForm(!form);
  };

  return (
    <section className="bg-lightBlue mt-10 p-10">
      <div className="mx-auto max-w-6xl space-y-5">
        <h1 className="text-center font-medium">Need Prayer?</h1>
        <p className="text-center max-w-4xl mx-auto">
          Sometimes life becomes too much to handle, leaving us with nothing but
          questions. Hope may seem far away in those circumstances. Our attitude
          toward the One who is waiting to hear us changes as a result of
          prayer, which is a wonderful thing. Whatever you’re dealing with, we
          would love to pray for you!
        </p>
        <div className="w-full  flex justify-center">
          <button className="home-btn"  onClick={showForm}>
            ASK FOR PRAYER
            {!form && <BsChevronDown />}
            {form && <BsChevronUp />}
          </button>
        </div>
        {form && <FormValidation />}
      </div>
    </section>
  );
}
export default NeedPrayer;
