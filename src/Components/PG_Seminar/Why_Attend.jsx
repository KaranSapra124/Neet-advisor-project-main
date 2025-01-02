import React, { useEffect, useState } from 'react';
import Container from '../Helper/Container';
import { Steps } from 'antd';
import { FaCheck } from 'react-icons/fa';
import Divider from '../Helper/Divider';

// import SleekStepper from "sleekstepper"
const Why_Attend = () => {
    const [currVal, setCurrVal] = useState(0);
    const values = [
        {
            title: (
                <div className='border border-gray-300 rounded-lg shadow-md p-4 w-64  bg-white'>
                    <FaCheck className='mx-auto text-primary-color border-2 bg-gray-100 p-1 text-2xl rounded-full' />
                    <h1 className='text-sm font-bold text-primary-color'>Transparency</h1>
                    <p className='text-gray-700 text-xs font-semibold'>Develop a deep knowledge base of the current and past NEET UG competition.</p>
                </div>
            ),
            description: '',
            icon: <FaCheck className='text-green-500' />
        },
        {
            title: (
                <div className='border border-gray-300 rounded-lg shadow-md p-4 w-64 bg-white'>
                    <FaCheck className='mx-auto text-primary-color border-2 bg-gray-100 p-1 text-2xl rounded-full' />

                    <h1 className='text-sm font-bold text-primary-color'>Commitment</h1>
                    <p className='text-gray-700 text-xs font-semibold'>Know where you stand among 13,16,268 NEET UG qualifiers. Excel with unparalleled information at your fingertips!</p>
                </div>
            ),
            description: '',
            icon: <FaCheck className='text-green-500' />
        },
        {
            title: (
                <div className='border border-gray-300 rounded-lg shadow-md p-4 w-64 bg-white'>
                    <FaCheck className='mx-auto text-primary-color border-2 bg-gray-100 p-1 text-2xl rounded-full' />

                    <h1 className='text-sm font-bold text-primary-color'>Collaboration</h1>
                    <p className='text-gray-700 text-xs font-semibold'>Effectively plan your way through MCC and State Counselling processes with concrete, credible NEET UG data.</p>
                </div>
            ),
            description: '',
            icon: <FaCheck className='text-green-500' />
        },
        {
            title: (
                <div className='border border-gray-300 rounded-lg shadow-md p-4 w-64 bg-white'>
                    <FaCheck className='mx-auto text-primary-color border-2 bg-gray-100 p-1 text-2xl rounded-full' />

                    <h1 className='text-sm font-bold text-primary-color'>Quality</h1>
                    <p className='text-gray-700 text-xs font-semibold'>Make informed choices with NEET UG 2024 MCC and State Counselling timelines.</p>
                </div>
            ),
            description: '',
            icon: <FaCheck className='text-green-500' />
        },
        {
            title: (
                <div className='border border-gray-300 rounded-lg shadow-md p-4 w-64 bg-white'>
                    <FaCheck className='mx-auto text-primary-color border-2 bg-gray-100 p-1 text-2xl rounded-full' />

                    <h1 className='text-sm font-bold text-primary-color'>Integrity</h1>
                    <p className='text-gray-700 text-xs font-semibold'>Define your goals by knowing all the options for your NEET UG score. Use strategies tailored to your requirements.</p>
                </div>
            ),
            description: '',
            icon: <FaCheck className='text-green-500' />
        },
        {}

    ];
    useEffect(() => {
        const stepInterval = setInterval(() => {
            currVal < values.length - 1 && setCurrVal((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(stepInterval);
    }, [currVal]);
    return (
        <>
            <Container>
                
                <h1 className='text-primary-color text-4xl text-center font-bold'>Why <span className='text-yellow-500 font-extrabold'>Attend?</span></h1>
                <Divider className={'h-1 w-32 bg-yellow-500 mx-auto rounded-lg my-2'}/>
                <p className='text-center text-gray-700 font-semibold text-sm py-2'>Tips. Tricks. Techniques. Insights. Updates. Here's why you can't afford to miss out on our seminar!</p>
                <div className='max-w-screen-xl mx-auto'>

                    <Steps
                        direction="horizontal"
                        current={currVal}
                        items={values?.slice(0, 5)?.map((value, index) => ({
                            title: value.title,
                            className:"animate-rubberBand"
                            // icon: value.icon,

                        }))}

                        type='inline'
                        labelPlacement={'vertical'}
                        className=" mx-auto aboutUsStepper"
                    />
                </div>
            </Container>
        </>
    );
}

export default Why_Attend;