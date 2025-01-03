import React, { useState } from 'react'
import Container from "../Helper/Container"
import CareerModal from './Modal'

const JobOpenings = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [jobOpenings, setJobOpenings] = useState([
        {
            id: 1,
            title: "NEET Academic Advisor",
            jobType: "Full-time",
            description: "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
            responsibilities: [
                "Conduct one-on-one advising sessions with students.",
                "Create customized study plans based on individual needs.",
                "Monitor student progress and provide constructive feedback.",
                "Stay updated on NEET exam patterns and syllabus changes."
            ],
            qualifications: [
                "Bachelor’s degree in Biology, Chemistry, or a related field.",
                "Previous experience in academic advising or tutoring preferred.",
                "Strong communication and interpersonal skills."
            ],
            benefits: [
                "Flexible work hours",
                "Health and wellness programs",
                "Professional development opportunities"
            ]
        },
        {
            id: 2,
            title: "Content Writer",
            jobType: "Part-time",
            description: "We are looking for a creative Content Writer to produce engaging articles and resources related to NEET preparation. You will research topics, write informative content, and collaborate with the marketing team to enhance our online presence.",
            responsibilities: [
                "Write articles, blog posts, and social media content.",
                "Research NEET-related topics to ensure accuracy and relevance.",
                "Collaborate with the marketing team to develop content strategies.",
                "Edit and proofread content for clarity and quality."
            ],
            qualifications: [
                "Bachelor’s degree in English, Journalism, or a related field.",
                "Excellent writing and editing skills.",
                "Familiarity with SEO best practices is a plus."
            ],
            benefits: [
                "Flexible work arrangements",
                "Creative freedom in content creation",
                "Opportunity to work with a passionate team"
            ]
        },
        {
            id: 3,
            title: "Marketing Specialist",
            jobType: "Full-time",
            description: "As a Marketing Specialist, you will develop and execute marketing campaigns to promote Neet Advisor’s services. You will analyze market trends, manage social media accounts, and engage with our online community.",
            responsibilities: [
                "Create and implement marketing strategies.",
                "Analyze market trends and competitor activities.",
                "Manage social media accounts and engage with followers.",
                "Collaborate with the content team to create promotional materials."
            ],
            qualifications: [
                "Bachelor’s degree in Marketing, Business, or a related field.",
                "Proven experience in digital marketing and social media management.",
                "Strong analytical and creative thinking skills."
            ],
            benefits: [
                "Remote work options",
                "Performance-based bonuses",
                "Access to professional development resources"
            ]
        },
        {
            id: 4,
            title: "Graphic Designer",
            jobType: "Contract",
            description: "We are seeking a talented Graphic Designer to create visually appealing graphics for our marketing materials, website, and social media. You will work closely with the marketing team to ensure brand consistency and effective communication.",
            responsibilities: [
                "Design graphics for digital and print media.",
                "Collaborate with the marketing team to develop visual content.",
                "Ensure brand consistency across all platforms.",
                "Stay updated on design trends and software."
            ],
            qualifications: [
                "Bachelor’s degree in Graphic Design or a related field.",
                "Proficiency in design software (Adobe Creative Suite, etc.).",
                "Strong portfolio showcasing previous design work."
            ],
            benefits: [
                "Flexible hours",
                "Creative work environment",
                "Opportunity to work on diverse projects"
            ]
        },
        {
            id: 1,
            title: "NEET Academic Advisor",
            jobType: "Full-time",
            description: "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
            responsibilities: [
                "Conduct one-on-one advising sessions with students.",
                "Create customized study plans based on individual needs.",
                "Monitor student progress and provide constructive feedback.",
                "Stay updated on NEET exam patterns and syllabus changes."
            ],
            qualifications: [
                "Bachelor’s degree in Biology, Chemistry, or a related field.",
                "Previous experience in academic advising or tutoring preferred.",
                "Strong communication and interpersonal skills."
            ],
            benefits: [
                "Flexible work hours",
                "Health and wellness programs",
                "Professional development opportunities"
            ]
        },
        {
            id: 1,
            title: "NEET Academic Advisor",
            jobType: "Full-time",
            description: "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
            responsibilities: [
                "Conduct one-on-one advising sessions with students.",
                "Create customized study plans based on individual needs.",
                "Monitor student progress and provide constructive feedback.",
                "Stay updated on NEET exam patterns and syllabus changes."
            ],
            qualifications: [
                "Bachelor’s degree in Biology, Chemistry, or a related field.",
                "Previous experience in academic advising or tutoring preferred.",
                "Strong communication and interpersonal skills."
            ],
            benefits: [
                "Flexible work hours",
                "Health and wellness programs",
                "Professional development opportunities"
            ]
        }
        ,
        {
            id: 1,
            title: "NEET Academic Advisor",
            jobType: "Full-time",
            description: "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
            responsibilities: [
                "Conduct one-on-one advising sessions with students.",
                "Create customized study plans based on individual needs.",
                "Monitor student progress and provide constructive feedback.",
                "Stay updated on NEET exam patterns and syllabus changes."
            ],
            qualifications: [
                "Bachelor’s degree in Biology, Chemistry, or a related field.",
                "Previous experience in academic advising or tutoring preferred.",
                "Strong communication and interpersonal skills."
            ],
            benefits: [
                "Flexible work hours",
                "Health and wellness programs",
                "Professional development opportunities"
            ]
        },
        {
            id: 1,
            title: "NEET Academic Advisor",
            jobType: "Full-time",
            description: "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
            responsibilities: [
                "Conduct one-on-one advising sessions with students.",
                "Create customized study plans based on individual needs.",
                "Monitor student progress and provide constructive feedback.",
                "Stay updated on NEET exam patterns and syllabus changes."
            ],
            qualifications: [
                "Bachelor’s degree in Biology, Chemistry, or a related field.",
                "Previous experience in academic advising or tutoring preferred.",
                "Strong communication and interpersonal skills."
            ],
            benefits: [
                "Flexible work hours",
                "Health and wellness programs",
                "Professional development opportunities"
            ]
        },
        {
            id: 1,
            title: "NEET Academic Advisor",
            jobType: "Full-time",
            description: "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
            responsibilities: [
                "Conduct one-on-one advising sessions with students.",
                "Create customized study plans based on individual needs.",
                "Monitor student progress and provide constructive feedback.",
                "Stay updated on NEET exam patterns and syllabus changes."
            ],
            qualifications: [
                "Bachelor’s degree in Biology, Chemistry, or a related field.",
                "Previous experience in academic advising or tutoring preferred.",
                "Strong communication and interpersonal skills."
            ],
            benefits: [
                "Flexible work hours",
                "Health and wellness programs",
                "Professional development opportunities"
            ]
        }
    ])
    const [data, setData] = useState([...jobOpenings])
    const handleSearch = (e) => {
        const { value } = e.target;

        setData(value?.length > 0 ? jobOpenings?.filter((elem, index) => elem?.title?.toLowerCase().includes(value?.toLowerCase())) : jobOpenings)

    }

    const handleOpen = (e) => {
        if (e.target.tagName === "BUTTON") {
            setIsOpen(true)
        }
    }



    return (
        <>
            {isOpen && <CareerModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            <Container className={'bg-gray-100'}>

                <div onClick={handleOpen} className='max-w-screen-lg mx-auto'>
                    <h1 className='text-3xl text-primary-color my-2 font-bold'>Job Openings</h1>
                    <input onChange={handleSearch} type="text" name="" id="" placeholder='Enter Your Search...' className='shadow-lg w-full p-2 rounded-md' />
                    <div className='flex flex-wrap my-4 justify-between'>
                        {
                            data?.map((elem, index) => {
                                return <>
                                    <div className='shadow-lg my-1 h-28 bg-white  flex  flex-col justify-center  rounded-md p-2 w-52'>
                                        <h1 className='text-sm text-gray-700 font-bold'>{elem?.title}</h1>
                                        <p className='text-xs font-semibold text-gray-700 my-2'>{elem?.jobType}</p>
                                        <button className='bg-yellow-500 py-1 w-fit px-2 text-white text-xs font-bold rounded-l-full rounded-r-full'>Apply Now</button>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default JobOpenings