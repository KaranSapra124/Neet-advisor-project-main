import React from 'react'
import Container from "../Helper/Container"
import { FaDollarSign, FaRegClock, FaHeartbeat, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const Benefits = () => {
    const benefits = [
        {
            title: "Competitive Salary",
            description: "We offer a salary that reflects your skills and experience.",
            icon: <FaDollarSign />
        },
        {
            title: "Flexible Work Arrangements",
            description: "Enjoy the freedom of remote work and flexible hours.",
            icon: <FaRegClock />
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health benefits and wellness programs.",
            icon: <FaHeartbeat />
        },
        {
            title: "Professional Development",
            description: "Access to workshops, training, and resources to enhance your skills.",
            icon: <FaChalkboardTeacher />
        }
    ];
    return (
        <Container>
            <div className='flex  max-w-screen-lg mx-auto'>
                <div className='flex flex-wrap w-1/2'>
                    {
                        benefits?.map((elem, index) => {
                            return <div className='shadow-xl w-64 gap-1 hover:scale-110 transition-all duration-300 cursor-pointer  p-5 shadow-gray-200 flex justify-center items-center  flex-col'>
                                <div className='text-3xl py-2 text-primary-color '> {elem?.icon} </div>
                                <h2 className='text-gray-700 font-semibold  text-centery text-sm'>{elem?.title}</h2>
                                <p className='text-xs py-2 text-gray-700 font-normal'>{elem?.description}</p>

                            </div>
                        })
                    }
                </div>
                <div className='w-1/2 px-5'>
                    <h1 className='text-3xl text-primary-color font-semibold'>Your Life At <span className='text-yellow-500 font-bold'>Neet Advisor</span></h1>
                    <p className='text-gray-700 text-xs text-justify my-4'>At Neet Advisor, life is vibrant, collaborative, and purpose-driven. Our team is composed of passionate individuals who share a common goal: to empower aspiring medical students to achieve their dreams.
                    </p>
                    <p className='text-gray-700 text-xs text-justify my-4'>
                        Join us at Neet Advisor, where your contributions make a real difference, and every day is an opportunity to learn, grow, and inspire.
                    </p>
                    <p className='text-gray-700 text-xs text-justify my-4'>
                        We foster a culture of innovation and inclusivity, where every voice is heard and valued. Our open and flexible work environment encourages creativity and collaboration, allowing team members to thrive both personally and professionally.
                    </p>
                    <p className='text-gray-700 text-xs text-justify my-4'>
                        Regular team-building activities, workshops, and social events create a strong sense of community, making every day at Neet Advisor not just about work, but about building lasting relationships. We believe in work-life balance, offering flexible hours and remote work options to ensure our employees can excel in their roles while enjoying their personal lives.
                    </p>
                    <button className='bg-yellow-500 text-white font-bold p-2 text-xs rounded-l-full rounded-r-full'>Learn More</button>
                </div>
            </div>
        </Container>
    )
}

export default Benefits