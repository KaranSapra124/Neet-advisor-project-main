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
      <h1 className="border-l-2 border-yellow-600 px-2 text-3xl font-semibold uppercase text-primary-color">
        Choose{" "}
        <span className="font-extrabold text-yellow-600">
          Your interest!
        </span>
      </h1>
      <Divider className={"w-20 rounded-full my-3 h-1 bg-yellow-600"} />
      <div className="my-5 flex justify-between">
        {newsCategories?.map((elem, index) => {
          return (
            <>
              <div className="w-fit focus:outline-none  cursor-pointer  rounded-md border-l-2 border-b-2 border-yellow-600  px-2 py-1 font-bold text-gray-900 shadow-sm shadow-gray-400 transition-all duration-200 hover:scale-105">
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
