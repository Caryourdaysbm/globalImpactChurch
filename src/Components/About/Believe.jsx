import React from "react";
import Img1 from "../../assets/Images/img1.png";
import { Link } from "react-router-dom"

export default function Believe() {
  return (
    <div className="flex md:px-[6rem] px-8 mt-8">
      <div className=" flex flex-col md:flex-row justify-center md:gap-[16rem]">
       <div className="space-y-2 md:w-[30rem]">
       <h3
          className=" md:text-2xl font-[599] text-blueShader ">
          We Believe in You & Your potential!
        </h3>

        <p className=" md:text-lg text-md text-gray-700 " >
          We provide knowledge for transformation
        </p>
        <button
          className="bg-button text-white text-md px-0 py-0
        rounded-3xl font-medium md:py-0"
        >
          <Link to="/contactus" className="home-btn">
          Become A Member Today
          </Link>
        </button>
       </div>
       <div>
<img src={Img1} alt="" className="max-w-xs hidden md:block" />
       </div>
      </div>
    </div>
  );
}
