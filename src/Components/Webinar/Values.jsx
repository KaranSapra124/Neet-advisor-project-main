import React from 'react'
import Container from "../Helper/Container"
import { Badge, Timeline } from 'antd'
import { TiTick } from 'react-icons/ti'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Values = () => {
    const data = [
        {
            label: <div className='w-full h-full flex  justify-center items-center my-20'><h1 className='text-4xl text-primary-color font-bold mt-2 flex items-center animate-pulse'>For Parents<span><FaArrowRight className='text-yellow-500 mx-2' /></span></h1></div>,
            color: "#201169",
            children: <>
                <ScrollAnimation animateIn='backInRight' duration={1.5} animateOnce animatePreScroll>

                    <div className='border max-w-screen-sm p-6 rounded-lg  m-4 shadow-md bg-white'>
                        <Badge className='bg-yellow-500 text-xs p-2 rounded-md text-white font-bold'>Mandatory</Badge>
                        <p className='text-gray-700 mt-2 text-xs font-semibold '>
                            Proven NEET exam scoring tricks, overview of Central & State Counselling, College & Medical Seat data.
                        </p>
                        <div className='flex max-[600px]:flex-wrap mt-2'>
                            <video className='w-64 rounded-lg shadow-md' autoPlay loop>
                                <source src="https://videos.pexels.com/video-files/6209572/6209572-sd_960_506_25fps.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <ul className='ml-4 list-disc'>
                                <li className='flex items-center text-sm mt-2'>
                                    <TiTick className='text-green-600 text-4xl ' />
                                    <span className='text-xs text-gray-700  text-justify ml-1'>Ace the NEET exam with winning strategies & learn past NEET Cut-Offs and Competition Trends.</span>
                                </li>
                                <li className='flex items-center text-sm mt-2'>
                                    <TiTick className='text-green-600 text-4xl ' />
                                    <span className='text-xs text-gray-700  text-justify ml-1'>Ace the NEET exam with winning strategies & learn past NEET Cut-Offs and Competition Trends.</span>
                                </li>
                                <li className='flex items-center text-sm mt-2'>
                                    <TiTick className='text-green-600 text-4xl ' />
                                    <span className='text-xs text-gray-700  text-justify ml-1'>Ace the NEET exam with winning strategies & learn past NEET Cut-Offs and Competition Trends.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
            </>
        },
        {
            color: "#201169",
            label: <div className='w-full h-full flex  justify-center items-center my-20'><h1 className='text-4xl text-primary-color font-bold mt-2 flex justify-center items-center flex-row-reverse animate-pulse '>For Students <span><FaArrowLeft className='text-yellow-500 mx-2' /></span> </h1></div>,
            children: <>
                <ScrollAnimation animateIn='backInLeft' animateOnce duration={1.5} animatePreScroll>

                    <div className='text-start border p-6 rounded-lg m-2 max-w-screen-sm shadow-md bg-white'>
                        <Badge className='bg-yellow-500 text-xs p-2 rounded-md text-white font-bold mb-2'>Mandatory</Badge>
                        <p className='text-gray-700 mt-1 text-xs font-semibold'>
                            Discover essential strategies for NEET exam success, including insights into Central & State Counselling processes, as well as comprehensive data on college and medical seat allocations.
                        </p>
                        <div className='flex mt-2'>
                            <video className='w-64 rounded-lg shadow-md' autoPlay loop>
                                <source src="https://videos.pexels.com/video-files/6209572/6209572-sd_960_506_25fps.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <ul className='ml-4 !font-normal '>
                                <li className='flex items-center text-xs mt-2'>
                                    <TiTick className='text-green-500 text-4xl' />
                                    <span className='text-xs text-gray-700 text-justify ml-1'>Equip your child with effective strategies to excel in the NEET exam and understand past cut-off trends.</span>
                                </li>
                                <li className='flex items-center text-xs mt-2'>
                                    <TiTick className='text-green-500 text-4xl' />
                                    <span className='text-xs text-gray-700 text-justify ml-1'>Stay informed with the latest data on medical college seat availability to help your child make informed decisions.</span>
                                </li>
                                <li className='flex items-center text-xs mt-2'>
                                    <TiTick className='text-green-500 text-4xl' />
                                    <span className='text-xs text-gray-700 text-justify ml-1'>Gain insights into the NEET preparation journey, ensuring your child is well-prepared for the challenges ahead.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
            </>
        }

    ]
    return (
        <Container className={"bg-gray-100"}>
            <div >
                <h1 className='text-center text-primary-color text-4xl font-bold'>Who Is This Webinar <span className='text-yellow-500 font-extrabold'>For ?</span></h1>
            </div>
            <div className='mt-10'>
                <Timeline items={data} mode='alternate' />
            </div>
        </Container>
    )
}

export default Values