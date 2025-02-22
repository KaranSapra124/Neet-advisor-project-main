import React, { useState } from "react";
import { Carousel } from "antd";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className="mx-auto w-full lg:p-4 p-1 lg:max-w-screen-lg ">
      <div className="flex flex-col items-center justify-center lg:gap-8 gap-2 lg:flex-row">
        {/* Main Image Container */}
        <div className="flex-1">
          <div className="relative flex w-full justify-center">
            <img
              key={mainImage}
              src={image[mainImage].imageUrl}
              className="lg:h-[30.5rem] h-full w-full  animate-zoomIn rounded-lg object-cover shadow-md shadow-black"
              alt="Main product"
            />
          </div>
        </div>

        {/* Vertical Carousel Container */}
        <div className="lg:w-40 w-96 lg:px-0 px-10">
          <Carousel
            dots={false}
            vertical={window.outerWidth > 800 ? true : false}
            afterChange={() =>
              setMainImage((prev) => (prev < image.length - 1 ? prev + 1 : 0))
            }
            slidesToShow={window.outerWidth > 800 ? 4 : 3}
            autoplaySpeed={3000}
            infinite
            autoplay
            className="lg:h-[30.5rem] px-10"
          >
            {image?.map((elem, index) => (
              <div key={index} className="p-1">
                <img
                  src={elem.imageUrl}
                  className="lg:h-28 w-full cursor-pointer rounded object-cover shadow-md shadow-black"
                  alt={`Product view ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GlobalImageComponent;
