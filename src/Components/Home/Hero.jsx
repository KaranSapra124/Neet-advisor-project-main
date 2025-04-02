import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Rate } from "antd";
import Container from "../Helper/Container";
import Lottie from "lottie-react";

import medicalReception from "./Medical Clipboard.json";
import ImageContainer from "../Home/ImageSection";
import QuickLinks from "../Helper/QuickLinks";
import BookSessionModal from "../../Utils/BookSessionModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <BookSessionModal
          open={open}
          setIsOpen={() => setOpen(false)}
          key={open}
        />
      )}
      <div className="flex justify-center">
        {/* <QuickLinks /> */}
        <div className="relative z-10 flex max-w-screen-xl flex-col items-center justify-center px-7 py-8 lg:px-5 lg:py-10">
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full items-center justify-around lg:justify-center">
              <div>
                <h1 className="text-center text-3xl font-extrabold text-yellow-600">
                  NEET ADVISOR{" "}
                </h1>{" "}
                <h1 className="primary text-lg font-bold lg:text-3xl">
                  Pioneer Of Smart Counseling services for NEET Aspirants <br />{" "}
                  {/* <span className="font-bold text-yellow-600"> */}
                  {/* </span> */}
                </h1>
              </div>
              <Lottie
                className="z-0 w-[4rem] lg:w-[6rem]"
                animationData={medicalReception}
                loop={true}
              />
            </div>
            <div className="text-gray-700 text-center max-w-screen-lg">
              <p className="text-wrap text-[0.5rem] lg:text-sm">
                <span className="font-bold lg:font-extrabold">
                  {" "}
                  NEET Advisor
                </span>{" "}
                is a tema of highly skilled professionals dedicated to providing
                comprehensive gudance on{" "}
                <span className="font-bold lg:font-extrabold"> NEET</span>{" "}
                counselling.
              </p>
              <p className="py-2 text-[0.5rem] lg:text-sm">
                Our <span className="font-extrabold">Expertise</span> ensures
                seamless support throguhout the counselling process,application
                process,documentation and admission procedures for medical
                colleges across India and internationally.
              </p>
            </div>
            {/* <button
              onClick={() => setOpen(true)}
              className="mt-4 rounded-lg bg-yellow-600 px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-yellow-500 lg:mt-5 lg:text-sm"
            >
              Free One To One Session
            </button>
            <div className="flex py-8 lg:py-5">
              <div className="gabriela-regular mr-10">
                <h1 className="mb-2 text-base font-bold text-indigo-950 lg:text-2xl">
                  50K+
                </h1>
                <p className="lg:text-md text-xs font-semibold text-gray-700">
                  Sessions Completed
                </p>
              </div>
              <div className="flex items-center">
                <FcGoogle className="mr-3 text-xl lg:text-4xl" />
                <div className="flex flex-col">
                  <div className="mb-2 flex">
                    <Rate className="text-sm lg:text-lg" count={5} value={5} />
                  </div>
                  <p className="lg:text-md text-[0.7rem] font-bold text-gray-700">
                    5 / 5 | 4406 Reviews
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <ImageContainer />
        </div>
      </div>
    </>
  );
};

export default Hero;
