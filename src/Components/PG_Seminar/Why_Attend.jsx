import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Carousel } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Why_Attend = () => {
  const seminarPurposeData = [
    {
      icon: "./Webinar/person-speaker.gif",
      title: "Expert Guidance",
      paragraph:
        "Learn directly from top educators and NEET experts who have guided thousands of successful candidates to achieve their dream medical careers.",
    },
    {
      icon: "./Webinar/BookImg.gif",
      title: "Strategic Preparation",
      paragraph:
        "Gain insights into effective preparation strategies, time management tips, and syllabus coverage tailored for NEET UG 2025 aspirants.",
    },
    {
      icon: "./Webinar/creative-removedBg.gif",
      title: "Mock Tests & Analysis",
      paragraph:
        "Participate in live mock tests with detailed performance analysis to identify your strengths and areas for improvement.",
    },
    {
      icon: "graduationCap.gif",
      title: "Career Counseling",
      paragraph:
        "Receive personalized career counseling to choose the right medical college and course based on your aptitude and interests.",
    },
    {
      icon: "motivationGif.gif",
      title: "Motivation & Inspiration",
      paragraph:
        "Hear inspiring success stories and gain the motivation to overcome challenges and stay focused on your goals.",
    },
  ];
  const imageUrls = [
    "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
  ];
  return (
    <>
      <Container
        className={
          "no-repeat relative h-full bg-webinar-hero bg-cover bg-fixed lg:h-screen"
        }
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 backdrop-blur-sm"></div>
        <ScrollAnimation animateIn="backInUp" animateOnce={true} duration={1.5}>
          <div className="relative">
            <h1 className="text-center text-sm font-semibold text-yellow-600 lg:text-3xl">
              Why To{" "}
              <span className="font-extrabold text-primary-color ">
                Attend Our Seminar ?
              </span>
            </h1>
            <p className="my-2 text-center text-[0.5rem] font-bold text-gray-800 lg:text-xs">
              Preparing for NEET is tough, but the competition for seats is even
              tougher!!
            </p>
            <Divider
              className={
                "mx-auto my-2 h-0.5 w-12 rounded-full bg-primary-color lg:my-4 lg:h-1 lg:w-20"
              }
            />
            <div className="flex w-full flex-col-reverse justify-center lg:flex-row-reverse">
              <div className="mt-4 grid grid-cols-1 gap-4 lg:mt-0 lg:w-1/2 lg:grid-cols-2 lg:gap-2">
                {seminarPurposeData?.map((seminar, index) => {
                  return (
                    <div className="flex bg-black/70 flex-col gap-1  border rounded-lg border-white p-2 lg:flex-row lg:space-y-4 ">
                      <img
                        src={seminar?.icon}
                        className="h-4 w-4 lg:h-9 lg:w-9"
                        alt=""
                        srcset=""
                      />
                      <div className="flex flex-col">
                        <h1 className="text-sm font-extrabold text-yellow-600">
                          {seminar?.title}
                        </h1>
                        <p className="text-[0.6rem] font-semibold text-gray-200 lg:text-xs">
                          {seminar?.paragraph}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="lg:w-1/2">
                <Carousel
                  effect="fade"
                  infinite
                  vertical={true}
                  autoplay
                  dots={false}
                  autoplaySpeed={2000}
                >
                  {imageUrls?.map((imgData, index) => {
                    return (
                      <img
                        src={imgData}
                        className="rounded-lg border border-white lg:border-2"
                        alt="No Image"
                      />
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default Why_Attend;
