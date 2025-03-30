import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Steps, Timeline } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "./Pg_Seminar.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchTimeline = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminar-progress/PG`,
    );
    // console.log(data);
    return data?.allSeminarsTimeline;
  } catch (err) {}
};

const OurPanelists = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allPGProgress"],
    queryFn: fetchTimeline,
  });
  // const agenda = [
  //   {
  //     time: "9:00 AM - 9:30 AM",
  //     topic: "Welcome & Introduction",
  //     speaker: "Mr. Vipin Bansal",
  //     description:
  //       "An overview of the seminar objectives and introduction to the expert panel.",
  //   },
  //   {
  //     time: "9:30 AM - 10:15 AM",
  //     topic: "Top NEET UG 2025 Preparation Strategies",
  //     speaker: "Mr. Vivek Singh",
  //     description:
  //       "Insights on tackling the NEET UG syllabus, time management, and effective study techniques.",
  //   },
  //   {
  //     time: "10:15 AM - 11:00 AM",
  //     topic: "Navigating NEET UG Counseling & Admissions",
  //     speaker: "Mr. Vipin Bansal",
  //     description:
  //       "A walkthrough of the counseling process, college preferences, and securing admissions.",
  //   },
  //   {
  //     time: "11:00 AM - 11:30 AM",
  //     topic: "Q&A Session with Experts",
  //     speaker: "Mr. Vivek Singh and Mr. Vipin Bansal",
  //     description:
  //       "An open discussion to address attendee questions and provide personalized guidance.",
  //   },
  // ];

  // useEffect(() => {
  //   const timelineProgress = setInterval(() => {
  //     setProgress((prev) => prev + 1);
  //   }, 1500);
  //   return clearInterval(() => timelineProgress);
  // }, []);

  return (
    <>
      <Container
        className={"no-repeat relative bg-webinar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-sm"></div>
        <ScrollAnimation
          animateIn="backInRight"
          animateOnce={true}
          duration={1.5}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="text-sm font-semibold text-yellow-600 lg:text-3xl">
                How It Will{" "}
                <span className="font-extrabold text-primary-color ">
                  Progess?
                </span>
              </h1>
              <p className="my-2 text-[0.5rem] font-bold text-gray-800  lg:text-xs">
                Checkout timeline of our seminar!
              </p>
              <Divider
                className={
                  "mx-auto my-2 mb-5 h-0.5 w-12 rounded-full bg-primary-color lg:my-4 lg:mb-10 lg:h-1 lg:w-20"
                }
              />
            </div>
            <div>
              <Timeline
                mode={window.outerWidth > 800 ? "alternate" : "left"}
                className="pg-seminar"
                items={data?.map((elem, index) => {
                  return {
                    children: (
                      <>
                        <ScrollAnimation duration={1} animateIn="backInUp">
                          <div
                            className={` ${(index + 1) % 2 === 0 && "m-0 lg:ml-[17rem]"} m-2 rounded-md border border-black/20 bg-gray-100/40 text-center shadow-sm shadow-white lg:h-40 lg:w-80`}
                          >
                            <img
                              src="./Seminar/validation-badge-bg-removed.gif"
                              className={`absolute -top-2 h-9 w-9 ${(index + 1) % 2 === 0 ? "left-[14rem] lg:left-[35.6rem]" : "left-[14rem] lg:left-[19.2rem]"}`}
                              alt=""
                              srcset=""
                            />
                            <div className="p-2 lg:p-4">
                              <h2 className="text-md my-1 font-extrabold text-gray-800 max-[800px]:text-[0.6rem] lg:font-semibold">
                                {elem?.title}
                              </h2>
                              <Divider
                                className={
                                  "mx-auto my-4 h-0.5 w-8 rounded-full bg-primary-color lg:my-2"
                                }
                              />
                              <h1 className="text-xs font-thin text-gray-800 lg:text-sm lg:font-bold">
                                {elem?.fromTime} AM - {elem?.endTime} AM
                              </h1>
                              <p className="my-3 text-wrap text-[0.7rem] font-bold text-gray-800 lg:my-2 lg:text-xs">
                                {elem?.motive}
                              </p>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </>
                    ),

                    color: "#201169",

                    // className:"brightness-200"
                  };
                })}
              />
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default OurPanelists;
