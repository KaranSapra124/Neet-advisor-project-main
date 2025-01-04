import React from 'react';
import {
    FaCalendarAlt,
    FaChevronLeft,
    FaChevronRight,
    FaMapMarkerAlt
} from 'react-icons/fa';

const ExploreEvents = () => {
    // const imagesArr = [
    //     'https://neetadvisor.com/assets/images/gallery/country/7.webp',
    //     'https://neetadvisor.com/assets/images/gallery/country/8.webp',
    //     'https://neetadvisor.com/assets/images/gallery/country/9.webp'
    // ];


    // Sample event details (you can replace with real data)
    const events = [
        { date: '15 Jan', title: 'NEET Counseling Session', location: 'Delhi' },
        { date: '22 Jan', title: 'Medical Career Workshop', location: 'Mumbai' },
        { date: '29 Jan', title: 'Study Abroad Seminar', location: 'Bangalore' },
        { date: '29 Jan', title: 'Study Abroad Seminar', location: 'Bangalore' },
        { date: '29 Jan', title: 'Study Abroad Seminar', location: 'Bangalore' },
        { date: '29 Jan', title: 'Study Abroad Seminar', location: 'Bangalore' }

    ];



    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-color mb-4">
                        Explore Upcoming <span className="text-yellow-500 font-extrabold">Events</span>
                    </h2>
                    <p className="text-gray-700 text-xs font-semibold mx-auto">
                        Want to know more about <span className="font-bold">NEET Advisor</span> work?
                        Join our upcoming events and take the first step towards your medical career!
                    </p>
                </div>

                {/* Main Content */}
                {/* <div className="mx-auto "> */}
                {/* Event Cards */}
                <div className="flex flex-wrap justify-start     space-y-1">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white p-2 rounded-md w-72 h-full  shadow-md hover:scale-105  m-2  transition-all cursor-pointer duration-300"
                        >
                            <div className="flex  items-start space-x-4">
                                <div className="bg-primary-color/10 p-3 rounded-lg">
                                    <FaCalendarAlt className="w-6 h-6 text-primary-color" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-sm text-gray-900">{event.title}</h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                                        <FaMapMarkerAlt className="w-4 h-4" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="mt-2 text-primary-color font-semibold">
                                        {event.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* </div> */}

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-primary-color text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExploreEvents;