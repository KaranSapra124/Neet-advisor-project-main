import { Carousel } from "antd";
import React, { useState } from "react";

const GlobalImageComponent = ({ image: [] }) => {
  const [mainImage, setMainImage] = useState(0);
  const [isChanged, setIsChanged] = useState(false);
  return (
    <>
      <div className="max-w-screen-sm">
        <div>
          <Carousel slidesToShow={4} infinite autoplay>
            {image?.map((elem, index) => {
              return <img src={elem.imageURL} alt={elem} />;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default GlobalImageComponent;
