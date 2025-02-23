import React from "react";
import Container from "../Helper/Container";
import { Tabs, Timeline } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Schedule = () => {
  const counsellingSchedule = [
    {
      date: "2025-01-07",
      venue: "Room 101, NEET Counseling Center",
      sessions: [
        {
          time: "10:00 AM - 10:30 AM",
          topic: "General Guidance",
        },
        {
          time: "12:00 PM - 12:30 PM",
          topic: "Document Verification",
        },
        {
          time: "1:30 PM - 2:00 PM",
          topic: "Fee Payment Process",
        },
      ],
    },
    {
      date: "2025-01-08",
      venue: "Room 102, NEET Counseling Center",
      sessions: [
        {
          time: "10:00 AM - 10:30 AM",
          topic: "Seat Allocation Process",
        },
        {
          time: "12:30 PM - 1:00 PM",
          topic: "Choice Filling",
        },
        {
          time: "2:00 PM - 2:30 PM",
          topic: "Post-Counseling Queries",
        },
      ],
    },
  ];

  return (
    <Container className="bg-gradient-to-tr from-black to-black/85">
      <ScrollAnimation
        animateIn="backInRight"
        animateOnce={true}
        duration={1.5}
        initiallyVisible={true}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="my-4 text-center">
            <h1 className="my-2 text-3xl font-normal text-white">
              <span className="font-extrabold text-yellow-600">Schedule</span>{" "}
              For Upcoming Expo
            </h1>
            <p className="mx-auto my-4 max-w-sm text-sm font-semibold text-gray-200 md:text-xs">
              Stay informed. Stay ahead. Learn about the event slot and timings.
              Choose the session that suits you best.
            </p>
          </div>

          <div className="">
            <Tabs
              className="scheduleTab"
              tabPosition={window.outerWidth > 800 ? "left" : "top"}
              items={counsellingSchedule.map((elem, index) => ({
                key: index + 1,
                label: `Slot ${index + 1}`,
                children: (
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-2 lg:p-6">
                    <div className="flex flex-col items-center justify-center space-y-2 text-gray-300 lg:space-y-4">
                      <h2 className="lg:text-md my-1 text-sm font-bold text-white lg:brightness-200">
                        Session Date: {elem.date}
                      </h2>
                      <p className="mb-2 text-[0.7rem] font-semibold text-gray-200 lg:mb-4">
                        Venue: {elem.venue}
                      </p>
                      <Timeline
                        className="flex w-full  flex-col py-4 text-gray-300 lg:py-4"
                        mode="left"
                        key={index}
                        items={elem.sessions.map((detail) => ({
                          label: (
                            <h1 className="text-[0.7rem] font-thin text-gray-200 lg:text-sm lg:font-semibold">
                              {detail.time}
                            </h1>
                          ),
                          color: "gray",
                          children: (
                            <>
                              <div className="-ml-2 text-[0.67rem]  font-semibold text-gray-200 lg:ml-0 lg:text-sm">
                                {detail.topic}
                              </div>
                            </>
                          ),
                        }))}
                      />
                      <button className="w-fit  rounded-l-full rounded-r-full bg-yellow-600 lg:px-4 px-2 lg:py-2 py-1 lg:text-sm text-xs font-semibold lg:font-bold text-gray-300 transition-all hover:bg-yellow-700">
                        Book Now
                      </button>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default Schedule;
