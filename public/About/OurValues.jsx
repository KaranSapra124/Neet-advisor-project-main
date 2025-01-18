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

const OurValues = () => {
  const [currVal, setCurrVal] = useState(0);
  const values = [
    {
      title: "Transparency",
      description: "NEET 2024 Career Counseling",
      icon: "./About/secure.gif",
    },
    {
      title: "Commitment",
      description: "NEET 2024 Career Counseling",
      icon: "./About/commitment.gif",
    },
    {
      title: "Collaboration",
      description: "NEET 2024 Career Counseling",
      icon: "./About/collaboration.gif",
    },
    {
      title: "Quality",
      description: "NEET 2024 Career Counseling",
      icon: "./About/taskGif.gif",
    },
    {
      title: "Integrity",
      description: "NEET 2024 Career Counseling",
      icon: "./About/friendship.gif",
    },
    {
      title: "Excellence",
      description: "NEET 2024 Career Counseling",
      icon: "./About/output-onlinegiftools.gif",
    },
    {
      title: "Teamwork",
      description: "NEET 2024 Career Counseling",
      icon: "./About/person-speaker.gif",
    },
    {
      title: "Creativity",
      description: "NEET 2024 Career Counseling",
      icon: "./About/creative-removedBg.gif",
    },
    // {
    //   title: "Knowledge",
    //   description: "NEET 2024 Career Counseling",
    //   icon: "",
    // },
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      currVal < values.length && setCurrVal((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <Container className={"relative bg-webinar-hero"}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-100 via-gray-200 to-white opacity-90"></div>

      <div className="relative m-auto max-w-screen-xl">
        <div className="pb-5">
          <h1 className="text-center text-3xl font-bold text-primary-color">
            Our Values ,{" "}
            <span className="font-extrabold text-yellow-600">
              Which Defined Us
            </span>
          </h1>
          <p className="pt-2 text-center text-xs font-semibold text-gray-700">
            Our values represent the core principles that guide our actions,
            decisions, and relationships. They reflect our commitment to
            integrity, respect, innovation, and collaboration, shaping the way
            we interact with each other and the world.
          </p>
          <div className="mx-auto my-4 h-1 w-64 rounded-lg bg-yellow-600"></div>
        </div>
        <Steps
          direction="horizontal"
          current={currVal}
          labelPlacement="vertical"
          // progressDot
          items={values.map((value, index) => ({
            title: (
              <div className="flex flex-col items-center justify-center rounded-lg bg-white p-2 shadow-md shadow-white">
                <img
                  src={value?.icon}
                  className="mx-auto w-10"
                  alt=""
                  srcset=""
                />
                <h2 className="text-sm">{value?.title}</h2>
                <p className="text-xs">{value?.description}</p>
              </div>
            ),
          }))}
          className="aboutUsStepper mx-auto max-w-screen-xl"
          // rootClassName='text-primary-color '
        />
      </div>
    </Container>
  );
};

export default OurValues;
