import React from "react";

function Contactdetails() {
  return (
    <section className="bg-slate-200 p-10">
      <h1 className="font-extrabold text-center mb-5">Contact Us</h1>
      <article className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
        <div className="space-y-7 md:space-y-0 md:flex md:flex-row md:gap-8">
          <hgroup className="w-full mx-auto">
            <h3 className="text-blueColor text-xl font-serif ">
              Surulere Center
            </h3>
            <p>
              Sunday Services: 07:30AM | 09:30AM | 11:30AM
            </p>
            <p>Wednesday Midweek Service: 06:00PM</p>
            <p>277, Babs Animashaun, Surulere, Lagos</p>
          </hgroup>
          <hgroup className="w-full mx-auto">
            <h3 className="text-blueColor text-xl font-serif ">Lekki Center</h3>
            <p>Sunday Service: 09:00AM</p>
            <p>Wednesday Midweek Service: 06:00PM</p>
            <p>
              L'avenida Multipurpose Hall, Lakeview Park One, Opp. Ikota
              Shopping Complex after VGC
            </p>
          </hgroup>
          <hgroup className="w-full mx-auto">
            <h3 className="text-blueColor text-xl font-serif ">The Goodland</h3>
            <p>Sunday Services: 07:30AM | 09:30AM</p>
            <p>Wednesday Midweek Service: 06:00PM</p>
            <p>The Goodland, Ifako Bus stop, Ogudu, Lagos</p>
          </hgroup>
          <hgroup className="w-full mx-auto">
            <h3 className="text-blueColor text-xl font-serif ">
              Maryland, USA
            </h3>
            <p>Weekend Service: 04:00PM EST</p>
            <p>16800 Science Drive, Bowie Maryland, USA</p>
          </hgroup>
        </div>

        <div className="w-full mx-auto space-y-7 md:flex md:justify-center md:items-center md:space-y-0 gap-x-24">
          <hgroup>
            <h1>Phone Number</h1>
            <h2>+2348125340806</h2>
          </hgroup>

          <hgroup>
            <h1>Email</h1>
            <h2>info@globalimpactng.org</h2>
          </hgroup>
        </div>
      </article>
    </section>
  );
}

export default Contactdetails;
