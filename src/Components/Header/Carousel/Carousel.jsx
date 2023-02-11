import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Autoplay } from "swiper";
import CH1 from "../../../assets/Images/carousel-home-1.jpg";
import CH2 from "../../../assets/Images/carousel-home-2.jpg";
import CH3 from "../../../assets/Images/carousel-home-3.jpg";
import CH4 from "../../../assets/Images/carousel-home-4.jpg";
import CH5 from "../../../assets/Images/carousel-home-5.jpg";

export default function Carousel() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] object-cover brightness-[30%]"
            src={CH1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] object-cover brightness-[30%]"
            src={CH2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] object-cover brightness-[30%]"
            src={CH3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] object-cover brightness-[30%]"
            src={CH4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] object-cover brightness-[30%]"
            src={CH5}
          />
        </SwiperSlide>
      </Swiper>

      <div
        className="w-[80%] text-white text-center absolute left-[10%] top-[35%]  -translate-x-[50%] -translate-y-[80%] z-10 space-y-2 transition ease-in delay-100"
        data-aos="fade-up-right"
        data-aos-duration="2500"
      >
        <h2 className="text-3xl font-semibold lg:text-5xl">
          Welcome to Global Impact Church
        </h2>
        <p className="w-[90%] mx-auto text-lg lg:text-xl">
          We are raising generations of great people that will be a blessing to
          their world.
        </p>
      </div>
    </div>
  );
}
