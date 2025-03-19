import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import "./Ug_seminar.css";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchSeminars = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-ug-seminars-for-users`,
    {
      withCredentials: true,
    },
  );
  return data?.allSeminars;
};
const Hero = () => {
  const { data } = useQuery({
    queryKey: ["allSeminars"],
    queryFn: fetchSeminars,
    staleTime: Infinity,
  });

  const formatDate = (dateString) => {
    const [yy, mm, dd] = dateString.split("-").map(Number);
    return new Date(yy, mm - 1, dd).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // const seminarData = [
  //   {
  //     location: "Mumbai",
  //     date: "28 January 2025",
  //     venue: "Grand Convention Center, Mumbai",
  //     video:
  //       "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
  //     isAvailable: true,
  //   },
  //   {
  //     location: "Delhi",
  //     date: "10 February 2025",
  //     venue: "Delhi International Auditorium",
  //     video:
  //       "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
  //     isAvailable: false,
  //   },
  // ];
  return (
    <>
      <Container className={"relative lg:h-screen h-full"}>
        <video
          src="./Seminar/Seminar-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-black/50"></div>
        <div className="relative flex lg:flex-row flex-col h-full w-full items-center justify-between">
          <ScrollAnimation
            animateIn="backInLeft"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="flex flex-col lg:gap-5 gap-2.5">
              <div className="w-fit rounded-l-full rounded-r-full border border-gray-700 bg-yellow-600 px-2 py-1 lg:text-sm text-xs font-bold uppercase text-yellow-300">
                #1 Neet counsellor
              </div>
              <h1 className="lg:text-4xl text-lg  font-extrabold leading-tight text-yellow-600">
                Fuel Your Dream <br /> of Becoming a Doctor <br />
                <span className="lg:text-6xl text-3xl font-extrabold text-primary-color brightness-200">
                  NEET UG 2025
                </span>
              </h1>
              <p className="lg:max-w-md lg:text-xs text-[0.6rem] font-extrabold text-gray-200">
                Prepare yourself for the NEET UG exam with expert guidance and
                tips. Join us for insightful sessions, mock tests, and career
                counseling.
              </p>
              <button className="bg-yellow-600 lg:text-sm text-xs w-fit rounded-l-full rounded-r-full transition-all lg:px-3 lg:py-2 px-2 py-1 font-bold text-white hover:bg-yellow-700">
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
            <div className="h-fit rounded-md bg-gray-200/10 lg:p-8 p-4 lg:my-0 my-4 shadow-md shadow-white/50 backdrop-blur-sm">
              {data?.map((seminar, index) => {
                return (
                  <div className="cursor-pointer transition-all duration-100 hover:scale-105">
                    <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 lg:px-2 px-1.5 py-1 lg:text-sm text-[0.6rem] font-bold uppercase text-yellow-200">
                      # {seminar?.state}
                    </div>
                    <div className="flex items-center justify-between lg:py-2 py-1.5">
                      <h1 className="lg:text-3xl text-sm lg:font-bold font-extrabold text-gray-200">
                        {formatDate(seminar?.date)}
                      </h1>
                      <div
                        className={`w-fit lg:mx-4 mx-2 rounded-md  lg:px-2 px-1.5 lg:py-1 py-0.5 lg:text-sm text-[0.7rem] lg:font-bold font-extrabold uppercase`}
                      >
                        Book Now
                      </div>
                      <FaArrowRight className="animate-scaleUp lg:text-sm text-xs text-yellow-600" />
                    </div>
                    <div className="lg:text-xs text-[0.6rem] font-semibold text-gray-200 ">
                      {seminar.location}
                    </div>
                    {index !== data?.length - 1 && (
                      <Divider className="lg:my-5 my-2.5 h-0.5 w-full rounded-full bg-yellow-600" />
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
