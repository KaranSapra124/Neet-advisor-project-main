import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Rate } from "antd";
import Container from "../Helper/Container";
import Lottie from "lottie-react";

import medicalReception from "./Medical Clipboard.json";
import ImageContainer from "../Home/ImageSection";

const Hero = () => {
  return (
    <div className="px-10  py-8  relative z-10 flex items-center justify-center lg:flex-row flex-col lg:px-5 lg:py-10">
      <div className="flex w-full flex-col  items-center">
        <div className="flex  items-center justify-center">
          <h1 className="primary lg:text-3xl text-sm font-bold ">
            Complete Handholding for <br />{" "}
            <span className="font-bold text-yellow-600">
              <span className="font-extrabold">NEET</span> Counselling Guidance
            </span>
          </h1>
          <Lottie
            className="z-0 lg:w-[8rem] w-[4rem] "
            animationData={medicalReception}
            loop={true}
          />
        </div>
        <div className="text-xs text-gray-700">
          <p className="text-wrap">
            <span className="lg:font-extrabold font-bold "> 23,33,863</span> students in India
            aspire to study MBBS and BDS & AYUSH.Only 8.3% could achieve it in
            2024.
          </p>
          <p className="py-2 text-xs">
            Complete <span className="font-extrabold">NEET</span> Counselling
            Guidance till Admission. NEET UG & NEET PG Counselling Experts Since
            2016.
          </p>
        </div>
        <button className="mt-5 lg:text-sm text-xs rounded-lg bg-yellow-600 px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-yellow-500">
          Book a Free session
        </button>
        <div className="flex  lg:py-5 py-8">
          <div className="gabriela-regular mr-10">
            <h1 className="mb-2 lg:text-2xl text-base font-bold text-indigo-950">50K+</h1>
            <p className="lg:text-md text-xs font-semibold text-gray-700">
              Sessions Completed
            </p>
          </div>
          <div className="flex items-center">
            <FcGoogle className="mr-3  lg:text-4xl text-xl" />
            <div className="flex flex-col">
              <div className="mb-2 flex">
                <Rate className="lg:text-lg text-sm " count={5} value={5} />
              </div>
              <p className="lg:text-md text-[0.7rem]  font-bold text-gray-700">
                5 / 5 | 4406 Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageContainer />
    </div>
  );
};

export default Hero;
