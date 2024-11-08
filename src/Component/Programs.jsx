import React from "react";
import course1 from "../assets/program-1-DA_EvTPy.png";
import course2 from "../assets/program-2-DRqwF0EM.png";
import course3 from "../assets/program-3-C0g4YULi.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Programs = () => {
  return (
    <div
      id="program"
      className="my-[80px] mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div className="relative">
        <img
          className="w-full block rounded-lg"
          src={course1}
          alt="pic course 1"
        />
        <div className="opacity-0 cursor-pointer hover:opacity-100 flex flex-col items-center justify-center text-white icons-background rounded-lg absolute bottom-0 top-0 left-0 right-0">
          <img className="w-[60px] mb-[10px]" src={icon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full block rounded-lg"
          src={course2}
          alt="pic course 2"
        />
        <div className="opacity-0 cursor-pointer hover:opacity-100 flex flex-col items-center justify-center text-white icons-background rounded-lg absolute bottom-0 top-0 left-0 right-0">
          <img className="w-[60px] mb-[10px]" src={icon2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full block rounded-lg"
          src={course3}
          alt="pic course 3"
        />
        <div className="opacity-0 cursor-pointer hover:opacity-100 flex flex-col items-center justify-center text-white icons-background rounded-lg absolute bottom-0 top-0 left-0 right-0">
          <img className="w-[60px] mb-[10px]" src={icon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
