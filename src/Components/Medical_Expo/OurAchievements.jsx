import React from "react";
import { TiTick } from "react-icons/ti";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";

const SuperChargeDream = () => {
  const listData = [
    "Master NEET PG 2025 Counselling.",
    "Specialization Wise Pros and Cons.",
    "PG Medical Career Scope For Every Branch.",
    "Clinical vs Non-Clinical/Pros & Cons.",
    "Branch Selection By Your Requirement.",
  ];

  return (
    <Container className={"bg-gradient-to-tr from-black to-black/85"}>
      <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
        <div className="flex lg:flex-row flex-col items-center ">
          <div className="my-2 flex  justify-center  lg:w-1/2 text-center">
            <div>
              <h1 className="my-2 lg:text-3xl text-lg font-medium text-white">
                Supercharge Your{" "}
                <span className="font-extrabold text-yellow-600">Future</span>
              </h1>
              <p className="mx-auto my-2 lg:w-80 lg:max-w-xl lg:text-xs text-[0.5rem] lg:font-semibold font-bold text-gray-200">
                Make your dreams meet direction. Medical mentor Expo is your key
                to Tips, Tricks, Techniques, Insights and Updates. Here's why
                you can't afford to miss it!
              </p>
            </div>
            <img
              className="lg:block hidden w-28 mx-10 h-18 rotate-180"
              src="left-arrow-bg.gif"
              alt=""
              srcset=""
            />
          </div>

          <div className="lg:mx-4  flex lg:flex-row flex-col lg:w-1/2 rounded-xl bg-black/10 p-2 lg:p-4 border border-white">
            <div className="flex-1  space-y-2">
              <p className="lg:text-sm text-xs font-extrabold lg:font-semibold text-gray-200">
                Invaluable insights, Exclusive analysis, and Tailored advice
                from experts in medical field
              </p>

              <div>
                <h2 className="mb-1 lg:text-lg text-sm font-extrabold text-yellow-500">
                  Highlights:
                </h2>
                <ul className="lg:space-y-1  lg:mb-0 mb-2">
                  {listData.map((elem, index) => (
                    <li key={index} className="flex items-center gap-2 p-1">
                      <span className="flex-shrink-0">
                        <TiTick className="lg:h-4 lg:w-4   text-gray-200" />
                      </span>
                      <span className="text-xs font-semibold text-gray-200">
                        {elem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mx-1 lg:w-72 ">
              {/* <div className="rounded-lg overflow-hidden shadow-xl"> */}
              <img
                src="https://neetadvisor.com/assets/images/seminars/seminar5-1024x576.webp"
                alt="Medical Seminar"
                className="lg:h-full lg:w-full object-cover"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default SuperChargeDream;
