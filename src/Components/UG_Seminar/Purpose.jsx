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
        className={"no-repeat relative bg-seminar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-black/95 backdrop-blur-sm"></div>
        <ScrollAnimation animateIn="backInUp" animateOnce={true} duration={1.5}>
          <div className="relative">
            <h1 className="text-center text-3xl font-semibold text-yellow-600">
              Why To{" "}
              <span className="font-extrabold text-primary-color brightness-200">
                Attend Our Seminar ?
              </span>
            </h1>
            <p className="my-2 text-center text-xs font-semibold text-gray-400">
              Preparing for NEET is tough, but the competition for seats is even
              tougher!!
            </p>
            <Divider
              className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
            />
            <div className="flex justify-center">
              <div className="w-1/2">
                {seminarPurposeData?.map((seminar, index) => {
                  return (
                    <div className="flex items-center gap-2 space-y-7">
                      <img
                        src={seminar?.icon}
                        className="h-10 w-10"
                        alt=""
                        srcset=""
                      />
                      <div className="flex flex-col">
                        <h1 className="text-lg font-extrabold text-yellow-600">
                          {seminar?.title}
                        </h1>
                        <p className="text-xs font-semibold text-gray-400">
                          {seminar?.paragraph}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/2">
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
                        className="rounded-lg shadow-sm shadow-white"
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
