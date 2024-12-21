// import { Popover, Steps } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import Container from '../Helper/Container';
import { PiCursorFill } from 'react-icons/pi';
import { Popover, Steps } from 'antd';
// import { FaICursor } from 'react-icons/fa';
// import "../Webinar/Webinar.css"
const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        },
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notchh preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        },
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        },
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        }
    ];
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);



    return (
        <>

            <Container>
                <div className="max-w-screen-lg mx-auto px-4  sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">
                            <span className="text-yellow-500 font-extrabold">Features</span>
                            <span className="text-primary-color font-bold"> to Enhance Your Experience</span>
                        </h1>
                        <p className="text-gray-700  text-sm font-bold  mx-auto">
                            Our best-in-class Webinars effectively communicate your concerns with simplified interaction.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="mb-8">
                        <Steps
                            current={activeIndex}
                            progressDot
                            className="custom-stepper"
                        />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2  mb-12">
                        {/* Video Section */}
                        {/* <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100"> */}
                        <video
                            className="w-96 mx-auto rounded aspect-video object-cover"
                            src={data[activeIndex].video}
                            // controls
                            autoPlay
                            muted
                            loop
                        />
                        {/* </div> */}

                        {/* Features Section */}
                        <div className="flex flex-col justify-center ">
                            <h3 className="text-lg font-bold text-primary-color mb-6">
                                {data[activeIndex].title}
                            </h3>
                            <ul className="space-y-4">
                                {data[activeIndex].content.map((item, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <TiTick className="text-white text-lg" />
                                        </span>
                                        <span className="text-gray-700 text-sm font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        {data.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`
              flex items-center px-6 py-3 rounded-lg font-medium
              transition-all duration-300 ease-in-out
              ${activeIndex === index
                                        ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'}
            `}
                            >
                                <span>Webinar {index + 1}</span>
                                <PiCursorFill className="ml-2 text-lg" />
                            </button>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};


export default Features;