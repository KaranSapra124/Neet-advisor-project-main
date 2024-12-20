import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// import './Carousel.css';

const Carousel = ({ children, index = 0, className }) => {
    const [count, setCount] = useState(index);

    const totalItems = React.Children.count(children);

    const nextSlide = () => {
        setCount((prevIndex) => (prevIndex + 1) % totalItems); // Wrap around to the first item
    };

    const prevSlide = () => {
        setCount((prevIndex) => (prevIndex - 1 + totalItems) % totalItems); // Wrap around to the last item
    };

    // setInterval(() => {
    //     setCount((prevCount) => prevCount < totalItems && prevCount + 1)
    // },5000)

    return (
        <div className={`${className} flex justify-evenly items-center relative`}>
            <FaArrowCircleLeft onClick={prevSlide} disabled={totalItems <= 1} className="absolute left-0 text-3xl text-yellow-400 hover:scale-105" />

            <div className="flex overflow-hidden w-[30rem]">
                <div className="relative flex transition-transform duration-1000 ease-out">
                    {React.Children.map(children, (child, ind) => (
                        <div
                            className={`w-full flex-shrink-0 ${ind === count ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}
                            style={{
                                transform: `translateX(-${count * 100}%)`,
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* <button > */}
            <FaArrowCircleRight onClick={nextSlide} disabled={totalItems <= 1} className="absolute right-0 cursor-pointer text-3xl text-yellow-400 hover:scale-105 " />
            {/* </button> */}
        </div>
    );
};

export default Carousel;
