import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const NewsCategories = () => {
  const newsCategories = [
    "Counselling Schedule",
    "Eligibility Criteria",
    "Reservation Policies",
    "Seat Matrix",
    "Document Verification",
    "Cut-off Trends",
    "FAQs and Helpdesk",
  ];
  return (
    <Container className={"bg-gray-200/40 py-2"}>
      <h1 className="border-l-2 border-yellow-600 px-2  text-sm lg:text-3xl font-semibold uppercase text-primary-color">
        Choose{" "}
        <span className="font-extrabold text-yellow-600">
          Your interest!
        </span>
      </h1>
      <Divider className={"lg:w-20 w-12 rounded-full lg:my-3 my-2 lg:h-1 h-0.5 bg-yellow-600"} />
      <div className="my-2.5 lg:my-5 flex lg:flex-row flex-col   lg:gap-0 gap-2 justify-between">
        {newsCategories?.map((elem, index) => {
          return (
            <>
              <div className=" lg:text-sm w-fit  text-[0.8rem] focus:outline-none  cursor-pointer  rounded-md border-l-2 border-b-2 border-yellow-600  px-2 py-1 font-bold text-gray-900 shadow-sm shadow-gray-400 transition-all duration-200 hover:scale-105">
                {elem}
              </div>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default NewsCategories;
