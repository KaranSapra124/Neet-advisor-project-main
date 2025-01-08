import React, { useEffect, useRef, useState } from 'react';
import { GiTeacher, GiPodiumWinner } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import Container from "../Helper/Container"

const Stats = () => {
    const statistics = [
        {
            title: "Seminars & Webinars",
            icon: <GiTeacher />,
            count: 1000,
        },
        {
            title: "Students Impacted",
            icon: <PiStudentDuotone />,
            count: 1000,
        },
        {
            title: "Counselling Sessions",
            icon: <IoIosPeople />,
            count: 1000,
        },
        {
            title: "Successful Clients",
            icon: <GiPodiumWinner />,
            count: 1000,
        },
    ];

    return (
        <>
            <Container>
                <div >
                    <div className=" mx-auto px-6 text-center">
                        {/* Header */}
                        <h1 className="text-3xl font-extrabold text-primary-color">
                            Stats That <span className="text-yellow-600 font-extrabold">Define Us</span>
                        </h1>
                        <p className="mt-2 text-gray-700 font-semibold text-xs">
                            Discover the milestones that showcase our commitment and impact.
                        </p>

                        {/* Stats Grid */}
                        <div className="mt-4 flex justify-evenly">
                            {statistics.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-200/30 rounded-full  shadow-md  transition-all duration-300 flex flex-col items-center justify-center p-8"
                                >
                                    {/* Icon */}
                                    <div className="text-3xl text-yellow-600 mb-4">
                                        {stat.icon}
                                    </div>
                                    {/* Count */}
                                    <CountUp
                                        num={stat.count}
                                        className="text-4xl font-bold text-gray-700"
                                    />
                                    {/* Title */}
                                    <h3 className="mt-2 text-xs font-semibold text-gray-600">
                                        {stat.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

const CountUp = ({ num, className, icon }) => {
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
        }, 10);
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
            <h1 className={className}>{count}</h1>
        </div>
    );
};

export default Stats;
