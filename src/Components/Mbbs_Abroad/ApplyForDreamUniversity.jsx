import React from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import Divider from "../Helper/Divider";
const ApplyForDreamUniversity = () => {
  const universities = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIKkCC_hPP54YE4ckBhp1tLUHA9UxjXnFIw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9CHrWVSlfLaZdv1Z8gHBwiAx-YiYMdSOKA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRI1VmXFwBGt96AW8K1OyXIgNoMuzjnZeQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLe9XasaFDlE6FB5xI-Csx8yKiBbLvI2L7g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIKkCC_hPP54YE4ckBhp1tLUHA9UxjXnFIw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9CHrWVSlfLaZdv1Z8gHBwiAx-YiYMdSOKA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRI1VmXFwBGt96AW8K1OyXIgNoMuzjnZeQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLe9XasaFDlE6FB5xI-Csx8yKiBbLvI2L7g&s",
  ];
  return (
    <>
      <Container
        className={"relative bg-mbbs-hero bg-cover bg-fixed bg-no-repeat"}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/80 to-black/50 backdrop-blur-lg lg:to-black/70"></div>

        <div className="relative">
          <h1 className="text-center text-lg font-bold text-yellow-600 lg:text-3xl">
            Get University Of{" "}
            <span className="text-xl font-extrabold text-primary-color lg:text-3xl lg:brightness-200">
              Your Dream
            </span>{" "}
          </h1>
          <p className="my-2 text-center text-[0.5rem] font-semibold text-gray-200 lg:my-4 lg:text-xs">
            Want to get admission at your dream university , your wish is
            granted!
          </p>
          <Divider
            className={
              "mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:h-1"
            }
          />
          <Carousel
            autoplay
            autoplaySpeed={2000}
            dots={false}
            arrows
            infinite
            slidesToShow={window.outerWidth > 800 ? 5 : 1}
            className="my-4"
          >
            {universities?.map((elem, index) => {
              return (
                <>
                  <img
                    className="mx-auto lg:my-4 my-2 lg:h-32 lg:w-32 h-24 w-24 rounded-full p-1 outline outline-yellow-600"
                    src={elem}
                  />
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
