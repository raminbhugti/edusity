import React from "react";
import Aboutsectpic from "../assets/about-Bupj5-5F.png";
import playicon from "../assets/play-icon-DiRyRcRm.png";

const About = () => {
  return (
    <div
      id="About"
      className="my-[100px] mx-auto w-[90%] flex flex-col md:flex-row items-center"
    >
      <div className="basis-[100%] md:basis-[40%] relative mb-6 md:mb-0">
        <img
          className="w-full rounded-lg"
          src={Aboutsectpic}
          alt="about section pic"
        />
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14"
          src={playicon}
          alt="play icon"
        />
      </div>
      <div className="basis-[100%] md:basis-[56%]">
        <h1 className="text-xl font-semibold text-blue-900 mb-2">
          ABOUT UNIVERSITY
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#000F38] mb-4">
          Nurturing Tomorrow's Leaders Today
        </h2>
        <p className="mb-4 text-gray-500 text-sm sm:text-base md:text-lg">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="mb-4 text-gray-500 text-sm sm:text-base md:text-lg">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>

        <p className="mb-4 text-gray-500 text-sm sm:text-base md:text-lg">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
