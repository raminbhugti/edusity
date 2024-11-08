import React from "react";
import arrow from "../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-[100vh] bg-no-repeat hero container flex justify-center items-center"
    >
      <div className="text-center max-w-[800px]">
        <h1 className="text-[60px] font-semibold">
          We Ensure better education for a better world
        </h1>
        <p className="max-w-[700px] mx-auto mt-[10px] mb-[20px] leading-6">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn inline-flex items-center justify-center">
          Explore More <img className="ml-2 w-5" src={arrow} alt="arrow pic" />
        </button>
      </div>
    </div>
  ); /* hero is an custom class i have defined in the index.css */
};

export default Hero;
