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
      <Container className={"relative h-screen"}>
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
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/80 to-black/70"></div>
        <ScrollAnimation animateIn="backInUp" className="h-full inset-0" animateOnce={true} duration={1.5}>
          <div className="relative inset-0 mx-auto flex h-full flex-col items-center justify-center gap-5">
            <div className="flex items-center justify-center">
              {" "}
              <h1 className="text-4xl font-bold text-primary-color brightness-[300%]">
                Join Our Team At
              </h1>
              <span className="mx-2 text-4xl font-extrabold text-yellow-600">
                Neet Advisor
              </span>
            </div>
            <Divider className={"h-1 w-20 rounded-full bg-yellow-600"} />
            <p className="max-w-screen-sm text-center text-sm font-semibold text-gray-300">
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
                      <TiTick className="mx-1 text-xl text-yellow-600" />
                      <li className="list-none font-bold text-gray-300">
                        <strong className="text-sm text-yellow-600">
                          {elem?.title} :{" "}
                        </strong>{" "}
                        <span className="text-xs">{elem?.description}</span>
                      </li>
                    </span>
                  </>
                );
              })}
            </div>
            <button className="my-4 rounded-l-full rounded-r-full bg-yellow-600 px-2.5 py-3.5 text-base font-extrabold text-white transition-all duration-200 hover:bg-yellow-700">
              View Openings
            </button>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default Hero;
