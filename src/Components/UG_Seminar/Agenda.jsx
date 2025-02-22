import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Steps } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Agenda = () => {
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
        className={"no-repeat relative bg-seminar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-black/95 backdrop-blur-md"></div>
        <ScrollAnimation
          animateIn="backInRight"
          animateOnce={true}
          duration={1.5}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="text-sm font-semibold text-yellow-600 lg:text-3xl">
                How It Will{" "}
                <span className="font-extrabold text-primary-color brightness-200">
                  Progess?
                </span>
              </h1>
              <p className="my-2 text-[0.5rem] font-semibold text-gray-200 lg:my-4 lg:text-xs">
                Checkout timeline of our seminar!
              </p>
              <Divider
                className={
                  "mx-auto h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:h-1 lg:w-20"
                }
              />
            </div>
            <div>
              <Steps
                className="agenda-stepper"
                progressDot={true}
                current={progress}
                direction="horizontal"
                type={window.outerWidth > 800 ? "inline" : "default"}
                items={agenda?.map((elem, index) => {
                  return {
                    title: (
                      <>
                        <div className="m-2 my-4 h-40 lg:w-80 rounded-md bg-gradient-to-tr from-black/10 to-black/70 shadow shadow-white">
                          <img
                            src="./Seminar/validation-badge-bg-removed.gif"
                            className="absolute lg:-top-0.5 top-0 lg:left-[19.5rem] lg:h-9 lg:w-9 w-7 left-[13.5rem] "
                            alt=""
                            srcset=""
                          />
                          <div className="lg:p-4 p-2">
                            <h2 className="my-1 lg:text-sm  text-xs  font-semibold text-white">
                              {elem?.topic}
                            </h2>
                            <Divider
                              className={
                                "lg:mx-auto text-left lg:my-4 my-2   h-0.5 w-8 rounded-full bg-gray-400"
                              }
                            />
                            <h1 className="lg:text-xs text-[0.8rem] font-bold text-white">
                              {elem?.time}
                            </h1>
                            <p className="lg:my-2 my-1.5 text-wrap text-xs font-semibold text-gray-200">
                              {elem?.description}
                            </p>
                          </div>
                        </div>
                      </>
                    ),
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

export default Agenda;
