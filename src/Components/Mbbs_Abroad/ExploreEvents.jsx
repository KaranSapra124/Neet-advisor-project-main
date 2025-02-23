import React from "react";
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const ExploreEvents = () => {
  // const imagesArr = [
  //     'https://neetadvisor.com/assets/images/gallery/country/7.webp',
  //     'https://neetadvisor.com/assets/images/gallery/country/8.webp',
  //     'https://neetadvisor.com/assets/images/gallery/country/9.webp'
  // ];

  // Sample event details (you can replace with real data)
  const events = [
    { date: "15 Jan", title: "NEET Counseling Session", location: "Delhi" },
    { date: "22 Jan", title: "Medical Career Workshop", location: "Mumbai" },
    { date: "29 Jan", title: "Study Abroad Seminar", location: "Bangalore" },
    { date: "29 Jan", title: "Study Abroad Seminar", location: "Bangalore" },
    { date: "29 Jan", title: "Study Abroad Seminar", location: "Bangalore" },
    { date: "29 Jan", title: "Study Abroad Seminar", location: "Bangalore" },
  ];

  return (
    <>
      <Container
        className={"relative bg-mbbs-hero bg-cover bg-fixed bg-no-repeat"}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/80 lg:to-black/70 to-black/50 backdrop-blur-lg"></div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="lg:text-3xl text-lg font-bold text-yellow-600">
              Explore Upcoming{" "}
              <span className="font-extrabold lg:text-3xl text-xl text-primary-color lg:brightness-[200%] ">
                Events
              </span>
            </h2>
            <p className="mx-auto lg:my-4 my-2 lg:text-xs text-[0.5rem] font-semibold lg:max-w-sm text-gray-300">
              Want to know more about{" "}
              <span className="font-bold">NEET Advisor</span> work? Join our
              upcoming events and take the first step towards your medical
              career!
            </p>
            <Divider
              className={"mx-auto lg:my-4 my-2 lg:h-1 h-0.5 w-10 rounded-full bg-yellow-600"}
            />
          </div>

       
          {/* Event Cards */}
          <div className="flex flex-wrap  lg:gap-0 gap-2  justify-start space-y-1 ">
            {events.map((event, index) => (
              <div
                key={index}
                className="lg:m-2 h-full lg:w-72 w-full cursor-pointer rounded-md border-b border-l lg:border-b-2 lg:border-l-2 border-white bg-gradient-to-tr from-black/80 to-black/20 p-2 transition-all duration-300 hover:scale-105"
              >
                <div className="flex  items-start lg:space-x-4 space-x-3 ">
                  {/* <div className="rounded-lg bg-primary-color/10 p-3"> */}
                  <img
                    src="./Mbbs/calendar-bg-removed.gif"
                    className="lg:h-8 lg:w-8 w-6 rounded-full bg-white/80 border border-white shadow-sm shadow-black"
                  />
                  <Divider className="lg:h-8 h-6 w-0.5 bg-white my-auto rounded-full rotate-180" />
                  {/* </div> */}
                  <div className="flex flex-col">
                    <h3 className="lg:text-sm  text-[0.8rem] lg:font-bold font-extrabold text-gray-300">
                      {event.title}
                    </h3>
                    <div className="lg:mt-2 mt-1 flex items-center space-x-2 text-sm font-extralight text-gray-900">
                      <img
                        src="./Mbbs/location-pin-bg-removed.gif"
                        className="h-5 w-5 "
                      />{" "}
                      <span className="text-gray-200 text-xs font-bold">{event.location}</span>
                    </div>
                    <div className="lg:mt-2 mt-1 lg:text-sm text-xs lg:font-semibold font-extrabold text-gray-300">
                      Date: <span className="lg:font-light font-extrabold lg:text-xs text-[0.8rem]">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* CTA Button */}
          <div className="lg:mt-12 mt-4 text-center">
            <button className="lg:text-sm text-xs rounded-lg rounded-l-full rounded-r-full bg-yellow-600 lg:px-3 lg:py-2 px-2 py-1.5 font-extrabold text-white shadow-md transition-all duration-300 hover:bg-yellow-700 hover:bg-opacity-90">
              View All Events
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExploreEvents;
