import { Carousel } from "antd";
import React, { useState } from "react";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);
  console.log(image);
  const [isChanged, setIsChanged] = useState(false);

  return (
    <>
      <div className="max-w-screen-sm">
        <div>
          <Carousel
            dots={false}
            afterChange={() => setMainImage((prev) => prev + 1)}
            slidesToShow={4}
            infinite
            autoplay
          >
            {image?.map((elem, index) => {
              return <img src={elem.imageUrl} alt={elem} />;
            })}
          </Carousel>
          <img key={mainImage} src={image[mainImage].imageUrl} className="scale-105" alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default GlobalImageComponent;
