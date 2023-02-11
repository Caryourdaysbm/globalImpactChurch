import React from "react";
import Typed from "react-typed";


export default function MissionFlex() {
  return (
    <div className="bg-[url('././assets/Images/imgBg.png')] h-full md:px-[8rem] px-6">
      <div className="md:flex justify-between py-[15rem] md:space-x-60  w-full max-w-[800px] h-full">
        <div>
             <p className="text-[#F8F7F7] align-center font-semibold text-2xl pt-2 lg:ml-0">
            We{" "}
            <span className="text-[#99CC06]">
              <Typed
                strings={["Reach", "Build", "Serve", "are Global Impact"]}
                typeSpeed={150}
                backSpeed={20}
                loop
              />
            </span>
          </p>
          <p className="text-white w-[22rem] font-[599]">
          Our vision is to raise generations of Great people that will be a Blessing to their World.
          </p>
        </div>
       
      </div>
    </div>
  );
}
