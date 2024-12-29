import React, { useState } from 'react';
import Container from "../Helper/Container";
import './Aboutus.css';
import { Carousel } from 'antd';

const TeamInAction = () => {
    const [imageUrls, setImgUrls] = useState([
        "https://assets.codepen.io/1506195/unsplash-1.jpg",
        "https://assets.codepen.io/1506195/unsplash-7.jpg",
        "https://assets.codepen.io/1506195/unsplash-3.jpg",
        "https://assets.codepen.io/1506195/unsplash-2.jpg",
        "https://assets.codepen.io/1506195/unsplash-6.jpg",
        "https://assets.codepen.io/1506195/unsplash-0.jpg",
        "https://assets.codepen.io/1506195/unsplash-8.jpg"
    ]);

    return (
        <Container>
            <h1 className='text-4xl font-bold text-primary-color text-center mb-5'>Team In <span className='text-yellow-500 font-extrabold'>Action</span></h1>
            <div className={`flex items-center`}>
                <Carousel className='w-96' infinite dots={false} autoplay autoplaySpeed={2000}>
                    {imageUrls?.map((elem, index) => {
                        return <img className='h-80 object-cover w-20' src={elem} />
                    })}
                </Carousel>
                <Carousel className='w-96 h-80   rounded-lg '  slidesToShow={2} autoplay vertical={true} autoplaySpeed={2000} infinite >
                    {imageUrls?.map((elem, index) => {
                        return <img className='h-40 ' src={elem} />
                    })}
                </Carousel>
                <div className='shadow-xl shadow-gray-3000 h-fit  p-5'>
                    <p className='font-semibold text-justify text-gray-700 text-sm'>We are a team of young professionals dedicated to equip students with the clarity, courage and determination to follow their dreams. 
                        we are very much passionate to add value in education sector and to establish the world class career counselling services in India. Our team is also working with top notch schools, colleges and coaching institutes to promote their academic programs across India by conducting various career counselling seminars/webinars and workshops. we have positively impacted 60,000+ students and helped them in every aspect from making the right career choice, choosing the right course/institution based on their aptitude, interests and personality.</p>

                </div>
            </div>
        </Container>
    );
};

export default TeamInAction;
