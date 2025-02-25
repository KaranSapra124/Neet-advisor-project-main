import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import { FaDownload } from "react-icons/fa";
import { Carousel } from "antd";
const Hero = () => {
  const { event, date, editor, title, registration_link, categories } =
    newsData;
  return (
    <>
      <Container className={"bg-gray-900"}>
        <div>
          <div>
            <h1>{title}</h1>
            <p>
              Edited By: {editor} | {date}
            </p>
          </div>
          <div>
            <button>
              <FaDownload /> PDF
            </button>
            <div>
              <div>{event?.status ? "Ongoing Event" : "Expired"}</div>
              <p>{event?.eventName}</p>
            </div>
          </div>
        </div>
        <Carousel adaptiveHeight>
          {categories?.map((elem, index) => (
            <button>{elem}</button>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Hero;
