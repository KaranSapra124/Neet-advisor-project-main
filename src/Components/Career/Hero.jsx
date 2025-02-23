import React from "react";
import Container from "../Helper/Container";
import CareerAnimation from "./Career-Page-Animation.json";
import Lottie from "lottie-react";
import { TiTick } from "react-icons/ti";
import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Helper/Divider";
const Hero = () => {
  const benefits = [
    {
      title: "Competitive Salary",
      description:
        "We offer a salary that reflects your skills and experience.",
    },
    {
      title: "Flexible Work Arrangements",
      description: "Enjoy the freedom of remote work and flexible hours.",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs.",
    },
    {
      title: "Professional Development",
      description:
        "Access to workshops, training, and resources to enhance your skills.",
    },
    {
      title: "Inclusive Culture",
      description:
        "We celebrate diversity and foster an inclusive environment for all employees.",
    },
  ];
  return (
    <>
      <Container className={"relative lg:h-screen h-full"}>
        {/* <ScrollAnimation
          animateIn="JackInTheBox"
          duration={1.5}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        {/* <div className='flex  items-center mx-auto'> */}
        <video
          src="https://videos.pexels.com/video-files/4432816/4432816-sd_640_360_25fps.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay loop muted
        ></video>
        <div className="absolute inset-0 h-full w-full bg-gray-900/70"></div>
        <ScrollAnimation animateIn="backInUp" className="h-full inset-0" animateOnce={true} duration={1.5}>
          <div className="relative inset-0 mx-auto flex h-full flex-col items-center justify-center lg:gap-5 gap-2">
            <div className="flex items-center justify-center">
              {" "}
              <h1 className="lg:text-4xl text-lg font-bold text-primary-color brightness-[300%]">
                Join Our Team At
              </h1>
              <span className="lg:mx-2 mx-1 lg:text-4xl text-xl font-extrabold text-yellow-600">
                Neet Advisor
              </span>
            </div>
            <Divider className={"lg:h-1 lg:w-20 h-0.5 w-12 rounded-full bg-yellow-600"} />
            <p className="lg:max-w-screen-sm text-center lg:text-sm text-[0.6rem] font-semibold text-gray-300">
              Are you passionate about education and helping students achieve
              their dreams? At <strong>Neet Advisor!</strong>, we are on a
              mission to guide aspiring medical students through their{" "}
              <strong>Neet</strong> preparation journey. Join us in making a
              difference!
            </p>
            <div>
              {benefits?.map((elem, index) => {
                return (
                  <>
                    <span className="flex justify-center">
                      <TiTick className="lg:mx-1 mx-0.5 lg:text-xl text-2xl text-yellow-600" />
                      <li className="list-none font-bold text-gray-300">
                        <strong className="lg:text-sm text-xs text-yellow-600">
                          {elem?.title} :{" "}
                        </strong>{" "}
                        <span className="lg:text-xs text-[0.7rem]">{elem?.description}</span>
                      </li>
                    </span>
                  </>
                );
              })}
            </div>
            <button className="lg:my-4 rounded-l-full rounded-r-full bg-yellow-600 lg:px-2.5 px-1.5 lg:py-3.5 py-1.5 lg:text-base text-xs font-extrabold text-white transition-all duration-200 hover:bg-yellow-700">
              View Openings
            </button>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default Hero;
