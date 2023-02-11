import React, { Fragment } from "react";
import Carousel from "../Components/Header/Carousel/Carousel";
import MeetPastors from "../Components/Home/MeetPastors";
import NeedPrayer from "../Components/Home/NeedPrayer";
import WelcomeSection from "../Components/Home/WelcomeSection";

function Home() {
  return (
    <Fragment>
      <Carousel />
      <WelcomeSection />   
      <MeetPastors />
      <NeedPrayer />
    </Fragment>
  );
}

export default Home;
