import { Carousel, Spin } from 'antd';
import React, { useEffect, useState } from 'react'

const HappyClients = () => {
    let count = 0;
    const [images, setImages] = useState([
        { "imageUrl": "https://picsum.photos/200/300?image=0", "imageAlt": "Image 1" },
        { "imageUrl": "https://picsum.photos/200/300?image=1", "imageAlt": "Image 2" },
        { "imageUrl": "https://picsum.photos/200/300?image=2", "imageAlt": "Image 3" },
        { "imageUrl": "https://picsum.photos/200/300?image=3", "imageAlt": "Image 4" },
        { "imageUrl": "https://picsum.photos/200/300?image=4", "imageAlt": "Image 5" },
        { "imageUrl": "https://picsum.photos/200/300?image=5", "imageAlt": "Image 6" },
        { "imageUrl": "https://picsum.photos/200/300?image=6", "imageAlt": "Image 7" },
        { "imageUrl": "https://picsum.photos/200/300?image=7", "imageAlt": "Image 8" },
        { "imageUrl": "https://picsum.photos/200/300?image=8", "imageAlt": "Image 9" },
        { "imageUrl": "https://picsum.photos/200/300?image=9", "imageAlt": "Image 10" },
        { "imageUrl": "https://picsum.photos/200/300?image=10", "imageAlt": "Image 11" },
        { "imageUrl": "https://picsum.photos/200/300?image=11", "imageAlt": "Image 12" },
        { "imageUrl": "https://picsum.photos/200/300?image=12", "imageAlt": "Image 13" },
        { "imageUrl": "https://picsum.photos/200/300?image=13", "imageAlt": "Image 14" },
        { "imageUrl": "https://picsum.photos/200/300?image=14", "imageAlt": "Image 15" },
        { "imageUrl": "https://picsum.photos/200/300?image=15", "imageAlt": "Image 16" },
        { "imageUrl": "https://picsum.photos/200/300?image=16", "imageAlt": "Image 17" },
        { "imageUrl": "https://picsum.photos/200/300?image=17", "imageAlt": "Image 18" },
        { "imageUrl": "https://picsum.photos/200/300?image=18", "imageAlt": "Image 19" },
        { "imageUrl": "https://picsum.photos/200/300?image=19", "imageAlt": "Image 20" }
    ]);
    const [isLoading, setIsLoading] = useState(true)
    const getPartitions = (arr, num) => {
        let nums = [0]
        for (let i = 1; i < arr.length; i++) {
            if (i % num !== 0) {
                count++;
            } else {
                nums.push(count);
                count++;
            }
        }
        return nums;
    }
    const [partitions, setPartitions] = useState(getPartitions(images, 4))
    useEffect(() => {
        const loadingInterval = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        return () => clearTimeout(loadingInterval, 2500)
    }, [])

    return (
        <div className="container mx-auto px-4 ">
            {/* Elegant Header */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl text-primary-color font-bold tracking-tight">
                    Our Happy <span className="text-yellow-500 italic font-extrabold">Clients</span>
                </h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                <p className='text-gray-700 font-semibold text-sm whitespace-pre-wrap'>Thanks to our dedication and innovation, we have earned the trust of our clients, <br /> consistently exceeding expectations and setting new standards of excellence.</p>
            </div>

            {!isLoading ? <div className={`grid grid-cols-${partitions?.length - 1}  max-w-screen-xl`}>
                {partitions?.map((_, index) => {
                    return <Carousel autoplay autoplaySpeed={2000} rtl={index % 2 === 0 ? true : false} dots={false} vertical={true} slidesToShow={3} infinite >
                        {
                            images?.slice(partitions[index], index + 1 < partitions.length ? partitions[index + 1] + 1 : partitions.length)?.map((ele, ind) => {
                                // {console.log(ele,ind,"FIRST")}
                                return <img className='w-64 h-64 m-2' src={ele?.imageUrl} />
                            })
                        }
                    </Carousel>
                })}
            </div> : <div className='flex justify-center items-center'>
                <Spin className='m-aut' />
            </div>}
        </div>
    )
}

export default HappyClients