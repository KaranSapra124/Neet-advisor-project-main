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
        <div className="relative mx-auto max-w-screen-lg">
          <h1 className="text-center text-3xl font-bold text-primary-color">
            Team In{" "}
            <span className="font-extrabold text-yellow-600">Action</span>
          </h1>
          <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />
          <div className="md:flex items-center justify-between mx-auto space-x-8">
            {/* Image Gallery */}
            <div className=" flex flex-col items-center border-l-2 border-b-2 border-yellow-600 justify-center space-y-4 rounded-xl p-4 shadow-md shadow-black/50">
              <div className="grid grid-cols-2 gap-4">
                {imageUrls.map((elem, index) => (
                  <div key={index} className="relative">
                    <img
                      src={elem}
                      className={`aspect-square h-40 w-60 rounded-lg object-cover shadow-lg transition-all duration-500 ${
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
            <div className="relative mt-2 flex w-full flex-col space-y-6 md:w-1/2">
              {[
                "We are a team of young professionals dedicated to equip students with the clarity, courage, and determination to follow their dreams.",
                "We are very passionate about adding value to the education sector and establishing world-class career counseling services in India.",
                "Our team works with top-notch schools, colleges, and coaching institutes to promote their academic programs across India by conducting various career counseling seminars, webinars, and workshops.",
                "We have positively impacted 60,000+ students and helped them in every aspect, from making the right career choice to choosing the right course or institution based on their aptitude, interests, and personality.",
              ].map((text, idx) => (
                <>
                  <p
                    key={idx}
                    className="cursor-pointer rounded-lg border-b-2 border-l-2 border-yellow-600 bg-gradient-to-tr from-white to-gray-300/50 p-6 text-justify text-xs font-semibold text-gray-700 shadow-md shadow-black/30 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="./About/validation-badge-bg-removed.gif"
                      className="absolute md:left-[29rem]   -mt-8 h-7 w-7 rounded-full bg-white shadow-md shadow-yellow-600"
                      alt=""
                      srcset=""
                    />
                    {text}
                  </p>
                  {idx !== 3 && (
                    <Divider
                      className={"mx-auto h-1 w-20 rounded-full bg-yellow-600"}
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
