import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";
import Divider from "../Helper/Divider";

const GuidingSection = () => {
  const imageUrls = [
    "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
  ];
  return (
    <Container className={"relative bg-webinar-hero"}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-100 via-gray-200 to-white opacity-90"></div>

      <ScrollAnimation animateIn="backInRight" duration={1.5}>
        <div className="relative z-50 mx-auto">
          <h1 className="text-center text-sm font-bold text-yellow-600 lg:text-3xl">
            Guiding you towards your{" "}
            <span className="relative inline-block">
              <span className="font-extrabold text-primary-color">
                DREAM CAREER
              </span>
              {/* <div className="absolute mx-auto -bottom-2 left-0 h-1 w-full rounded-full bg-yellow-600"></div> */}
            </span>
          </h1>
          <p className="mx-auto my-2 text-center text-[0.5rem] font-semibold text-gray-800 lg:my-4 lg:max-w-xl lg:text-xs">
            Guiding you towards your dream career with personalized advice,
            expert guidance, and a clear roadmap to success.
          </p>
          <Divider
            className={
              "mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:h-1 lg:w-20"
            }
          />

          {/* <div className="h-52 top-10 relative max-w-sm border border-black mx-auto"></div> */}
          <div className="flex">
            <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
              {/* First Card */}
              <div className="group h-full transform cursor-pointer rounded-md border-b-2 border-l-2 border-yellow-600 bg-white shadow-lg transition-transform duration-300 hover:scale-x-105 hover:shadow-xl lg:h-60 lg:w-96">
                <div className="flex flex-col items-center p-3 text-center lg:p-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-primary-color/10"></div>
                    <img
                      src="./About/Student.gif"
                      className="h-6 w-6 rounded-full shadow-md shadow-yellow-600 group-hover:scale-105 lg:h-12 lg:w-12"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <p className="text-justify text-[0.5rem] font-semibold leading-relaxed text-gray-800 lg:text-xs">
                    At NEET advisor, we are a team of young professionals
                    dedicated to resolving your doubts about NEET Counselling
                    and supporting you in the crucial application process,
                    documentation, and admission procedures for medical colleges
                    across India and the world too!
                  </p>
                </div>
              </div>
              <Carousel
                className="max-w-xs lg:max-w-[30rem]"
                dots={false}
                autoplay
                autoplaySpeed={2500}
              >
                {imageUrls?.map((elem, index) => {
                  return <img className="h-full" src={elem} alt="" srcset="" />;
                })}
              </Carousel>
              {/* Second Card */}
              <div className="group h-full transform cursor-pointer rounded-md border-b-2 border-l-2 border-yellow-600 bg-white shadow-lg transition-transform duration-300 hover:scale-x-105 hover:shadow-xl lg:h-60 lg:w-96">
                <div className="flex flex-col items-center lg:p-6 p-3 text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-primary-color/10"></div>
                    <img
                      src="./About/person-speaker.gif"
                      className="h-6 w-6 rounded-full shadow-md shadow-yellow-600 group-hover:scale-105 lg:h-12 lg:w-12"
                      alt=""
                      srcset=""
                    />{" "}
                  </div>
                  <p className="text-justify text-[0.5rem] font-semibold leading-relaxed text-gray-800 lg:text-xs">
                    Our innovative offerings have been exclusively designed for
                    NEET UG and NEET PG aspirants. Our programs are like having
                    your own personal coach who will empower you with all the
                    important aspects of NEET counselling, which plays a crucial
                    role in getting a medical seat even at a low NEET score
                    through smart counselling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default GuidingSection;
