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
  useEffect(() => {
    const cardIndex = setInterval(() => {
      setIsIndex((prev) => (prev < whoShouldAttend?.length ? prev + 1 : 0));
    }, 1500);
    return clearInterval(()=>cardIndex);
  }, []);

  return (
    <>
      <Container
        className={
          "no-repeat relative h-screen bg-webinar-hero bg-cover bg-fixed"
        }
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/80 via-gray-900 to-gray-900/80 backdrop-blur-sm"></div>
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          animateOnce={true}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-yellow-600">
                Who Should{" "}
                <span className="font-extrabold text-primary-color brightness-200">
                  Attend Our Seminar?
                </span>
              </h1>
              <p className="my-2 text-xs font-semibold text-gray-400">
                Attend our seminar & reach newer heights!
              </p>
              <Divider
                className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
              />
            </div>

            <div className="flex">
              <div className="w-1/2">
                <Carousel autoplay dots={false} infinite>
                  {imageUrls?.map((elem, index) => {
                    return <img key={index} src={elem} alt={index} />;
                  })}
                </Carousel>
              </div>

              <div className="mx-auto grid max-w-screen-md grid-cols-2 gap-2">
                {whoShouldAttend?.map((elem, index) => {
                  return (
                    <div
                      className={`${isIndex === index && "border-b-2 border-l-2"} relative m-4 mx-3 cursor-pointer rounded-lg border-yellow-600 bg-gradient-to-tr from-black/50 via-gray-500/10 to-gray-900/40 p-2 shadow-sm shadow-white transition-all duration-200`}
                    >
                      <img
                        src="./Webinar/creative-removedBg.gif"
                        className="absolute -top-4 left-[18.5rem] h-9 w-9"
                        alt=""
                        srcset=""
                      />
                      <h1 className="my-1 w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-semibold text-white">
                        # {elem?.category}
                      </h1>
                      <Divider
                        className={"my-3 h-0.5 w-12 rounded-full bg-yellow-600"}
                      />
                      <p className="my-4 text-sm font-semibold text-gray-300/90">
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
