import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Rate } from "antd";
import Lottie from "lottie-react";
import medicalReception from "./Medical Clipboard.json";
import ImageContainer from "../Home/ImageSection";
import BookSessionModal from "../../Utils/BookSessionModal";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const videoId = document.getElementById("heroVideo");
    window.addEventListener("load", () => {
      videoId.play();
    });
  }, []);
  return (
    <>
      {open && (
        <BookSessionModal
          open={open}
          setIsOpen={() => setOpen(false)}
          key={open}
        />
      )}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={1.5}
        animateOnce={true}
        initiallyVisible
      >
        <div className="relative flex justify-center">
          <video
            id="heroVideo"
            className="w-full"
            autoPlay
            loop
            muted
            src="./18+Golden.mp4"
          ></video>
          {/* Content placed over the video */}
          <div className="absolute right-5 top-1/4 flex max-w-screen-lg flex-col items-center gap-2 p-2 lg:right-10">
            <div className="flex w-full items-center justify-center">
              <div className="flex flex-col items-center gap-1 lg:gap-2">
                <h1 className="text-center font-extrabold text-yellow-600 lg:text-6xl">
                  NEET ADVISOR
                </h1>
                <h1 className="primary text-center text-lg font-bold leading-tight lg:text-[2rem]">
                  Pioneer Of Smart Counseling services for NEET Aspirants
                </h1>
              </div>
              <Lottie
                className="relative right-2 top-6 z-0 w-[4rem] lg:w-[6rem]"
                animationData={medicalReception}
                loop={true}
              />
            </div>
            <div className="flex max-w-screen-lg flex-col gap-1 text-center text-gray-800 lg:gap-2">
              <p className="text-wrap text-[0.5rem] lg:text-[1.05rem]">
                <span className="font-bold lg:font-extrabold">
                  {" "}
                  NEET Advisor
                </span>{" "}
                is a team of highly skilled professionals dedicated to providing
                comprehensive guidance on{" "}
                <span className="font-bold lg:font-extrabold"> NEET </span>
                counselling.
              </p>
              <p className="mx-auto max-w-4xl text-center text-[0.5rem] lg:text-[1.05rem]">
                Our <span className="font-extrabold">Expertise</span> ensures
                seamless support throughout the counselling process, application
                process, documentation, and admission procedures for medical
                colleges across India and internationally.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ImageContainer />
    </>
  );
};

export default Hero;
