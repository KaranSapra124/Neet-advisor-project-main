import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Rate } from "antd";
import Lottie from "lottie-react";
import medicalReception from "./Medical Clipboard.json";
import ImageContainer from "../Home/ImageSection";
import BookSessionModal from "../../Utils/BookSessionModal";
import ScrollAnimation from "react-animate-on-scroll";
import { CountUp } from "./Stats";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const statsData = [
    {
      icon: "graduationCap.gif",
      title: "Students Positively Impacted",
      progress: 700000,
    },
    {
      icon: "motivationGif.gif",
      title: "Counselling One To One",
      progress: 450000,
    },
    {
      icon: "teachingGif.gif",
      title: "Seminars/Webinars",
      progress: 3000,
    },
  ];
  useEffect(() => {
    const videoElement = document.getElementById("heroVideo");

    if (videoElement) {
      const playVideo = () => {
        videoElement
          .play()
          .catch((error) => console.error("Autoplay failed:", error));
      };

      // Wait for DOM content to load
      if (document.readyState === "complete") {
        playVideo();
      } else {
        window.addEventListener("load", playVideo);
      }

      return () => {
        window.removeEventListener("load", playVideo);
      };
    }
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
          <div className="absolute right-5 top-24 flex max-w-screen-lg flex-col items-center gap-2 p-2 lg:right-10">
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
            <div className="mx-auto ml-40 mt-12 flex w-fit max-w-screen-lg items-center justify-center rounded-lg text-yellow-400 lg:space-x-10">
              {statsData?.map((elem, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    className="mb-2 w-16 rounded-full bg-yellow-600 p-1 shadow-md shadow-primary-color"
                    src={elem?.icon}
                    alt="icon"
                  />
                  <CountUp
                    num={elem?.progress}
                    speed={10}
                    className="font-extrabold text-primary-color lg:text-xl"
                  />
                  <h2 className="font-bold text-primary-color lg:text-sm">
                    {elem?.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ImageContainer />
    </>
  );
};

export default Hero;
