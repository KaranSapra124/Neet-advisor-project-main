import React, { useEffect, useState } from 'react';
import { FaBalanceScale, FaHandshake, FaClipboardList, FaStar, FaRegSmileBeam, FaUsers, FaPaintBrush, FaBook } from 'react-icons/fa';
import Container from "../Helper/Container";
import { Steps } from 'antd';

const OurValues = () => {
    const [currVal, setCurrVal] = useState(0)
    const values = [
        {
            title: "Transparency",
            description: "NEET 2024 Career Counseling",
            icon: <FaBalanceScale />
        },
        {
            title: "Commitment",
            description: "NEET 2024 Career Counseling",
            icon: <FaHandshake />
        },
        {
            title: "Collaboration",
            description: "NEET 2024 Career Counseling",
            icon: <FaUsers />
        },
        {
            title: "Quality",
            description: "NEET 2024 Career Counseling",
            icon: <FaClipboardList />
        },
        {
            title: "Integrity",
            description: "NEET 2024 Career Counseling",
            icon: <FaStar />
        },
        {
            title: "Excellence",
            description: "NEET 2024 Career Counseling",
            icon: <FaRegSmileBeam />
        },
        {
            title: "Teamwork",
            description: "NEET 2024 Career Counseling",
            icon: <FaUsers />
        },
        {
            title: "Creativity",
            description: "NEET 2024 Career Counseling",
            icon: <FaPaintBrush />
        },
        {
            title: "Knowledge",
            description: "NEET 2024 Career Counseling",
            icon: <FaBook />
        }
    ];

    useEffect(() => {
        const stepInterval = setInterval(() => {
            currVal < values.length && setCurrVal((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(stepInterval)
    }, [])

    return (
        <Container className={"bg-gray-100/50"}>
            <div className=" max-w-screen-xl m-auto">
                <div className='pb-5'>
                    <h1 className='text-center text-4xl font-bold text-primary-color'>Our Values , <span className='text-yellow-500 font-extrabold'>Which Defined Us</span></h1>
                    <p className='text-gray-700 font-semibold text-xs pt-2 text-center'>Our values represent the core principles that guide our actions, decisions, and relationships. They reflect our commitment to integrity, respect, innovation, and collaboration, shaping the way we interact with each other and the world.</p>
                <div className='h-1 w-64 mx-auto my-4 rounded-lg bg-yellow-500'></div>
                </div>
                <Steps
                    direction="horizontal"
                    current={currVal}
                    labelPlacement='vertical'
                    // progressDot
                    items={values.map((value, index) => ({
                        title: value.title,
                        icon: value?.icon,
                    }))}


                    className="max-w-screen-xl mx-auto aboutUsStepper "
                // rootClassName='text-primary-color '
                />
            </div>
        </Container>
    );
}

export default OurValues;
