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
      icon: <GiTeacher className="text-5xl text-yellow-600" />,
      count: 1000,
    },
    {
      title: "Students Impacted",
      icon: <PiStudentDuotone className="text-5xl text-yellow-600" />,
      count: 5000,
    },
    {
      title: "Counselling Sessions",
      icon: <IoIosPeople className="text-5xl text-yellow-600" />,
      count: 3000,
    },
    {
      title: "Successful Clients",
      icon: <GiPodiumWinner className="text-5xl text-yellow-600" />,
      count: 2000,
    },
  ];

  return (
    <Container>
      <ScrollAnimation animateIn="backInUp" duration={1.2}>
        <div className="mx-auto text-center">
          {/* Header */}
          <h1 className="text-3xl font-bold text-yellow-600">
            Stats That{" "}
            <span className="font-extrabold text-primary-color">Define Us</span>
          </h1>
          <p className="mt-2 text-xs font-bold text-gray-700">
            Discover the milestones that showcase our commitment and impact.
          </p>
          <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />
          {/* Stats Grid */}
          <div className="my-5 flex justify-evenly gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex w-60 flex-col items-center justify-center rounded-lg bg-gray-100 p-8 shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="mb-1">{stat.icon}</div>
                  {/* Count */}
                  <CountUp
                    num={stat.count}
                    speed={1}
                    className="ml-5 text-4xl font-bold text-primary-color"
                  />
                </div>
                {/* Title */}
                <h3 className="mt-2 text-sm font-bold text-gray-600">
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

const CountUp = ({ num, className, speed }) => {
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
