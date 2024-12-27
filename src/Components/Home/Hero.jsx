import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Rate } from 'antd';
import Container from "../Helper/Container";
import Lottie from 'lottie-react';
import medicalFile from "./Hospital Reception.json";
import medicalBoard from "./Hypertension Alert.json"
import medicalReception from "./Medical Clipboard.json"

const Hero = () => {
    return (
        <Container className="relative">
            {/* Lottie Animation */}

            <div className='flex justify-center items-center relative z-10'>
                <div className="w-full flex justify-center items-center flex-col animateHeroContent">
                    <div className='flex items-center justify-center'>                   
                         <h1 className="text-4xl font-bold  primary">
                        Complete Handholding for <br /> <span className="text-yellow-400"><span className='font-bold'>NEET</span> Counselling Guidance</span>
                    </h1>
                        <Lottie
                            className='z-0 w-[10rem]'
                            animationData={medicalReception}
                            loop={true}
                        /></div>
                    <div className="text-sm text-gray-700">
                        <p className="">
                            <strong> 23,33,863</strong> students in India aspire to study MBBS and BDS & AYUSH.Only 8.3% could achieve it in 2024.
                        </p>
                        <p className='text-sm'>
                            Complete <span className='font-[900]'>NEET</span> Counselling Guidance till Admission. NEET UG & NEET PG Counselling Experts Since 2016.
                        </p>
                    </div>
                    <button className="bg-yellow-400 gabriela-regular hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mt-5">
                        Book a Free session
                    </button>
                    <div className="flex mt-10">
                        <div className="mr-10 gabriela-regular">
                            <h1 className="text-3xl font-bold mb-2 text-indigo-950">50K+</h1>
                            <p className="text-lg">Sessions Completed</p>
                        </div>
                        <div className="flex items-center gabriela-regular">
                            <FcGoogle className="text-4xl mr-3" />
                            <div className="flex flex-col">
                                <div className="flex mb-2">
                                    <Rate count={5} value={5} />
                                </div>
                                <p className="font-bold text-lg">5/ 5 | 4406 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
