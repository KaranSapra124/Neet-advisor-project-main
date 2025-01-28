import React from 'react';
import { TiTick } from 'react-icons/ti';
import Container from '../Helper/Container';

const SuperChargeDream = () => {
    const listData = [
        'Master NEET PG 2025 Counselling',
        'Specialization Wise Pros and Cons',
        'PG Medical Career Scope For Every Branch',
        'Clinical vs Non-Clinical/Pros & Cons',
        'Branch Selection By Your Requirement'
    ];

    return (
        <Container className={'bg-gradient-to-tr from-black to-black/85 '}>
            <div className='flex items-center'>
                <div className="text-center w-1/2 my-2">
                    <h1 className="text-3xl font-semibold text-white my-2">
                        Supercharge Your <span className='font-extrabold text-yellow-600'>Future</span>
                    </h1>
                    <p className="text-xs w-80 text-gray-300 max-w-xl font-semibold mx-auto">
                        Make your dreams meet direction. Medical mentor Expo is your key to Tips,
                        Tricks, Techniques, Insights and Updates. Here's why you can't afford to miss it!
                    </p>
                </div>

                <div className="flex shadow-lg  shadow-gray-700 rounded-xl mx-4 p-8 bg-black/10 w-1/2">
                    <div className="flex-1 space-y-2">
                        <p className="text-sm font-semibold text-gray-400   ">
                            Invaluable insights, Exclusive analysis, and Tailored advice from experts
                            in medical field
                        </p>

                        <div>
                            <h2 className="text-lg font-bold text-yellow-500  mb-1">
                                Highlights:
                            </h2>
                            <ul className="space-y-1">
                                {listData.map((elem, index) => (
                                    <li key={index} className="flex items-center gap-2 p-1">
                                        <span className="flex-shrink-0">
                                            <TiTick className="w-4 h-4 text-gray-400" />
                                        </span>
                                        <span className="text-gray-400 font-medium text-xs">{elem}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-72 mx-1">
                        {/* <div className="rounded-lg overflow-hidden shadow-xl"> */}
                        <img
                            src="https://neetadvisor.com/assets/images/seminars/seminar5-1024x576.webp"
                            alt="Medical Seminar"
                            className="w-full h-full object-cover"
                        />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SuperChargeDream;