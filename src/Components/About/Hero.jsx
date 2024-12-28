import React from 'react';
import { FaGraduationCap, FaAward, FaUsers, FaBook, FaArrowRight } from 'react-icons/fa';
import { MdSchool, MdLocationOn } from 'react-icons/md';
import "./Aboutus.css";
import { GrUserExpert } from 'react-icons/gr';
import { PiCalendarStarDuotone } from 'react-icons/pi';
import Container from '../Helper/Container';

const Hero = () => {
    return (
        <>
            <Container>

                <div className='flex'>
                    <div className='h-60 animateRight w-60 rounded absolute '></div>
                    <div className='h-60 animateLeft w-60 rounded absolute top-[19rem] left-[31.5rem]  bg-gray-200'></div>

                    <div className='relative left-5 top-5 flex items-center'>
                        <video className='max-w-screen-sm rounded ' src="https://videos.pexels.com/video-files/3141320/3141320-uhd_2560_1440_25fps.mp4" loop muted autoPlay></video>
                        <div className='max-w-screen-sm mx-6'>

                            <h1 className='text-3xl typewriter font-bold text-primary-color'>Your Trusted <span className='text-yellow-500 font-extrabold'><strong>NEET</strong> Counseling Partner</span></h1>

                            <hr className='h-1 bg-yellow-500 w-20 my-2 ' />
                            <p className='text-gray-700 font-semibold py-2 '>Achieve your dream of becoming a doctor with expert guidance at every step. Our personalized <strong>NEET</strong> counseling services help you navigate the complex admission process, ensuring the best college and course selection based on your unique goals.</p>
                            <p className='text-gray-700 font-semibold py-2'>Let us simplify your journey—trusted, reliable, and committed to your success.</p>
                            <button className='bg-yellow-600 text-white font-bold p-2 rounded'>Get Started Today!</button>
                            <div className='flex my-4'>
                                <div className='flex items-center text-sm'><GrUserExpert className='text-xl text-primary-color ' /><span className='mx-2 text-gray-700 font-semibold'>Expert Guidance
                                </span> </div>
                                <div className='flex items-center text-sm'><PiCalendarStarDuotone className='text-xl text-primary-color ' /><span className='mx-2 text-gray-700 font-semibold'>Educational Events
                                </span></div>
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </>
    );
};

export default Hero;
