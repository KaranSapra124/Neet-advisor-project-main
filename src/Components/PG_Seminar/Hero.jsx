import React from 'react';
import Container from "../Helper/Container";
import Divider from '../Helper/Divider';

const Hero = () => {
    const seminarImages = [
        { id: 1, url: "https://picsum.photos/200/300?random=1", title: "Image 1" },
        { id: 2, url: "https://picsum.photos/200/300?random=2", title: "Image 2" },
        { id: 3, url: "https://picsum.photos/200/300?random=3", title: "Image 3" },
        { id: 4, url: "https://picsum.photos/200/300?random=4", title: "Image 4" },
        { id: 5, url: "https://picsum.photos/200/300?random=5", title: "Image 5" },
        { id: 6, url: "https://picsum.photos/200/300?random=6", title: "Image 6" },
        { id: 7, url: "https://picsum.photos/200/300?random=7", title: "Image 7" },
        { id: 8, url: "https://picsum.photos/200/300?random=8", title: "Image 8" },
        { id: 9, url: "https://picsum.photos/200/300?random=9", title: "Image 9" },
    ];

    return (
        <Container className="bg-gray-100 py-8">
            <h1 className="text-primary-color max-w-screen-md mx-auto font-bold text-3xl text-center">
                NEET UG 2024
            </h1>
            <p className="text-yellow-500 text-center text-xl py-2 font-bold">
                All About Central & State Counselling Process!
            </p>
            <Divider className="h-1 w-32 bg-yellow-500 mx-auto rounded-lg my-1" />

            <div className="max-w-screen-lg mx-auto mt-10 flex flex-col lg:flex-row gap-8">
                {/* Masonry Gallery */}
                <div className="w-96 ">
                    <div className="grid grid-cols-3 gap-1 space-y-1">
                        {seminarImages.map((image, index) => (
                            <div key={image.id} className="break-inside-avoid">
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className={`h-24 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 space-y-4 px-4">
                    <p className="text-md text-gray-700">
                        Do justice to your NEET UG score with our Expert-Led Seminars. Gain Essential Insights and Strategic Guidance from Renowned NEET Counselling experts.
                    </p>
                    <p className="text-md text-gray-700">
                        NEET Counseling 2024 is a crucial process for candidates who have qualified the NEET exam and wish to secure admission in medical, dental, and other healthcare courses in India
                    </p>
                    <p className="text-md text-gray-700">
                        It's important for candidates to stay updated with official notifications and prepare all required documents in advance.
                    </p>
                    <button className="bg-yellow-500 rounded-full text-white font-extrabold px-6 py-2 hover:bg-yellow-600 transition-colors duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Hero;