import React, { useEffect, useState } from "react";
import { FaBook, FaLightbulb, FaUserGraduate, FaClock } from "react-icons/fa";
import { Timeline } from "antd";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";
import { TiTick } from "react-icons/ti";
import Divider from "../Helper/Divider";

const CounsellingSection = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [timelineMode, setTimelineMode] = useState("alternate");
  const counselingContent = [
    {
      title: "Understanding NEET Preparation Basics",
      icon: <FaBook />,
      keyPoints: [
        "Overview of NEET syllabus and exam pattern.",
        "Importance of choosing the right study materials.",
        "Setting achievable goals for preparation.",
      ],
      color: "#4F46E5",
    },
    {
      title: "Time Management for NEET Aspirants",
      icon: <FaClock />,
      keyPoints: [
        "Creating an effective study timetable.",
        "Allocating time for revision and mock tests.",
        "Balancing study hours with relaxation and self-care.",
      ],
      color: "#06B6D4",
    },
    {
      title: "Dealing with Exam Stress and Anxiety",
      icon: <FaLightbulb />,
      keyPoints: [
        "Tips for staying positive and focused.",
        "Techniques for reducing exam-related anxiety.",
        "Importance of maintaining mental and physical well-being.",
      ],
      color: "#10B981",
    },
    {
      title: "Career Guidance for Medical Aspirants",
      icon: <FaUserGraduate />,
      keyPoints: [
        "Understanding medical courses and specializations.",
        "How to choose the right medical college.",
        "Insights into career opportunities after NEET.",
      ],
      color: "#F59E0B",
    },
  ];

  useEffect(() => {
    const randomInterval = setInterval(
      () =>
        setRandomIndex(Math.floor(Math.random() * counselingContent?.length)),
      2500,
    );
    return () => clearInterval(randomInterval);
  }, []);
  useEffect(() => {
    const updateMode = () => {
      const currWidth = window.innerWidth;
      // console.log(currWidth)
      if (currWidth < 800) {
        setTimelineMode("left");
      } else {
        setTimelineMode("alternate");
      }
    };
    updateMode();
    window.addEventListener("resize", updateMode);
    return () => window.removeEventListener("resize", updateMode);
  }, []);

  return (
    <Container className="bg-gray-200/40">
      <ScrollAnimation animateIn="backInUp" duration={0.5}>
        <div className="mx-auto flex items-center justify-center rounded-md">
          <div>
            <div className="mb-4 text-center">
              <h2 className="my-1 text-lg font-bold text-yellow-600 lg:text-3xl">
                Your Gateway to Excellence
                <span className="font-extrabold text-primary-color">
                  Offer ?
                </span>
              </h2>
              <p className="mx-auto my-2 max-w-72 text-[0.5rem] font-semibold text-gray-700 lg:max-w-sm lg:text-xs">
                Get personalized answers and ease your biggest doubts with Video
                Counselling from our curated experts.
              </p>
              <Divider
                className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
              />
            </div>

            <Timeline
              mode={timelineMode}
              className="home-timeline mx-auto mt-8 lg:mt-10"
              items={counselingContent?.map((elem, index) => ({
                children: (
                  <ScrollAnimation animateIn={`backInUp`} duration={1.5}>
                    <div
                      className={`relative mb-3 transform rounded-lg transition-all duration-200 ${
                        index % 2 === 0
                          ? "flex w-[20rem] cursor-pointer bg-gradient-to-tr from-gray-100 to-blue-100/50 p-5 shadow-md hover:shadow-xl lg:w-[30.5rem]"
                          : "flex w-[20rem] cursor-pointer bg-gradient-to-tr from-gray-100 to-blue-100/50 p-5 shadow-md hover:shadow-xl lg:mr-[30rem] lg:w-[27.5rem]"
                      } ${index == randomIndex ? "scale-[101%] border-l-2 border-yellow-600 transition-all lg:scale-105" : "border-none"}`}
                    >
                      <div className="my-auto flex-shrink-0 text-[0.8rem] lg:text-xl">
                        <div
                          className={`${index == randomIndex ? "bg-primary-color/20 text-primary-color" : "bg-primary-color text-white"} rounded-full p-3 transition-all duration-300 hover:bg-primary-color/20`}
                        >
                          {elem?.icon}
                        </div>
                      </div>
                      <div className="w-96 pl-4">
                        <h1 className="pb-0.5 text-left text-[0.7rem] font-extrabold text-gray-700 lg:text-lg lg:font-bold">
                          {elem?.title}
                        </h1>
                        <ul className="flex w-full flex-col space-y-0 lg:my-1 lg:w-[30rem] lg:space-y-2">
                          {elem?.keyPoints?.map((point, idx) => (
                            <li key={idx} className="group flex items-center">
                              <TiTick className="text-xl text-green-500 transition-transform duration-200 group-hover:scale-110" />
                              <span className="ml-2 text-left text-[0.5rem] font-semibold text-gray-800 lg:text-sm">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>
                ),
                color: "#201169",
              }))}
            />
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default CounsellingSection;
