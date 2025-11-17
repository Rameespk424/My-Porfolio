import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import MyPic from "../assets/My-pic.png";
import TypingAnimation from "../data/animation";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto min-h-screen bg-[#0a192f] flex  items-center "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col-reverse justify-center  h-full md:flex-row mt-24">
        <div>
          <p className="text-pink-700 font-bold">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Ramees Pk
          </h1>

          <h2 className="text-4xl sm:text-7xl mb-3 font-bold text-[#8892b0]">
            I'm a Creative <FullStack></FullStack> Developer.
          </h2>

          <TypingAnimation />

          <button className="placeholder-gray-700 text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
        <div className=" flex  rounded-full">
          <img
            className=" h-60  mb-6 rounded- md:rounded-full sm:h-64 sm:w-auto sm:mt-12 md:h-60 md:w-96 md:mt-5 md:ml-6 lg:h-72 lg:w-96"
            src={MyPic}
            alt="hlw"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
