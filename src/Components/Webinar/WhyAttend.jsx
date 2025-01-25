import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import "./Testimonials.css";
import { motion } from "framer-motion";
import Divider from "../Helper/Divider";
const WhyAttend = () => {
  const [isHover, setIsHover] = useState(false);
  const data = [
    {
      icon: "./Webinar/output-onlinegiftools.gif",
      title: "Ace NEET 2025",
      text: "Prepare like a Pro with the latest cut-off trends, tips, tricks, time management strategies, and updates on the NEET Exam.",
    },
    {
      icon: "./Webinar/BookImg.gif",
      title: "Top Study Resources for NEET",
      text: "Discover the best books, online courses, and study materials that can help you excel in your NEET preparation.",
    },
    {
      icon: "./Webinar/Overdue-bg-removed.gif",
      title: "Effective Time Management for NEET Aspirants",
      text: "Learn how to create a study schedule that maximizes your productivity and ensures you cover all topics before the exam.",
    },
    {
      icon: "./Webinar/No-Bg-removed.gif",
      title: "Common Mistakes to Avoid in NEET Preparation",
      text: "Identify the pitfalls that many students face during their preparation and how to avoid them for a successful outcome.",
    },
  ];
  useEffect(() => {
    const showDivs = setInterval(() => setIsHover(true), 2500);
    return () => clearInterval(showDivs);
  }, []);
  return (
    <>
      <Container>
        <h1 className="py-2 text-center text-3xl font-bold text-yellow-600">
          Why You Can’t Miss Our{" "}
          <span className="font-extrabold text-primary-color">Webinar!</span>
        </h1>
        <p className="py-2 text-center text-xs font-semibold text-gray-700">
          Attend Our Webinar And Get Your Dream Of <strong>NEET </strong>
          Achieved!
        </p>
        {/* <Divider className={'h-1 w-20 bg-yellow-600 rounded-full mx-auto my-2'}/> */}
        <div className="relative mx-auto grid max-w-screen-md grid-cols-2 items-center gap-2">
          <motion.div drag className="absolute bottom-[9rem] left-[22.7rem] z-50 h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2 bg-yellow-600">
            <img
              src="./Webinar/click-bg-removed.gif"
              onClick={() => setIsHover(!isHover)}
              className="p-1"
              alt=""
            />
          </motion.div>

          {data.map((elem, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex ${isHover ? "scale-100" : "scale-0"} cursor-pointer flex-col items-center transition-all duration-200`}
              >
                <div className="h-40 rounded-lg bg-gradient-to-tr from-white to-gray-200/40 px-1 text-center shadow-lg transition-all duration-200 hover:border-2 hover:border-yellow-600">
                  <img
                    src={elem.icon}
                    className="m-auto my-3 h-12 w-12 rounded-full border-2 bg-purple-100 p-1 shadow-md group-hover:border-yellow-600"
                    alt=""
                  />
                  <h1 className="my-1 text-sm font-bold text-primary-color">
                    {elem.title}
                  </h1>
                  <p className="px-2 py-2 text-xs font-semibold text-gray-700">
                    {elem.text}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* {index < data.length - 1 && ( */}

        {/* )} */}
        {/* <div className="  w-full   items-center  "> */}
        {/* <div className="h-1 absolute   w-96  bg-red-500"></div> */}
        {/* </div> */}
      </Container>
    </>
  );
};

export default WhyAttend;
