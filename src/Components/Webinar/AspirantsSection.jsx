import React from 'react';
import Container from "../Helper/Container";
import { Carousel } from 'antd';

const AspirantsSection = () => {
    const neetAspirants = [
        {
            Name: "Aarav Sharma",
            ImageName: "https://randomuser.me/api/portraits/men/1.jpg",
            AIR_Rank: 1200,
            MBBS: true,
            College_Name: "All India Institute of Medical Sciences (AIIMS), New Delhi"
        },
        {
            Name: "Priya Verma",
            ImageName: "https://randomuser.me/api/portraits/women/1.jpg",
            AIR_Rank: 2500,
            MBBS: true,
            College_Name: "Maulana Azad Medical College, New Delhi"
        },
        {
            Name: "Rohan Gupta",
            ImageName: "https://randomuser.me/api/portraits/men/2.jpg",
            AIR_Rank: 3500,
            MBBS: true,
            College_Name: "King George's Medical University, Lucknow"
        },
        {
            Name: "Sneha Patel",
            ImageName: "https://randomuser.me/api/portraits/women/2.jpg",
            AIR_Rank: 4500,
            MBBS: true,
            College_Name: "Jawaharlal Nehru Medical College, Belgaum"
        },
        {
            Name: "Vikram Singh",
            ImageName: "https://randomuser.me/api/portraits/men/3.jpg",
            AIR_Rank: 5500,
            MBBS: true,
            College_Name: "B.J. Medical College, Pune"
        },
        {
            Name: "Ananya Roy",
            ImageName: "https://randomuser.me/api/portraits/women/3.jpg",
            AIR_Rank: 6700,
            MBBS: true,
            College_Name: "Kasturba Medical College, Manipal"
        },
        {
            Name: "Karan Mehta",
            ImageName: "https://randomuser.me/api/portraits/men/4.jpg",
            AIR_Rank: 7800,
            MBBS: true,
            College_Name: "Government Medical College, Nagpur"
        },
        {
            Name: "Neha Joshi",
            ImageName: "https://randomuser.me/api/portraits/women/4.jpg",
            AIR_Rank: 8900,
            MBBS: true,
            College_Name: "Sri Ramachandra Institute of Higher Education and Research, Chennai"
        },
        {
            Name: "Rahul Desai",
            ImageName: "https://randomuser.me/api/portraits/men/5.jpg",
            AIR_Rank: 9900,
            MBBS: true,
            College_Name: "Gandhi Medical College, Bhopal"
        },
        {
            Name: "Tanya Singh",
            ImageName: "https://randomuser.me/api/portraits/women/5.jpg",
            AIR_Rank: 11000,
            MBBS: true,
            College_Name: "Dr. D.Y. Patil Medical College, Navi Mumbai"
        },
        {
            Name: "Arjun Nair",
            ImageName: "https://randomuser.me/api/portraits/men/6.jpg",
            AIR_Rank: 12500,
            MBBS: true,
            College_Name: "Government Medical College, Surat"
        },
        {
            Name: "Meera Iyer",
            ImageName: "https://randomuser.me/api/portraits/women/6.jpg",
            AIR_Rank: 13500,
            MBBS: true,
            College_Name: "Smt. NHL Municipal Medical College, Ahmedabad"
        },
        {
            Name: "Siddharth Rao",
            ImageName: "https://randomuser.me/api/portraits/men/7.jpg",
            AIR_Rank: 14500,
            MBBS: true,
            College_Name: "Mahatma Gandhi Memorial Medical College, Indore"
        },
        {
            Name: "Nisha Kumari",
            ImageName: "https://randomuser.me/api/portraits/women/7.jpg",
            AIR_Rank: 15500,
            MBBS: true,
            College_Name: "Government Medical College, Kottayam"
        },
        {
            Name: "Aarav Sharma",
            ImageName: "https://randomuser.me/api/portraits/men/1.jpg",
            AIR_Rank: 1200,
            MBBS: true,
            College_Name: "All India Institute of Medical Sciences (AIIMS), New Delhi"
        },
        {
            Name: "Priya Verma",
            ImageName: "https://randomuser.me/api/portraits/women/1.jpg",
            AIR_Rank: 2500,
            MBBS: true,
            College_Name: "Maulana Azad Medical College, New Delhi"
        },
        {
            Name: "Rohan Gupta",
            ImageName: "https://randomuser.me/api/portraits/men/2.jpg",
            AIR_Rank: 3500,
            MBBS: true,
            College_Name: "King George's Medical University, Lucknow"
        },
        {
            Name: "Sneha Patel",
            ImageName: "https://randomuser.me/api/portraits/women/2.jpg",
            AIR_Rank: 4500,
            MBBS: true,
            College_Name: "Jawaharlal Nehru Medical College, Belgaum"
        },
        {
            Name: "Vikram Singh",
            ImageName: "https://randomuser.me/api/portraits/men/3.jpg",
            AIR_Rank: 5500,
            MBBS: true,
            College_Name: "B.J. Medical College, Pune"
        },
        {
            Name: "Ananya Roy",
            ImageName: "https://randomuser.me/api/portraits/women/3.jpg",
            AIR_Rank: 6700,
            MBBS: true,
            College_Name: "Kasturba Medical College, Manipal"
        },
        {
            Name: "Karan Mehta",
            ImageName: "https://randomuser.me/api/portraits/men/4.jpg",
            AIR_Rank: 7800,
            MBBS: true,
            College_Name: "Government Medical College, Nagpur"
        },
        {
            Name: "Neha Joshi",
            ImageName: "https://randomuser.me/api/portraits/women/4.jpg",
            AIR_Rank: 8900,
            MBBS: true,
            College_Name: "Sri Ramachandra Institute of Higher Education and Research, Chennai"
        },
        {
            Name: "Rahul Desai",
            ImageName: "https://randomuser.me/api/portraits/men/5.jpg",
            AIR_Rank: 9900,
            MBBS: true,
            College_Name: "Gandhi Medical College, Bhopal"
        },
        {
            Name: "Tanya Singh",
            ImageName: "https://randomuser.me/api/portraits/women/5.jpg",
            AIR_Rank: 11000,
            MBBS: true,
            College_Name: "Dr. D.Y. Patil Medical College, Navi Mumbai"
        },
        {
            Name: "Arjun Nair",
            ImageName: "https://randomuser.me/api/portraits/men/6.jpg",
            AIR_Rank: 12500,
            MBBS: true,
            College_Name: "Government Medical College, Surat"
        },
        {
            Name: "Meera Iyer",
            ImageName: "https://randomuser.me/api/portraits/women/6.jpg",
            AIR_Rank: 13500,
            MBBS: true,
            College_Name: "Smt. NHL Municipal Medical College, Ahmedabad"
        },
        {
            Name: "Siddharth Rao",
            ImageName: "https://randomuser.me/api/portraits/men/7.jpg",
            AIR_Rank: 14500,
            MBBS: true,
            College_Name: "Mahatma Gandhi Memorial Medical College, Indore"
        },
        // {
        //     Name: "Nisha Kumari",
        //     ImageName: "https://randomuser.me/api/portraits/women/7.jpg",
        //     AIR_Rank: 15500,
        //     MBBS: true,
        //     College_Name: "Government Medical College, Kottayam"
        // },
        // {
        //     Name: "Aarav Sharma",
        //     ImageName: "https://randomuser.me/api/portraits/men/1.jpg",
        //     AIR_Rank: 1200,
        //     MBBS: true,
        //     College_Name: "All India Institute of Medical Sciences (AIIMS), New Delhi"
        // },
        // {
        //     Name: "Priya Verma",
        //     ImageName: "https://randomuser.me/api/portraits/women/1.jpg",
        //     AIR_Rank: 2500,
        //     MBBS: true,
        //     College_Name: "Maulana Azad Medical College, New Delhi"
        // },
        // {
        //     Name: "Rohan Gupta",
        //     ImageName: "https://randomuser.me/api/portraits/men/2.jpg",
        //     AIR_Rank: 3500,
        //     MBBS: true,
        //     College_Name: "King George's Medical University, Lucknow"
        // },
        // {
        //     Name: "Sneha Patel",
        //     ImageName: "https://randomuser.me/api/portraits/women/2.jpg",
        //     AIR_Rank: 4500,
        //     MBBS: true,
        //     College_Name: "Jawaharlal Nehru Medical College, Belgaum"
        // },
        // {
        //     Name: "Vikram Singh",
        //     ImageName: "https://randomuser.me/api/portraits/men/3.jpg",
        //     AIR_Rank: 5500,
        //     MBBS: true,
        //     College_Name: "B.J. Medical College, Pune"
        // },
        // {
        //     Name: "Ananya Roy",
        //     ImageName: "https://randomuser.me/api/portraits/women/3.jpg",
        //     AIR_Rank: 6700,
        //     MBBS: true,
        //     College_Name: "Kasturba Medical College, Manipal"
        // },
        // {
        //     Name: "Karan Mehta",
        //     ImageName: "https://randomuser.me/api/portraits/men/4.jpg",
        //     AIR_Rank: 7800,
        //     MBBS: true,
        //     College_Name: "Government Medical College, Nagpur"
        // },
        // {
        //     Name: "Neha Joshi",
        //     ImageName: "https://randomuser.me/api/portraits/women/4.jpg",
        //     AIR_Rank: 8900,
        //     MBBS: true,
        //     College_Name: "Sri Ramachandra Institute of Higher Education and Research, Chennai"
        // },
        // {
        //     Name: "Rahul Desai",
        //     ImageName: "https://randomuser.me/api/portraits/men/5.jpg",
        //     AIR_Rank: 9900,
        //     MBBS: true,
        //     College_Name: "Gandhi Medical College, Bhopal"
        // },
        // {
        //     Name: "Tanya Singh",
        //     ImageName: "https://randomuser.me/api/portraits/women/5.jpg",
        //     AIR_Rank: 11000,
        //     MBBS: true,
        //     College_Name: "Dr. D.Y. Patil Medical College, Navi Mumbai"
        // },
        // {
        //     Name: "Arjun Nair",
        //     ImageName: "https://randomuser.me/api/portraits/men/6.jpg",
        //     AIR_Rank: 12500,
        //     MBBS: true,
        //     College_Name: "Government Medical College, Surat"
        // },
        // {
        //     Name: "Meera Iyer",
        //     ImageName: "https://randomuser.me/api/portraits/women/6.jpg",
        //     AIR_Rank: 13500,
        //     MBBS: true,
        //     College_Name: "Smt. NHL Municipal Medical College, Ahmedabad"
        // },
        // {
        //     Name: "Siddharth Rao",
        //     ImageName: "https://randomuser.me/api/portraits/men/7.jpg",
        //     AIR_Rank: 14500,
        //     MBBS: true,
        //     College_Name: "Mahatma Gandhi Memorial Medical College, Indore"
        // },
        // {
        //     Name: "Nisha Kumari",
        //     ImageName: "https://randomuser.me/api/portraits/women/7.jpg",
        //     AIR_Rank: 15500,
        //     MBBS: true,
        //     College_Name: "Government Medical College, Kottayam"
        // },
    ];

    return (
        <Container className={' max-w-screen-xl'}>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-primary-color">Students Coached to <span className='text-yellow-600 font-extrabold'>Top Medical Colleges</span></h1>
                <p className="text-sm text-gray-700 font-semibold">Check out the medical colleges our attendees have reached with enhanced confidence, clarity, and applying our strategies.</p>
            </div>
            <Carousel autoplay slidesToShow={4}  arrows={false} dots={false}>
                {
                    neetAspirants.map((elem, index) => (
                        <div
                            key={index}
                            className="
                            
                                rounded-md 
                                overflow-hidden 
                                shadow-md
                                shadow-gray-500
                              
                                transform 
                                transition-all 
                                duration-300 
                                p-2
                                hover:scale-x-105
                                cursor-pointer
                            "
                        >
                            <div className="relative">
                                <img
                                    src={elem.ImageName}
                                    alt={elem.Name}
                                    className="
                                        h-48 
                                        rounded
                                        w-full
                                        object-cover 
                                        filter 
                                        brightness-90 
                                        hover:brightness-100 
                                        hover:scale-105
                                        transition-all 
                                        duration-300
                                    "
                                />
                                <div className="absolute top-2 right-2 text-gray-700 bg-white/80 rounded-full px-3 py-1 text-xs font-bold">
                                    Rank: {elem.AIR_Rank}
                                </div>
                            </div>

                            <div className="px-1 py-2 space-y-3">
                                <h3 className="
                                    text-sm
                                    font-bold 
                                    text-primary-color 
                                    tracking-tight 
                                    truncate 
                                    hover:text-secondary-color 
                                    transition-colors
                                ">
                                    {elem.Name}
                                </h3>

                                <div className="flex items-center space-x-3">
                                    <span
                                        className={`
                                            px-2 
                                            py-1 
                                            rounded-full 
                                            text-xs 
                                            font-semibold 
                                            ${elem.MBBS
                                                ? 'bg-green-100 text-green-800 border-green-300'
                                                : 'bg-red-100 text-red-800 border-red-300'
                                            } 
                                            border 
                                            transition-all 
                                            hover:scale-105
                                        `}
                                    >
                                        {elem.MBBS ? "MBBS Qualified" : "Not MBBS"}
                                    </span>
                                </div>

                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-primary-color mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h2 className="
                                        text-xs
                                        text-gray-700 
                                        font-medium 
                                        tracking-tight 
                                        truncate 
                                        max-w-[250px]
                                    ">
                                        {elem.College_Name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </Container>
    );
}

export default AspirantsSection;