import React from "react";
import Give from "./../../Pages/Give";

export default function Accountinfo() {
  return (
    <section className="bg-slate-200 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-extrabold text-center mb-5">Give</h1>
        <article className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
          <div className="space-y-7 md:space-y-0 md:flex md:flex-row md:gap-8">
            <hgroup className="w-full mx-auto">
              <h3 className="text-blueColor text-xl font-serif mb-2">
                VIA USSD
              </h3>

              <h3>Use the following codes:</h3>

              <p>
                Offerings/Tithe: <br /> <span>*737*32*Amount*1702#</span>
              </p>
              <p>
                Projects: <br /> <span>*737*32*Amount*1702#</span>
              </p>
            </hgroup>
            <hgroup className="w-full mx-auto">
              <h3 className="text-blueColor text-xl font-serif mb-2">
                Offerings and Tithe
              </h3>
              <p>GTBANK – 0007948609</p>
              <p>GTBank USDollar - 0007948685</p>
              <p>GTBank Pounds - 0007948692</p>
              <p>GTBank Euro - 0007948702</p>
              <p>Stanbic IBTC - 0018228257</p>
            </hgroup>
            <hgroup className="w-full mx-auto">
              <h3 className="text-blueColor text-xl font-serif mb-2">
                Special Givings
              </h3>
              <p>GTBank - Club 58 - 0007948623</p>
              <p>GTBank - Building Fund - 0007948647</p>
              <p>GTBank - Transport Club - 0007948654</p>
            </hgroup>
            <hgroup className="w-full mx-auto">
              <h3 className="text-blueColor text-xl font-serif mb-2">
                International Givings
              </h3>
              <p>
                UK: Lloyds Bank: 07647623 <br /> Sort Code: 040372
              </p>
              <p>USA: Cashapp - $globalimpactng</p>
              <p>Canada Interac - globalimpact.canada@gmail.com</p>
            </hgroup>
          </div>
        </article>
      </div>
    </section>
  );
}
