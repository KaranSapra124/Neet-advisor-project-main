import React, { useEffect, useState } from 'react'
import Container from "../Helper/Container"
import { Badge, Carousel, Flex } from 'antd';
import Divider from '../Helper/Divider';
import { MdArrowOutward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const [showInd, setShowInd] = useState(1)
    const [mainNews, setMainNews] = useState({})
    const navigate = useNavigate()
    const newsCategories = [
        "Counselling Schedule",
        "Eligibility Criteria",
        "Reservation Policies",
        "Seat Matrix",
        "Document Verification",
        "Cut-off Trends",
        "FAQs and Helpdesk"
    ];
    const newsData = [
        {
            id: 1,
            category: "Counselling Schedule",
            title: "NEET UG Counselling 2025 Begins Tomorrow",
            description: "The registration for the first round of NEET UG 2025 counselling starts tomorrow. Students are encouraged to visit the official website for detailed information regarding the registration process, eligibility criteria, and important dates to ensure a smooth application experience.",
            date: "2025-01-02",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=NEET+UG+Counselling+2025"
        },
        {
            id: 2,
            category: "Eligibility Criteria",
            title: "Revised Eligibility for NEET PG Counselling",
            description: "The eligibility criteria for NEET PG counselling have been updated to include a lower cut-off for certain categories. This change aims to provide more opportunities for candidates from diverse backgrounds to participate in the counselling process and secure their desired seats in postgraduate medical programs.",
            date: "2025-01-01",
            isTrending: false,
            imageUrl: "https://via.placeholder.com/400x300?text=Eligibility+Criteria"
        },
        {
            id: 3,
            category: "Reservation Policies",
            title: "State Quota Reservations Updated for NEET 2025",
            description: "Several states have announced changes to their reservation policies for NEET UG counselling. These updates are designed to enhance fairness and accessibility in the admission process, ensuring that students from various backgrounds have equitable chances of securing seats in medical colleges.",
            date: "2024-12-30",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=Reservation+Policies"
        },
        {
            id: 4,
            category: "Seat Matrix",
            title: "NEET 2025: AIIMS Releases Updated Seat Matrix",
            description: "AIIMS has released the latest seat matrix for UG admissions, detailing seat availability across campuses. This comprehensive document is crucial for aspiring medical students as it provides insights into the number of seats available in various disciplines and helps them make informed choices during the counselling process.",
            date: "2024-12-29",
            isTrending: false,
            imageUrl: "https://via.placeholder.com/400x300?text=Seat+Matrix"
        },
        {
            id: 5,
            category: "Document Verification",
            title: "Important: Documents Required for NEET Counselling",
            description: "A detailed list of mandatory documents required for verification during the NEET 2025 counselling process has been released. Candidates must ensure they have all necessary documents ready, including identity proof, educational certificates, and other relevant paperwork, to avoid any last-minute issues during the verification stage.",
            date: "2025-01-02",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=Document+Verification"
        },
        {
            id: 6,
            category: "Cut-off Trends",
            title: "NEET 2024 Cut-off Analysis and Predictions for 2025",
            description: "Experts analyze the previous year’s cut-offs and provide predictions for the upcoming NEET 2025 counselling. This analysis is essential for candidates to understand the competitive landscape and set realistic expectations for their chances of admission based on historical data and trends.",
            date: "2024-12-28",
            isTrending: false,
            imageUrl: "https://via.placeholder.com/400x300?text=Cut-off+Trends"
        },
        {
            id: 7,
            category: "FAQs and Helpdesk",
            title: "Helpdesk Launched for NEET 2025 Aspirants",
            description: "A dedicated helpdesk has been launched to assist students with their NEET 2025 counselling queries. This initiative aims to provide timely support and guidance to candidates, helping them navigate the complexities of the counselling process and address any concerns they may have.",
            date: "2025-01-01",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=Helpdesk"
        },
        {
            id: 8,
            category: "Counselling Schedule",
            title: "Last Date to Register for NEET PG Counselling",
            description: "The last date for NEET PG counselling registration is approaching. Candidates are urged to ensure they complete the registration process on time to avoid missing out on the opportunity to secure a seat in their preferred postgraduate medical programs. Timely registration is crucial for a successful counselling experience.",
            date: "2025-01-03",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=Last+Date+to+Register"
        },
        {
            id: 9,
            category: "Eligibility Criteria",
            title: "NEET 2025 Qualification Guidelines Released",
            description: "The NTA has released the latest qualification guidelines for NEET UG 2025 aspirants. These guidelines outline the necessary academic qualifications and prerequisites that candidates must meet to be eligible for the examination, ensuring that all applicants are well-informed about the requirements before they apply.",
            date: "2025-01-02",
            isTrending: false,
            imageUrl: "https://via.placeholder.com/400x300?text=Qualification+Guidelines"
        },
        {
            id: 10,
            category: "Reservation Policies",
            title: "OBC Reservation Increased for NEET UG 2025",
            description: "The central government has increased the OBC reservation quota for NEET UG counselling this year. This decision aims to enhance representation and provide better opportunities for candidates from the Other Backward Classes, ensuring a more inclusive admission process in medical colleges across the country.",
            date: "2024-12-31",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=OBC+Reservation"
        },
        {
            id: 11,
            category: "Seat Matrix",
            title: "NEET 2025 State-wise Seat Allocation Updated",
            description: "Updated state-wise seat allocation details for NEET UG counselling are now available. This information is vital for candidates as it provides insights into the distribution of seats across various states, helping them make informed decisions about their preferences during the counselling process.",
            date: "2025-01-01",
            isTrending: false,
            imageUrl: "https://via.placeholder.com/400x300?text=State-wise+Seat+Allocation"
        },
        {
            id: 12,
            category: "Document Verification",
            title: "Verification Centers Announced for NEET PG",
            description: "The NBE has announced the list of centers for document verification for NEET PG counselling. Candidates must visit these centers to complete the verification process, ensuring that all their documents are in order and meet the required standards for admission into postgraduate medical programs.",
            date: "2024-12-29",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=Verification+Centers"
        },
        {
            id: 13,
            category: "Cut-off Trends",
            title: "Analysis of NEET UG 2025 Expected Cut-offs",
            description: "A comprehensive analysis of expected cut-offs for NEET UG 2025 based on previous trends has been conducted. This analysis will help candidates gauge the level of competition they may face and prepare accordingly, allowing them to strategize their study plans and focus on areas that may improve their chances of success.",
            date: "2024-12-28",
            isTrending: false,
            imageUrl: "https://via.placeholder.com/400x300?text=Expected+Cut-offs"
        },
        {
            id: 14,
            category: "FAQs and Helpdesk",
            title: "NEET 2025 Helpdesk Now Available 24/7",
            description: "The NEET 2025 helpdesk has extended its operational hours to assist students better. Now available 24/7, this service aims to provide round-the-clock support for candidates facing challenges or having questions regarding the counselling process, ensuring that they receive timely assistance whenever needed.",
            date: "2025-01-02",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=24/7+Helpdesk"
        },
        {
            id: 15,
            category: "Counselling Schedule",
            title: "Second Round of Counselling for NEET UG 2025 Announced",
            description: "The schedule for the second round of NEET UG counselling has been released. Candidates are encouraged to check the official portal for updates and details regarding the counselling process, including important dates and procedures to follow for a successful second round of admissions.",
            date: "2025-01-03",
            isTrending: true,
            imageUrl: "https://via.placeholder.com/400x300?text=Second+Round+Counselling"
        }
    ];
    const handleOpenNews = (e) => {
        if (e.target.tagName === 'BUTTON') {
            const { id } = e.target;
            const found = newsData?.find((elem, ind) => {
                return elem?.id == id
            })
            navigate(`/news/${found?.id}`, {
                state: found
            })
        }
    }

    useEffect(() => {
        setMainNews(newsData?.find((elem, ind) => {
            return elem?.id == showInd
        }))
    }, [])


    return (
        <>
            <Container>
                <div className='flex justify-center gap-2 items-center'>
                    <h2 className='text-md text-gray-700 font-semibold'>Top Searches</h2>
                    {/* <div className='flex justify-around'> */}
                    <Carousel draggable={true} dots={false} arrows={true} autoplay autoplaySpeed={2500} infinite className='max-w-screen-md px-5' slidesToShow={3}>
                        {
                            newsCategories?.map((elem, index) => {
                                return <div key={index} className='bg-primary-color  cursor-pointer text-center  text-sm mx-2 font-semibold text-white w-fit rounded-lg p-2 '>
                                    {elem}
                                </div>
                            })
                        }

                    </Carousel>
                    {/* </div> */}
                </div>
                <Divider className={'h-1 bg-yellow-500 my-4 max-w-screen-lg rounded-full mx-auto'} />
                <div onClick={handleOpenNews} className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary-color font-bold text-3xl'>Trending Now!</h1>
                    <Divider className={'h-1 bg-yellow-500 my-2 w-32 rounded-full mx-auto'} />

                    <Flex vertical={false} align='center' className='max-w-screen-lg'>
                        <div className='cursor-pointer hover:scale-105 transition-all duration-200 p-4 m-2 shadow-lg my-4 '>
                            <div id={mainNews?.id} className='h-90 w-full'>
                                <img className='w-full' src={mainNews?.imageUrl} alt="No Image" />

                                <div className='flex  my-2'>
                                    <div className='border p-1 text-xs rounded shadow-lg bg-yellow-500 text-white font-semibold'>{mainNews?.category}</div>
                                    <div className='border mx-2 text-xs p-1 rounded shadow-lg bg-yellow-500 text-white font-semibold'>{mainNews?.date}</div>
                                </div>
                                <h2 className='text-sm  text-gray-700 font-bold'>{mainNews?.title}</h2>
                                <p className='text-xs my-2 font-light text-gray-700 '>{mainNews?.description?.length > 20 ? mainNews?.description?.substring(0, 70) + "...." : mainNews?.description}</p>
                            </div>

                        </div>
                        <div className=''>
                            <h1 className='text-center border-l-4 mx-auto border-yellow-500 w-fit pl-2 rounded-md mb-2  text-primary-color text-2xl font-bold py-1'>
                                Other Headlines
                            </h1>

                            <Carousel className='max-w-screen-sm' slidesToShow={4} vertical={true} autoplay infinite>
                                {
                                    newsData?.map((elem, index) => {
                                        return <div key={index} className=' bg-gray-100/80 my-1 mx-4 shadow p-2 w-40'>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <p className='text-xs shadow-sm bg-yellow-500 w-fit text-white font-semibold p-1 rounded'>{elem?.category}</p>
                                                    <h2 className='text-sm text-gray-700 w-fit font-semibold py-2'>{elem?.title}</h2>
                                                </div>
                                                <img className='w-20 mx-2' src={elem?.imageUrl} />
                                            </div>
                                        </div>
                                    })
                                }
                            </Carousel>
                        </div>
                    </Flex>
                    {/* <div className='flex flex-wrap  justify-center'> */}
                    <Carousel className='max-w-screen-lg' slidesToShow={3} autoplay infinite dots={false}>
                        {newsData?.filter((elem) => elem?.isTrending === true)?.map((elem, index) => {
                            return <TrendingNews key={index} category={elem?.category} id={elem?.id} date={elem.date} description={elem?.description} image={elem?.imageUrl} title={elem?.title} />
                        })}
                    </Carousel>
                    {/* </div> */}
                </div>
            </Container>
        </>
    )
}


const TrendingNews = ({ category, date, title, isTrending, image, description, id }) => {
    return <>
        <div id={id} className=' h-90 cursor-pointer hover:scale-105 transition-all duration-200 p-2  shadow-lg my-4 '>
            <Flex align='center'>
                <div className='w-fit'>
                    <img className='w-full' src={image} alt="No Image" />

                    <div className='flex my-2'>
                        <div className='border p-1 text-xs rounded shadow-lg bg-yellow-500 text-white font-semibold'>{category}</div>
                        <div className='border mx-2 text-xs p-1 rounded shadow-lg bg-yellow-500 text-white font-semibold'>{date}</div>
                    </div>
                    <h2 className='text-sm  text-gray-700 font-bold'>{title}</h2>
                    <p className='text-xs my-2 font-light text-gray-700 '>{description?.length > 20 ? description?.substring(0, 70) + "...." : description}</p>
                    <div className='flex items-center text-primary-color font-normal my-1 text-sm shadow-sm shadow-gray-200 hover:shadow-lg transition-all duration-300 hover:font-semibold w-fit p-1'> <button id={id}>Read More</button>
                        <MdArrowOutward className='mx-1' /> </div>
                </div>
            </Flex>
        </div>
    </>
}

export default Hero