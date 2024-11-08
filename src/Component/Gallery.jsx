import React from "react";
import pic1 from "../assets/gallery-1-HP2uKW94.png";
import pic2 from "../assets/gallery-2-DYatBGZh.png";
import pic3 from "../assets/gallery-3-C4KpO1U2.png";
import pic4 from "../assets/gallery-4-LJEJ329C.png";
import arrow2 from "../assets/light-arrow.png";
const Gallery = () => {
  return (
    <div id="Campus" className="grid grid-cols-4 gap-8 mb-4">
      <img
        className="w-full h-auto object-cover rounded-lg"
        src={pic1}
        alt="campus pic"
      />
      <img
        className="w-full h-auto object-cover rounded-lg"
        src={pic2}
        alt="campus pic"
      />
      <img
        className="w-full h-auto object-cover rounded-lg"
        src={pic3}
        alt="campus pic"
      />
      <img
        className="w-full h-auto object-cover rounded-lg"
        src={pic4}
        alt="campus pic"
      />
      <div className="col-span-4 text-center">
        <button className="btn btn-dark">
          See More Here{" "}
          <img
            className="w-6 inline-block ml-2"
            src={arrow2}
            alt="light-arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
