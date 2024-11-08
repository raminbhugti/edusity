import React, { useEffect, useState } from "react";
import logo from "../assets/logo-DUdXW4nF.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [bgnav, setbgnav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setbgnav(true) : setbgnav(false);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        bgnav && "nav-bg"
      } container w-full text-white py-4 fixed top-0 left-0 flex items-center justify-between z-10 md:pl-[5%] md:pr-[5%]`}
    >
      {/* Logo */}
      <img
        className="lg:w-[180px] md:w-[140px] w-[120px]" // Adjusted for smaller screens
        src={logo}
        alt="edusity logo"
      />

      {/* Hamburger Button for Mobile */}
      <div className="lg:hidden md:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`lg:flex lg:space-x-8 lg:items-center md:flex md:space-x-6 md:items-center ${
          isMenuOpen
            ? "flex flex-col space-y-4 absolute bg-gray-800 top-20 left-0 w-full py-4 px-6"
            : "hidden lg:flex"
        }`}
      >
        <li className="inline-block list-none lg:my-[5px] lg:mx-[20px] md:my-[10px] md:mx-[15px] text-[16px]">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="inline-block list-none lg:my-[5px] lg:mx-[20px] md:my-[10px] md:mx-[15px] text-[16px]">
          <Link to="program" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li className="inline-block list-none lg:my-[5px] lg:mx-[20px] md:my-[10px] md:mx-[15px] text-[16px]">
          <Link to="About" smooth={true} offset={-130} duration={500}>
            About us
          </Link>
        </li>
        <li className="inline-block list-none lg:my-[5px] lg:mx-[20px] md:my-[10px] md:mx-[15px] text-[16px]">
          <Link to="Campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li className="inline-block list-none lg:my-[5px] lg:mx-[20px] md:my-[10px] md:mx-[15px] text-[16px]">
          <Link to="test" smooth={true} offset={-240} duration={500}>
            Testimonial
          </Link>
        </li>
        <li className="inline-block list-none lg:my-[5px] lg:mx-[20px] md:my-[10px] md:mx-[15px] text-[16px]">
          <button className="btn">
            <Link to="Contact" smooth={true} offset={-240} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
