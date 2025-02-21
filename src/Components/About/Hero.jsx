import React from "react";
import Container from "../Helper/Container";
import { FaBook, FaUser, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
const Hero = () => {
  
  return (
    <Container className="relative  w-full bg-webinar-hero">
        <div className="absolute inset-0 opacity-90 h-full w-full bg-gradient-to-tr from-gray-100 via-gray-200 to-white"></div>
      <ScrollAnimation animateIn="backInLeft" duration={1.5}>
        <div className="relative z-10 flex lg:flex-row flex-col h-full w-full items-center justify-between">
          {/* Left Content */}
          <div className="flex lg:w-1/2 flex-col justify-center">
            <div className="lg:max-w-xl lg:space-y-6 space-y-2">
              {/* Badge */}
              <div className="w-fit h-fit rounded-full bg-yellow-600 lg:text-sm  text-[0.5rem] font-bold text-white/95 lg:px-4 py-1  px-2 ">
                  #1 NEET Counselling Service
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h1 className="lg:text-3xl text-sm font-bold text-primary-color/90">
                  Your Trusted{" "}
                  <span className="typewriter  mt-2 block bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text font-bold text-transparent">
                    <span className="font-extrabold">NEET</span> Counselling Partner
                  </span>
                </h1>
                <Divider
                  className={" lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-yellow-600"}
                />

                <div className="lg:space-y-6 space-y-3">
                  <p className="lg:text-xs text-[0.6rem] font-semibold text-gray-800">
                    Achieve your dream of becoming a doctor with expert guidance
                    at every step. Our personalized{" "}
                    <strong className="text-yellow-600">NEET</strong> counseling
                    services ensure the best college selection based on your
                    goals.
                  </p>
                  <p className="lg:text-xs text-[0.6rem] font-semibold text-gray-800">
                    Let us simplify your journey—trusted, reliable, and
                    committed to your success.
                  </p>
                </div>

                <div className="flex lg:gap-4 gap-2 lg:py-4 py-2">
                  <button className="group flex items-center lg:gap-4 gap-1 rounded-full bg-yellow-600 px-2 py-1 lg:text-sm text-[0.5rem] lg:font-bold font-extrabold text-white transition-all duration-300 hover:bg-yellow-700">
                    Get Started Today
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          className="lg:h-10 lg:w-10 w-8 rounded-full border border-gray-200 bg-gray-300"
                          src="https://neetadvisor.com/assets/images/gallery/international/1.webp"
                        />
                      ))}
                    </div>
                    <p className="text-[0.5rem] lg:text-sm font-semibold text-gray-800">
                      <span className="font-bold text-yellow-600">1000+</span>{" "}
                      Success Stories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="relative mx-4 lg:h-96 lg:my-0 my-10 lg:w-1/2 h-52 w-full  rounded-lg shadow-lg shadow-white">
            {/* Video Container */}
            <div className="absolute  inset-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
              <video
                src="/About/About-Us-Bg.mp4"
                loop
                muted
                autoPlay
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/40 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="flex items-center justify-center">
              <div>
                <div className="absolute inset-0 lg:-left-10 lg:-top-8 -left-3 -top-4 h-fit lg:w-52 w-36 rounded-lg bg-gray-100/80 p-2 text-center shadow-md shadow-black">
                <img src="./About/person-speaker.gif" className="lg:w-8 lg:h-8 h-6 w-6 mx-auto" alt="" srcset="" />
                  <h1 className="lg:my-2 my-0.5 lg:text-sm text-[0.6rem] text-center font-bold text-yellow-600">
                    Expert Guidance
                  </h1>
                  <p className="lg:text-xs text-[0.5rem] font-semibold text-gray-800">
                    Personalized mentoring from top counsellors
                  </p>
                </div>
                <div className="absolute inset-0 lg:left-[31rem] lg:top-72 top-[9.5rem] h-fit lg:w-52 w-36 left-[9.5rem] rounded-lg bg-gray-100/80 p-2 text-center shadow-md shadow-black">
                <img src="./About/BookImg.gif" className="lg:w-8 lg:h-8 h-6 w-6 mx-auto" alt="" srcset="" />
                  <h1 className="lg:my-2 my-0.5 lg:text-sm text-[0.6rem] text-center font-bold text-yellow-600">
                    Educational Events
                  </h1>
                  <p className="lg:text-xs text-[0.5rem] font-semibold text-gray-800">
                    Regular workshops and training sessions
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

export default Hero;
