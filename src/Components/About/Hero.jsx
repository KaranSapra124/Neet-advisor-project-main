import React from "react";
import Container from "../Helper/Container";
import { FaBook, FaUser, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
const Hero = () => {
  
  return (
    <Container className="relative w-full bg-webinar-hero">
        <div className="absolute inset-0 opacity-90 h-full w-full bg-gradient-to-tr from-gray-100 via-gray-200 to-white"></div>
      <ScrollAnimation animateIn="backInLeft" duration={1.5}>
        <div className="relative z-10 flex h-full w-full items-center justify-between">
          {/* Left Content */}
          <div className="flex w-1/2 flex-col justify-center">
            <div className="max-w-xl space-y-6">
              {/* Badge */}
              <div className="w-fit rounded-full bg-yellow-600 px-4 py-1">
                <span className="text-sm font-bold text-white/95">
                  #1 NEET Counselling Service
                </span>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-primary-color/90">
                  Your Trusted{" "}
                  <span className="typewriter  mt-2 block bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text font-bold text-transparent">
                    <span className="font-extrabold">NEET</span> Counselling Partner
                  </span>
                </h1>
                <Divider
                  className={" h-1 w-20 rounded-full bg-yellow-600"}
                />

                <div className="space-y-6">
                  <p className="text-xs font-semibold text-gray-800">
                    Achieve your dream of becoming a doctor with expert guidance
                    at every step. Our personalized{" "}
                    <strong className="text-yellow-600">NEET</strong> counseling
                    services ensure the best college selection based on your
                    goals.
                  </p>
                  <p className="text-xs font-semibold text-gray-800">
                    Let us simplify your journey—trusted, reliable, and
                    committed to your success.
                  </p>
                </div>

                <div className="flex gap-4 py-4">
                  <button className="group flex items-center gap-4 rounded-full bg-yellow-600 px-2 py-1 text-sm font-bold text-white transition-all duration-300 hover:bg-yellow-700">
                    Get Started Today
                    <FaArrowRight className=" transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          className="h-10 w-10 rounded-full border border-gray-200 bg-gray-300"
                          src="https://neetadvisor.com/assets/images/gallery/international/1.webp"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-gray-800">
                      <span className="font-bold text-yellow-600">1000+</span>{" "}
                      Success Stories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="relative mx-4 h-96 w-1/2  rounded-lg shadow-lg shadow-white">
            {/* Video Container */}
            <div className="absolute inset-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
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
                <div className="absolute inset-0 -left-10 -top-8 h-fit w-52 rounded-lg bg-gray-100/80 p-2 text-center shadow-md shadow-black">
                <img src="./About/person-speaker.gif" className="w-8 h-8 mx-auto" alt="" srcset="" />
                  <h1 className="my-2 text-center font-bold text-yellow-600">
                    Expert Guidance
                  </h1>
                  <p className="text-xs font-semibold text-gray-800">
                    Personalized mentoring from top counsellors
                  </p>
                </div>
                <div className="absolute inset-0 left-[31rem] top-72 h-fit w-52 rounded-lg bg-gray-100/80 p-2 text-center shadow-md shadow-black">
                <img src="./About/BookImg.gif" className="w-8 h-8 mx-auto" alt="" srcset="" />
                  <h1 className="my-2 text-center font-bold text-yellow-600">
                    Educational Events
                  </h1>
                  <p className="text-xs font-semibold text-gray-800">
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
