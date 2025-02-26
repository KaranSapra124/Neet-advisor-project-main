import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Carousel } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    // <Container className={"bg-gray-200/10 p-0 border-t "}>
    <div className="border-t bg-gray-200/10 px-20 py-5">
      <Carousel
        infinite
        nextArrow={<FaArrowRight />}
        prevArrow={<FaArrowLeft />}
        slidesToShow={window.outerWidth > 800 ? 8 : 1}
        // autoplay
        dots={false}
        arrows
        adaptiveHeight
      >
        {newsCategories?.map((elem, index) => (
          <button className="hover:text-md text-sm font-light text-gray-900 transition-all hover:font-semibold">
            {elem}
          </button>
        ))}
      </Carousel>
    </div>
    // </Container>
  );
};

export default NewsCategories;
