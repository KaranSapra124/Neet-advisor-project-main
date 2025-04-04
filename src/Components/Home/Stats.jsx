import React, { useEffect, useRef, useState } from "react";
import { GiTeacher, GiPodiumWinner } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Helper/Divider";

const Stats = () => {
  const statistics = [
    {
      title: "Seminars & Webinars",
      icon: "./teachingGif.gif",
      count: 1000,
    },
    {
      title: "Students Impacted",
      icon: "./graduationCap.gif",
      count: 5000,
    },
    {
      title: "Counselling Sessions",
      icon: "./Mbbs/calendar-bg-removed.gif",
      count: 3000,
    },
    {
      title: "Successful Clients",
      icon: "./motivationGif.gif",
      count: 2000,
    },
  ];

  return (
    <Container>
      <ScrollAnimation animateIn="backInUp" duration={1.2}>
        <div className="mx-auto text-center">
          {/* Header */}
          <h1 className="text-lg font-bold text-yellow-600 lg:text-3xl">
            Stats That{" "}
            <span className="font-extrabold text-primary-color">Define Us</span>
          </h1>
          <p className="mx-auto my-2 text-[0.5rem] font-bold text-gray-700 lg:my-4 lg:w-80">
            Discover the milestones that showcase our commitment and impact.
          </p>
          <Divider
            className={
              "mx-auto h-1 w-12 rounded-full bg-yellow-600 lg:my-4 lg:w-20"
            }
          />
          {/* Stats Grid */}
          <div className="my-7 flex flex-col justify-center gap-3 lg:my-5 lg:flex-row lg:justify-evenly lg:gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="mx-auto flex w-44 flex-col items-center justify-center rounded-lg border-b-2 border-l-2 border-yellow-600 bg-gray-100 p-4 shadow-md transition-all duration-300 lg:mx-0 lg:w-60 lg:p-8"
              >
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <img
                    src={stat?.icon}
                    className="mx-2 w-8 lg:w-10"
                    alt=""
                    srcset=""
                  />
                  {/* Count */}
                  <CountUp
                    num={stat.count}
                    speed={1}
                    className="ml-2.5 text-xl font-bold text-primary-color lg:ml-5 lg:text-4xl"
                  />
                </div>
                {/* Title */}
                <h3 className="my-2 text-[0.7rem] font-bold text-gray-600 lg:text-sm">
                  {stat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export const CountUp = ({ num, className, speed }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const countRef = useRef(null);

  const startCounting = () => {
    setCount(0);
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= num) {
          clearInterval(intervalRef.current);
          return num;
        }
        return prev + 1;
      });
    }, speed);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          clearInterval(intervalRef.current);
        }
      });
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
      observer.disconnect();
    };
  }, [num]);

  return (
    <div ref={countRef} className="flex flex-col items-center">
      <h1 className={className}>{count}+</h1>
    </div>
  );
};

export default Stats;
