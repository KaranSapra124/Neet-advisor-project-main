import { Carousel } from "antd";
import React, { useEffect, useState } from "react";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);
  //   console.log(image);
  const [isChanged, setIsChanged] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-auto flex items-center max-w-screen-sm justify-center">
          <img
            key={mainImage}
            src={image[mainImage].imageUrl}
            className="h-[30.5rem] w-full animate-zoomIn"
            alt=""
            srcset=""
          />
          <div className="mx-auto">
            <Carousel
              dots={false}
              vertical={true}
              afterChange={() =>
                setMainImage((prev) => (prev < image.length - 1 ? prev + 1 : 0))
              }
              className="max-w-screen-sm mx-auto"
              slidesToShow={4}
              autoplaySpeed={3000}
              infinite
              autoplay
            >
              {image?.map((elem, index) => {
                return (
                  <>
                    {/* <div key={index} className="absolute w-full h-full bg-black/10 z-[999]"></div> */}
                    <img
                      key={index}
                      className="w-40 shadow-sm shadow-black"
                      src={elem.imageUrl}
                      alt={elem}
                    />
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default GlobalImageComponent;
