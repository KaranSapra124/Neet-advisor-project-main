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
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminars/UG`,
    {
      withCredentials: true,
    },
  );
  return data?.allSeminars;
};
const Hero = () => {
  const { data } = useQuery({
    queryKey: ["allUGSeminars"],
    queryFn: fetchSeminars,
    // staleTime: Infinity,
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
      <Container className={"relative h-full lg:h-screen"}>
        <video
          src="./Seminar/Seminar-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 h-full w-full bg-white/65"></div>
        <div className="relative flex h-full w-full flex-col items-center justify-between lg:flex-row">
          <ScrollAnimation
            animateIn="backInLeft"
            duration={1.5}
            animateOnce={true}
            delay={1}
          >
            <div className="flex flex-col gap-2.5 lg:gap-5">
              <div className="w-fit rounded-l-full rounded-r-full border border-gray-700 bg-yellow-600 px-2 py-1 text-xs font-bold uppercase text-yellow-300 lg:text-sm">
                #1 Neet counsellor
              </div>
              <h1 className="text-lg font-extrabold leading-tight text-yellow-600 lg:text-4xl">
                Fuel Your Dream <br /> of Becoming a Doctor <br />
                <span className="text-3xl font-extrabold text-primary-color brightness-200 lg:text-6xl">
                  NEET UG 2025
                </span>
              </h1>
              <p className="text-[0.6rem] font-extrabold text-gray-800 lg:max-w-md lg:text-xs">
                Prepare yourself for the NEET UG exam with expert guidance and
                tips. Join us for insightful sessions, mock tests, and career
                counseling.
              </p>
              <button className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-bold text-white transition-all hover:bg-yellow-700 lg:px-3 lg:py-2 lg:text-sm">
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
            <div className="my-4 h-fit rounded-md bg-gray-200/10 p-4 shadow-md shadow-white/50 backdrop-blur-sm lg:my-0 lg:p-8">
              {data?.length ? (
                data?.map((seminar, index) => {
                  return (
                    <div className="cursor-pointer transition-all duration-100 hover:scale-105">
                      <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-1.5 py-1 text-[0.6rem] font-bold uppercase text-yellow-200 lg:px-2 lg:text-sm">
                        # {seminar?.state}
                      </div>
                      <div className="flex items-center justify-between py-1.5 lg:py-2">
                        <h1 className="text-sm font-extrabold text-gray-200 lg:text-3xl lg:font-bold">
                          {formatDate(seminar?.date)}
                        </h1>
                        <div
                          onClick={() => {
                            window.open(seminar?.URL, "__blank");
                          }}
                          className={`mx-2 w-fit rounded-md bg-yellow-600 px-1.5 py-0.5 text-[0.7rem] font-extrabold uppercase text-white shadow shadow-white lg:mx-4 lg:px-2 lg:py-1 lg:text-sm lg:font-bold`}
                        >
                          Book Now
                        </div>
                        <FaArrowRight className="animate-scaleUp text-xs text-yellow-600 lg:text-sm" />
                      </div>
                      <div className="text-[0.6rem] font-semibold text-gray-200 lg:text-xs">
                        {seminar.location}
                      </div>
                      {index !== data?.length - 1 && (
                        <Divider className="my-2.5 h-0.5 w-full rounded-full bg-yellow-600 lg:my-5" />
                      )}
                    </div>
                  );
                })
              ) : (
                <>
                  <h2 className="text-primary-color font-bold lg:text-lg text-sm">No Seminars Scheduled!</h2>
                </>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </>
  );
};

export default Hero;
