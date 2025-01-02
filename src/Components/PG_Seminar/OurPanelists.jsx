import React from 'react'
import Container from "../Helper/Container"
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import Divider from '../Helper/Divider'
const OurPanelists = () => {
    return (
        <>
            <Container >
                <div className='text-center py-1'>
                    <h1 className='text-primary-color text-4xl font-bold py-2'>Our <span className='text-yellow-500 font-extrabold'>Panelists</span></h1>
                    <p className='text-gray-700  font-semibold text-xs'>Learn from beacons of the medical field - experienced Doctors & NEET Counselling experts.</p>
                </div>
                <Divider className={"h-1 w-32 bg-yellow-500 mx-auto rounded-full my-4"}/>
                <div className='max-w-xl flex justify-between mx-auto'>
                    <div className="max-w-xs bg-gray-200/90  flex  rounded-lg shadow-xl overflow-hidden">
                        <div className='p-4'>
                            <div className="aspect-auto ">
                                <img
                                    src="Vipin-Bansal-square.jpg"
                                    alt="Vipin Bansal"
                                    className="w-32 mx-auto   rounded-full h-32 shadow-gray-700 shadow-lg object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-gray-700 text-sm font-semibold">Founder & CEO</p>
                            </div>
                        </div>
                        <div className='bg-primary-color '>
                            <FaTwitter className='text-white hover:text-primary-color hover:rounded-[10%] hover:bg-white transition-all duration-300 cursor-pointer   mx-2 my-4 p-1 text-[2rem]' />
                            <FaLinkedin className='text-white hover:text-primary-color hover:rounded-[10%] hover:bg-white transition-all duration-300 cursor-pointer   mx-2 my-4 p-1 text-[2rem]' />
                        </div>
                    </div>
                    <div className="max-w-xs bg-gray-200/90  flex  rounded-lg shadow-xl overflow-hidden">
                        <div className='p-4'>
                            <div className="aspect-auto ">
                                <img
                                    src="vivek-singh-square.jpg"
                                    alt="Vivek Singh"
                                    className="w-32 mx-auto   rounded-full h-32 shadow-gray-700 shadow-lg object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-gray-700 text-sm font-semibold">Co-Founder</p>
                            </div>
                        </div>
                        <div className='bg-primary-color '>
                            <FaTwitter className='text-white hover:text-primary-color hover:rounded-[10%] hover:bg-white transition-all duration-300 cursor-pointer   mx-2 my-4 p-1 text-[2rem]' />
                            <FaLinkedin className='text-white hover:text-primary-color hover:rounded-[10%] hover:bg-white transition-all duration-300 cursor-pointer   mx-2 my-4 p-1 text-[2rem]' />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurPanelists