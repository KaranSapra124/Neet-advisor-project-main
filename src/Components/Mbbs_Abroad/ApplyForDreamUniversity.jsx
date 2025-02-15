import React from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import Divider from "../Helper/Divider";
const ApplyForDreamUniversity = () => {
  const universities = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIKkCC_hPP54YE4ckBhp1tLUHA9UxjXnFIw&s",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9CHrWVSlfLaZdv1Z8gHBwiAx-YiYMdSOKA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRI1VmXFwBGt96AW8K1OyXIgNoMuzjnZeQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLe9XasaFDlE6FB5xI-Csx8yKiBbLvI2L7g&s',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIKkCC_hPP54YE4ckBhp1tLUHA9UxjXnFIw&s",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9CHrWVSlfLaZdv1Z8gHBwiAx-YiYMdSOKA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRI1VmXFwBGt96AW8K1OyXIgNoMuzjnZeQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLe9XasaFDlE6FB5xI-Csx8yKiBbLvI2L7g&s',
    
  ]
  return (
    <>
      <Container
        className={"bg-mbbs-hero relative bg-cover bg-fixed bg-no-repeat"}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/80 to-black/70 backdrop-blur-lg"></div>

        <div className="relative">
          <h1 className="text-center text-3xl font-bold text-yellow-600">
            Get University Of{" "}
            <span className="font-extrabold text-primary-color brightness-200">Your Dream</span>{" "}
          </h1>
          <p className="my-4 text-center text-xs font-semibold text-gray-200">
            Want to get admission at your dream university , your wish is
            granted!
          </p>
          <Divider className={"h-1 w-12 my-4 mx-auto bg-yellow-600 rounded-full"}/>
          <Carousel autoplay autoplaySpeed={2000} dots={false} arrows infinite  slidesToShow={5} className="my-4">
            {universities?.map((elem, index) => {
              return (
                <>
                  <img className="mx-auto outline outline-yellow-600 p-1  w-32 h-32 rounded-full my-4" src={elem} />
                </>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default ApplyForDreamUniversity;
