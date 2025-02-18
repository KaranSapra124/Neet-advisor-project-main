import { Carousel } from "antd";
import React, { useEffect, useState } from "react";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);
  //   console.log(image);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => console.log(mainImage), [mainImage]);
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div>
          <img
            key={mainImage}
            src={image[mainImage].imageUrl}
            className="animate-zoomIn relative"
            alt=""
            srcset=""

          />
          <Carousel
            dots={false}
            afterChange={() =>
              setMainImage((prev) => (prev < image.length - 1 ? prev + 1 : 0))
            }
            className="absolute -top-52 left-10"
            slidesToShow={4}
            autoplaySpeed={3000}

            infinite
            autoplay
          >
            {image?.map((elem, index) => {
              return <img src={elem.imageUrl} alt={elem} />;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default GlobalImageComponent;
