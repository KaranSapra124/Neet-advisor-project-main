import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import {  FaDownload } from "react-icons/fa";
import Divider from "../Helper/Divider";
// import { Carousel } from "antd";
const Hero = () => {
  const { event, date, editor, title, registration_link, categories } =
    newsData;
  return (
    <>
      <Container className={"bg-gray-200/10"}>
        <div className="flex justify-between rounded border-l-2 border-yellow-600 px-2">
          <div className="">
            <img
              src="https://cdn-icons-gif.flaticon.com/15747/15747337.gif"
              className="w-9"
              alt=""
              srcset=""
            />
            <h1 className="text-2xl font-bold text-primary-color">{title}</h1>
            <Divider className={"lg:h-1 w-12 rounded-full bg-yellow-600 my-2 h-0.5 "}/>
            <p className="my-2 flex font-extralight text-black">
              Edited By :{" "}
              <p className="mx-1 flex items-center font-bold text-primary-color">
                {editor} <Divider className={"h-0.5 w-4 bg-yellow-600 rounded-full rotate-90"}/> {date}
              </p>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <button className="flex items-center rounded bg-yellow-600 px-2 py-1 text-sm font-semibold text-white">
              <FaDownload className="mx-2 text-white" />
              Download PDF
            </button>
            <div className="rounded bg-white py-1.5 px-2 border-l-2 border-b-2 border-yellow-600 relative">

            <img className="w-7 -top-4 -left-4 shadow shadow-yellow-600 rounded-full absolute" src={event?.status ? 'https://cdn-icons-gif.flaticon.com/12761/12761189.gif':'https://cdn-icons-gif.flaticon.com/12146/12146036.gif'} alt="" srcset="" />
              <p className="py-1.5  text-sm font-semibold text-gray-700">
                {event?.eventName}
              </p>
            </div>
          </div>
        </div>
       
      </Container>
    </>
  );
};

export default Hero;
