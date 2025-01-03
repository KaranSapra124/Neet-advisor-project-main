import React from 'react'
import Container from "../Helper/Container"
import { FaClipboardCheck, FaUser, FaRegPaperPlane, FaComments,  } from 'react-icons/fa';

const RecruitmentProcess = () => {
    const recruitmentProcess = [
        {
            id: 1,
            title: "Application Submission",
            description: "Submit your application through our careers page. Ensure your resume and cover letter highlight your skills and experiences.",
            icon: <FaClipboardCheck />
        },
        {
            id: 2,
            title: "Initial Screening",
            description: "Our HR team will review your application to ensure you meet the basic qualifications for the role.",
            icon: <FaUser/>
        },
        {
            id: 3,
            title: "Interview Process",
            description: "If selected, you will be invited for an interview. This may include a phone interview followed by one or more in-person or virtual interviews.",
            icon: <FaComments />
        },
        {
            id: 4,
            title: "Assessment Task",
            description: "Depending on the position, you may be asked to complete an assessment task to demonstrate your skills and suitability for the role.",
            icon: <FaRegPaperPlane />
        },
        {
            id: 5,
            title: "Offer & Onboarding",
            description: "If you successfully pass all stages, you will receive a job offer. Once accepted, we will guide you through the onboarding process.",
            icon: <FaUser Tie />
        }
    ];
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <h1 className='text-center text-primary-color text-3xl font-semibold'>Learn Our <span className='text-yellow-500 font-bold'> Recruitment Process</span></h1>
                <div className='flex justify-around flex-wrap my-4'>
                    {recruitmentProcess?.map((elem, index) => {
                        return <div className='shadow-lg bg-gray-100/70 m-2 p-4 hover:scale-105 rounded-md cursor-pointer duration-300 flex flex-col justify-center items-center shadow-gray-200 w-72 h-52'>
                            <h1  className='text-2xl text-primary-color  my-1'>{elem?.icon}</h1>
                            <h2 className='text-md my-1 text-gray-700 font-semibold'>{elem?.title}</h2>
                            <p className='text-xs my-1 text-gray-700'>{elem?.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </Container>
    )
}

export default RecruitmentProcess