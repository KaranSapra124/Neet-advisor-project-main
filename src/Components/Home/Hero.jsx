import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Rate } from 'antd';
import Container from "../Helper/Container";
import Lottie from 'lottie-react';

import medicalReception from "./Medical Clipboard.json"
import ImageContainer from "../Home/ImageSection"

const Hero = () => {
    return (
        <Container  >
            {/* Lottie Animation */}

            <div className='flex justify-center items-center relative z-10'>
                <div className="w-full flex items-center flex-col animateHeroContent">
                    <div className='flex items-center justify-center'>
                        <h1 className="text-3xl  font-medium  primary">
                            Complete Handholding for <br /> <span className="text-yellow-600 font-bold"><span className='font-extrabold'>NEET</span> Counselling Guidance</span>
                        </h1>
                        <Lottie
                            className='z-0 w-[8rem]'
                            animationData={medicalReception}
                            loop={true}
                        /></div>
                    <div className="text-xs text-gray-700">
                        <p className="">
                            <span className='font-extrabold'> 23,33,863</span > students in India aspire to study MBBS and BDS & AYUSH.Only 8.3% could achieve it in 2024.
                        </p>
                        <p className='text-xs py-2'>
                            Complete <span className='font-extrabold'>NEET</span> Counselling Guidance till Admission. NEET UG & NEET PG Counselling Experts Since 2016.
                        </p>
                    </div>
                    <button className="bg-yellow-600  hover:bg-yellow-500 text-white transition-all duration-300 font-bold py-2 px-4 rounded-lg mt-5">
                        Book a Free session
                    </button>
                    <div className="flex py-5">
                        <div className="mr-10 gabriela-regular">
                            <h1 className="text-2xl font-bold mb-2 text-indigo-950">50K+</h1>
                            <p className="text-md text-gray-700 font-semibold">Sessions Completed</p>
                        </div>
                        <div className="flex items-center ">
                            <FcGoogle className="text-4xl mr-3" />
                            <div className="flex flex-col">
                                <div className="flex mb-2">
                                    <Rate className='text-lg' count={5} value={5} />
                                </div>
                                <p className="font-bold text-md text-gray-700 ">5 / 5 | 4406 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageContainer />
            </div>
        </Container>
    );
};

export default Hero;
