import React from "react";
import Container from "../Helper/Container";
import { Tabs } from "antd";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const SeminarDetails = () => {
  const seminarData = [
    {
      location: "Mumbai",
      date: "28 January 2025",
      venue: "Grand Convention Center, Mumbai",
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      isAvailable: true,
      description:
        "Gain expert insights on NEET UG 2025 preparation, personalized guidance on exam strategies, and updates on the latest counseling trends to secure admission to top medical colleges.",
    },
    {
      location: "Delhi",
      date: "10 February 2025",
      venue: "Delhi International Auditorium",
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      isAvailable: false,
      description:
        "Join our exclusive seminar to learn from experts about cracking NEET UG 2025 with confidence, understand college selection processes, and get actionable tips for success in the medical field.",
    },
  ];

  return (
    <>
      <Container
        className={
          "no-repeat relative h-screen bg-seminar-hero bg-cover bg-fixed"
        }
      >
        <div className="absolute inset-0 h-full w-full bg-black/95 backdrop-blur-md"></div>

        <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
          <div className="relative">
            <div className="my-2 text-center">
              <h1 className="text-3xl font-bold text-yellow-600">
                Where & When To{" "}
                <span className="font-extrabold text-primary-color brightness-200">
                  Reach?
                </span>
              </h1>
              <p className="my-2 text-xs font-semibold text-gray-200">
                Want To Reach To Us , Checkout The Details!
              </p>
              <Divider
                className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
              />
            </div>
            <div>
              <Tabs
                className="ug-seminar-tab"
                items={seminarData?.map((elem, index) => {
                  return {
                    key: index + 1,
                    label: elem?.location,

                    children: (
                      <>
                        <div className="mx-auto flex max-w-screen-xl items-center justify-between rounded-md  border border-white">
                          <video
                            className="w-1/2 rounded-lg"
                            src={elem?.video}
                            autoPlay
                            loop
                            muted
                          ></video>
                          <div className="flex flex-col gap-2 px-2">
                            <img
                              className="ml-auto h-10 w-10 rounded bg-white p-1"
                              src="neet-advisor-logo-Photoroom.png"
                              alt=""
                              srcset=""
                            />
                            <div className="flex flex-col items-end">
                              <h1 className="my-2 text-3xl font-semibold text-yellow-600">
                                Neet UG 2025
                                <span className="mx-2 font-extrabold text-primary-color brightness-200">
                                  The Ultimate Guide
                                </span>
                              </h1>
                              <Divider
                                className={
                                  "my-2 h-0.5 w-20 rounded-full bg-yellow-600"
                                }
                              />
                              <h2 className="my-2 text-xl font-extralight text-gray-200">
                                Get your neet preparation to next level rocket
                                🚀
                              </h2>
                              <p className="my-2 text-right text-xs font-semibold text-gray-200">
                                {elem?.description}
                              </p>
                              <div className="my-2">
                                <p className="flex w-fit items-center justify-evenly rounded-lg border border-yellow-600 p-2 font-semibold text-gray-200">
                                  <div className="flex items-center justify-between">
                                    <img
                                      src="./Webinar/person-speaker.gif"
                                      className="h-8 w-8 mx-2"
                                      alt=""
                                      srcset=""
                                    />
                                    {elem?.location}
                                  </div>
                                  <Divider
                                    className={
                                      "h-0.5 w-5 rotate-90 bg-yellow-600"
                                    }
                                  />
                                  <div className="flex items-center justify-between">
                                    <img
                                      src="./Webinar/calendar-bg-removed.gif"
                                      className="h-8 w-8 mx-2"
                                      alt=""
                                      srcset=""
                                    />
                                    {elem?.date}
                                  </div>
                                  <Divider
                                    className={
                                      "h-0.5 w-5 rotate-90 bg-yellow-600"
                                    }
                                  />
                                  <div className="flex items-center justify-between">
                                    <img
                                      src="./Seminar/location-pin-bg-removed.gif"
                                      className="h-8 w-8 mx-2"
                                      alt=""
                                      srcset=""
                                    />
                                    {elem?.venue}
                                  </div>
                                </p>
                              </div>
                              <button className="my-2 rounded-l-full rounded-r-full bg-yellow-600 px-4 py-2 text-lg font-bold text-white transition-all hover:bg-yellow-700">
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

export default SeminarDetails;
