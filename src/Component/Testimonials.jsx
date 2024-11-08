import React, { useRef } from "react";
import next from "../assets/next-btn.png";
import back from "../assets/back-btn.png";
import face1 from "../assets/user-1-dp2DpvM_.png";
import face2 from "../assets/user-2-UK2CIdqi.png";
import face3 from "../assets/user-3-BHRQSl0V.png";
import face4 from "../assets/user-4-njZdDe5j.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const nextSlide = () => {
    if (tx > -50) {
      tx -= 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const prevSlide = () => {
    if (tx < 0) {
      tx += 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div id="test" className="relative max-w-full mx-auto">
      <img
        className="absolute top-1/2 right-0 translate-y-[-50%] w-12 p-4 rounded-full bg-[#212EA0] cursor-pointer z-10 md:right-[-15px] lg:right-[-30px]"
        src={next}
        alt="next"
        onClick={nextSlide}
      />
      <img
        className="absolute top-1/2 left-0 translate-y-[-50%] w-12 p-4 rounded-full bg-[#212EA0] cursor-pointer z-10 md:left-[-15px] lg:left-[-30px]"
        src={back}
        alt="back"
        onClick={prevSlide}
      />
      <div className="overflow-hidden">
        <ul ref={slider} className="flex w-[400%] transition-all duration-500">
          {/* Testimonial 1 */}
          <li className="w-full px-4 md:px-8 lg:px-12">
            <div className="slide">
              <div className="user-info flex items-center mb-4">
                <img
                  className="test-img w-16 h-16 rounded-full mr-4"
                  src={face1}
                  alt="user face"
                />
                <div>
                  <h3 className="text-[#212EA0] font-semibold">
                    William Jackson
                  </h3>
                  <span className="text-sm text-gray-500">Edusity, USA</span>
                </div>
              </div>
              <p className="text-[#676767] leading-normal text-sm">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          {/* Testimonial 2 */}
          <li className="w-full px-4 md:px-8 lg:px-12">
            <div className="slide">
              <div className="user-info flex items-center mb-4">
                <img
                  className="test-img w-16 h-16 rounded-full mr-4"
                  src={face2}
                  alt="user face"
                />
                <div>
                  <h3 className="text-[#212EA0] font-semibold">John Doe</h3>
                  <span className="text-sm text-gray-500">Edusity, USA</span>
                </div>
              </div>
              <p className="text-[#676767] leading-normal text-sm">
                The best decision I made was joining Edusity. The faculty is
                supportive, and the campus facilities are exceptional, which
                helped me thrive academically.
              </p>
            </div>
          </li>

          {/* Testimonial 3 */}
          <li className="w-full px-4 md:px-8 lg:px-12">
            <div className="slide">
              <div className="user-info flex items-center mb-4">
                <img
                  className="test-img w-16 h-16 rounded-full mr-4"
                  src={face3}
                  alt="user face"
                />
                <div>
                  <h3 className="text-[#212EA0] font-semibold">Alice Green</h3>
                  <span className="text-sm text-gray-500">Edusity, UK</span>
                </div>
              </div>
              <p className="text-[#676767] leading-normal text-sm">
                The learning environment at Edusity helped me grow academically
                and personally. I’m grateful for the opportunities I’ve had
                here.
              </p>
            </div>
          </li>

          {/* Testimonial 4 */}
          <li className="w-full px-4 md:px-8 lg:px-12">
            <div className="slide">
              <div className="user-info flex items-center mb-4">
                <img
                  className="test-img w-16 h-16 rounded-full mr-4"
                  src={face4}
                  alt="user face"
                />
                <div>
                  <h3 className="text-[#212EA0] font-semibold">Mary Smith</h3>
                  <span className="text-sm text-gray-500">
                    Edusity, Australia
                  </span>
                </div>
              </div>
              <p className="text-[#676767] leading-normal text-sm">
                Edusity’s programs and the staff were fantastic! I’ve gained a
                solid education here, and I feel prepared for my future career.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
