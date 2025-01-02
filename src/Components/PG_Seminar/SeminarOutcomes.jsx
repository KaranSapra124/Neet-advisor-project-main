import React from 'react'
import Container from "../Helper/Container"
import "./Pg_Seminar.css";
import { Steps } from 'antd';
import Divider from '../Helper/Divider';
const SeminarOutcomes = () => {
    const data = [
        {
            "title": "MM Guidebook",
            "description": "A chance to win the NEET PG Counselling encyclopedia worth Rs. 3000!"
        },
        {
            "title": "Free Counselling Handbook",
            "description": "Get the complete Karnataka Counselling Handbook worth Rs. 500/- Learn all about KEA Counselling."
        },
        {
            "title": "Free 1-to-1 Session",
            "description": "Correct advice is priceless. Interact with our counselling experts."
        },
        {
            "title": "Clear Your Doubts",
            "description": "Voice your concerns. Feel heard with our doubt-clearing segment. Put your fears to rest."
        }
    ]

    return (
        <Container className={'bg-gray-100'}>
            <div className='text-center'>
                <h1 className='text-primary-color font-bold text-4xl py-1 '>What You Will <span className='text-yellow-500 font-extrabold '>Gain</span></h1>
                <p className='text-gray-700 font-semibold text-xs'>Leave prepared for the NEET PG counselling journey. Here's how our attendees benefit from Medical Mentor's seminar!</p>
            </div>
            <Divider className={'h-1 w-32 mx-auto mt-4 bg-yellow-500 rounded-full'}/>
            <div className='flex justify-center   gap-2 my-5'>
                <Steps className='aboutUsStepper' progressDot current={data?.length} type='inline' items={data?.map((elem, index) => {
                    return {
                        title: <div className='animate-rubberBand shadow-md hover:scale-105 transition-all cursor-pointer duration-500 border-l-4 border-yellow-500 w-80 bg-white my-2 text-center p-4 h-24 rounded'>
                            <h2 className='text-primary-color text-sm font-bold '>{elem?.title}</h2>
                            <p className='text-xs text-gray-700 font-normal'>{elem?.description}</p>
                        </div>
                    }
                })} />
            </div>
        </Container>
    )
}

export default SeminarOutcomes