import React from 'react';
import Container from "../Helper/Container";
import { Tabs, Timeline } from 'antd';

const Schedule = () => {
    const counsellingSchedule = [
        {
            "date": "2025-01-07",
            "venue": "Room 101, NEET Counseling Center",
            "sessions": [
                {
                    "time": "10:00 AM - 10:30 AM",
                    "topic": "General Guidance"
                },
                {
                    "time": "12:00 PM - 12:30 PM",
                    "topic": "Document Verification"
                },
                {
                    "time": "1:30 PM - 2:00 PM",
                    "topic": "Fee Payment Process"
                }
            ]
        },
        {
            "date": "2025-01-08",
            "venue": "Room 102, NEET Counseling Center",
            "sessions": [
                {
                    "time": "10:00 AM - 10:30 AM",
                    "topic": "Seat Allocation Process"
                },
                {
                    "time": "12:30 PM - 1:00 PM",
                    "topic": "Choice Filling"
                },
                {
                    "time": "2:00 PM - 2:30 PM",
                    "topic": "Post-Counseling Queries"
                }
            ]
        }
    ];

    return (
        <Container className="bg-gradient-to-tr from-black to-black/85">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-white text-3xl font-semibold my-3">
                         <span className="font-extrabold text-yellow-600">Schedule</span> For Upcoming Expo
                    </h1>
                    <p className="text-gray-300 font-semibold text-sm md:text-xs max-w-md mx-auto">
                        Stay informed. Stay ahead. Learn about the event slot and timings.
                        Choose the session that suits you best.
                    </p>
                </div>

                <div className="mt-2">

                    <Tabs
                        className="scheduleTab"
                        tabPosition="left"
                        items={counsellingSchedule.map((elem, index) => ({
                            key: index + 1,
                            label: `Slot ${index + 1}`,
                            children: (
                                <div className="bg-black/30   p-6 rounded-lg border border-gray-800">
                                    <div className="text-gray-300 space-y-4 flex   justify-center flex-col items-center">
                                        <h2 className="text-md font-bold brightness-200  mb-2 ">
                                            Session Date: {elem.date}
                                        </h2>
                                        <p className="text-gray-400 mb-4 text-xs  font-semibold">
                                            Venue: {elem.venue}
                                        </p>
                                        <Timeline  
                                            className="text-gray-300  flex flex-col w-full py-4"
                                            mode="left"
                                            
                                            items={elem.sessions.map((detail) => ({
                                                label: detail.time,
                                                color:'gray',
                                                children: (
                                                    <div className="font-medium">
                                                        {detail.topic}
                                                    </div>
                                                ),
                                                
                                            }))}
                                        />
                                        <button className=' bg-yellow-600  w-fit font-semibold px-2 py-1 rounded-l-full rounded-r-full text-gray-300 '>Book Now</button>

                                    </div>
                                </div>
                            )
                        }))}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Schedule;