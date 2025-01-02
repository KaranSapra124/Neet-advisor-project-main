import React from 'react'
import Container from '../Helper/Container'
import "./Ug_seminar.css"
import { FaGraduationCap } from 'react-icons/fa6'
import { FaShieldAlt } from 'react-icons/fa'
const Hero = () => {

    return (
        <>
            <Container>
                <div className='flex items-center justify-center gap-4'>
                    <video className='rounded-xl' src='https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4' autoPlay loop />
                    <div>
                        <h1 className='text-4xl text-primary-color font-extrabold'>NEET UG 2024</h1>
                        <div className='text-3xl font-bold mt-2 text-yellow-500'>All About Central & State Counselling Process! </div>
                        <p className='text-sm mt-5'>Do justice to your NEET UG score with our Expert-Led Seminars. Gain Essential Insights and Strategic Guidance from Renowned NEET Counselling experts.</p>
                        <div className='p-2 rounded-lg bg-yellow-500 text-sm w-fit text-white font-bold mt-5'>Book Now</div>
                        <div className='flex my-5 gap-2'>
                            <div className='flex  items-center text-xs'>
                                <FaGraduationCap className='text-primary-color text-lg' />
                                <span className='px-2 text-gray-700 font-semibold'>20,000+ Attended</span>
                            </div>
                            <div className='flex  items-center text-xs'>
                                <FaShieldAlt className='text-primary-color text-lg' />
                                <span className='px-2 text-gray-700 font-semibold'>20,000+ Trusted</span>
                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Hero