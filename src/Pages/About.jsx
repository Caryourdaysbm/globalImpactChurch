import React from "react";
import Believe from "../Components/About/Believe";
import MissionFlex from "../Components/About/MissionFlex";
import Values from "../Components/About/Values";
import ValuesDiv from "../Components/About/ValuesDiv";


import MeetOurLeadPastors from "../Components/About/MeetOurLeadPastors";

function About() {
  return (
    <div className="bg-[#F8F7F7]">
            <MissionFlex />
      <Believe />
      <Values />
      <ValuesDiv />
      
      <MeetOurLeadPastors />
    </div>
  );
}

export default About;
