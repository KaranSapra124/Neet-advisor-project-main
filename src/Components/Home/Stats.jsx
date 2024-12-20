import React, { useEffect, useRef, useState } from 'react';
import { GiTeacher } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";

import { GiPodiumWinner } from "react-icons/gi";

const Stats = () => {
    const statistics = [
        {
            title: "Seminars & Webinars",
            icon: <GiTeacher />,
            count: 1000
        },
        {
            title: "Students Impacted",
            icon: <PiStudentDuotone />,
            count: 1000
        },
        {
            title: "Counselling Sessions",
            icon: <IoIosPeople />,
            count: 1000
        },
        {
            title: "Successful Clients",
            icon: <GiPodiumWinner />,
            count: 1000
        },
    ];

    return (
        <div className='flex flex-col p-20 w-full'>
            <h1 className='text-4xl font-bold text-center mb-[5rem] primary'>Stats Which <span className='text-yellow-400'>Defines Us!</span></h1>
            <div className='flex justify-evenly'>
                {statistics.map((elem, index) => (
                    <div key={index} style={{
                        animation: `${index % 2 !== 0 ? "backInUp" : "backInDown"} 2s normal ease-in`
                    }} className={`border p-4   shadow-lg rounded-lg ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                        <CountUp icon={elem.icon} num={elem.count} className={"text-4xl text-center font-semibold text-gray-600"} />
                        <h2 className='text-md mt-4 font-bold text-yellow-400'>{elem.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CountUp = ({ num, className, icon }) => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    const countRef = useRef(null);

    const startCounting = () => {
        setCount(0); // Reset count
        intervalRef.current = setInterval(() => {
            setCount((prev) => {
                if (prev >= num) {
                    clearInterval(intervalRef.current);
                    return num; // Ensure it doesn't exceed the target number
                }
                return prev + 1;
            });
        }, 10);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting(); // Start counting when in viewport
                } else {
                    clearInterval(intervalRef.current); // Stop counting when out of viewport
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
        <div ref={countRef} className='flex justify-center items-center flex-col'>
            <div className='text-[4rem] primary my-2'>
                {icon}
            </div>
            <h1 className={className}>{count}</h1>
        </div>
    );
};

export default Stats;