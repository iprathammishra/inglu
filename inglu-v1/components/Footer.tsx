import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4  items-center">
      <div className="space-y-4">
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            HOME
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            PRIVACY POLICY
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            ABOUT US
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            TERMS & CONDITIONS
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            FAQ
          </a>
        </div>
        <div className=" flex  space-x-2">
          <img src="/logo.png" alt="INGLU Logo" className="h-8 w-8" />
          <span>INGLU</span>
        </div>
        <div className="space-y-1">
          <p>Phone: 8588985388</p>
          <p>Email: hr.inglu@gmail.com</p>
          <p>
            Address: 82 FF - Satya Niketan, South Campus, Delhi, India-110021
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>Copyright @ 2023 INGLU GLOBAL</p>
      </div>
    </footer>
  );
};

export default Footer;
