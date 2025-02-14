import React from "react";
import { TiTick } from "react-icons/ti";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";

const SuperChargeDream = () => {
  const listData = [
    "Master NEET PG 2025 Counselling",
    "Specialization Wise Pros and Cons",
    "PG Medical Career Scope For Every Branch",
    "Clinical vs Non-Clinical/Pros & Cons",
    "Branch Selection By Your Requirement",
  ];

  return (
    <Container className={"bg-gradient-to-tr from-black to-black/85"}>
      <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
        <div className="flex items-center ">
          <div className="my-2 flex justify-center  w-1/2 text-center">
            <div>
              <h1 className="my-2 text-3xl font-medium text-white">
                Supercharge Your{" "}
                <span className="font-extrabold text-yellow-600">Future</span>
              </h1>
              <p className="mx-auto w-80 max-w-xl text-xs font-semibold text-gray-400">
                Make your dreams meet direction. Medical mentor Expo is your key
                to Tips, Tricks, Techniques, Insights and Updates. Here's why
                you can't afford to miss it!
              </p>
            </div>
            <img
              className="w-28 mx-10 h-18 rotate-180"
              src="left-arrow-bg.gif"
              alt=""
              srcset=""
            />
          </div>

          <div className="mx-4 flex w-1/2 rounded-xl bg-black/10 p-8 shadow-lg shadow-gray-700">
            <div className="flex-1 space-y-2">
              <p className="text-sm font-semibold text-gray-300">
                Invaluable insights, Exclusive analysis, and Tailored advice
                from experts in medical field
              </p>

              <div>
                <h2 className="mb-1 text-lg font-bold text-yellow-500">
                  Highlights:
                </h2>
                <ul className="space-y-1">
                  {listData.map((elem, index) => (
                    <li key={index} className="flex items-center gap-2 p-1">
                      <span className="flex-shrink-0">
                        <TiTick className="h-4 w-4 text-gray-300" />
                      </span>
                      <span className="text-xs font-semibold text-gray-300">
                        {elem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mx-1 w-72">
              {/* <div className="rounded-lg overflow-hidden shadow-xl"> */}
              <img
                src="https://neetadvisor.com/assets/images/seminars/seminar5-1024x576.webp"
                alt="Medical Seminar"
                className="h-full w-full object-cover"
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
