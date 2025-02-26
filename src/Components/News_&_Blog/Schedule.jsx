import React from "react";
import { newsData } from "../../Utils/NewsMockData";
import Container from "../Helper/Container";
import { Timeline } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Schedule = () => {
  const { neetSchedule } = newsData;
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-xl font-semibold">NEET 2025 application form date</h1>
        <p className="text-xs text-gray-700 font-semibold">
          All the important NEET UG application form 2025 date are provided by
          the NTA in its NEET information bulletin. Among the NEET 2025 major
          updates, the NTA is expected to announce the important NEET
          registration date anytime soon. Candidates can check the NEET
          application date here.
        </p>
        <h1 className="text-lg font-bold">NEET application form date</h1>
        <Timeline
          className="pg-seminar "
          mode="alternate"
          items={Object.keys(neetSchedule)?.map((key, index) => {
            return {
              children: (
                <ScrollAnimation animateIn="backInUp" animateOnce={true}>
                  <div
                    className={` ${(index + 1) % 2 === 0 && "m-0 lg:ml-[20.8rem]"} relative flex flex-col  w-fit rounded-md border-l-2 bg-gray-400/5  border-yellow-600 p-4 text-center shadow-sm shadow-gray-500 cursor-pointer hover:scale-105 transition-all lg:w-80`}
                  >
                    <img src="./Webinar/BookImg.gif" className="w-6 shadow-yellow-600 shadow absolute -top-3 -left-4 bg-white rounded-full p-0.5" alt="" srcset="" />
                    {" "}
                    <p className="w-fit rounded border-b-2 border-l-2 border-yellow-600 px-2 py-1 text-xs font-bold text-primary-color">
                      {key}
                    </p>
                    <p className="my-1.5 w-fit  text-sm font-bold text-gray-900">
                      {neetSchedule[key]}
                    </p>
                  </div>
                </ScrollAnimation>
              ),
              color: "#201169",
            };
          })}
        ></Timeline>
      </div>
    </Container>
  );
};
export default Schedule;
