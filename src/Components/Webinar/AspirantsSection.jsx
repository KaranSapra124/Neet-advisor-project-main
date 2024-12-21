import React from 'react';
import Container from "../Helper/Container";

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
        <Container >
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2 text-primary-color">Students Coached to <span className='text-yellow-500 font-extrabold'>Top Medical Colleges</span></h1>
                <p className="text-lg text-gray-700 font-bold">Check out the medical colleges our attendees have reached with enhanced confidence, clarity, and applying our strategies.</p>
            </div>
            <div class="marquee">
                <div class="marquee__group mx-auto gap-8 flex  animate-scroll">
                    {
                        neetAspirants.map((elem, index) => (
                            <div key={index} className="bg-gray-100 p-2 rounded-lg shadow-lg max-w-md overflow-hidden transition-transform transform hover:scale-105">
                                <img src={elem.ImageName} alt={elem.Name} className="w-full h-36 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-primary-color">{elem.Name}</h3>
                                    <div className='flex '>
                                        <p className="font-semibold border-2 w-fit px-2 border-gray-400 rounded p-1 text-primary-color">{elem.MBBS && "MBBS"} </p>
                                        <span className="font-bold border-2 mx-2 border-gray-400 rounded p-1 text-primary-color">Rank: {elem.AIR_Rank}</span>
                                    </div>
                                    <h2 className="text-lg text-gray-700 font-semibold mt-2">{elem.College_Name}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default AspirantsSection;