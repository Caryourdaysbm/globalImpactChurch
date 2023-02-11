import pastors from "../../assets/Images/our-pastors.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function MeetPastors() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-lightBlue  ">
      <div className="mx-auto px-10 max-w-6xl">
        <article className="meet-pastors__article">
          <div
            className="space-y-6"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <h1>Meet our Pastors</h1>
            <p className="mb-5 leading-8 font-light max-w-[25rem]">
              Yemi and Bimbo Davids are the Lead Pastors at Global Impact Church
              located in Lagos. They’ve been in full-time ministry for over 15
              years. Yemi and Bimbo have a rich history with Global Impact
              Church, going back 13 years when they started their ministry in
              Surulere, Lagos.
            </p>
            <div className="flex">
              <Link to="/about" className="home-btn">
                Read More
                <AiOutlineArrowRight className="font-bold text-2xl" />
              </Link>
            </div>
          </div>
          <img
            src={pastors}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt=""
            className="w-full md:max-w-xs "
          />
        </article>
      </div>
    </section>
  );
}
export default MeetPastors;
