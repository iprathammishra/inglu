import React from "react";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Contact from "./Contact";
import Testimonial1 from "./Testimonial1";
import Testimonial2 from "./Testimonial2";
import Image from "next/image";

const Container = () => {
  return (
    <>
      <div className="flex justify-center items-center h-50% border"></div>
      <div className="">
        <h1 className="  text-blue-500 p-5 font-bold text-4xl">Welcome!</h1>
      </div>
      <div>
        <Image
          src="/pic.png"
          alt="pic"
          layout="responsive"
          height={500}
          width={500}
        />
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
      <div className=" inline-block m-5 w-[900px]">
        <Contact />
      </div>
      <Image
        className="inline-block absolute right-20"
        src={"/google.png"}
        alt="google"
        width={400}
        height={120}
      />
      <div className=" z-10">
        <Footer />
      </div>
    </>
  );
};

export default Container;
