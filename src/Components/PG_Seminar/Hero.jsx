import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import "./Pg_Seminar.css";
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
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/80 via-black/80 to-gray-900/40"></div>
        <div className="relative flex h-full w-full flex-col items-center justify-between">
          <ScrollAnimation
            animateIn="backInDown"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-fit rounded-l-full rounded-r-full  bg-yellow-600 px-2 py-1 text-sm font-bold uppercase text-white">
                # 1 Neet counsellor
              </div>
              <h1 className="text-4xl text-center font-extrabold leading-tight text-yellow-600">
                Fuel Your Dream <br /> of Becoming a Doctor <br />
                <span className="text-6xl text-center font-extrabold text-primary-color brightness-200">
                  NEET PG 2025
                </span>
              </h1>
              <p className="max-w-md text-center text-xs font-extrabold text-gray-300">
                Prepare yourself for the NEET UG exam with expert guidance and
                tips. Join us for insightful sessions, mock tests, and career
                counseling.
              </p>
             <div className="flex gap-4 justify-center my-2 w-full">
             <button className="w-fit rounded-l-lg rounded-r-lg bg-yellow-600 px-3 py-2 font-bold text-white">
                Book Now!
              </button>
              <button className="w-fit rounded-l-lg rounded-r-lg bg-black/50 shadow shadow-white px-3 py-2 font-bold text-white">
                Learn more!
              </button>
             </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="backInUp"
            className="backdrop-blur-sm"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="flex h-fit ">
              {seminarData?.map((seminar, index) => {
                return (
                  <div className="cursor-pointer relative shadow mx-4  border bg-white/10 border-white rounded-lg p-3.5 transition-all duration-100 hover:scale-105">
                    <img src="./Webinar/calendar-bg-removed.gif" className="w-7 h-7 absolute -left-3 shadow-md shadow-yellow-600 bg-white rounded-full -top-5 " alt="" srcset="" />
                    <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-bold uppercase text-yellow-200">
                      # {seminar?.location}
                    </div>
                    <div className="flex items-center gap-4  p-2">
                      <h1 className="text-3xl font-bold text-white">
                        {seminar?.date}
                      </h1>
                      <div
                        className={`w-fit rounded-md ${seminar?.isAvailable ? "border-2 border-primary-color bg-white/50 text-primary-color" : "border-2 border-gray-800 bg-white/50 text-gray-800"} px-2 py-1 text-sm font-bold uppercase`}
                      >
                        {seminar?.isAvailable ? "Available" : "Not Available"}
                      </div>
                      <FaArrowRight className="animate-scaleUp text-yellow-600" />
                    </div>
                    <div className="text-xs mx-2 font-semibold text-gray-200">
                      {seminar.venue}
                    </div>
                    {/* {index !== seminarData?.length - 1 && (
                      <Divider className="my-5 rotate-90 h-1 w-full rounded-full bg-yellow-600" />
                    )} */}
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
