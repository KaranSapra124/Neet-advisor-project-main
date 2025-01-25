import React, { useEffect, useState } from "react";
import { FaBook, FaLightbulb, FaUserGraduate, FaClock } from "react-icons/fa";
import { Timeline } from "antd";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";
import { TiTick } from "react-icons/ti";

const CounsellingSection = () => {
  const [randomIndex, setRandomIndex] = useState(0);
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

  return (
    <Container className="bg-gray-200/40">
      <ScrollAnimation animateIn="backInUp" duration={1.5}>
        <div className="mx-auto flex items-center justify-center rounded-md">
          <div>
            <div className="mb-4 text-center">
              <h2 className="my-1 text-3xl font-bold text-yellow-600">
                What We Have To{" "}
                <span className="font-extrabold text-primary-color">Offer ?</span>
              </h2>
              <p className="my-2 text-xs font-semibold text-gray-700">
                Get personalized answers and ease your biggest doubts with Video
                Counselling from our curated experts.
              </p>
            </div>

            <Timeline
              mode="alternate"
              className="mx-auto mt-10"
              items={counselingContent?.map((elem, index) => ({
                children: (
                  <ScrollAnimation
                    animateIn={`${(index + 1) % 2 === 0 ? "backInLeft" : "backInRight"}`}
                    duration={1.5}
                  >
                    <div
                      className={`relative mb-3 transform rounded-lg transition-all duration-200 ${
                        index % 2 === 0
                          ? "flex w-[30.5rem] cursor-pointer bg-gradient-to-tr from-gray-100 to-blue-100/50 p-5 shadow-md hover:shadow-xl"
                          : "mr-[30rem] flex w-[27.5rem] cursor-pointer bg-gradient-to-tr from-gray-100 to-blue-100/50 p-5 shadow-md hover:shadow-xl"
                      } ${index == randomIndex ? "scale-105 border-l-2 border-yellow-600 transition-all" : "border-none"}`}
                    >
                      <div className="my-auto flex-shrink-0 text-xl">
                        <div
                          className={`${index == randomIndex ? "bg-primary-color/20 text-primary-color" : "bg-primary-color text-white"} rounded-full p-3 transition-all duration-300 hover:bg-primary-color/20`}
                        >
                          {elem?.icon}
                        </div>
                      </div>
                      <div className="w-96 pl-4">
                        <h1 className="pb-0.5 text-left text-lg font-bold text-gray-700">
                          {elem?.title}
                        </h1>
                        <ul className="my-1 flex w-[30rem] flex-col space-y-2">
                          {elem?.keyPoints?.map((point, idx) => (
                            <li key={idx} className="group flex items-center">
                              <TiTick className="text-xl text-green-500 transition-transform duration-200 group-hover:scale-110" />
                              <span className="ml-2 text-left text-sm font-semibold text-gray-800">
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
