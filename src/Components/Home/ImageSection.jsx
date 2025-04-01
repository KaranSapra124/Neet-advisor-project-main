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

  useEffect(() => {
    const animateInInterval = setInterval(() => {
      setCurrImage((prev) => (prev !== images?.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(animateInInterval);
  }, []);

  useEffect(() => {
    setCopyImages((prev) => {
      if (!prev[currImage]) return prev; // Ensure currImage exists
      console.log(prev[currImage]);
      return prev.map((img, idx) => (idx === 4 ? prev[currImage] : img));
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
    <div className="mx-auto w-full lg:w-1/2">
      <div className="space-y-8">
        <div className="relative">
          <div className="grid grid-cols-3">
            {copyImages?.map((elem, index) => (
              <div
                key={copyImages}
                className={`relative m-0.5 rounded-lg px-2 shadow shadow-black transition-all duration-700 ease-in-out ${
                  index === currImage
                    ? `animate-fadeInTopRight z-[999] bg-white`
                    : "opacity-50"
                }`}
              >
                <TiPin className="absolute -top-2 left-16 text-red-500" />
                <img
                  src={elem?.imageUrl}
                  alt={elem.imageAlt}
                  className="m-2 mx-auto h-full w-full bg-white transition-transform duration-500 ease-in-out lg:h-32 lg:object-cover"
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
