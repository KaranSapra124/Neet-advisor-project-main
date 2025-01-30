import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
const NewsBanner = () => {
  return (
    <div className="bg-news-bg relative mx-auto my-10 max-w-screen-xl shadow-md shadow-primary-color/40 rounded-lg bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full rounded-lg  "></div>
      <Container className={"relative brightness-110"}>
        <h1 className="text-3xl font-extrabold uppercase leading-relaxed text-yellow-600">
          Get the desired <br />{" "}
          <span className="text-primary-color brightness-125">
            news at one place
          </span>
        </h1>
        <p className="text-xs font-semibold uppercase leading-relaxed text-gray-700">
          Get All News Updates At One Place.
        </p>
        <Divider className={"my-4 h-1 w-12 rounded-full bg-yellow-600"} />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter The Category..."
          className="w-96 border-l-2 border-b-2 rounded-md  border-yellow-600 text-primary-color font-extralight  bg-white/40 p-2 "
        />
      </Container>
    </div>
  );
};

export default NewsBanner;
