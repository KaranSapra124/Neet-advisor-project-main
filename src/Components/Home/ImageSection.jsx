import React, { useState } from 'react'
import Container from '../Helper/Container';
import { Carousel } from 'antd';

const ImageSection = () => {
    const [images, setImages] = useState([
        { "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg", "imageAlt": "Image 1" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/2.jpg", "imageAlt": "Image 2" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg", "imageAlt": "Image 3" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/4.jpg", "imageAlt": "Image 4" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg", "imageAlt": "Image 5" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/6.jpg", "imageAlt": "Image 6" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg", "imageAlt": "Image 7" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/8.jpg", "imageAlt": "Image 8" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg", "imageAlt": "Image 9" },
        { "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg", "imageAlt": "Image 10" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/1.jpg", "imageAlt": "Image 11" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg", "imageAlt": "Image 12" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/3.jpg", "imageAlt": "Image 13" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg", "imageAlt": "Image 14" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/5.jpg", "imageAlt": "Image 15" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg", "imageAlt": "Image 16" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/7.jpg", "imageAlt": "Image 17" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/8.jpg", "imageAlt": "Image 18" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/9.jpg", "imageAlt": "Image 19" },
        { "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg", "imageAlt": "Image 20" }
    ]);
    return (
        // <Container >
        <div className="w-full max-w-5xl mx-auto px-4 pb-20">
            <div className="space-y-8">
                {/* First Carousel */}
                <div className="relative">
                    {/* Gradient Overlay - Left */}
                    <div className="absolute   top-0 w-[20rem] -ml-10 h-full bg-gradient-to-r from-white to-transparent z-10" />

                    {/* Gradient Overlay - Right */}
                    <div className="absolute  right-0 top-0 w-[20rem] rotate-180 -mr-[2rem] h-full bg-gradient-to-r from-white to-transparent z-10" />

                    <Carousel
                        className="relative overflow-hidden -mx-2"
                        slidesToShow={5}
                        dots={false}
                        autoplay
                        autoplaySpeed={2000}
                        infinite={true}
                    >

                        {images.slice(0, 10).map((elem, index) => (
                            <div key={index} className="px-2">
                                <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <img
                                        src={elem?.imageUrl}
                                        alt={elem.imageAlt}
                                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Second Carousel - Reverse Direction */}
                <div className="relative">
                    {/* Gradient Overlay - Left */}
                    <div className="absolute   top-0 w-[20rem] -ml-10 h-full bg-gradient-to-r from-white to-transparent z-10" />

                    {/* Gradient Overlay - Right */}
                    <div className="absolute right-0 top-0  -mr-[1rem] w-[20rem] h-full bg-gradient-to-l from-white to-transparent z-10" />

                    <Carousel
                        infinite={true}
                        className="relative overflow-hidden -mx-2"
                        slidesToShow={5}
                        dots={false}
                        autoplay
                        autoplaySpeed={2000}
                        rtl
                    >
                        {images.slice(0, 10).map((elem, index) => (
                            <div key={index} className="px-2">
                                <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <img
                                        src={elem?.imageUrl}
                                        alt={elem.imageAlt}
                                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
        // </Container>
    )
}

export default ImageSection