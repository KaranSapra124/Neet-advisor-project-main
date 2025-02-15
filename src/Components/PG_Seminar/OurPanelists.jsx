import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Steps, Timeline } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const OurPanelists = () => {
  const [progress, setProgress] = useState(0);
  const agenda = [
    {
      time: "9:00 AM - 9:30 AM",
      topic: "Welcome & Introduction",
      speaker: "Mr. Vipin Bansal",
      description:
        "An overview of the seminar objectives and introduction to the expert panel.",
    },
    {
      time: "9:30 AM - 10:15 AM",
      topic: "Top NEET UG 2025 Preparation Strategies",
      speaker: "Mr. Vivek Singh",
      description:
        "Insights on tackling the NEET UG syllabus, time management, and effective study techniques.",
    },
    {
      time: "10:15 AM - 11:00 AM",
      topic: "Navigating NEET UG Counseling & Admissions",
      speaker: "Mr. Vipin Bansal",
      description:
        "A walkthrough of the counseling process, college preferences, and securing admissions.",
    },
    {
      time: "11:00 AM - 11:30 AM",
      topic: "Q&A Session with Experts",
      speaker: "Mr. Vivek Singh and Mr. Vipin Bansal",
      description:
        "An open discussion to address attendee questions and provide personalized guidance.",
    },
  ];

  useEffect(() => {
    const timelineProgress = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 1500);
    return clearInterval(() => timelineProgress);
  }, []);

  return (
    <>
      <Container
        className={"no-repeat relative bg-webinar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/80 via-gray-900 to-gray-900/80 backdrop-blur-sm"></div>
        <ScrollAnimation
          animateIn="backInRight"
          animateOnce={true}
          duration={1.5}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-yellow-600">
                How It Will{" "}
                <span className="font-extrabold text-primary-color brightness-[300%]">
                  Progess?
                </span>
              </h1>
              <p className="my-2 text-xs font-semibold text-gray-200">
                Checkout timeline of our seminar!
              </p>
              <Divider
                className={"mx-auto my-4 mb-10 h-1 w-20 rounded-full bg-yellow-600"}
              />
            </div>
            <div>
              <Timeline
                mode="alternate"
                // className="brightness-200"

                items={agenda?.map((elem, index) => {
                  return {
                    children: (
                      <>
                        <div
                          className={` ${(index + 1) % 2 === 0 && "ml-[20.8rem]"} m-2 h-40 w-80 rounded-md bg-gradient-to-tr from-black/50 via-gray-500/10 to-gray-900/40 text-center border shadow-sm shadow-white border-white`}
                        >
                          <img
                            src="./Seminar/validation-badge-bg-removed.gif"
                            className={`absolute -top-2 h-9 w-9 ${(index + 1) % 2 === 0 ? "left-[39.5rem]" : "left-[19.2rem]"}`}
                            alt=""
                            srcset=""
                          />
                          <div className="p-4">
                            <h2 className="text-md my-1 font-semibold text-white">
                              {elem?.topic}
                            </h2>
                            <Divider
                              className={
                                "mx-auto my-2 h-0.5 w-8 rounded-full bg-gray-400"
                              }
                            />
                            <h1 className="text-sm font-bold text-white">
                              {elem?.time}
                            </h1>
                            <p className="my-2 text-wrap text-xs font-bold text-gray-200">
                              {elem?.description}
                            </p>
                          </div>
                        </div>
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
