import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { FaPaperPlane } from "react-icons/fa";
const NewsBanner = () => {
  return (
    <div className="h-full bg-gray-200/40">
      <div className="relative mx-auto lg:max-w-screen-xl max-w-80 rounded-lg bg-news-bg bg-cover bg-no-repeat shadow-sm shadow-white">
        <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80"></div>
        <Container className={"relative   brightness-110"}>
          <img
            src="call.gif"
            className="absolute lg:-left-5 lg:-top-5 -top-4 -left-3 lg:h-10 lg:w-10 w-7 rounded-full shadow-md shadow-yellow-600"
            alt=""
            srcset=""
          />

          <h1 className="lg:text-3xl text-xs font-extrabold uppercase text-yellow-600">
            Get the desired <br className="lg:block hidden"/>{" "}
            <span className="text-primary-color lg:brightness-200 brightness-[300%]">
              news at one place
            </span>
          </h1>
          <p className="lg:my-4 my-2 lg:text-xs text-[0.5rem] font-semibold uppercase text-gray-300">
            Get All News Updates At Your Device.
          </p>
          <Divider className={"lg:my-4 my-2 lg:h-1 h-0.5 w-12 rounded-full bg-yellow-600"} />
          <div className="flex items-center gap-2">
            <input
              type="text"
              min={0}
              autoFocus
              name=""
              id=""
              placeholder="Enter The Number..."
              className="lg:w-96 w-full lg:text-sm text-xs rounded-md  bg-white/40 p-2 font-extralight text-primary-color"
            />
            <FaPaperPlane className="bg-yellow-600 lg:p-4 p-2 rounded-md text-[2rem] lg:text-[3rem] cursor-pointer hover:scale-105 transition-all text-white"/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsBanner;
