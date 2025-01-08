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
            <Container className={'bg-gray-200/40'}>

                <div className='flex justify-center '>
                    <div className='h-48 animateRight  w-48 rounded absolute '></div>
                    <div className='h-48   w-48 rounded absolute top-[20rem] left-[31.5rem]  bg-gray-200'></div>

                    <div className='relative left-5 top-5 flex items-center'>
                        <video className='w-[35rem] rounded ' src="https://videos.pexels.com/video-files/3141320/3141320-uhd_2560_1440_25fps.mp4" loop muted autoPlay></video>
                        <div className='max-w-screen-sm mx-6'>

                            <h1 className='text-3xl typewriter font-bold text-primary-color'>Your Trusted <span className='text-yellow-600 font-extrabold'><strong>NEET</strong> Counselling Partner</span></h1>

                            <hr className='h-1 bg-yellow-500 rounded-full w-20 my-2 ' />
                            <p className='text-gray-700 font-semibold py-2 text-sm '>Achieve your dream of becoming a doctor with expert guidance at every step. Our personalized <strong>NEET</strong> counseling services help you navigate the complex admission process, ensuring the best college and course selection based on your unique goals.</p>
                            <p className='text-gray-700 font-semibold py-2 text-sm'>Let us simplify your journey—trusted, reliable, and committed to your success.</p>
                            <button className='bg-yellow-600 text-white font-bold px-2 py-1 rounded-l-full rounded-r-full'>Get Started Today!</button>
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
