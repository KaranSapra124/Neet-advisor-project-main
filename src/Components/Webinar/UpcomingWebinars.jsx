import React, { useEffect, useState } from 'react';
import Container from "../Helper/Container";
import { Carousel, Tabs, Statistic } from 'antd';
const { Countdown } = Statistic;
import { FaCalendar, FaClock } from 'react-icons/fa';

const UpcomingWebinars = () => {
    const [ind, setInd] = useState(0);
    const [hoverStates, setHoverStates] = useState(Array(5).fill(false)); // Initialize hover states for 5 webinars
    const deadline = Date.now() + 10 * 10 * 6000
    const webinars = [
        {
            "title": "Digital Marketing Trends 2023",
            "thumbnail": "https://picsum.photos/200/150?random=1",
            "book_date": "2023-12-31",
            "book_time": "10:00 AM",
            "description": "Join us for an insightful webinar on the latest trends in digital marketing.",
            "price": 49.99,
            "free_status": false
        },
        {
            "title": "Introduction to Python Programming",
            "thumbnail": "https://picsum.photos/200/150?random=2",
            "book_date": "2023-11-20",
            "book_time": "2:00 PM",
            "description": "Learn the fundamentals of Python programming in this beginner-friendly session.",
            "price": 0.00,
            "free_status": true
        },
        {
            "title": "Advanced Data Analytics Techniques",
            "thumbnail": "https://picsum.photos/200/150?random=3",
            "book_date": "2023-11-25",
            "book_time": "1:00 PM",
            "description": "Explore advanced data analytics techniques to boost your business insights.",
            "price": 79.99,
            "free_status": false
        },
        {
            "title": "Effective Remote Team Management",
            "thumbnail": "https://picsum.photos/200/150?random=4",
            "book_date": "2023-12-01",
            "book_time": "3:00 PM",
            "description": "A comprehensive guide to effective remote team management.",
            "price": 29.99,
            "free_status": false
        },
        {
            "title": "Mindfulness and Stress Management",
            "thumbnail": "https://picsum.photos/200/150?random=5",
            "book_date": "2023-12-05",
            "book_time": "11:00 AM",
            "description": "Free webinar on mindfulness and stress management techniques.",
            "price": 0.00,
            "free_status": true
        }
    ];

    const items = [
        {
            key: '1',
            label: 'UG',
            children: (
                <div>
                    <Carousel arrows dotPosition='bottom' slidesToShow={3} autoplaySpeed={2000} autoplay>
                        {webinars.map((elem, index) => {
                            const targetDate = deadline;
                            return (
                                <div
                                    key={index}
                                    className={`
                                        relative
                                        overflow-hidden
                                        border border-gray-200
                                        rounded-xl
                                        h-[32rem]
                                        shadow-lg
                                        hover:shadow-xl
                                        w-96
                                        p-6
                                        bg-white
                                        transform
                                        ${ind === index ? "scale-105" : "scale-100"}
                                        transition-all
                                        duration-300
                                        ease-in-out
                                    `}
                                >
                                    

                                    <div className="relative group">
                                        <img
                                            className='
                                                w-full 
                                                h-52 
                                                object-cover 
                                                rounded-lg 
                                                transform 
                                                transition-transform 
                                                duration-300 
                                                group-hover:scale-105
                                            '
                                            src={elem.thumbnail}
                                            alt={elem.title} />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <h1 className='text-xl font-bold mt-4 text-primary-color line-clamp-2'>
                                        {elem.title}
                                    </h1>

                                    <p className='text-gray-700 font-semibold mt-2 text-sm line-clamp-3'>
                                        {elem.description}
                                    </p>

                                    <div className='mt-4 flex items-center space-x-2'>
                                        <div className='flex items-center px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200'>
                                            <FaCalendar className='text-yellow-500 mr-2' />
                                            <span className='text-gray-700 text-sm font-medium'>{elem.book_date}</span>
                                        </div>

                                        <div className='flex items-center px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200'>
                                            <FaClock className='text-yellow-500 mr-2' />
                                            <span className='text-gray-700 text-sm font-medium'>{elem.book_time}</span>
                                        </div>
                                    </div>

                                    <button
                                        onMouseEnter={() => {
                                            setHoverStates(prev => {
                                                const newStates = [...prev];
                                                newStates[index] = true; // Set the current index to true
                                                return newStates;
                                            });
                                        }}
                                        onMouseLeave={() => {
                                            setHoverStates(prev => {
                                                const newStates = [...prev];
                                                newStates[index] = false; // Set the current index to false
                                                return newStates;
                                            });
                                        }}
                                        className='
                                                    mt-6
                                                    w-full
                                                    bg-yellow-500
                                                    text-white
                                                    font-semibold
                                                    py-3
                                                    rounded-lg
                                                    hover:bg-yellow-600
                                                    transform
                                                    hover:-translate-y-0.5
                                                    transition-all
                                                    duration-200
                                                    focus:outline-none
                                                    focus:ring-2
                                                    focus:ring-yellow-500
                                                    focus:ring-opacity-50
                                                    shadow-md
                                                    hover:shadow-lg
                                                '
                                    >
                                        {hoverStates[index] ? (
                                            <>
                                                <span className={`${elem.free_status ? "line-through" : ""}`}>
                                                    {elem.free_status ? "Free" : `$${elem.price.toFixed(2)}`}
                                                </span>
                                            </>
                                        ) : (
                                          <span className='text-xs'>Book Now</span>
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            ),
        },
        {
            key: '2',
            label: 'PG',
            children: (
                <div>
                    <Carousel arrows dotPosition='bottom' slidesToShow={4} autoplaySpeed={2000} autoplay>
                        {webinars.map((elem, index) => {
                            const targetDate = deadline
                            return (
                                <div
                                    key={index}
                                    className={`
                                                relative
                                                overflow-hidden
                                                border border-gray-200
                                                rounded-xl
                                            
                                                shadow-lg
                                                hover:shadow-xl
                                                w-96
                                              
                                                bg-white
                                                transform
                                                ${ind === index ? "scale-105" : "scale-100"}
                                                transition-all
                                                duration-300
                                                ease-in-out
                                            `}
                                >
                                    

                                    <div className="relative group">
                                        <img
                                            className='
                                                        w-full 
                                                        h-[12rem]    
                                                        object-cover 
                                                         
                                                        transform 
                                                        transition-transform 
                                                        duration-300 
                                                        group-hover:scale-105
                                                    '
                                            src={elem.thumbnail}
                                            alt={elem.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                   <div className='p-6 pt-0'>
                                   <h1 className='text-md font-bold mt-4 text-primary-color line-clamp-2'>
                                        {elem.title}
                                    </h1>

                                    <p className='text-gray-700 font-semibold mt-2 text-xs line-clamp-3'>
                                        {elem.description}
                                    </p>

                                    <div className='mt-4 flex items-center space-x-2'>
                                        <div className='flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200'>
                                            <FaCalendar className='text-yellow-500 mr-2 text-xs' />
                                            <span className='text-gray-700 text-xs font-medium'>{elem.book_date}</span>
                                        </div>

                                        <div className='flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200'>
                                            <FaClock className='text-yellow-500 mr-2' />
                                            <span className='text-gray-700 text-xs font-medium'>{elem.book_time}</span>
                                        </div>
                                    </div>

                                    <button
                                        onMouseEnter={() => {
                                            setHoverStates(prev => {
                                                const newStates = [...prev];
                                                newStates[index] = true; // Set the current index to true
                                                return newStates;
                                            });
                                        }}
                                        onMouseLeave={() => {
                                            setHoverStates(prev => {
                                                const newStates = [...prev];
                                                newStates[index] = false; // Set the current index to false
                                                return newStates;
                                            });
                                        }}
                                        className='
                                            mt-6
                                            w-1/2
                                            bg-yellow-500
                                            text-white
                                            font-semibold
                                            py-1
                                            rounded-lg
                                            hover:bg-yellow-600
                                            transform
                                            hover:-translate-y-0.5
                                            transition-all
                                            duration-200
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-yellow-500
                                            focus:ring-opacity-50
                                            shadow-md
                                            hover:shadow-lg
                                        '
                                    >
                                        {hoverStates[index] ? (
                                            <>
                                                <span className={` text-xs ${elem.free_status ? "line-through" : ""}`}>
                                                    {elem.free_status ? "Free" : `$${elem.price.toFixed(2)}`}
                                                </span>
                                            </>
                                        ) : (
                                        <span className='text-xs'>Book Now</span>
                                        )}
                                    </button>
                                   </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            ),
        },
    ];

    useEffect(() => {
        const webinarInterval = setInterval(() => {
            setInd(prevSelected => {
                const newIndex = Math.floor(Math.random() * webinars.length);
                // Avoid setting the same index
                return prevSelected === newIndex ? prevSelected : newIndex;
            });
        }, 1500);
        return () => clearInterval(webinarInterval);
    }, []);

    return (
        <Container>
            <div className='text-center pb-6'>
                <h1 className='text-4xl pb-2 text-primary-color font-bold'>
                    <span className="text-yellow-500 font-extrabold">Upcoming</span> Webinars
                </h1>
                <p className='text-sm font-bold text-gray-700'>Mark your calendars for Hello Mentor’s upcoming NEET Counselling webinars.</p>
            </div>
            <div>
                <Tabs tabPosition='left' animated={true} defaultActiveKey='1' items={items} onChange={(key) => console.log(key)} className='text-primary-color ' color='#201169' />
            </div>
        </Container>
    );
}

export default UpcomingWebinars;