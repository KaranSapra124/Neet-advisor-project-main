import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import ScrollAnimation from 'react-animate-on-scroll';
import { imageArray } from '../../Utils/imagesArray';
import { Rate } from 'antd';
// import "./custom.css";

const Hero = () => {
    // Store randomized positions in the state
    const [positions, setPositions] = useState([]);
    const [ind, setInd] = useState(0)

    useEffect(() => {
        // Randomly generate positions for each image when the component is mounted
        const randomPositions = imageArray.map(() => ({
            right: Math.random() * 20, // Random value between 0 and 100
            left: Math.random() * 20, // Random value between 0 and 100
        }));
        setPositions(randomPositions);
    }, []);

    useEffect(() => {
        const interVal = setInterval(() => {
            // console.log(ind)
            ind <= imageArray.length && setInd((prev) => prev + 1)
        }, 2000)

        return () => {
            clearInterval(interVal)
        }
    }, [])

    // useEffect(() => console.log(positions), [positions])
    return (
        // <ScrollAnimation animateIn='zoomIn' className='flex' duration={1} initiallyVisible={true}>
        <div className='flex p-20 bg-transparent'>

            <div className="py-20 animateHeroContent">
                <h1 className="text-4xl  font-bold mb-5 primary">
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
                        <h1 className="text-3xl font-bold mb-2">
                            50K+
                        </h1>
                        <p className="text-lg">
                            Sessions Completed
                        </p>
                    </div>
                    <div className="flex items-center gabriela-regular">
                        <FcGoogle className="text-4xl mr-3" />
                        <div className="flex flex-col">
                            <div className="flex mb-2">
                                <Rate count={5} value={5} />
                            </div>
                            <p className="font-bold text-lg">
                                5/ 5 | 4406 Reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative  animateHeroImage h-[41rem]  overflow-hidden m-auto'>
                {/* Top Blur Effect Div */}
                <div className='absolute blurEffect z-[999]'></div>

                <div className='animateHero  grid-cols-1   justify-center     grid items-center m-auto'>
                    {imageArray?.map((elem, index) => {
                        return (
                            <div
                                className={` ${index % 2 == 0 ? `ml-72 -mt-10` : `mr-72 -mt-10 `
                                    } rounded-xl image-container w-fit mx-6 my-5 hover:scale-105 transition-all cursor-pointer shadow-lg shadow-black flex justify-center flex-col items-center `}

                                style={{
                                    animation: "fadeInLeft  5s normal ease",

                                }}
                            >
                                <img className={`w-40 rounded-t-xl`} src={elem.url} />
                                <div className='flex rounded-b-xl w-full items-center bg-yellow-500'>
                                    <img className='w-8 p-2' src={elem.logo} alt='' />
                                    <h4 className='text-white m-auto font-semibold'>{elem.universityName}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Blur Effect Div */}
                <div className='absolute  bottomBlurEffect z-[99] '></div>
            </div>




            <div className='absolute animateBgHeroImage   left-[58.2rem] h-[41rem]  overflow-hidden  m-auto z-[-1] '>
                <div className='animateHero   grid grid-cols-3  items-center m-auto'>
                    {imageArray?.map((elem, index) => {
                        return (
                            <div className={` ${index % 2 == 0 ? `ml-30 w-[6.2rem]` : index % 2 !== 0 && index % 3 == 0 ? `mr-30 w-[5.5rem]  ` : " mr-10 mt-[10rem] w-[6rem]"
                                } rounded-xl shadow-xl  border mx-10 my-5 hover:scale-105 transition-all cursor-pointer  flex justify-center flex-col items-center  w-[5rem]`}>
                                <img className={`w-40 rounded-xl`} src={elem.url} />
                                {/* <div className='flex w-full items-center bg-yellow-500'>
                                    <img className='w-8 p-2' src={elem.logo} alt="" />
                                    <h4 className='text-white text-[0.5rem] m-auto font-semibold'>{elem.universityName}</h4>
                                </div> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >

        // </ScrollAnimation>
    )
}

export default Hero