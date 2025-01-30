import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
const NewsBanner = () => {
  return (
  <div className="bg-gray-200/40 h-full">
      <div className="bg-news-bg relative mx-auto  rounded-lg max-w-screen-xl  shadow-sm shadow-white  bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80 "></div>
      <Container className={"relative brightness-110 "}>
      <img src="call.gif" className="absolute h-10  -left-5 -top-5 rounded-full shadow-md shadow-yellow-600 w-10" alt="" srcset="" />

        <h1 className="text-3xl font-extrabold uppercase  text-yellow-600">
          Get the desired <br />{" "}
          <span className="text-primary-color  brightness-200">
            news at one place
          </span>
        </h1>
        <p className="text-xs font-semibold uppercase my-4 text-gray-300">
          Get All News Updates At Your Device.
        </p>
        <Divider className={"my-4 h-1 w-12 rounded-full bg-yellow-600"} />
        <input
          type="text"
          min={0}
          autoFocus
          name=""
          id=""
          placeholder="Enter The Number..."
          className="w-96 border-l-2 border-b-2 rounded-md   border-yellow-600 text-primary-color font-extralight  bg-white/40 p-2 "
        />
      </Container>
    </div>
  </div>
  );
};

export default NewsBanner;
