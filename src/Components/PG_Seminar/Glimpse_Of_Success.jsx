import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Carousel, Tabs } from "antd";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const fetchSeminars = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminars`,
    {
      withCredentials: true,
    },
  );
  return data;
};
const checkState = (state) => {
  if (
    state === "National Capital Territory of Delhi" ||
    state === "Haryana" ||
    state === "Punjab" ||
    state === "Uttar Pradesh"
  ) {
    return true;
  } else {
    return false;
  }
};
const Glimpse_Of_Success = () => {
  const queryClient = useQueryClient();

  const [groupedSeminars, setGroupedSeminars] = useState([]);
  const { data, isLoading } = useQuery({
    queryKey: ["everySeminar"],
    queryFn: fetchSeminars,
  });
  const formatDate = (dateString) => {
    const [yy, mm, dd] = dateString.split("-").map(Number);
    return new Date(yy, mm - 1, dd).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const seminarData = data?.allSeminars?.reduce((acc, elem) => {
      acc[elem?.state] = {
        isChecked:
          (elem?.state === "Delhi" && checkState(data?.cookie)) ||
          (elem?.state !== "Delhi" && !checkState(data?.cookie)),
        seminars: [],
      };
      acc[elem.state]?.seminars?.push(elem);
      return acc;
    }, {});
    // console.log(seminarData && Object.entries(seminarData)?.sort((a, b) => (a?.seminars?.isChecked ? 1 : -1))[0][1], "SEMINAR DATA");
    // queryClient.invalidateQueries(["allSeminars"]);
    // queryClient.setQueryData(
    //   ["allSeminars"],
    //   seminarData &&
    //     Object.entries(seminarData)?.sort((a, b) =>
    //       a?.seminars?.isChecked ? 1 : -1,
    //     )[0][1]?.seminars,
    // );
    setGroupedSeminars(seminarData);
  }, [data, isLoading]);

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
              {isLoading ? (
                <h1>Loading...</h1>
              ) : (
                <Tabs
                  tabPosition={window.outerWidth > 800 ? "left" : "top"}
                  className="ug-seminar-tab"
                  onChange={(val) => {
                    console.log(
                      Object.entries(groupedSeminars)?.sort((a, b) =>
                        a?.seminars?.isChecked ? 1 : -1,
                      )[val - 1][1]?.seminars,
                    );
                    queryClient.setQueryData(
                      ["allSeminars"],
                      Object.entries(groupedSeminars)?.sort((a, b) =>
                        a?.seminars?.isChecked ? 1 : -1,
                      )[val - 1][1]?.seminars,
                    );
                  }}
                  items={
                    groupedSeminars &&
                    Object?.entries(groupedSeminars)
                      ?.sort((a, b) => (a?.seminars?.isChecked ? 1 : -1))
                      .map(([state, seminars], index) => {
                        return {
                          key: index + 1,
                          label: state,

                          children: (
                            <Carousel
                              arrows
                              dots
                              infinite
                              autoplay
                              autoplaySpeed={1500}
                            >
                              {seminars?.seminars?.map((elem, idx) => {
                                return (
                                  <>
                                    <div className="mx-auto flex flex-col justify-between rounded-md shadow shadow-gray-200 lg:max-w-screen-xl lg:flex-row">
                                      <video
                                        className="h-full rounded-md lg:w-1/2 lg:rounded-l-lg"
                                        src={`${import.meta.env.VITE_BACKEND_URL}uploads/${elem?.video}`}
                                        autoPlay
                                        loop
                                        muted
                                      ></video>
                                      <div className="flex flex-col gap-1 bg-gradient-to-tr from-black/50 via-gray-500/10 to-gray-900/40 px-1 py-0.5 lg:w-1/2 lg:px-2 lg:py-2">
                                        <img
                                          className="ml-auto h-6 w-6 rounded-sm bg-white p-1 lg:h-10 lg:w-10"
                                          src="neet-advisor-logo-Photoroom.png"
                                          alt=""
                                          srcset=""
                                        />
                                        <div className="flex flex-col items-center">
                                          <h1 className="my-2 text-sm font-bold text-yellow-600 lg:text-3xl">
                                            {/* Neet PG 2025
                              <span className="mx-2 font-extrabold text-primary-color brightness-[300%]">
                                The Ultimate Guide
                              </span> */}
                                            {elem?.title}
                                          </h1>
                                          <Divider
                                            className={
                                              "my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:w-20"
                                            }
                                          />
                                          <h2 className="my-2 text-[0.7rem] font-light text-gray-200 lg:text-xl lg:font-thin">
                                            {elem?.catchPhrase}
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
                                                {formatDate(elem?.date)}
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
                                                {elem?.state}
                                              </div>
                                            </p>
                                          </div>
                                          <button
                                            onClick={() =>
                                              window.open(elem?.URL, "__blank")
                                            }
                                            className="my-2 rounded-l-full rounded-r-full bg-yellow-600 px-2 py-0.5 text-[0.5rem] font-bold text-white transition-all hover:bg-yellow-700 lg:px-3 lg:py-1.5 lg:text-lg"
                                          >
                                            Book Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </Carousel>
                          ),
                        };
                      })
                  }
                />
              )}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default Glimpse_Of_Success;
