import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between my-8 mx-auto border-t border-gray-700">
      <p className="mt-3">© 2024 Edusity. All rights reserved.</p>
      <ul>
        <li className="inline-block ml-4 mt-3">Terms of Services</li>
        <li className="inline-block ml-4 mt-3">Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
