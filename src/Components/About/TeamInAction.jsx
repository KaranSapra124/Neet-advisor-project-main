import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import "./Aboutus.css";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const TeamInAction = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [animation, setAnimation] = useState("animate-slideOutLeft");
  const [imageUrls, setImgUrls] = useState([
    "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
    "https://neetadvisor.com/assets/images/gallery/seminars/6.webp",
  ]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimation("animate-slideOutLeft");
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      setTimeout(() => setAnimation("animate-slideRight"), 500);
    }, 2000);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <Container className="relative bg-webinar-hero">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-gray-100 via-gray-200 to-white opacity-90"></div>
      <ScrollAnimation animateIn="fadeIn" duration={2.5}>
        <div className="relative mx-auto lg:max-w-screen-lg">
          <h1 className="text-center lg:text-3xl text-sm font-bold text-yellow-600">
            Team In{" "}
            <span className="font-extrabold text-primary-color">Action</span>
          </h1>
          <p className="lg:text-xs text-[0.5rem] lg:leading-5 text-gray-800 mx-auto lg:max-w-sm font-semibold lg:my-4 my-2 text-center">Working together with passion, collaboration, and dedication to turn dreams into reality and achieve success.</p>
          <Divider
            className={"mx-auto lg:my-4 my-2 lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-yellow-600"}
          />
          <div className="md:flex items-center justify-between mx-auto lg:space-x-8">
            {/* Image Gallery */}
            <div className=" flex flex-col  items-center border-l-2 border-b-2 border-yellow-600 justify-center space-y-4 rounded-xl p-2 shadow">
              <div className="grid grid-cols-2 gap-3">
                {imageUrls.map((elem, index) => (
                  <div key={index} className="relative">
                    <img
                      src={elem}
                      className={`aspect-square lg:h-40 lg:w-60 rounded-lg object-cover shadow-lg transition-all duration-500 ${
                        imageIndex === index
                          ? `${animation} ${
                              animation === "animate-slideOutLeft"
                                ? "opacity-0"
                                : "opacity-100"
                            }`
                          : ""
                      } hover:scale-105`}
                      alt={`Gallery ${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="relative lg:mt-2 mt-4 flex w-full flex-col lg:space-y-6 lg:w-1/2 space-y-4">
              {[
                "We are a team of young professionals dedicated to equip students with the clarity, courage, and determination to follow their dreams.",
                "We are very passionate about adding value to the education sector and establishing world-class career counseling services in India.",
                "Our team works with top-notch schools, colleges, and coaching institutes to promote their academic programs across India by conducting various career counseling seminars, webinars, and workshops.",
                "We have positively impacted 60,000+ students and helped them in every aspect, from making the right career choice to choosing the right course or institution based on their aptitude, interests, and personality.",
              ].map((text, idx) => (
                <>
                  <p
                    key={idx}
                    className="cursor-pointer rounded-lg border-b-2 border-l-2 border-yellow-600 bg-gradient-to-tr from-white to-gray-300/50 lg:p-6 p-4 text-justify lg:text-xs text-[0.5rem] font-semibold text-gray-800 shadow-md shadow-black/30 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="./About/validation-badge-bg-removed.gif"
                      className="absolute lg:left-[30rem]   lg:-mt-8 -mt-7 w-6 left-[16.5rem]  lg:h-7 lg:w-7 rounded-full bg-white shadow-md shadow-yellow-600"
                      alt=""
                      srcset=""
                    />
                    {text}
                  </p>
                  {idx !== 3 && (
                    <Divider
                      className={"mx-auto lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-yellow-600"}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default TeamInAction;
