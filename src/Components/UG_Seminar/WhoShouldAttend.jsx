import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const WhoShouldAttend = () => {
  const [isIndex, setIsIndex] = useState(0);
  const whoShouldAttend = [
    {
      category: "NEET Aspirants",
      description:
        "Students preparing for NEET UG 2025 who are seeking expert guidance on exam preparation strategies and syllabus prioritization.",
    },
    {
      category: "Parents of Aspirants",
      description:
        "Parents looking to understand the NEET UG process, counseling procedures, and how to support their children effectively.",
    },
    {
      category: "Repeaters",
      description:
        "Students who have previously attempted NEET and are aiming to improve their performance with expert insights and strategies.",
    },
    {
      category: "School Representatives",
      description:
        "Educators or counselors interested in staying updated on NEET trends and sharing valuable information with their students.",
    },
  ];
  useEffect(() => {
    const cardIndex = setInterval(() => {
      setIsIndex((prev) => (prev < whoShouldAttend?.length ? prev + 1 : 0));
    }, 1500);
    return clearInterval(() => cardIndex);
  }, []);

  return (
    <>
      <Container
        className={
          "no-repeat relative h-full bg-seminar-hero bg-cover bg-fixed"
        }
      >
        <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-md"></div>
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          animateOnce={true}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="text-sm font-bold text-yellow-600 lg:text-3xl">
                Who Should{" "}
                <span className="font-extrabold text-primary-color">
                  Attend Our Seminar?
                </span>
              </h1>
              <p className="my-2 text-xs font-semibold text-gray-800">
                Attend our seminar & reach newer heights!
              </p>
              <Divider
                className={
                  "mx-auto my-2 h-0.5 w-12 rounded-full bg-primary-color lg:my-4 lg:h-1 lg:w-20"
                }
              />
            </div>
            <div className="mx-auto grid lg:max-w-screen-md lg:grid-cols-2">
              {whoShouldAttend?.map((elem, index) => {
                return (
                  <div
                    className={`relative m-4 mx-3 h-40 cursor-pointer rounded-lg border-black/20 p-5 shadow-sm shadow-white border  transition-all duration-200`}
                  >
                    <img
                      src="./Webinar/creative-removedBg.gif"
                      className="absolute -top-4 left-[15rem] h-9 w-9 lg:left-[21.2rem]"
                      alt=""
                      srcset=""
                    />
                    <h1 className="my-1 w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-[0.6rem] font-semibold text-white lg:text-xs">
                      # {elem?.category}
                    </h1>
                    <Divider
                      className={"my-3 h-0.5 w-12 rounded-full bg-primary-color"}
                    />
                    <p className="my-4 text-[0.7rem] font-semibold text-gray-800 lg:text-xs">
                      {elem?.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default WhoShouldAttend;
