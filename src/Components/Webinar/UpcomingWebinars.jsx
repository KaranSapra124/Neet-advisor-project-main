import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Carousel, Tabs, Statistic } from "antd";
const { Countdown } = Statistic;
import { FaCalendar, FaClock } from "react-icons/fa";
import Divider from "../Helper/Divider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchWebinars = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/get-webinars`,
    );
    const { data } = res;
    console.log(data);
    return data?.allWebinars;
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
const UpcomingWebinars = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchWebinars,
    queryKey: ["allWebinars"],
  });
  // console.log(data, "DATA");
  const [ind, setInd] = useState(0);
  const [currWidth, setCurrWidth] = useState(0);
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

  const changeSlides = () => {
    if (currWidth > 900) {
      return 4;
    } else if (currWidth < 900 && currWidth > 800) {
      return 3;
    } else {
      return 1;
    }
  };

  const items = [
    {
      key: "1",
      label: "UG",
      children: (
        <>
          {data?.length > 0 &&
          data?.filter((elem) => elem?.webinarType === "UG").length > 0 ? (
            <div>
              <Carousel
                dots={false}
                draggable={true}
                slidesToShow={changeSlides()}
                autoplaySpeed={2000}
                autoplay
              >
                {data?.length > 0 &&
                  data
                    ?.filter((elem) => elem?.webinarType === "UG")
                    ?.map((elem, index) => {
                      return (
                        <div
                          key={index}
                          className={`relative my-2 flex w-fit transform cursor-pointer flex-row overflow-hidden rounded-xl border-b-2 border-l-2 border-yellow-600 bg-gradient-to-br from-white to-gray-500/10 shadow-lg hover:shadow-xl ${ind === index ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out`}
                        >
                          {/* <div className="flex flex-row"> */}
                          <div className="group relative">
                            <img
                              className="h-full w-full transform rounded-xl object-cover p-1 transition-transform duration-300 group-hover:scale-105"
                              src={`${import.meta.env.VITE_BACKEND_URL}uploads/${elem.thumbnail}`}
                              alt={elem.title}
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>

                          <div className="w-fit px-2 py-1 pt-0">
                            <h1 className="my-2 text-[0.8rem] font-extrabold text-primary-color lg:my-4 lg:text-sm lg:font-bold">
                              {elem.title}
                            </h1>
                            <Divider
                              className={
                                "my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:w-20"
                              }
                            />
                            <p className="my-3 min-h-10 text-[0.6rem] font-semibold text-gray-800 lg:w-64 lg:text-xs">
                              {elem.description}
                            </p>

                            <div className="mt-2 flex items-center space-x-2">
                              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                                <img
                                  src="./Webinar/calendar-bg-removed.gif"
                                  className="w-5 lg:h-6 lg:w-6"
                                  alt=""
                                  srcset=""
                                />
                                <span className="text-[0.6rem] font-medium text-gray-800 lg:text-xs">
                                  {elem.date}
                                </span>
                              </div>

                              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                                <img
                                  src="./Webinar/stopwatch-bgremoved.gif"
                                  className="w-5 lg:h-6 lg:w-6"
                                  alt=""
                                  srcset=""
                                />
                                <span className="text-[0.6rem] font-medium text-gray-800 lg:text-xs">
                                  {elem.time}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              {/* <button
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
                            className="mt-4 w-1/2 transform rounded-lg bg-yellow-600 py-1 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 lg:mt-3"
                          >
                            {hoverStates[index] ? (
                              <>
                                <span
                                  className={`text-[0.6rem] lg:text-xs ${elem.free_status ? "line-through" : ""}`}
                                >
                                  {elem.free_status
                                    ? "Free"
                                    : `$${elem.price.toFixed(2)}`}
                                </span>
                              </>
                            ) : (
                              <span className="text-[0.6rem] lg:text-xs">
                                Book Now
                              </span>
                            )}
                          </button> */}
                              <button
                                onClick={() => {
                                  if (elem?.URL)
                                    window.open(elem?.URL, "__blank");
                                }}
                                className="mt-4 w-1/2 transform rounded-lg bg-yellow-600 py-1 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 lg:mt-3"
                              >
                                Book Now
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
          ) : (
            <h1 className="text-center text-primary-color text-xs font-bold lg:text-2xl">
              No Webinars scheduled!
            </h1>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: "PG",
      children: (
        <>
          {data?.length > 0 &&
          data?.filter((elem) => elem?.webinarType === "PG").length > 0 ? (
            <div>
              <Carousel
                dots={false}
                draggable={true}
                slidesToShow={changeSlides()}
                autoplaySpeed={2000}
                autoplay
              >
                {data?.length > 0 &&
                  data
                    ?.filter((elem) => elem?.webinarType === "PG")
                    ?.map((elem, index) => {
                      return (
                        <div
                          key={index}
                          className={`relative my-2 flex w-fit transform cursor-pointer flex-row overflow-hidden rounded-xl border-b-2 border-l-2 border-yellow-600 bg-gradient-to-br from-white to-gray-500/10 shadow-lg hover:shadow-xl ${ind === index ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out`}
                        >
                          {/* <div className="flex flex-row"> */}
                          <div className="group relative">
                            <img
                              className="h-full w-full transform rounded-xl object-cover p-1 transition-transform duration-300 group-hover:scale-105"
                              src={`${import.meta.env.VITE_BACKEND_URL}uploads/${elem.thumbnail}`}
                              alt={elem.title}
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>

                          <div className="w-fit px-2 py-1 pt-0">
                            <h1 className="my-2 text-[0.8rem] font-extrabold text-primary-color lg:my-4 lg:text-sm lg:font-bold">
                              {elem.title}
                            </h1>
                            <Divider
                              className={
                                "my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:w-20"
                              }
                            />
                            <p className="my-3 min-h-10 text-[0.6rem] font-semibold text-gray-800 lg:w-64 lg:text-xs">
                              {elem.description}
                            </p>

                            <div className="mt-2 flex items-center space-x-2">
                              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                                <img
                                  src="./Webinar/calendar-bg-removed.gif"
                                  className="w-5 lg:h-6 lg:w-6"
                                  alt=""
                                  srcset=""
                                />
                                <span className="text-[0.6rem] font-medium text-gray-800 lg:text-xs">
                                  {elem.date}
                                </span>
                              </div>

                              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
                                <img
                                  src="./Webinar/stopwatch-bgremoved.gif"
                                  className="w-5 lg:h-6 lg:w-6"
                                  alt=""
                                  srcset=""
                                />
                                <span className="text-[0.6rem] font-medium text-gray-800 lg:text-xs">
                                  {elem.time}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              {/* <button
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
                            className="mt-4 w-1/2 transform rounded-lg bg-yellow-600 py-1 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 lg:mt-3"
                          >
                            {hoverStates[index] ? (
                              <>
                                <span
                                  className={`text-[0.6rem] lg:text-xs ${elem.free_status ? "line-through" : ""}`}
                                >
                                  {elem.free_status
                                    ? "Free"
                                    : `$${elem.price.toFixed(2)}`}
                                </span>
                              </>
                            ) : (
                              <span className="text-[0.6rem] lg:text-xs">
                                Book Now
                              </span>
                            )}
                          </button> */}
                              <button
                                onClick={() => {
                                  if (elem?.URL)
                                    window.open(elem?.URL, "__blank");
                                }}
                                className="mt-4 w-1/2 transform rounded-lg bg-yellow-600 py-1 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 lg:mt-3"
                              >
                                Book Now
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
          ) : (
            <h1 className="text-center text-primary-color text-xs font-bold lg:text-2xl">
              No Webinars scheduled!
            </h1>
          )}
        </>
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

  useEffect(() => {
    const updateSlides = () => {
      const currWidth = window.outerWidth;
      // console.log(currWidth)
      setCurrWidth(currWidth);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <Container className={"bg-gray-200/40"}>
      <div className="pb-2 text-center">
        <h1 className="pb-1 text-lg font-extrabold text-primary-color lg:pb-2 lg:text-3xl">
          <span className="font-bold text-yellow-600">Upcoming</span> Webinars
        </h1>
        <p className="mx-auto text-[0.5rem] font-bold text-gray-800 lg:my-4 lg:max-w-sm lg:text-xs">
          Mark your calendars for Neet Advisor's upcoming <strong>NEET</strong>{" "}
          Counselling webinars.
        </p>
        <Divider
          className={
            "mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:h-1 lg:w-20"
          }
        />
      </div>
      <div>
        <Tabs
          tabPosition={currWidth > 900 ? "left" : "top"}
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
