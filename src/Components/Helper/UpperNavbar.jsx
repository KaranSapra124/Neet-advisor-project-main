import React from 'react';
import { FaPen } from 'react-icons/fa6';
// import './styles.css'; // Ensure the custom CSS for animation is included

const UpperNavbar = () => {
    const navLinks = [
        "NEET UG Counselling Process",
        "NEET PG Counselling Process",
        "Top Medical Colleges in India",
        "Eligibility Criteria for NEET",
        "NEET Cutoff Trends",
        "Admission Process for MBBS/BDS",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET",
        "NEET Exam Pattern and Syllabus",
        "NEET Result and Ranking System",
        "Important Dates for NEET Counselling",
        "Tips for NEET Exam Preparation",
        "Frequently Asked Questions about NEET",
        "Student Success Stories in NEET"
    ];

    return (
        <div className="flex items-center  overflow-hidden  justify-center space-x-6 py-5   animate-slide">
            {navLinks?.map((elem, index) => {
                return (
                    <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                        <FaPen className='text-yellow-500' />
                        <p>{elem}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default UpperNavbar;
