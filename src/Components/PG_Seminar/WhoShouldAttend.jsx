import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";

const WhoShouldAttend = () => {
  const [isIndex, setIsIndex] = useState(0);
  const whoShouldAttend = [
    {
      category: "NEET Aspirants",
      description:
        "Students preparing for NEET PG  2025 who are seeking expert guidance on exam preparation strategies and syllabus prioritization.",
    },
    {
      category: "Parents of Aspirants",
      description:
        "Parents looking to understand the NEET PG  process, counseling procedures, and how to support their children effectively.",
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
  const imageUrls = [
    "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
  ];
  // useEffect(() => {
  //   const cardIndex = setInterval(() => {
  //     setIsIndex((prev) => (prev < whoShouldAttend?.length ? prev + 1 : 0));
  //   }, 3000);
  //   return clearInterval(()=>cardIndex);
  // }, []);

  return (
    <>
      <Container
        className={
          "no-repeat relative lg:h-screen  bg-webinar-hero bg-cover bg-fixed"
        }
      >
        <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-sm"></div>
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          animateOnce={true}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="lg:text-3xl text-sm font-bold text-yellow-600">
                Who Should{" "}
                <span className="font-extrabold text-primary-color ">
                  Attend Our Seminar?
                </span>
              </h1>
              <p className="my-2 lg:text-xs text-[0.5rem] font-bold text-gray-800">
                Attend our seminar & reach newer heights!
              </p>
              <Divider
                className={"mx-auto lg:my-4 lg:h-1 lg:w-20 w-12 h-0.5 my-2 rounded-full bg-primary-color"}
              />
            </div>

            <div className="flex lg:flex-row flex-col">
              <div className="lg:w-1/2">
                <Carousel autoplay dots={false} infinite>
                  {imageUrls?.map((elem, index) => {
                    return <img key={index} src={elem} alt={index} />;
                  })}
                </Carousel>
              </div>

              <div className="mx-auto grid lg:max-w-screen-md lg:grid-cols-2 lg:gap-2 gap-1 lg:mt-0 mt-4">
                {whoShouldAttend?.map((elem, index) => {
                  return (
                    <div
                      className={`border relative lg:m-4 m-2 mx-3 cursor-pointer rounded-lg border-black/20 bg-gray-100/40 p-2 shadow-sm shadow-white transition-all duration-200`}
                    >
                      <img
                        src="./Webinar/creative-removedBg.gif"
                        className="absolute -top-3 lg:left-[15.5rem] left-[16rem] lg:h-9 lg:w-9 w-7 h-7"
                        alt=""
                        srcset=""
                      />
                      <h1 className="my-1 w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 lg:text-xs text-[0.5rem] font-bold lg:font-semibold text-white">
                        # {elem?.category}
                      </h1>
                      <Divider
                        className={"lg:my-3 my-2 h-0.5 w-12 rounded-full bg-primary-color"}
                      />
                      <p className="lg:my-4 my-0 lg:text-xs text-[0.5rem] font-semibold text-gray-800">
                        {elem?.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default WhoShouldAttend;
