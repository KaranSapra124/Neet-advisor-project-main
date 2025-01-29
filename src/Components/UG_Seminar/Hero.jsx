import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import "./Ug_seminar.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
const Hero = () => {
  const seminarData = [
    {
      location: "Mumbai",
      date: "28 January 2025",
      venue: "Grand Convention Center, Mumbai",
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      isAvailable: true,
    },
    {
      location: "Delhi",
      date: "10 February 2025",
      venue: "Delhi International Auditorium",
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      isAvailable: false,
    },
  ];
  return (
    <>
      <Container className={"relative h-screen"}>
        <video
          src="./Seminar/Seminar-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-black/60"></div>
        <div className="relative flex h-full w-full items-center justify-between">
          <ScrollAnimation
            animateIn="backInLeft"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="flex flex-col gap-4">
              <div className="w-fit rounded-l-full rounded-r-full border border-gray-700 bg-yellow-600 px-2 py-1 text-sm font-bold uppercase text-yellow-300">
                #1 Neet counsellor
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-yellow-600">
                Fuel Your Dream <br /> of Becoming a Doctor <br />
                <span className="text-6xl font-extrabold text-primary-color brightness-200">
                  NEET UG 2025
                </span>
              </h1>
              <p className="max-w-md text-sm font-extrabold text-gray-300">
                Prepare yourself for the NEET UG exam with expert guidance and
                tips. Join us for insightful sessions, mock tests, and career
                counseling.
              </p>
              <button className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-3 py-2 font-bold text-white">
                Book Now!
              </button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="backInRight"
            className="backdrop-blur-sm"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="h-fit rounded-md bg-gray-200/10 p-8 shadow-md shadow-white/50 backdrop-blur-sm">
              {seminarData?.map((seminar, index) => {
                return (
                  <div className="cursor-pointer transition-all duration-100 hover:scale-105">
                    <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-sm font-bold uppercase text-yellow-200">
                      # {seminar?.location}
                    </div>
                    <div className="flex items-center gap-4 p-2">
                      <h1 className="text-3xl font-extralight text-white">
                        {seminar?.date}
                      </h1>
                      <div
                        className={`w-fit rounded-md ${seminar?.isAvailable ? "border-2 border-blue-700 bg-white/50 text-blue-700" : "border-2 border-gray-800 bg-white/50 text-gray-800"} px-2 py-1 text-sm font-bold uppercase`}
                      >
                        {seminar?.isAvailable ? "Available" : "Not Available"}
                      </div>
                      <FaArrowRight className="animate-scaleUp text-yellow-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-400">
                      {seminar.venue}
                    </div>
                    {index !== seminarData?.length - 1 && (
                      <Divider className="my-5 h-1 w-full rounded-full bg-yellow-600" />
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </>
  );
};

export default Hero;
