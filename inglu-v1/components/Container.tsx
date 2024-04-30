import React from "react";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Contact from "./Contact";
import Testimonial1 from "./Testimonial1";
import Testimonial2 from "./Testimonial2";

const Container = () => {
  return (
    <>
      <div className="flex justify-center items-center h-50% border"></div>
      <div className="">
        <h1 className="  text-blue-500 p-5 font-bold text-4xl">Welcome!</h1>
      </div>
      <div>
        <img src="/pic.png" alt="pic" />
      </div>
      <div>
        <h1 className=" mt-5 text-center text-3xl font-bold text-blue-500">
          TESTIMONIALS
        </h1>
      </div>
      <div className=" text-center">
        <Testimonial />
        <Testimonial1 />
        <Testimonial2 />
      </div>
      <div className="m-5 w-50">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
