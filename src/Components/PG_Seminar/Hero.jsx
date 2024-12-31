import React, { useState } from 'react'
import Root from '../Helper/Root'
import Container from "../Helper/Container"
import "./Pg_Seminar.css"
const Hero = () => {
    const [seminarImages, setSeminarImages] = useState([
        { id: 1, url: "https://picsum.photos/200/300?random=1", title: "Image 1" },
        { id: 2, url: "https://picsum.photos/200/300?random=2", title: "Image 2" },
        { id: 3, url: "https://picsum.photos/200/300?random=3", title: "Image 3" },
        { id: 4, url: "https://picsum.photos/200/300?random=4", title: "Image 4" },
        { id: 5, url: "https://picsum.photos/200/300?random=5", title: "Image 5" },
        { id: 6, url: "https://picsum.photos/200/300?random=6", title: "Image 6" },
        { id: 7, url: "https://picsum.photos/200/300?random=7", title: "Image 7" },
        { id: 8, url: "https://picsum.photos/200/300?random=8", title: "Image 8" },
        { id: 9, url: "https://picsum.photos/200/300?random=9", title: "Image 9" },
        // { id: 10, url: "https://picsum.photos/200/300?random=10", title: "Image 10" }
    ])
    return (
        <>
            <Container className={'bg-gray-200'}>

                <h1 className='text-primary-color font-bold text-4xl text-center'>NEET UG 2024 : <span className='text-yellow-500 font-semibold'>All About Central & State Counselling Process!</span></h1>
                <div className='max-w-screen-lg my-10 flex justify-evenly  items-center mx-auto'>
                    <div className='flex flex-wrap h-64 w-64  shadow-2xl   border border-gray-200 rounded justify-center items-center'>
                        {seminarImages?.map((elem, index) => {
                            return <img className={`w-20 ${index === 3 && 'animate-compactImage-4'} ${index === 5 && 'animate-compactImage-5'} ${index === 0 && 'animate-compactImage-1-reverse'}  ${index === 1 && 'animate-compactImage-1'} ${index === 2 && 'animate-compactImage-2'} ${index === 6 && 'animate-compactImage-6'} ${index === 8 && 'animate-compactImage-8'} m-[0.1rem] cursor-pointer  h-20`} style={{
                                background: `url(${elem?.url})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: "no-repeat"
                            }} key={elem?.id} />
                        })}
                    </div>
                    <div className='w-[40rem] flex flex-col justify-center items-start'>
                        <p className='text-md font-semibold text-gray-700 my-5'>Do justice to your NEET UG score with our Expert-Led Seminars. Gain Essential Insights and Strategic Guidance from Renowned NEET Counselling experts.</p>
                        <button className='bg-yellow-500 rounded-l-full rounded-r-full  w-fit text-white font-extrabold px-4 text-sm p-2 rounded'>Book Now</button>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Hero