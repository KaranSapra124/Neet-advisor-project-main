import React from "react";
import Container from "../Helper/Container";
import {
  FaChalkboardTeacher,
  FaBook,
  FaBrain,
  FaUserGraduate,
  FaLightbulb,
} from "react-icons/fa";
import Divider from "../Helper/Divider";
import { Carousel } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Purpose = () => {
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
        className={"no-repeat relative   h-full bg-seminar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-md"></div>
        <ScrollAnimation animateIn="backInUp" animateOnce={true} duration={1.5}>
          <div className="relative">
            <h1 className="text-center lg:text-3xl text-sm font-semibold text-yellow-600">
              Why To{" "}
              <span className="font-extrabold text-primary-color ">
                Attend Our Seminar ?
              </span>
            </h1>
            <p className="my-2 text-center lg:text-xs text-[0.5rem] font-semibold text-gray-800">
              Preparing for NEET is tough, but the competition for seats is even
              tougher!!
            </p>
            <Divider
              className={"mx-auto lg:my-4 my-2 lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-primary-color"}
            />
            <div className="flex items-center lg:flex-row flex-col-reverse justify-center lg:gap-0 gap-5">
              <div className="lg:w-1/2 flex flex-col lg:gap-0 gap-2">
                {seminarPurposeData?.map((seminar, index) => {
                  return (
                    <div className="flex items-center gap-1 p-4 border-b-2  border-l-2 border-black/20 my-2 rounded-md">
                      <img
                        src={seminar?.icon}
                        className="lg:h-9 lg:w-9 w-6"
                        alt=""
                        srcset=""
                      />
                      <Divider className={"h-0.5 w-12 bg-yellow-600 rouded-full rotate-90 m-0"}/>
                      <div className="flex flex-col">
                        <h1 className="lg:text-sm text-xs font-extrabold text-yellow-600">
                          {seminar?.title}
                        </h1>
                        <p className="lg:text-xs text-[0.6rem] font-semibold text-gray-800 my-0.5">
                          {seminar?.paragraph}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="lg:w-1/2  relative">
              <img src="./Webinar/validation-badge-bg-removed.gif" className="absolute lg:w-10 lg:h-10 w-9 lg:left-5 left-[15rem] z-[999] bg-white  rounded-full shadow shadow-yellow-600" alt="" srcset="" />
                <Carousel
                  effect="fade"
                  infinite
                  vertical={true}
                  autoplay
                  dots={false}
                  autoplaySpeed={2000}
                  // className="border border-white rounded w-fit"
                >
                  {imageUrls?.map((imgData, index) => {
                    return (
                      <img
                        src={imgData}
                        className="rounded-lg  border-2 border-white"
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

export default Purpose;
