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
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/80 to-black/70 backdrop-blur-lg"></div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-yellow-600">
              Explore Upcoming{" "}
              <span className="font-extrabold text-primary-color brightness-200">
                Events
              </span>
            </h2>
            <p className="mx-auto my-2 text-xs font-semibold text-gray-200">
              Want to know more about{" "}
              <span className="font-bold">NEET Advisor</span> work? Join our
              upcoming events and take the first step towards your medical
              career!
            </p>
            <Divider
              className={"mx-auto my-4 h-1 w-10 rounded-full bg-yellow-600"}
            />
          </div>

          {/* Main Content */}
          {/* <div className="mx-auto "> */}
          {/* Event Cards */}
          <div className="flex flex-wrap justify-start space-y-1">
            {events.map((event, index) => (
              <div
                key={index}
                className="m-2 h-full w-72 cursor-pointer rounded-md border-b-2 border-l-2 border-white bg-gradient-to-tr from-black/80 to-black/20 p-2 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  {/* <div className="rounded-lg bg-primary-color/10 p-3"> */}
                  <img
                    src="./Mbbs/calendar-bg-removed.gif"
                    className="h-8 w-8 rounded-full border border-white shadow-sm shadow-black"
                  />
                  {/* </div> */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-200">
                      {event.title}
                    </h3>
                    <div className="mt-2 flex items-center space-x-2 text-sm font-extralight text-gray-900">
                      <img
                        src="./Mbbs/location-pin-bg-removed.gif"
                        className="h-5 w-5"
                      />{" "}
                      <span className="text-gray-200">{event.location}</span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-gray-300">
                      Date: <span className="font-light">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* </div> */}

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="rounded-lg rounded-l-full rounded-r-full bg-yellow-600 px-3 py-2 font-extrabold text-white shadow-md transition-all duration-300 hover:bg-yellow-700 hover:bg-opacity-90">
              View All Events
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExploreEvents;
