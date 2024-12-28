import React, { useEffect, useState } from 'react';
import Container from '../Helper/Container';
import "./Aboutus.css"

const WhoWeAre = () => {
    const [imageUrls, setImgUrls] = useState([
        "https://assets.codepen.io/1506195/unsplash-1.jpg",
        "https://assets.codepen.io/1506195/unsplash-7.jpg",
        "https://assets.codepen.io/1506195/unsplash-3.jpg",
        "https://assets.codepen.io/1506195/unsplash-2.jpg",
        "https://assets.codepen.io/1506195/unsplash-6.jpg",
        "https://assets.codepen.io/1506195/unsplash-0.jpg",
        "https://assets.codepen.io/1506195/unsplash-8.jpg"
    ]);

    useEffect(() => {
        const imgIntervals = setInterval(() => {
            setImgUrls(imageUrls?.map((elem, index) => {
                if (index === 0) {
                    return imageUrls[0] = imageUrls[1]
                } else if (index === imageUrls.length - 1) {
                    return imageUrls[imageUrls?.length - 1] = imageUrls[0]
                }
                return imageUrls[index] = imageUrls[index + 1]
            }))
        }, 3000)

        return () => clearInterval(imgIntervals)
    }, [])

    return (
        <>
            <Container >
                <h1 className='text-4xl pb-2 text-center text-primary-color font-bold'>Our Vision <span className='text-yellow-500 font-extrabold'>& Mission</span></h1>
                <div className='h-1 w-64 m-auto mb-5 bg-yellow-500'></div>
                <div className='flex justify-center space-x-2'>
                    <div className="flex shadow-xl    rounded-lg shadow-gray-300">
                        <img className='w-[15rem]   p-1 object-cover' src={imageUrls[0]} alt="" />
                        <div className=' columns-3 imgContainer'>
                            {imageUrls?.slice(1, imageUrls?.length)?.map((elem, index) => {
                                return <img className='w-[8rem] p-1' src={elem} key={index} />
                            })}
                        </div>
                    </div>
                    <div className='w-[30rem] space-y-8'>
                        <div className='shadow-xl m-1 p-2'>
                            <h2 className='text-lg font-bold text-primary-color py-1'>Mission</h2>
                            <p className='text-xs text-gray-700 font-semibold'>To empower medical students to make lifelong, responsible and meaningful choices in a global and dynamic world. We will accomplish this by building personal relationship in a professional yet helping environment.
                            </p>
                        </div>
                        <div className='shadow-xl m-1 p-2'>
                            <h2 className='text-lg font-bold text-primary-color py-1'>Vision</h2>
                            <p className='text-xs text-gray-700 font-semibold'>Be the most preffered choice for the medical students who are goal oriented, determined and wish to pursue medical education without any obstacles.
                            </p>
                        </div>
                    </div>

                </div>


            </Container>
        </>
    );
};

export default WhoWeAre;
