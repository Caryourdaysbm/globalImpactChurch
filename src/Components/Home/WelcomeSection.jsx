import A2 from "../../assets/Images/about-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function WelcomeSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="welcome-section">
      <div
        className="max-w-[25rem] space-y-5"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <h1 data-aos="flip-left" data-aos-duration="2000">
          Welcome to Global Impart Church
        </h1>
        <p>
          Global Impact Church is one church with multiple locations, and we
          want to help you become the person God created you to be. No matter
          where you are on your journey, you are invited to discover and live
          out your purpose at Global Impact Church.
        </p>
        <div className="flex">
          <Link to="/contactus" className="home-btn">
            Find a Location
            <AiOutlineArrowRight className="font-bold text-2xl" />
          </Link>
        </div>
      </div>
      <figure>
        <img
          data-aos="flip-right"
          data-aos-duration="1000"
          src={A2}
          alt=""
          className="w-96 object-cover border-8 border-blueColor transition md:-rotate-45"
        />
      </figure>
    </section>
  );
}
export default WelcomeSection;
