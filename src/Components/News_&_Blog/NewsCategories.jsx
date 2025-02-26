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
    <div className="border-b border-t bg-gray-200/30 px-20 py-5">
      <Carousel
        infinite
        nextArrow={<FaArrowRight />}
        prevArrow={<FaArrowLeft />}
        slidesToShow={window.outerWidth > 800 ? 7 : 1}
        // autoplay
        dots={false}
        arrows
        adaptiveHeight
        className="news-carousel"
      >
        {newsCategories?.map((elem, index) => (
          <button className="mb-1 rounded-md border border-primary-color p-0.5 text-sm font-semibold text-gray-900 transition-all hover:scale-x-110 hover:bg-primary-color hover:font-semibold hover:text-white">
            {elem}
          </button>
        ))}
      </Carousel>
    </div>
    // </Container>
  );
};

export default NewsCategories;
