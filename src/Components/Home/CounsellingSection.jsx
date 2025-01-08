import React, { useEffect, useState } from 'react';
import { FaUsers, FaArrowRight } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Button, Popover } from "antd";
import Container from "../Helper/Container";
import ScrollAnimation from 'react-animate-on-scroll';

const CounsellingSection = () => {
    const [openPopoverIndex, setOpenPopoverIndex] = useState(null); // Track the open popover index

    const counselingVideos = [
        {
            title: "Understanding Mental Health Basics",
            video: "https://videos.pexels.com/video-files/4487288/4487288-sd_640_360_25fps.mp4",
            description: "This video explains the basics of mental health, including common mental health disorders, signs, and symptoms.",
            keyPoints: [
                "Introduction to mental health and wellness.",
                "Overview of common mental health disorders.",
                "Why seeking help is important."
            ]
        },
        {
            title: "The Importance of Stress Management",
            video: "https://videos.pexels.com/video-files/4487288/4487288-sd_640_360_25fps.mp4",
            description: "Learn why managing stress is crucial for mental well-being, and explore effective techniques like mindfulness, exercise, and time management.",
            keyPoints: [
                "Understanding the negative effects of unmanaged stress.",
                "Techniques to manage stress effectively: mindfulness, exercise, time management.",
                "The connection between stress and overall health."
            ]
        },
        {
            title: "How Therapy Can Improve Your Life",
            video: "https://videos.pexels.com/video-files/4487288/4487288-sd_640_360_25fps.mp4",
            description: "Explore the various benefits of therapy, including how it helps individuals understand their emotions, overcome challenges, and improve their mental health.",
            keyPoints: [
                "How therapy helps with understanding emotions and thoughts.",
                "Therapeutic techniques for overcoming emotional challenges.",
                "The long-term benefits of ongoing therapy."
            ]
        },
        {
            title: "Coping with Anxiety and Depression",
            video: "https://videos.pexels.com/video-files/4487288/4487288-sd_640_360_25fps.mp4",
            description: "This video provides strategies for coping with anxiety and depression, including cognitive-behavioral techniques, self-care practices, and professional support.",
            keyPoints: [
                "Techniques for managing anxiety and depression.",
                "Cognitive-behavioral strategies for overcoming negative thinking.",
                "The importance of self-care and professional support."
            ]
        },
    ];



    return (
        <ScrollAnimation  animateIn='fadeIn' duration={1.5} >
            <Container className={'bg-gray-200/40'}>
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold mb-2 primary gabriela-regular">
                        What We Have To <span className='text-yellow-600 font-extrabold'>Offer ?</span>
                    </h2>
                    <p className="text-xs text-gray-700 my-2 font-semibold">
                        Get personalized answers and ease your biggest doubts with Video Counselling from our curated experts.
                    </p>
                </div>
                <div className='flex flex-wrap justify-between gap-x-2'>
                    {counselingVideos?.map((elem, index) => (
                        <Popover
                            key={index}

                            arrow={true}
                            open={openPopoverIndex === index} // Control open state dynamically
                            placement={"bottom"}
                            onOpenChange={(visible) => {
                                setOpenPopoverIndex(visible ? index : null); // Open or close the current popover
                            }}

                            content={
                                <div className="flex flex-col lg:flex-row p-2 bg-gray-50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <div className="relative w-full lg:w-64 aspect-video rounded-lg overflow-hidden bg-gray-200">
                                        <video
                                            loop
                                            autoPlay
                                            muted
                                            src={elem.video}
                                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                                        <h3 className="text-lg font-extrabold text-primary-color mb-4 border-b pb-2">
                                            Key Points
                                        </h3>
                                        <div className="space-y-3">
                                            {elem?.keyPoints?.map((point, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
                                                >
                                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary-color text-gray-200 rounded-full font-semibold text-sm">
                                                        {idx + 1}
                                                    </span>
                                                    <p className="text-sm text-gray-700 font-semibold leading-relaxed">
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <button className="relative bg-white inline-block text-sm border-l-4 border-yellow-600 p-2 px-8 bg-gray-400/10 text-gray-700 hover:text-white z-[999] rounded-lg shadow-xl overflow-hidden cursor-pointer transition-all hover:scale-105 group">
                                <span className="relative hover:text-white z-[1000] hover:font-extrabold flex font-semibold text-xs">
                                    {elem.title} <span><FaArrowRight className='mx-2 text-yellow-600 z-[1000] font-extrabold text-sm group-hover:text-white transition-all' /></span>
                                </span>
                                <span className="absolute inset-0 w-96 h-48 bg-yellow-600 rounded-full transition-all duration-700 scale-0 group-hover:scale-100 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
                            </button>
                        </Popover>
                    ))}
                </div>
            </Container>
        </ScrollAnimation>
    );
}

export default CounsellingSection;
