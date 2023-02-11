import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BiChat } from "react-icons/bi";

function Footer() {
  return (
    <footer className=" bg-[#131117] text-[#D5D3D3] w-full px-10 py-8 ">
      <div className="flex max-w-6xl mx-auto flex-col space-y-9 lg:space-y-0 lg:flex-row lg:space-x-44 lg:items-start">
        {/* Address */}
        <div className="flex flex-col max-w-md space-y-4">
          <h3 className="text-white text-xl font-semibold">Address</h3>
          <p>
            Lagos, Nigeria - The Goodland, Ifako Bus-stop, Oworoshoki
            Expressway, Lagos, Nigeria
          </p>
          <a href="mailto:info@globalimpactng.org">info@globalimpactng.org</a>
          <a href="tel:+2348125340806">+234 812 534 0806</a>
        </div>
        {/* Get In Touch */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold">Get In Touch</h3>
          <div className="flex space-x-6">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <BsYoutube />
            </a>
          </div>
        </div>
        {/* Get Free Church Resources Today */}
        <div className="space-y-4 w-full">
          <h3 className="text-white text-xl font-semibold">
            Get Free Church Resources Today
          </h3>
          <div className="flex flex-col space-y-4">
            <input
              className="py-2 pl-2.5 focus:outline-none rounded-sm text-black"
              type="text"
              placeholder="First Name"
            />
            <input
              className="py-2 pl-2.5 focus:outline-none rounded-sm text-black "
              type="email"
              placeholder="Your Email"
            />
            <button className="font-semibold bg-orange-700 text-white border-none rounded-sm py-2">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <div className="border-2 border-[#241F2A]"></div>
        <p className="pt-8 text-center">
          Global Impact Church © 2022. All Rights Reserved
        </p>
      </div>
      {/* <div className=" fixed bottom-0 right-0">
        <BiChat />
      </div> */}
    </footer>
  );
}

export default Footer;
