import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
const BookSpot = () => {
  return (
    <>
      <Container className={"bg-gradient-to-tr from-black to-black/85"}>
        <div className="mx-auto flex max-w-screen-lg flex-col justify-between rounded-md border border-gray-200 bg-black/20 p-4 lg:flex-row">
          <div className="p-2">
            <h1 className="text-sm font-bold text-white lg:text-xl">
              Book your slot now!
            </h1>
            <Divider
              className={"my-2 h-0.5 w-6 rounded-full bg-yellow-600 lg:w-12"}
            />
            <p className="text-[0.5rem] font-semibold text-gray-200 lg:max-w-lg lg:text-xs">
              {" "}
              Attend the Medical Mentor’s Expo, join the movement for medical
              education excellence, and shape your medical career
            </p>
          </div>
          <button className="my-auto h-fit w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-semibold text-white transition-all hover:bg-yellow-700 lg:px-4 lg:py-2 lg:text-sm">
            Book Free Slot
          </button>
        </div>
      </Container>
    </>
  );
};

export default BookSpot;
