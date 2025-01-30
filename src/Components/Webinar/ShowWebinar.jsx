import React from "react";
import Container from "../Helper/Container";
import { TiTick } from "react-icons/ti";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const ShowWebinar = () => {
  const neetWebinarTopics = [
    "Strategies to master high-weightage topics in Physics, Chemistry, and Biology",
    "Time management techniques for effective NEET preparation",
    "How to approach and solve NEET-level MCQs efficiently",
    "Stress management tips to stay focused during preparation and on exam day",
  ];

  return (
    <Container className={" relative h-[30rem]"}>
      {/* Whitish Overlay */}
      <div className="z-1 absolute inset-0 h-[30rem] bg-white/85"></div>

      <div className="flex justify-evenly">
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          animateOnce={true}
        >
          <div>
            <img
              src="macbook-frame-removebg-preview.png"
              className="relative -top-32 z-20 h-[35.5rem] -left-16 w-[40rem]"
              alt="MacBook Frame"
              srcSet=""
            />
            <div className="relative -top-[36.4rem] left-[0.1rem] z-30 w-[31.75rem]">
              <video
                loop
                muted
                autoPlay
                className="left-14 h-full"
                src="https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4"
              ></video>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="backInRight"
          duration={1.5}
          animateOnce={true}
        >
          <div className="z-50 mx-auto  h-fit rounded-md bg-gradient-to-br from-white to-gray-100 px-4 py-5 shadow-lg shadow-gray-200">
            <h1 className="font-  bold text-yellow-600 text-2xl">
              What You <span className="text-primary-color font-extrabold">Will Learn ?</span>
            </h1>
            <Divider className={"my-2 h-1 w-16 rounded-full bg-yellow-600"} />
            {neetWebinarTopics.map((elem, index) => {
              return (
                <div className="my-2 flex items-center" key={index}>
                  <TiTick className="text-primary-color" />{" "}
                  <span className="text-xs font-semibold text-gray-700">
                    {elem}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
};

export default ShowWebinar;
