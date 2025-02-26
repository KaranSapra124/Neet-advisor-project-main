import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { Carousel } from "antd";
const Hero = () => {
  const { event, date, editor, title, registration_link, categories } =
    newsData;
  return (
    <>
      <Container className={"bg-gray-200/10"}>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            <p className="my-2 flex font-extralight text-black">
              Edited By :{" "}
              <p className="mx-1 font-semibold text-gray-900/90">
                {editor} | {date}
              </p>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="flex items-center rounded bg-yellow-600 px-2 py-1 text-sm font-semibold text-white">
              <FaDownload className="mx-2 text-white" />
              Download PDF
            </button>
            <div className="rounded bg-white p-1 shadow-sm shadow-black">
              <div className="w-fit rounded-full bg-yellow-600 px-2 py-1 text-xs font-semibold text-white">
                {event?.status ? "Ongoing Event" : "Expired"}
              </div>
              <p className="py-1 text-sm font-semibold text-gray-700">
                {event?.eventName}
              </p>
            </div>
          </div>
        </div>
        <Carousel
          infinite
          className="my-8"
          nextArrow={<FaArrowRight />}
          prevArrow={<FaArrowLeft />}
          slidesToShow={window.outerWidth > 800 ? 5 : 1}
          autoplay
          dots={false}
          arrows
          adaptiveHeight
        >
          {categories?.map((elem, index) => (
            <button className="hover:text-md hover:font-semibold text-sm font-light text-gray-900 transition-all">
              {elem}
            </button>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Hero;
