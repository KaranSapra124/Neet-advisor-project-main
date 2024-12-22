import React, { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Rate } from 'antd';
import Container from "../Helper/Container";
import { imageArray } from '../../Utils/imagesArray';

const Hero = () => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        // Combine both effects into one and directly update selected
        const generateRandomIndex = setInterval(() => {
            setSelected(prevSelected => {
                const newIndex = Math.floor(Math.random() * 5);
                // Avoid setting the same index
                return prevSelected === newIndex ? prevSelected : newIndex;
            });
        }, 2000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(generateRandomIndex);
    }, []); // Empty dependency array ensures this only runs once

    return (
        <Container>
            <div className='flex bg-transparent'>
                <div className="w-1/2 animateHeroContent">
                    <h1 className="text-4xl font-bold mb-5 primary">
                        Complete Handholding for <br /> <span className="text-yellow-400">NEET Counselling Guidance</span>
                    </h1>
                    <div className="mt-5 text-lg gabriela-regular">
                        <p className="mb-3 text-[1.1rem]">
                            <strong> 23,33,863</strong> students in India aspire to study MBBS and BDS & AYUSH.Only 8.3% could achieve it in 2024.
                        </p>
                        <p className='text-[1.0rem]'>
                            Complete NEET Counselling Guidance till Admission. NEET UG & NEET PG Counselling Experts Since 2016.
                        </p>
                    </div>
                    <button className="bg-yellow-400 gabriela-regular hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-5">
                        Book a Free session
                    </button>
                    <div className="flex mt-10">
                        <div className="mr-10 gabriela-regular">
                            <h1 className="text-3xl font-bold mb-2">50K+</h1>
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

                <div className='animateHeroImage h-[41rem] w-1/2 overflow-hidden m-auto relative'>
                    <div className='absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/50 to-transparent z-10'></div>

                    <div className='animateHero flex flex-col justify-center items-center m-auto space-y-6 p-4'>
                        <div className='flex space-x-4 w-full justify-center'>
{/* {console.log(selected,'SELLECED')} */}
                            {imageArray?.map((elem, index) => (
                                <div
                                    key={index}
                                    className={`
                                        group
                                        ${index % 2 === 0 ? 'mt-10' : 'mt-20'}
                                        rounded-2xl
                                        w-48
                                        transition-all
                                        duration-300
                                        ease-in-out
                                        cursor-pointer
                                        shadow-xl
                                        shadow-gray-300
                                        hover:shadow-2xl
                                        border-2
                                        h-full
                                        ${selected === index ? "animate-scaleUp" : ""}
                                    `}
                                >
                                    {console.log(selected === index, selected, 'INDEX')}
                                    <div className='relative overflow-hidden rounded-t-2xl'>
                                        <div className='rounded-xl'>
                                            <img
                                                className={`
                                                    w-52 
                                                    h-28 
                                                    object-cover 
                                                    transform 
                                                    transition-transform 
                                                    duration-300
                                                    ${index % 2 !== 0 ? 'brightness-75' : 'group-hover:scale-110'}
                                                `}
                                                src={elem.url}
                                                alt={elem.universityName}
                                            />
                                            {selected === index && (
                                                <div className='absolute inset-0 flex items-center justify-center'>
                                                    <span className='text-white text-sm font-bold'>Selected</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='flex items-center w-28 p-2 rounded-b-2xl'>
                                        {/* Optional content */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex space-x-4 w-full justify-center'>

                            {imageArray?.map((elem, index) => (
                                <div
                                    key={index}
                                    className={`
            group
            ${index % 2 === 0 ? 'mt-10' : 'mt-20'}
            rounded-2xl
            w-48
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
            shadow-xl
            shadow-gray-300
            hover:shadow-2xl
            border-2
            h-full
            ${selected === index ? "image-container" : ""}
        `}
                                >
                                    {console.log(selected === index, selected, 'INDEX')}
                                    <div className='relative overflow-hidden rounded-t-2xl'>
                                        <div className='rounded-xl'>
                                            <img
                                                className={`
                        w-52 
                        h-28 
                        object-cover 
                        transform 
                        transition-transform 
                        duration-300
                        ${index % 2 !== 0 ? 'brightness-75' : 'group-hover:scale-110'}
                    `}
                                                src={elem.url}
                                                alt={elem.universityName}
                                            />
                                            {selected === index && (
                                                <div className='absolute inset-0 flex items-center justify-center'>
                                                    <span className='text-white text-sm font-bold'>Selected</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='flex items-center w-28 p-2 rounded-b-2xl'>
                                        {/* Optional content */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/50 to-transparent z-10'></div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;