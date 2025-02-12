import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Carousel, Tabs, Statistic } from "antd";
const { Countdown } = Statistic;
import { FaCalendar, FaClock } from "react-icons/fa";
import Divider from "../Helper/Divider";

const UpcomingWebinars = () => {
  const [ind, setInd] = useState(0);
  const [hoverStates, setHoverStates] = useState(Array(5).fill(false)); // Initialize hover states for 5 webinars
  const deadline = Date.now() + 10 * 10 * 6000;
  const webinars = [
    {
      title: "Digital Marketing Trends 2023",
      thumbnail: "https://picsum.photos/200/150?random=1",
      book_date: "2023-12-31",
      book_time: "10:00 AM",
      description:
        "Join us for an insightful webinar on the latest trends in digital marketing.",
      price: 49.99,
      free_status: false,
    },
    {
      title: "Introduction to Python Programming",
      thumbnail: "https://picsum.photos/200/150?random=2",
      book_date: "2023-11-20",
      book_time: "2:00 PM",
      description:
        "Learn the fundamentals of Python programming in this beginner-friendly session.",
      price: 0.0,
      free_status: true,
    },
    {
      title: "Advanced Data Analytics Techniques",
      thumbnail: "https://picsum.photos/200/150?random=3",
      book_date: "2023-11-25",
      book_time: "1:00 PM",
      description:
        "Explore advanced data analytics techniques to boost your business insights.",
      price: 79.99,
      free_status: false,
    },
    {
      title: "Effective Remote Team Management",
      thumbnail: "https://picsum.photos/200/150?random=4",
      book_date: "2023-12-01",
      book_time: "3:00 PM",
      description: "A comprehensive guide to effective remote team management.",
      price: 29.99,
      free_status: false,
    },
    {
      title: "Mindfulness and Stress Management",
      thumbnail: "https://picsum.photos/200/150?random=5",
      book_date: "2023-12-05",
      book_time: "11:00 AM",
      description:
        "Free webinar on mindfulness and stress management techniques.",
      price: 0.0,
      free_status: true,
    },
  ];

  const items = [
    {
      key: "1",
      label: "UG",
      children: (
        <div>
          <Carousel
            dots={false}
            draggable={true}
            slidesToShow={4}
            autoplaySpeed={2000}
            autoplay
          >
            {webinars.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={`relative my-2 flex w-fit transform cursor-pointer flex-row overflow-hidden rounded-xl border-b-2 border-l-2 border-yellow-600 bg-gradient-to-br from-white to-gray-500/10 shadow-lg hover:shadow-xl ${ind === index ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out`}
                >
                  {/* <div className="flex flex-row"> */}
                  <div className="group relative">
                    <img
                      className="h-full w-full transform rounded-xl object-cover p-1 transition-transform duration-300 group-hover:scale-105"
                      src={elem.thumbnail}
                      alt={elem.title}
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="w-fit px-2 py-1 pt-0">
                    <h1 className="my-4  text-sm font-bold text-primary-color">
                      {elem.title}
                    </h1>
                    <Divider
                      className={
                        " my-4 h-0.5  w-20 rounded-full bg-yellow-600"
                      }
                    />
                    <p className="min-h-10 w-64 text-xs my-3 font-semibold text-gray-700">
                      {elem.description}
                    </p>

                    <div className="mt-2 flex items-center space-x-2">
                      <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                        <img
                          src="./Webinar/calendar-bg-removed.gif"
                          className="h-6 w-6"
                          alt=""
                          srcset=""
                        />
                        <span className="text-xs font-medium text-gray-700">
                          {elem.book_date}
                        </span>
                      </div>

                      <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                        <img
                          src="./Webinar/stopwatch-bgremoved.gif"
                          className="h-6 w-6"
                          alt=""
                          srcset=""
                        />
                        <span className="text-xs font-medium text-gray-700">
                          {elem.book_time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button
                        onMouseEnter={() => {
                          setHoverStates((prev) => {
                            const newStates = [...prev];
                            newStates[index] = true; // Set the current index to true
                            return newStates;
                          });
                        }}
                        onMouseLeave={() => {
                          setHoverStates((prev) => {
                            const newStates = [...prev];
                            newStates[index] = false; // Set the current index to false
                            return newStates;
                          });
                        }}
                        className="mt-3 w-1/2 transform rounded-lg bg-yellow-600 py-1 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                      >
                        {hoverStates[index] ? (
                          <>
                            <span
                              className={`text-xs ${elem.free_status ? "line-through" : ""}`}
                            >
                              {elem.free_status
                                ? "Free"
                                : `$${elem.price.toFixed(2)}`}
                            </span>
                          </>
                        ) : (
                          <span className="text-xs">Book Now</span>
                        )}
                      </button>
                      <img
                        className="h-10 w-10 pt-4"
                        src="./Webinar/left-arrow-bg.gif"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              );
            })}
          </Carousel>
        </div>
      ),
    },
    {
      key: "2",
      label: "PG",
      children: (
        <div>
          <Carousel
            dots={false}
            draggable={true}
            slidesToShow={4}
            autoplaySpeed={2000}
            autoplay
          >
            {webinars.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={`relative my-2 flex w-fit transform cursor-pointer flex-row overflow-hidden rounded-xl border border-gray-300 bg-gradient-to-br from-white to-gray-500/10 shadow-lg hover:shadow-xl ${ind === index ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out`}
                >
                  {/* <div className="flex flex-row"> */}
                  <div className="group relative">
                    <img
                      className="h-full w-full transform rounded-xl object-cover p-1 transition-transform duration-300 group-hover:scale-105"
                      src={elem.thumbnail}
                      alt={elem.title}
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="w-fit px-2 py-1 pt-0">
                    <h1 className="my-2 min-h-9 text-sm font-bold text-primary-color">
                      {elem.title}
                    </h1>

                    <p className="mt-2 min-h-12 w-64 text-xs font-semibold text-gray-700">
                      {elem.description}
                    </p>

                    <div className="mt-2 flex items-center space-x-2">
                      <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                        <FaCalendar className="mr-2 text-xs text-yellow-600" />
                        <span className="text-xs font-medium text-gray-700">
                          {elem.book_date}
                        </span>
                      </div>

                      <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                        <FaClock className="mr-2 text-yellow-600" />
                        <span className="text-xs font-medium text-gray-700">
                          {elem.book_time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button
                        onMouseEnter={() => {
                          setHoverStates((prev) => {
                            const newStates = [...prev];
                            newStates[index] = true; // Set the current index to true
                            return newStates;
                          });
                        }}
                        onMouseLeave={() => {
                          setHoverStates((prev) => {
                            const newStates = [...prev];
                            newStates[index] = false; // Set the current index to false
                            return newStates;
                          });
                        }}
                        className="mt-3 w-1/2 transform rounded-lg bg-yellow-600 py-1 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                      >
                        {hoverStates[index] ? (
                          <>
                            <span
                              className={`text-xs ${elem.free_status ? "line-through" : ""}`}
                            >
                              {elem.free_status
                                ? "Free"
                                : `$${elem.price.toFixed(2)}`}
                            </span>
                          </>
                        ) : (
                          <span className="text-xs">Book Now</span>
                        )}
                      </button>
                      <img
                        className="h-10 w-10 pt-4"
                        src="./Webinar/left-arrow-bg.gif"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              );
            })}
          </Carousel>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const webinarInterval = setInterval(() => {
      setInd((prevSelected) => {
        const newIndex = Math.floor(Math.random() * webinars.length);
        // Avoid setting the same index
        return prevSelected === newIndex ? prevSelected : newIndex;
      });
    }, 1200);
    return () => clearInterval(webinarInterval);
  }, []);

  return (
    <Container className={"bg-gray-200/40"}>
      <div className="pb-2 text-center">
        <h1 className="pb-2 text-3xl font-extrabold text-primary-color">
          <span className="font-bold text-yellow-600">Upcoming</span> Webinars
        </h1>
        <p className="text-xs font-bold text-gray-700">
          Mark your calendars for Neet Advisor's upcoming <strong>NEET</strong>{" "}
          Counselling webinars.
        </p>
        <Divider
          className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
        />
      </div>
      <div>
        <Tabs
          tabPosition="left"
          animated={true}
          defaultActiveKey="1"
          items={items}
          // onChange={(key) => console.log(key)}
          className="antTabs text-primary-color"
          color="#201169"
        />
      </div>
    </Container>
  );
};

export default UpcomingWebinars;
