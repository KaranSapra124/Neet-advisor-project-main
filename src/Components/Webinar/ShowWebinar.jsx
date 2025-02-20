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
    <Container className={"relative lg:h-[30rem] h-[29rem]"}>
      {/* Whitish Overlay */}
      <div className="z-1 absolute inset-0 h-[30rem] bg-white/85"></div>

      <div className="flex lg:flex-row lg:h-0 h-[32rem] lg:mb-0  flex-col-reverse lg:justify-evenly lg:max-w-screen-xl mx-auto">
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          
          // animateOnce={true}
        >
          <div  >
            <img
              src="macbook-frame-removebg-preview.png"
              className="relative lg:-top-32 h-[16.5rem] max-[370px]:-top-[0.48rem] max-[370px]:h-[16rem]  z-20 lg:h-[35.5rem] lg:-left-16 lg:w-[40rem]"
              alt="MacBook Frame"
              srcSet=""
            />
            <div className="relative lg:-top-[36.4rem]  max-[370px]:w-[13.88rem] max-[370px]:left-[1.7rem]   max-[600px]:-top-[13.2rem] lg:left-[0.1rem] z-30 lg:w-[31.75rem] max-[600px]:w-[14.7rem] max-[600px]:left-[1.9rem]">
              <video
                loop
                muted
                autoPlay
                className="left-14 "
                src="https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4"
              ></video>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="backInRight"
          duration={1.5}
          // animateOnce={true}
        >
          <div className="z-50 lg:w-full   mx-auto border-yellow-600 border-l-2 border-b-2  h-fit rounded-md bg-gradient-to-br from-white to-gray-100 p-2.5 lg:px-4 lg:py-5 shadow-lg shadow-gray-200">
            <h1 className="font-bold text-yellow-600 lg:text-2xl text-sm">
              What You <span className="text-primary-color font-extrabold">Will Learn ?</span>
            </h1>
            <Divider className={"my-1 lg:my-3 h-0.5  lg:w-16 w-12 rounded-full bg-yellow-600"} />
            {neetWebinarTopics.map((elem, index) => {
              return (
                <div className="my-2 flex items-center" key={index}>
                  <TiTick className="text-primary-color" />{" "}
                  <span className="lg:text-xs text-[0.6rem] font-semibold text-gray-700 leading-[1.5]">
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
