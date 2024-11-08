import React from "react";
import msgicon from "../assets/msg-icon-ClKDHhj8.png";
import mailicon from "../assets/mail-icon.png";
import phoneicon from "../assets/phone-icon.png";
import locationicon from "../assets/location-icon.png";
import arrow3 from "../assets/light-arrow.png";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="my-[80px] mx-auto max-w-[90%] flex flex-col lg:flex-row items-stretch justify-between gap-[40px]"
    >
      {/* Contact Information */}
      <div className="basis-[48%] text-[#676767]">
        <h3 className="text-[#000F38] text-[25px] font-semibold flex items-center mb-[20px]">
          Send us a message
          <img className="w-[35px] ml-[10px]" src={msgicon} alt="msgicon" />
        </h3>
        <p className="leading-normal mb-5">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li className="flex items-center my-[20px]">
            <img className="w-[25px] mr-[10px]" src={mailicon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li className="flex items-center my-[20px]">
            <img className="w-[25px] mr-[10px]" src={phoneicon} alt="" />
            +1 123-456-7890
          </li>
          <li className="flex items-center my-[20px]">
            <img className="w-[25px] mr-[10px]" src={locationicon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="basis-[46%] text-[#676767]">
        <form>
          <label className="block mb-2">Your Name</label>
          <input
            className="block w-full bg-[#EBECFE] p-[15px] outline-none border-none mb-4"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />

          <label className="block mb-2">Phone Number</label>
          <input
            className="block w-full bg-[#EBECFE] p-[15px] outline-none border-none mb-4"
            type="number"
            name="phone"
            placeholder="Enter Your Number"
          />

          <label className="block mb-2">Your Email</label>
          <input
            className="block w-full bg-[#EBECFE] p-[15px] outline-none border-none mb-4"
            type="text"
            name="Email"
            placeholder="Enter Your Email"
          />

          <label className="block mb-2">Write Your Message Here</label>
          <textarea
            className="block w-full bg-[#EBECFE] p-[15px] outline-none border-none mb-4 resize-none"
            name="message"
            rows={5}
          ></textarea>

          <button className="btn btn-dark flex items-center justify-center md:text-[16px] px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300">
            Submit Now{" "}
            <img
              className="w-[20px] inline-block ml-2"
              src={arrow3}
              alt="arrow"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
