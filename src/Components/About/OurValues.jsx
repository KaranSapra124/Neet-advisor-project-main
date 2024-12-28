import React from 'react'
import { FaBalanceScale, FaHandshake, FaClipboardList, FaStar, FaRegSmileBeam, FaUsers, FaPaintBrush, FaBook } from 'react-icons/fa';
import Container from "../Helper/Container"

const OurValues = () => {
    const values = [
        {
            value: "Transparency",
            description: "NEET 2024 Career Counseling",
            icon: <FaBalanceScale />
        },
        {
            value: "Commitment",
            description: "NEET 2024 Career Counseling",
            icon: <FaHandshake />
        },
        {
            value: "Collaboration",
            description: "NEET 2024 Career Counseling",
            icon: <FaUsers />
        },
        {
            value: "Quality",
            description: "NEET 2024 Career Counseling",
            icon: <FaClipboardList />
        },
        {
            value: "Integrity",
            description: "NEET 2024 Career Counseling",
            icon: <FaStar />
        },
        {
            value: "Excellence",
            description: "NEET 2024 Career Counseling",
            icon: <FaRegSmileBeam />
        },
        {
            value: "Teamwork",
            description: "NEET 2024 Career Counseling",
            icon: <FaUsers />
        },
        {
            value: "Creativity",
            description: "NEET 2024 Career Counseling",
            icon: <FaPaintBrush />
        },
        {
            value: "Knowledge",
            description: "NEET 2024 Career Counseling",
            icon: <FaBook />
        }
    ];
    return (
        <>
            <Container>
                <div>
                    {
                        values?.map((elem,index)=>{
                            
                        })
                    }
                </div>
            </Container>
        </>
    )
}

export default OurValues