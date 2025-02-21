import React from "react";
import Container from "../Helper/Container";
import { Tabs } from "antd";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const Glimpse_Of_Success = () => {
  const seminarData = [
    {
      location: "Mumbai",
      date: "28 January 2025",
      venue: "Grand Convention Center, Mumbai",
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      isAvailable: true,
      description:
        "Gain expert insights on NEET PG 2025 preparation, personalized guidance on exam strategies, and updates on the latest counseling trends to secure admission to top medical colleges.",
    },
    {
      location: "Delhi",
      date: "10 February 2025",
      venue: "Delhi International Auditorium",
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      isAvailable: false,
      description:
        "Join our exclusive seminar to learn from experts about cracking NEET PG 2025 with confidence, understand college selection processes, and get actionable tips for success in the medical field.",
    },
  ];

  return (
    <>
      <Container
        className={"no-repeat relative bg-webinar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/80 via-gray-900 to-gray-900/80 backdrop-blur-sm"></div>

        <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
          <div className="relative">
            <div className="my-2 text-center">
              <h1 className="text-sm font-bold text-yellow-600 lg:text-3xl">
                Where & When To{" "}
                <span className="font-extrabold text-primary-color brightness-200">
                  Reach?
                </span>
              </h1>
              <p className="my-2 text-[0.5rem] font-semibold text-gray-200 lg:my-3 lg:text-xs">
                Want To Reach To Us , Checkout The Details!
              </p>
              <Divider
                className={
                  "mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-5 lg:h-1 lg:w-20"
                }
              />
            </div>
            <div>
              <Tabs
                tabPosition={window.outerWidth > 800 ? "left" : "top"}
                className="ug-seminar-tab"
                items={seminarData?.map((elem, index) => {
                  return {
                    key: index + 1,
                    label: elem?.location,

                    children: (
                      <>
                        <div className="mx-auto flex flex-col justify-between rounded-md shadow shadow-gray-200 lg:max-w-screen-xl lg:flex-row">
                          <video
                            className="w-full rounded-md lg:w-1/2 lg:rounded-l-lg"
                            src={elem?.video}
                            autoPlay
                            loop
                            muted
                          ></video>
                          <div className="flex flex-col gap-1 bg-gradient-to-tr from-black/50 via-gray-500/10 to-gray-900/40 lg:px-2 lg:py-2 px-1 py-0.5">
                            <img
                              className="ml-auto h-6 w-6 rounded-sm bg-white p-1 lg:h-10 lg:w-10"
                              src="neet-advisor-logo-Photoroom.png"
                              alt=""
                              srcset=""
                            />
                            <div className="flex flex-col items-center">
                              <h1 className="my-2 text-sm font-semibold text-yellow-600 lg:text-3xl">
                                Neet PG 2025
                                <span className="mx-2 font-extrabold text-primary-color brightness-[300%]">
                                  The Ultimate Guide
                                </span>
                              </h1>
                              <Divider
                                className={
                                  "my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:w-20"
                                }
                              />
                              <h2 className="my-2 text-[0.7rem] font-light text-gray-200 lg:text-xl lg:font-thin">
                                Get your neet preparation to next level rocket
                                🚀
                              </h2>
                              <p className="my-2 text-center text-[0.5rem] font-extrabold text-gray-200 lg:text-xs lg:font-semibold">
                                {elem?.description}
                              </p>
                              <div className="my-2">
                                <p className="flex w-fit items-center justify-evenly rounded-lg border border-white p-1 font-extrabold text-gray-400 lg:p-2 lg:font-bold">
                                  <div className="flex items-center justify-between gap-0.5 text-[0.4rem] text-gray-200 lg:gap-2 lg:text-sm">
                                    <img
                                      src="./Webinar/person-speaker.gif"
                                      className="w-4 lg:h-8 lg:w-8"
                                      alt=""
                                      srcset=""
                                    />
                                    {elem?.location}
                                  </div>
                                  <Divider
                                    className={
                                      "h-0.5 w-3.5 rotate-90 bg-yellow-600 lg:w-5"
                                    }
                                  />
                                  <div className="flex items-center justify-between gap-0.5 text-[0.4rem] text-gray-200 lg:gap-2 lg:text-sm">
                                    <img
                                      src="./Webinar/calendar-bg-removed.gif"
                                      className="w-4 lg:h-8 lg:w-8"
                                      alt=""
                                      srcset=""
                                    />
                                    {elem?.date}
                                  </div>
                                  <Divider
                                    className={
                                      "h-0.5 w-3.5 rotate-90 bg-yellow-600 lg:w-5"
                                    }
                                  />
                                  <div className="flex items-center justify-between gap-0.5 text-[0.4rem] text-gray-200 lg:gap-2 lg:text-sm">
                                    <img
                                      src="./Seminar/location-pin-bg-removed.gif"
                                      className="w-4 lg:h-8 lg:w-8"
                                      alt=""
                                      srcset=""
                                    />
                                    {elem?.venue}
                                  </div>
                                </p>
                              </div>
                              <button className="my-2 rounded-l-full rounded-r-full bg-yellow-600 lg:px-3 px-2 lg:py-1.5 py-0.5 lg:text-lg text-[0.5rem] font-bold text-white transition-all hover:bg-yellow-700">
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ),
                  };
                })}
              />
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default Glimpse_Of_Success;
