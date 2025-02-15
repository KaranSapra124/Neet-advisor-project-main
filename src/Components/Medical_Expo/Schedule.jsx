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
              tabPosition="left"
              items={counsellingSchedule.map((elem, index) => ({
                key: index + 1,
                label: `Slot ${index + 1}`,
                children: (
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-gray-300">
                      <h2 className="text-md my-1 font-bold brightness-200">
                        Session Date: {elem.date}
                      </h2>
                      <p className="mb-4 text-xs font-semibold text-gray-200">
                        Venue: {elem.venue}
                      </p>
                      <Timeline
                        className="flex w-full flex-col py-4 text-gray-300"
                        mode="left"
                        items={elem.sessions.map((detail) => ({
                          label:<h1 className="text-gray-200 font-semibold text-sm">{detail.time}</h1>,
                          color: "gray",
                          children: (
                            <div className="font-semibold">{detail.topic}</div>
                          ),
                        }))}
                      />
                      <button className="w-fit rounded-l-full rounded-r-full bg-yellow-600 hover:bg-yellow-700 transition-all  px-4 py-2 text-sm font-bold text-gray-300">
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
