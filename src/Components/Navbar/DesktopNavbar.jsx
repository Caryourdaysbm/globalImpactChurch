import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import CustomLinks from "../Links/Link";
import MobileNavigation from "./MobileNavbar";
import { GoThreeBars } from "react-icons/go";

function DesktopNavbar() {
  const body = document.querySelector("body");

  const [displayNav, setDisplayNav] = useState(false);

  const openNav = () => {
    setDisplayNav(true);
    body.classList.add("disable-scroll");
  };

  const closeNavHandler = () => {
    setDisplayNav(false);
    body.classList.remove("disable-scroll");
  };

  return (
    <nav className="bg-blueColor pl-6 pr-10 py-2 ">
      <div className="desktop-nav">
        <figure>
          <img src={logo} alt="" className="max-w-[6rem] cursor-pointer" />
        </figure>
        <GoThreeBars className="menu-bar" onClick={openNav} />
        <ul className="= text-white space-x-12 hidden lg:flex items-center">
          <CustomLinks to="/">Home</CustomLinks>
          <CustomLinks to="/about">About</CustomLinks>
          <CustomLinks to="/ourprogrammes">Programmes</CustomLinks>
          {/* <CustomLinks to="/resourced">Resources</CustomLinks> */}
          <CustomLinks to="/give">Give</CustomLinks>
          <CustomLinks to="/pledge">Pledge Forms</CustomLinks>
          <CustomLinks to="/contactus">Contact</CustomLinks>
          <a
            href="https://youtube.com/@GlobalImpactTV"
            className="bg-white text-blueColor px-6 rounded-3xl py-2"
            target="_blank"
          >
            Watch Live
          </a>
        </ul>
        {displayNav && <MobileNavigation onCloseNav={closeNavHandler} />}
      </div>
    </nav>
  );
}

export default DesktopNavbar;
