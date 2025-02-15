import React from "react";
import {
  FaGlobeAmericas,
  FaBookReader,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

import Container from "../Helper/Container";
// import Divider from "../Helper/Divider"
import { Carousel } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  const imageArr = [
    "https://neetadvisor.com/assets/images/gallery/international/6.webp",
    "https://neetadvisor.com/assets/images/gallery/international/7.webp",
    "https://neetadvisor.com/assets/images/gallery/international/9.webp",
  ];

  const features = [
    {
      icon: <FaGlobeAmericas className="mx-auto h-6 w-6 text-white" />,
      text: "International Education",
    },
    {
      icon: <FaBookReader className="mx-auto h-6 w-6 text-white" />,
      text: "Expert Counselling",
    },
    {
      icon: <FaUserGraduate className="mx-auto h-6 w-6 text-white" />,
      text: "Career Guidance",
    },
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageArr.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        duration={1.5}
        initiallyVisible
      >
        <Container className={"relative h-screen"}>
          {/* Image Section */}
          <img
            key={currentImage}
            src={imageArr[currentImage]}
            className="absolute inset-0 h-full w-full animate-fadeIn object-cover brightness-110"
          />
          <div className="absolute inset-0 h-full w-full bg-black/35"></div>
          <div className="flex h-full items-center">
            <div className="relative flex h-fit w-fit flex-col justify-center gap-5 rounded-md bg-black/70 p-4 shadow-sm shadow-white backdrop-blur-none">
              <div className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-sm font-extrabold uppercase text-white">
                # Neet advisor
              </div>
              <h1 className="text-3xl font-extrabold text-yellow-600 brightness-110">
                Your Gateway to Pursuing MBBS Abroad,
                <br />
                <span className="text-primary-color brightness-[250%]">
                  {" "}
                  Achieve Your Medical Dreams Globally!
                </span>
              </h1>
              <p className="max-w-screen-sm text-justify text-xs font-semibold text-gray-200">
                Pursuing an MBBS abroad opens doors to world-class medical
                education, cutting-edge facilities, and global exposure. With
                opportunities to study in renowned universities across countries
                like Russia, Ukraine, the Philippines, and more, you can gain a
                competitive edge in your medical career. Affordable tuition
                fees, diverse cultures, and international recognition of degrees
                make studying MBBS abroad a smart choice for aspiring doctors.
                Embark on this journey to turn your medical aspirations into
                reality!
              </p>
              <div className="flex justify-start">
                <button className="text-sm rounded-l-full rounded-r-full bg-primary-color px-2 py-1 font-bold  text-white transition-all hover:scale-105">
                  Register
                </button>
                <button className="text-sm mx-2 rounded-l-full rounded-r-full border-2 border-gray-200 px-2 py-1 font-bold  text-gray-200 transition-all duration-200 hover:scale-110 hover:border-none hover:bg-black hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute left-[20.5rem] top-[31rem] flex gap-2">
              <Carousel
                autoplay
                infinite
                slidesToShow={3}
                dots={false}
                className="max-w-screen-sm"
              >
                {features?.map((elem, index) => {
                  return (
                    <div className="flex h-20 w-32 flex-col items-center justify-center space-y-4 rounded-md border border-white bg-black/75 p-2 text-center shadow-md">
                      <div className="m-auto">{elem?.icon}</div>
                      {/* <Divider className="h-0.5 w-2 bg-yellow-600"/> */}
                      <p className="text-sm font-semibold text-gray-200">
                        {elem?.text}
                      </p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default Hero;
