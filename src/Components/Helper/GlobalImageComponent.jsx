import { Carousel } from "antd";
import React, { useEffect, useState } from "react";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);
  //   console.log(image);
  const [isChanged, setIsChanged] = useState(false);
  return (
    <>
      <div className="mx-auto flex justify-center items-center">
        <div className="flex flex-row justify-center items-center mx-auto max-w-screen-2xl">
          <img
            key={mainImage}
            src={image[mainImage].imageUrl}
            className="w-full h-[30.5rem] mx-auto  animate-zoomIn"
            alt=""
            srcset=""
          />
          <Carousel
            dots={false}
            vertical={true}
            afterChange={() =>
              setMainImage((prev) => (prev < image.length - 1 ? prev + 1 : 0))
            }
            className="max-w-screen-sm "
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
                    className="shadow-sm w-40 shadow-black"
                    src={elem.imageUrl}
                    alt={elem}
                  />
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default GlobalImageComponent;
