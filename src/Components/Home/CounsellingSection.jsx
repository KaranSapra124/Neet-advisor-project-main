import React from 'react'
import { FaUsers, FaArrowRight } from "react-icons/fa6"
import { FaChalkboardTeacher } from "react-icons/fa";
import { Button, Popover } from "antd"
import ReactOnScroll from "react-animate-on-scroll"
const CounsellingSection = () => {
    const headerStyle = {
        background: "url(https://img.freepik.com/free-photo/abstract-background-cement-wall-shadow-light-concept_53876-95320.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
    };
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
        <>
            <div className='bg-gray-100 bg-fixed   p-20' >
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 primary gabriela-regular">What We Have To <span className='text-yellow-400'>Offer</span> ?</h2>
                    <p className="text-lg text-black gabriela-regular">Get personalized answers and ease your biggest doubts with Video Counselling from our curated experts.</p>
                </div>
                <div className='flex flex-wrap justify-between gap-x-2 p-6'>
                    {counselingVideos?.map((elem, index) => {
                        return (
                            <Popover
                                key={index}
                                arrow={true}
                                placement={"bottom"}

                                content={
                                    <>
                                        <div className="relative  flex max-[600px]:flex-col  p-4 bg-gray-100 rounded-lg shadow-xl">
                                            <div className="relative  w-full h-64 overflow-hidden rounded-md mb-4">
                                                <video
                                                    loop
                                                    autoPlay
                                                    muted
                                                    src={elem.video}
                                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                                ></video>
                                            </div>
                                            <div className="w-full space-y-2 p-2 bg-white h-fit  rounded-md shadow-lg mx-5">
                                                <h3 className="text-lg font-semibold text-gray-800 ">Key Points:</h3>
                                                {elem?.keyPoints?.map((point, index) => (
                                                    <div key={index} className="flex items-start space-x-2 text-gray-700">
                                                        <span className="font-semibold text-blue-500">{index + 1}.</span>
                                                        <span>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </>
                                }
                            >
                                <button className="relative inline-block text-md font-semibold p-2 bg-white text-black hover:text-white  z-[999] rounded-lg shadow-xl overflow-hidden cursor-pointer transition-all hover:scale-105 group">
                                    <span className="relative z-[1000] hover:font-extrabold">{elem.title}</span>
                                    <span className="absolute inset-0 w-96 h-48 bg-yellow-400  rounded-full transition-all duration-700 scale-0 group-hover:scale-100 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
                                </button>


                            </Popover>
                        );
                    })}
                </div>

            </div>
        </>
    )
}

export default CounsellingSection