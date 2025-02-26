import React from "react";
import { newsData } from "../../Utils/NewsMockData";
import Container from "../Helper/Container";
import { Timeline } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Helper/Divider";

const Schedule = () => {
  const { neetSchedule } = newsData;
  return (
    <Container className={"bg-gray-200/10"}>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-yellow-600 lg:text-xl">
          NEET 2025 <span className="text-primary-color font-extrabold">application form date</span>
        </h1>
        <p className="text-xs font-semibold text-gray-700">
          All the important NEET UG application form 2025 date are provided by
          the NTA in its NEET information bulletin. Among the NEET 2025 major
          updates, the NTA is expected to announce the important NEET
          registration date anytime soon. Candidates can check the NEET
          application date here.
        </p>
        <Divider className={"h-1 w-12 bg-yellow-600 rounded-full "}/>
        <h1 className="text-lg font-bold">NEET application form date</h1>
        <Timeline
          className="pg-seminar"
          mode={window.outerWidth > 800 ? "alternate" : "left"}
          items={Object.keys(neetSchedule)?.map((key, index) => {
            return {
              children: (
                <ScrollAnimation animateIn="backInUp" animateOnce={true}>
                  <div
                    className={` ${(index + 1) % 2 === 0 && "m-0 lg:ml-[20.8rem]"} relative flex w-fit cursor-pointer flex-col rounded-md border-l-2 border-yellow-600 bg-gray-400/5 p-4 text-center shadow-sm shadow-gray-500 transition-all hover:scale-105 lg:w-80`}
                  >
                    <img
                      src="./Webinar/BookImg.gif"
                      className="absolute -left-4 -top-3 w-6 rounded-full bg-white p-0.5 shadow shadow-yellow-600"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="w-fit rounded border-b-2 border-l-2 border-yellow-600 px-2 py-1 text-xs font-bold text-primary-color">
                      {key}
                    </p>
                    <p className="my-1.5 w-fit text-sm font-bold text-gray-900">
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
