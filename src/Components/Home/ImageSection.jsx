import React, { useState } from 'react'
import Container from '../Helper/Container';
import { Carousel } from 'antd';

const ImageSection = () => {
    const [images, setImages] = useState([
        { "imageUrl": "https://neetadvisor.com/assets/images/gallery/country/6.webp", "imageAlt": "Image 1" },
        { "imageUrl": "https://neetadvisor.com/assets/images/gallery/country/7.webp", "imageAlt": "Image 2" },
        { "imageUrl": "https://neetadvisor.com/assets/images/gallery/country/8.webp", "imageAlt": "Image 3" },
        { "imageUrl": "https://neetadvisor.com/assets/images/gallery/country/9.webp", "imageAlt": "Image 4" },
        { "imageUrl": "https://neetadvisor.com/assets/images/gallery/country/10.webp", "imageAlt": "Image 5" },
    ]);

    return (
        // <Container >
        <div className=" w-1/2 mx-auto px-4  ">
            <div className="space-y-8">
                {/* First Carousel */}
                <div className="relative">
                    {/* Gradient Overlay - Left */}
                    <div className="absolute   top-0 w-[25rem]  -ml-10 h-full bg-gradient-to-r from-white to-transparent z-10" />

                    {/* Gradient Overlay - Right */}
                    <div className="absolute  right-0 top-0 w-[20rem] rotate-180 -mr-[2rem] h-full bg-gradient-to-r from-white to-transparent z-10" />

                    <Carousel
                        className="relative overflow-hidden -mx-2"
                        slidesToShow={4}
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
                                        className="w-full  h-40  object-cover transition-transform duration-300 group-hover:scale-110"
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
                    <div className="absolute   top-0 w-[20rem] -ml-10 h-full bg-gradient-to-r from-[#FFFDEC] to-transparent z-10" />

                    {/* Gradient Overlay - Right */}
                    <div className="absolute right-0 top-0  -mr-[1rem] w-[20rem] h-full bg-gradient-to-l from-[#FFFDEC] to-transparent z-10" />

                    <Carousel
                        infinite={true}
                        className="relative overflow-hidden -mx-2"
                        slidesToShow={4}
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