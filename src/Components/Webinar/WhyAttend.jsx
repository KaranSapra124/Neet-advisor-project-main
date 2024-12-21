import React from 'react'
import Container from '../Helper/Container';
import { Card } from 'antd';
import { TiTick } from 'react-icons/ti';

const WhyAttend = () => {
    const data = [
        {
            title: "Ace NEET 2025",
            text: "Prepare like a Pro with the latest cut-off trends, tips, tricks, time management strategies, and updates on the NEET Exam."
        },
        {
            title: "Top Study Resources for NEET",
            text: "Discover the best books, online courses, and study materials that can help you excel in your NEET preparation."
        },
        {
            title: "Effective Time Management for NEET Aspirants",
            text: "Learn how to create a study schedule that maximizes your productivity and ensures you cover all topics before the exam."
        },
        {
            title: "Common Mistakes to Avoid in NEET Preparation",
            text: "Identify the pitfalls that many students face during their preparation and how to avoid them for a successful outcome."
        },
        {
            title: "Understanding NEET Exam Pattern",
            text: "Get familiar with the NEET exam structure, types of questions, and marking scheme to strategize your preparation effectively."
        },
        {
            title: "Importance of Mock Tests",
            text: "Find out how taking regular mock tests can help you assess your preparation level and improve your performance."
        },
        {
            title: "Stress Management Techniques for NEET Aspirants",
            text: "Explore various techniques to manage stress and anxiety during your preparation and on the exam day."
        },
        {
            title: "Nutrition Tips for NEET Preparation",
            text: "Learn about the importance of a balanced diet and how proper nutrition can enhance your focus and energy levels."
        },
        {
            title: "Success Stories of NEET Toppers",
            text: "Get inspired by the journeys of NEET toppers and their strategies that led them to success in the exam."
        },
        {
            title: "Latest Updates on NEET Exam",
            text: "Stay informed about the latest announcements, changes in exam patterns, and important dates related to NEET."
        },
        {
            title: "Choosing the Right Medical College",
            text: "Understand the factors to consider when selecting a medical college after clearing the NEET exam."
        },
        {
            title: "NEET Preparation Apps You Should Try",
            text: "Discover mobile applications that can aid your NEET preparation with quizzes, flashcards, and study materials."
        },
        {
            title: "How to Stay Motivated During Preparation",
            text: "Tips and tricks to keep your motivation high throughout your NEET preparation journey."
        }
    ];
    return (
        <>
            <Container className={"bg-gray-100"}>
                <h1 className='text-4xl text-center pb-[2rem] font-bold text-primary-color'>Why You Can’t Miss Our <span className='text-yellow-500 font-extrabold'>Webinar!
                </span></h1>
                <div className='grid grid-cols-4 gap-8'>
                    {data?.map((elem, index) => {
                        return <div key={index} className="grid cursor-pointer hover:scale-110 transition-all duration-500 md:grid-cols-1   pt-10">
                            <div className="rounded-lg bg-white px-4 text-center shadow-lg">
                                <div className="mx-auto mt-5 mb-2 flex h-10 w-10 -translate-y-25 transform items-center justify-center rounded-full bg-yellow-500 shadow-md shadow-teal-500/40">
                                    {/* Placeholder for SVG or Icon */}
                                    <TiTick className='text-white font-extrabold text-xl'/>
                                </div>
                                <h1 className="text-primary-color mb-3 text-md font-bold ">{elem.title}</h1>
                                <p className="px-4 text-gray-700 font-semibold text-sm py-4">
                                    {elem.text}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </>
    )
}

export default WhyAttend