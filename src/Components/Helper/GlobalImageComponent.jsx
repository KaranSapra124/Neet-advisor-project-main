import React, { useState } from "react";
import { Carousel } from "antd";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <div className="flex flex-row items-center justify-center gap-8">
        {/* Main Image Container */}
        <div className="flex-1">
          <div className="relative w-full flex justify-center">
            <img
              key={mainImage}
              src={image[mainImage].imageUrl}
              className="h-[30.5rem] shadow-md shadow-black w-full object-cover rounded-lg animate-zoomIn"
              alt="Main product"
            />
          </div>
        </div>

        {/* Vertical Carousel Container */}
        <div className="w-40">
          <Carousel
            dots={false}
            vertical
            afterChange={() =>
              setMainImage((prev) => (prev < image.length - 1 ? prev + 1 : 0))
            }
            slidesToShow={4}
            autoplaySpeed={3000}
            infinite
            autoplay
            className="h-[30.5rem]"
          >
            {image?.map((elem, index) => (
              <div key={index} className="p-1">
                <img
                  src={elem.imageUrl}
                  className="w-full h-28 object-cover rounded shadow-md shadow-black cursor-pointer"
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