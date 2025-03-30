import React from "react";
import Container from "../Helper/Container";
// import Divider from "../Helper/Divider";
import "./Pg_Seminar.css";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchSeminars = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminars-for-users`,
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
  console.log(data);

  const formatDate = (dateString) => {
    const [yy, mm, dd] = dateString.split("-").map(Number);
    return new Date(yy, mm - 1, dd).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Container className={"relative h-full lg:h-screen"}>
        <video
          src="./Seminar/Seminar-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-200/10 to-gray-200/10 lg:from-gray-600/20 lg:via-gray-100/40 lg:to-gray-600/20"></div>
        <div className="relative flex h-full w-full flex-col items-center justify-between">
          <ScrollAnimation
            animateIn="backInDown"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-[0.6rem] font-bold uppercase text-white lg:text-sm">
                # 1 Neet counsellor
              </div>
              <h1 className="text-center text-sm font-extrabold leading-5 text-yellow-600 lg:text-4xl lg:leading-tight">
                Fuel Your Dream <br /> of Becoming a Doctor <br />
                <span className="text-center text-3xl font-extrabold text-primary-color lg:text-6xl">
                  NEET PG 2025
                </span>
              </h1>
              <p className="max-w-52 text-center text-[0.5rem] font-extrabold text-gray-300 lg:max-w-md lg:text-xs">
                Prepare yourself for the NEET UG exam with expert guidance and
                tips. Join us for insightful sessions, mock tests, and career
                counseling.
              </p>
              <div className="my-2 flex w-full flex-row justify-center gap-4">
                <button className="w-fit rounded-l-lg rounded-r-lg bg-yellow-600 px-3 py-2 text-xs font-bold text-white lg:text-sm">
                  Book Now!
                </button>
                <button className="w-fit rounded-l-lg rounded-r-lg bg-black/50 px-3 py-2 text-xs font-bold text-white shadow shadow-white lg:text-sm">
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
            <div className="flex h-fit flex-col lg:flex-row">
              {data?.map((seminar, index) => {
                return (
                  <div
                    onClick={() => window.open(seminar?.URL, "__blank")}
                    className="relative mx-4 my-4 cursor-pointer rounded-lg border border-white bg-white/10 p-1.5 shadow transition-all duration-100 hover:scale-105 lg:my-0 lg:p-3.5"
                  >
                    <img
                      src="./Webinar/calendar-bg-removed.gif"
                      className="absolute -left-3 -top-5 h-7 w-7 rounded-full bg-white shadow-md shadow-yellow-600"
                      alt=""
                      srcset=""
                    />
                    <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-bold uppercase text-yellow-200">
                      # {seminar?.state}
                    </div>
                    <div className="flex items-center justify-between gap-2 p-2 lg:gap-4">
                      <h1 className="text-xs font-bold text-white lg:text-3xl">
                        {formatDate(seminar?.date)}
                      </h1>
                      <div
                        className={`w-fit rounded-md ${seminar?.isAvailable ? "border-2 border-primary-color bg-white/50 text-primary-color" : "border-2 border-gray-800 bg-white/50 text-gray-800"} px-1.5 py-1 text-[0.5rem] font-bold uppercase lg:px-2 lg:text-sm`}
                      >
                        Available
                      </div>
                      <FaArrowRight className="animate-scaleUp text-xs text-yellow-600 lg:text-sm" />
                    </div>
                    <div className="mx-2 text-xs font-semibold text-gray-200">
                      {seminar.location}
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
