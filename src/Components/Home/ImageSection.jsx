import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";

const ImageSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [images, setImages] = useState([
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
  ]);
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 480) setSlidesToShow(1);
      else if (width < 768) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlides(); // Initial call
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    // <Container >
    <div className="mx-auto w-full lg:w-1/2">
      <div className="space-y-8">
        {/* First Carousel */}
        <div className="relative">
          {/* Gradient Overlay - Left */}
          <div className="absolute top-0 z-10 -ml-10 h-full lg:w-[20rem] w-[6rem] bg-gradient-to-r from-white to-transparent" />

          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 z-10 -mr-[1rem] h-full lg:w-[20rem] w-[6rem] rotate-180 bg-gradient-to-r from-white to-transparent" />

          <Carousel
            className="relative mx-1 overflow-hidden lg:-mx-2"
            slidesToShow={slidesToShow}
            dots={false}
            autoplay
            autoplaySpeed={2000}
            infinite={true}
          >
            {images.slice(0, 10).map((elem, index) => (
              <div key={index} className="px-2">
                <div className="group relative overflow-hidden rounded-md shadow-lg transition-all duration-300 hover:shadow-xl">
                  <img
                    src={elem?.imageUrl}
                    alt={elem.imageAlt}
                    className="h-full w-full transition-transform duration-300 group-hover:scale-110 lg:h-32 lg:object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Second Carousel - Reverse Direction */}
        <div className="relative">
          {/* Gradient Overlay - Left */}
          <div className="absolute top-0 z-10 -ml-10 h-full lg:w-[20rem] w-[6rem] bg-gradient-to-r from-white to-transparent" />

          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 z-10 -mr-[1rem] h-full lg:w-[20rem] w-[6rem] rotate-180 bg-gradient-to-r from-white to-transparent" />

          <Carousel
            className="relative mx-1 overflow-hidden lg:-mx-2"
            slidesToShow={slidesToShow}
            dots={false}
            autoplay
            autoplaySpeed={2000}
            infinite={true}
            rtl={true}
          >
            {images.slice(0, 10).map((elem, index) => (
              <div key={index} className="px-2">
                <div className="group relative overflow-hidden rounded-md shadow-lg transition-all duration-300 hover:shadow-xl">
                  <img
                    src={elem?.imageUrl}
                    alt={elem.imageAlt}
                    className="h-full w-full transition-transform duration-300 group-hover:scale-110 lg:h-32 lg:object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Third Carousel - Reverse Direction */}
        <div className="relative">
          {/* Gradient Overlay - Left */}
          <div className="absolute top-0 z-10 -ml-10 h-full lg:w-[20rem] w-[6rem] bg-gradient-to-r from-white to-transparent" />

          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 z-10 -mr-[1rem] h-full lg:w-[20rem] w-[6rem] rotate-180 bg-gradient-to-r from-white to-transparent" />

          <Carousel
            className="relative mx-1 overflow-hidden lg:-mx-2"
            slidesToShow={slidesToShow}
            dots={false}
            autoplay
            autoplaySpeed={2000}
            infinite={true}
          >
            {images.slice(0, 10).map((elem, index) => (
              <div key={index} className="px-2">
                <div className="group relative overflow-hidden rounded-md shadow-lg transition-all duration-300 hover:shadow-xl">
                  <img
                    src={elem?.imageUrl}
                    alt={elem.imageAlt}
                    className="h-full w-full transition-transform duration-300 group-hover:scale-110 lg:h-32 lg:object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default ImageSection;
