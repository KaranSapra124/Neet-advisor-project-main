import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { FaPaperPlane } from "react-icons/fa";
const NewsBanner = () => {
  return (
    <div className="h-full bg-gray-200/40">
      <div className="relative mx-auto max-w-screen-xl rounded-lg bg-news-bg bg-cover bg-no-repeat shadow-sm shadow-white">
        <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80"></div>
        <Container className={"relative brightness-110"}>
          <img
            src="call.gif"
            className="absolute -left-5 -top-5 h-10 w-10 rounded-full shadow-md shadow-yellow-600"
            alt=""
            srcset=""
          />

          <h1 className="text-3xl font-extrabold uppercase text-yellow-600">
            Get the desired <br />{" "}
            <span className="text-primary-color brightness-200">
              news at one place
            </span>
          </h1>
          <p className="my-4 text-xs font-semibold uppercase text-gray-300">
            Get All News Updates At Your Device.
          </p>
          <Divider className={"my-4 h-1 w-12 rounded-full bg-yellow-600"} />
          <div className="flex items-center gap-2">
            <input
              type="text"
              min={0}
              autoFocus
              name=""
              id=""
              placeholder="Enter The Number..."
              className="w-96 rounded-md  bg-white/40 p-2 font-extralight text-primary-color"
            />
            <FaPaperPlane className="bg-yellow-600 p-4 rounded-md text-[3rem] cursor-pointer hover:scale-105 transition-all text-white"/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsBanner;
