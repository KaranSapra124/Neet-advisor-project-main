import { Carousel } from "antd";
import React, { useEffect, useState } from "react";

const GlobalImageComponent = ({ image }) => {
  const [mainImage, setMainImage] = useState(0);
  //   console.log(image);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => console.log(mainImage), [mainImage]);
  return (
    <>
      <div className="max-w-screen-md mx-auto">
        <div>
          <img
            key={mainImage}
            src={image[mainImage].imageUrl}
            className="animate-zoomIn  relative  max-w-2xl mx-auto "
            alt=""
            srcset=""
          />
          <Carousel
            dots={false}
            afterChange={() =>
              setMainImage((prev) => (prev < image.length - 1 ? prev + 1 : 0))
            }
            className="absolute max-w-screen-sm -top-14 left-40"
            slidesToShow={5}
            
            autoplaySpeed={5000}

            infinite
            autoplay
          >
            {image?.map((elem, index) => {
              return <img className="shadow-sm   shadow-white" src={elem.imageUrl} alt={elem} />;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default GlobalImageComponent;
