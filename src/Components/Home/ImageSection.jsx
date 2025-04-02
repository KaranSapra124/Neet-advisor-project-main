import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import { TiPin } from "react-icons/ti";

const ImageSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currImage, setCurrImage] = useState(0);
  const [images, setImages] = useState([
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/6.webp",
      imageAlt: "Image 1",
      animateIn: "fadeInTopLeft",
      animateOut: "fadeOutBottomRight",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/7.webp",
      imageAlt: "Image 2",
      animateIn: "fadeInDown",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/8.webp",
      imageAlt: "Image 3",
      animateIn: "fadeInTopRight",
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
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/9.webp",
      imageAlt: "Image 4",
    },
  ]);
  const [copyImages, setCopyImages] = useState(images);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const animateInInterval = setInterval(() => {
      setCurrImage((prev) => (prev !== images?.length - 1 ? prev + 1 : 0));
    }, 4000);
    const triggerAnimation = setInterval(() => {
      setIsAnimate((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(animateInInterval);
      clearInterval(triggerAnimation);
    };
  }, []);

  useEffect(() => {
    setCopyImages((prev) => {
      if (!prev[currImage]) return prev; // Ensure currImage exists

      return prev.map(
        (_, idx) => (idx < prev.length - 1 ? prev[idx + 1] : prev[0]), // Shift left & move first image to last
      );
    });
  }, [currImage]);

  const fetchAnimation = (ind) => {
    switch (ind) {
      case 0:
        return "animate-fadeInTopRight";
      case 1:
        return "animate-fadeInDown";
      default:
        return "opacity-100";
    }
  };

  return (
    <div key={isAnimate} className="mx-auto w-full ">
      <div className="space-y-8">
        <div className="relative">
          <div className="grid grid-cols-3">
            {copyImages?.map((elem, index) => (
              <div
                className={`relative m-0.5 rounded-lg bg-white p-2 ${index !== 4 ? "opacity-30 h-full w-full" : "z-[9999] scale-150 opacity-100 transition-all duration-500"} shadow shadow-black transition-all duration-700 ease-in-out ${index === 0 ? "animate-slideDown" : index === 1 ? "animate-slideOutLeft" : index === 2 ? "animate-slideOutLeft" : index === 3 ? "animate-slideDown" : index === 5 ? "animate-slideOutUp" : index === 6 ? "animate-slideOutRight" : index === 7 ? "animate-slideOutRight" : index === 8 ? "animate-slideOutUp" : ""}`}
              >
                <TiPin className="absolute -top-2 left-16 text-red-500" />
                <img
                  key={currImage}
                  src={elem?.imageUrl}
                  alt={elem.imageAlt}
                  className={`${index === 4 ? "m-2 mx-auto h-full w-full bg-white transition-transform duration-500 ease-in-out lg:h-full lg:object-cover" : "m-2 mx-auto h-full w-full bg-white transition-transform duration-500 ease-in-out lg:h-full lg:object-cover"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
