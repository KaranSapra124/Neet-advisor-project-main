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
    ]
    return (
        <>
            <Container className={"bg-gray-200/40 "}>
                <h1 className='text-3xl text-center py-2 font-bold text-primary-color'>Why You Can’t Miss Our <span className='text-yellow-500 font-extrabold'>Webinar!
                </span></h1>
                <div className='grid grid-cols-4  mx-auto gap-4'>
                    {data?.map((elem, index) => {
                        return <div key={index} className="grid cursor-pointer hover:scale-105 transition-all duration-500 md:grid-cols-1   pt-10">
                            <div className="rounded-lg bg-white px-2 text-center shadow-lg">
                                <div className="mx-auto mt-5 mb-2 flex h-8 w-8 -translate-y-25 transform items-center justify-center rounded-full bg-yellow-600 shadow-md shadow-primary-color">
                                    {/* Placeholder for SVG or Icon */}
                                    <TiTick className='text-white font-extrabold text-xl' />
                                </div>
                                <h1 className="text-primary-color my-2 text-sm font-bold ">{elem.title}</h1>
                                <p className="px-4 text-gray-700 font-semibold text-xs py-2">
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