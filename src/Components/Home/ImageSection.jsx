import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import { TiPin } from "react-icons/ti";
import ScrollAnimation from "react-animate-on-scroll";

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
    }, 3000);
    const triggerAnimation = setInterval(() => {
      setIsAnimate((prev) => !prev);
    }, 3000);

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
    <>
      <ScrollAnimation animateIn="fadeIn" duration={1.2} animateOnce={true}>
        <div key={isAnimate} className="mx-auto w-full">
          <div className="space-y-8">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {copyImages?.map((elem, index) => (
                  <div
                    className={`relative m-1 p-2 pb-5 shadow-lg transition-transform duration-500 ${
                      index !== 4
                        ? "scale-90 rounded-sm  bg-white opacity-40 shadow-xl shadow-yellow-600"
                        : "z-[9999] scale-125 rounded-sm  bg-white opacity-100 shadow-lg shadow-yellow-600"
                    } ${
                      index === 0
                        ? "animate-slideDown h-52"
                        : index === 1
                          ? "h-40 animate-slideOutLeft"
                          : index === 2
                            ? "h-52 animate-slideOutLeft"
                            : index === 3
                              ? "animate-slideDown h-64"
                              : index === 5
                                ? "animate-slideOutUp h-52"
                                : index === 6
                                  ? "animate-slideOutRight h-64"
                                  : index === 7
                                    ? "animate-slideOutRight h-52"
                                    : index === 8
                                      ? "animate-slideOutUp h-64"
                                      : ""
                    }`}
                  >
                    {/* Red Pin Image */}
                    <img
                      src="https://png.pngtree.com/png-clipart/20230217/ourmid/pngtree-paper-red-pin-transparent-vector-png-image_6605001.png"
                      className="absolute -top-3 left-1/2 h-8 w-8 -translate-x-1/2 transform"
                    />

                    {/* Main Image */}
                    <img
                      key={currImage}
                      src={elem?.imageUrl}
                      alt={elem.imageAlt}
                      className="m-2 mx-auto h-80 w-80 rounded-lg bg-white transition-transform duration-500 ease-in-out lg:h-full lg:object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default ImageSection;
