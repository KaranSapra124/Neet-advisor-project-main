import React from "react";
import Container from "../Helper/Container";
import { FaBook, FaUser, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
const Hero = () => {
  return (
    <Container className="relative w-full bg-webinar-hero">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-gray-100 via-gray-200 to-white opacity-90"></div>
      <ScrollAnimation animateIn="backInLeft" duration={1.5}>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between lg:flex-row">
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:w-1/2">
            <div className="space-y-2 lg:max-w-xl lg:space-y-6">
              {/* Badge */}
              {/* <div className="w-fit h-fit rounded-full bg-yellow-600 lg:text-sm  text-[0.5rem] font-bold text-white/95 lg:px-4 py-1  px-2 ">
                  #1 NEET Counselling Service
              </div> */}

              {/* Main Content */}
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-sm font-bold text-primary-color/90 lg:text-3xl">
                  Your Trusted{" "}
                  <span className="typewriter mt-2 block bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text font-bold text-transparent">
                    <span className="font-extrabold">NEET</span> Counselling
                    Partner
                  </span>
                </h1>
                <Divider
                  className={
                    "h-0.5 w-12 rounded-full bg-yellow-600 lg:h-1 lg:w-20"
                  }
                />

                <div className="space-y-3 lg:space-y-6">
                  <p className="text-[0.6rem] font-semibold text-gray-800 lg:text-xs">
                    At NEET Advisor, we are a team of passionate professionals
                    committed to resolving your doubts about NEET counselling
                    and providing comprehensive support throughout the critical
                    application, documentation, and admission procedures for
                    medical colleges across India and worldwide!
                  </p>
                  <p className="text-[0.6rem] font-semibold text-gray-800 lg:text-xs">
                    Our meticulously designed programs cater specifically to
                    NEET UG and NEET PG aspirants, offering a structured and
                    strategic approach to counselling. With our personalized
                    counselling service you will gain a deep understanding of
                    the critical aspects of NEET counselling, enabling you to
                    secure a medical seat—even with a lower NEET score—through
                    informed decision-making and optimized counselling
                    strategies.
                  </p>
                </div>

                <div className="flex gap-2 py-2 lg:gap-4 lg:py-4">
                  {/* <button className="group flex items-center gap-1 rounded-full bg-yellow-600 px-2 py-1 text-[0.5rem] font-extrabold text-white transition-all duration-300 hover:bg-yellow-700 lg:gap-4 lg:text-sm lg:font-bold">
                    Get Started Today
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button> */}
                  {/* <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          className="w-8 rounded-full border border-gray-200 bg-gray-300 lg:h-10 lg:w-10"
                          src="https://neetadvisor.com/assets/images/gallery/international/1.webp"
                        />
                      ))}
                    </div>
                    <p className="text-[0.5rem] font-semibold text-gray-800 lg:text-sm">
                      <span className="font-bold text-yellow-600">1000+</span>{" "}
                      Success Stories
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="relative mx-4 my-10 h-52 w-full rounded-lg shadow-lg shadow-white lg:my-0 lg:h-96 lg:w-1/2">
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
                <div className="absolute inset-0 -left-3 -top-4 h-fit w-36 rounded-lg bg-gray-100/80 p-2 text-center shadow-md shadow-black lg:-left-10 lg:-top-8 lg:w-52">
                  <img
                    src="./About/person-speaker.gif"
                    className="mx-auto h-6 w-6 lg:h-8 lg:w-8"
                    alt=""
                    srcset=""
                  />
                  <h1 className="my-0.5 text-center text-[0.6rem] font-bold text-yellow-600 lg:my-2 lg:text-sm">
                    Expert Guidance
                  </h1>
                  <p className="text-[0.5rem] font-semibold text-gray-800 lg:text-xs">
                    Personalized mentoring from top counsellors
                  </p>
                </div>
                <div className="absolute inset-0 left-[9.5rem] top-[9.5rem] h-fit w-36 rounded-lg bg-gray-100/80 p-2 text-center shadow-md shadow-black lg:left-[31rem] lg:top-72 lg:w-52">
                  <img
                    src="./About/BookImg.gif"
                    className="mx-auto h-6 w-6 lg:h-8 lg:w-8"
                    alt=""
                    srcset=""
                  />
                  <h1 className="my-0.5 text-center text-[0.6rem] font-bold text-yellow-600 lg:my-2 lg:text-sm">
                    Educational Events
                  </h1>
                  <p className="text-[0.5rem] font-semibold text-gray-800 lg:text-xs">
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
