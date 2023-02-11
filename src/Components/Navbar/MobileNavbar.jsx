import { Fragment } from "react";
import ReactDOM from "react-dom";
import CustomLinks from "../Links/Link";
import logo1 from "../../assets/logo/logo.png";
import { CgClose } from "react-icons/cg";

const portalElement = document.getElementById("overlay");

function MobileNavbar(props) {
  return (
    <div className="absolute z-20 min-w-full min-h-full bg-navModal">
      <figure className="mobile-logo">
        <img src={logo1} alt="" className="w-24 cursor-pointer" />
        <CgClose className="close-menu" onClick={props.onClick} />
      </figure>
      <ul className="mobile-menu">
        <CustomLinks to="/" onClick={props.onClick}>
          Home
        </CustomLinks>
        <CustomLinks to="/about" onClick={props.onClick}>
          About
        </CustomLinks>
        <CustomLinks to="/ourprogrammes" onClick={props.onClick}>
          Our Programmes
        </CustomLinks>
        {/* <CustomLinks to="/resourced" onClick={props.onClick}>
            Resources
          </CustomLinks> */}
        <CustomLinks to="/give" onClick={props.onClick}>
          Give
        </CustomLinks>

        <CustomLinks to="/pledge" onClick={props.onClick}>
          Pledge Forms
        </CustomLinks>

        <CustomLinks to="/contactus" onClick={props.onClick}>
          Contact Us
        </CustomLinks>
        <a
          href="https://youtube.com/@GlobalImpactTV"
          className="bg-white text-blueColor px-6 rounded-3xl py-2 mt-10"
          target="_blank"
        >
          Watch Live
        </a>
      </ul>
    </div>
  );
}

const MobileNavigation = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <MobileNavbar onClick={props.onCloseNav} />,
        portalElement
      )}
    </Fragment>
  );
};

export default MobileNavigation;
