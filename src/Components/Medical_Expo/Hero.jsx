import React from "react";
import Container from "../Helper/Container";
import "./Medical-Expo.css";
import { MdLocationPin } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";

const Hero = () => {
  const models = [
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/6.webp",
      imageAlt: "Image 1",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/7.webp",
      imageAlt: "Image 2",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/8.webp",
      imageAlt: "Image 3",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/9.webp",
      imageAlt: "Image 4",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/10.webp",
      imageAlt: "Image 5",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/6.webp",
      imageAlt: "Image 1",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/7.webp",
      imageAlt: "Image 2",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/8.webp",
      imageAlt: "Image 3",
    },
  ];

  return (
    <>
      <Container className="bg-gradient-to-br from-black to-black/85">
        <ScrollAnimation
          animateIn="fadeIn"
          duration={1.5}
          animateOnce={true}
          initiallyVisible
        >
          <div>
            <div className="relative text-center text-gray-300">
              <h1 className="text-md font-extrabold text-white lg:text-3xl lg:font-semibold">
                India's Biggest{" "}
                <strong className="text-yellow-600">Neet Counselling</strong>{" "}
                Expo
              </h1>
              <p className="mx-auto my-2 text-[0.5rem] font-semibold text-gray-200 lg:my-4 lg:w-96 lg:text-xs">
                The Exclusive Mega Event for <strong>NEET PG</strong> Aspirants.
                Your Key to Mastering <strong>NEET PG</strong> Counselling and
                Admission!
              </p>
              {window.outerWidth > 800 ? (
                <div className="gallery inset-0 z-0 mx-auto mt-20 flex">
                  {models.map((model, index) => (
                    <span
                      key={index}
                      style={{ "--i": index + 1 }}
                      className="relative"
                    >
                      <img
                        src={model.imageUrl}
                        alt={model.imageAlt}
                        className="h-auto w-32 rounded-lg shadow-lg"
                      />
                    </span>
                  ))}
                </div>
              ) : (
                <Carousel
                  autoplay
                  autoplaySpeed={2000}
                  arrows={false}
                  dots={false}
                  className="my-4"
                >
                  {models.map((model, index) => (
                    <img
                      src={model.imageUrl}
                      alt={model.imageAlt}
                      className="h-auto w-32 rounded-md border border-white shadow-lg"
                    />
                  ))}
                </Carousel>
              )}
              <div className="flex flex-col items-center justify-center">
                <p className="lg:text-sm text-xs font-bold text-gray-200">
                  AUGUST 25th | 9:00 AM - 7:00 PM
                </p>
                <div className="lg:my-4 my-2 gap-1 flex items-center text-gray-200">
                  {" "}
                  <MdLocationPin />
                  <p className="lg:text-sm text-xs font-semibold">
                    At Bangalore Medical College and Research Institute
                  </p>
                </div>
                <button className="rounded-l-full rounded-r-full bg-yellow-600 lg:px-3 px-2 py-1 lg:text-sm text-xs font-semibold text-white transition-all hover:bg-yellow-700">
                  Book Your Slot
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* Gallery Section */}
      </Container>
    </>
  );
};

export default Hero;
