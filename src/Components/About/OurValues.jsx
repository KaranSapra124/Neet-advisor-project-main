import React, { useEffect, useState } from "react";
import {
  FaBalanceScale,
  FaHandshake,
  FaClipboardList,
  FaStar,
  FaRegSmileBeam,
  FaUsers,
  FaPaintBrush,
  FaBook,
} from "react-icons/fa";
import Container from "../Helper/Container";
import { Steps } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Helper/Divider";

const OurValues = () => {
  const [currVal, setCurrVal] = useState(0);
  const values = [
    {
      title: "Transparency",
      description:
        "We maintain open communication and provide clear, honest guidance to NEET aspirants, ensuring they are fully informed at every step of their career counseling journey.",
      icon: "./About/secure.gif",
    },
    {
      title: "Commitment",
      description:
        "Our unwavering dedication to supporting NEET aspirants in achieving their medical career dreams sets us apart in the counseling process.",
      icon: "./About/commitment.gif",
    },
    {
      title: "Collaboration",
      description:
        "We foster a collaborative environment, working closely with students, parents, and institutions to provide personalized guidance and effective solutions.",
      icon: "./About/collaboration.gif",
    },
    {
      title: "Quality",
      description:
        "We prioritize delivering high-quality counseling services, ensuring students receive the best resources and advice to make informed decisions.",
      icon: "./About/taskGif.gif",
    },
    {
      title: "Integrity",
      description:
        "We uphold strong ethical values, providing trustworthy and unbiased advice to every student, ensuring their best interests are always prioritized.",
      icon: "./About/friendship.gif",
    },
    {
      title: "Excellence",
      description:
        "Our focus on excellence drives us to provide exceptional counseling services that empower students to achieve their academic and professional goals.",
      icon: "./About/output-onlinegiftools.gif",
    },
    {
      title: "Teamwork",
      description:
        "Our team of experienced counselors collaborates seamlessly to offer comprehensive guidance tailored to each student's needs.",
      icon: "./About/person-speaker.gif",
    },
    {
      title: "Creativity",
      description:
        "We approach career counseling with creativity, finding innovative solutions to unique challenges faced by NEET aspirants.",
      icon: "./About/creative-removedBg.gif",
    },
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrVal((prev) => (prev + 1) % values.length);
    }, 1500);

    return () => clearInterval(stepInterval);
  }, [values.length]);

  //   useEffect(() => console.log(currVal), [currVal]);

  return (
    <Container className={"relative bg-webinar-hero"}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-100 via-gray-200 to-white opacity-90"></div>
      <ScrollAnimation animateIn="backInRight" duration={1.5}>
        <div className="relative m-auto lg:max-w-screen-xl ">
          <div className="lg:pb-5 pb-2">
            <h1 className="text-center lg:text-3xl text-sm font-bold text-yellow-600">
              Our Values ,{" "}
              <span className="font-extrabold text-primary-color">
                Which Defined Us
              </span>
            </h1>
            <p className="mx-auto lg:my-4 my-2 lg:w-[27rem] text-center lg:text-xs text-[0.5rem] font-semibold lg:leading-5 text-gray-800">
              Our values represent the core principles that guide our actions,
              decisions, and relationships. They reflect our commitment to
              integrity, respect, innovation, and collaboration, shaping the way
              we interact with each other and the world.
            </p>
            <div className="mx-auto lg:my-4 my-2 lg:h-1 h-0.5 lg:w-20 w-12 rounded-lg bg-yellow-600"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {values?.map((value, index) => {
              return (
                <div
                  className={`${index === currVal ? "border-b-2 border-l-2 border-yellow-600" : ""} flex lg:w-96 flex-col items-center justify-center rounded-lg bg-gradient-to-tr from-white to-black/5 lg:p-4 p-2.5 shadow-md shadow-white transition-all duration-300`}
                >
                  <img
                    src={value?.icon}
                    className="mx-auto lg:w-9 w-6 rounded-full bg-white p-1 shadow-md shadow-yellow-600"
                    alt=""
                    srcset=""
                  />
                  <h2 className="lg:my-2 my-1.5 lg:text-sm text-xs font-bold">{value?.title}</h2>
                  <Divider
                    className={"mx-auto h-0.5 my-2 lg:w-12 w-8 rounded-full bg-yellow-600"}
                  />
                  <p className="lg:text-xs text-[0.5rem] font-semibold lg:leading-5 text-gray-800">
                    {value?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default OurValues;
