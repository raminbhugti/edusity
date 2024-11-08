import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <div className="text-center text-[#212EAO] font-semibold text-sm mt-[70px] mb-[30px] mx-0 uppercase ">
      <p>{subtitle}</p>
      <h1 className="text-3xl text-[#000F38] mt-[5px]">{title}</h1>
    </div>
  );
};

export default Title;
