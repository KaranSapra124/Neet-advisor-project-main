import React from 'react'
import Container from "../Helper/Container"
import { Badge, Carousel, Flex } from 'antd';
import Divider from '../Helper/Divider';
const Hero = () => {
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
            description: "The registration for the first round of NEET UG 2025 counselling starts tomorrow. Check the official website for details.",
            date: "2025-01-02",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1011/400/300"
        },
        {
            id: 2,
            category: "Eligibility Criteria",
            title: "Revised Eligibility for NEET PG Counselling",
            description: "The eligibility criteria for NEET PG counselling have been updated to include a lower cut-off for certain categories.",
            date: "2025-01-01",
            isTrending: false,
            imageUrl: "https://picsum.photos/id/1027/400/300"
        },
        {
            id: 3,
            category: "Reservation Policies",
            title: "State Quota Reservations Updated for NEET 2025",
            description: "Several states have announced changes to their reservation policies for NEET UG counselling.",
            date: "2024-12-30",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1033/400/300"
        },
        {
            id: 4,
            category: "Seat Matrix",
            title: "NEET 2025: AIIMS Releases Updated Seat Matrix",
            description: "AIIMS has released the latest seat matrix for UG admissions, detailing seat availability across campuses.",
            date: "2024-12-29",
            isTrending: false,
            imageUrl: "https://picsum.photos/id/1048/400/300"
        },
        {
            id: 5,
            category: "Document Verification",
            title: "Important: Documents Required for NEET Counselling",
            description: "A detailed list of mandatory documents required for verification during the NEET 2025 counselling process.",
            date: "2025-01-02",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1052/400/300"
        },
        {
            id: 6,
            category: "Cut-off Trends",
            title: "NEET 2024 Cut-off Analysis and Predictions for 2025",
            description: "Experts analyze the previous year’s cut-offs and provide predictions for the upcoming NEET 2025 counselling.",
            date: "2024-12-28",
            isTrending: false,
            imageUrl: "https://picsum.photos/id/1060/400/300"
        },
        {
            id: 7,
            category: "FAQs and Helpdesk",
            title: "Helpdesk Launched for NEET 2025 Aspirants",
            description: "A dedicated helpdesk has been launched to assist students with their NEET 2025 counselling queries.",
            date: "2025-01-01",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1071/400/300"
        },
        {
            id: 8,
            category: "Counselling Schedule",
            title: "Last Date to Register for NEET PG Counselling",
            description: "The last date for NEET PG counselling registration is approaching. Ensure you complete the process on time.",
            date: "2025-01-03",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1081/400/300"
        },
        {
            id: 9,
            category: "Eligibility Criteria",
            title: "NEET 2025 Qualification Guidelines Released",
            description: "The NTA has released the latest qualification guidelines for NEET UG 2025 aspirants.",
            date: "2025-01-02",
            isTrending: false,
            imageUrl: "https://picsum.photos/id/1090/400/300"
        },
        {
            id: 10,
            category: "Reservation Policies",
            title: "OBC Reservation Increased for NEET UG 2025",
            description: "The central government has increased the OBC reservation quota for NEET UG counselling this year.",
            date: "2024-12-31",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1102/400/300"
        },
        {
            id: 11,
            category: "Seat Matrix",
            title: "NEET 2025 State-wise Seat Allocation Updated",
            description: "Updated state-wise seat allocation details for NEET UG counselling are now available.",
            date: "2025-01-01",
            isTrending: false,
            imageUrl: "https://picsum.photos/id/1110/400/300"
        },
        {
            id: 12,
            category: "Document Verification",
            title: "Verification Centers Announced for NEET PG",
            description: "The NBE has announced the list of centers for document verification for NEET PG counselling.",
            date: "2024-12-29",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1120/400/300"
        },
        {
            id: 13,
            category: "Cut-off Trends",
            title: "Analysis of NEET UG 2025 Expected Cut-offs",
            description: "A comprehensive analysis of expected cut-offs for NEET UG 2025 based on previous trends.",
            date: "2024-12-28",
            isTrending: false,
            imageUrl: "https://picsum.photos/id/1133/400/300"
        },
        {
            id: 14,
            category: "FAQs and Helpdesk",
            title: "NEET 2025 Helpdesk Now Available 24/7",
            description: "The NEET 2025 helpdesk has extended its operational hours to assist students better.",
            date: "2025-01-02",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1141/400/300"
        },
        {
            id: 15,
            category: "Counselling Schedule",
            title: "Second Round of Counselling for NEET UG 2025 Announced",
            description: "The schedule for the second round of NEET UG counselling has been released. Check the official portal for updates.",
            date: "2025-01-03",
            isTrending: true,
            imageUrl: "https://picsum.photos/id/1150/400/300"
        }
    ];


    return (
        <>
            <Container>
                <div className='flex justify-center gap-2 items-center'>
                    <h2 className='text-md text-gray-700 font-semibold'>Top Searches</h2>
                    {/* <div className='flex justify-around'> */}
                    <Carousel dots={false} arrows={true} autoplay autoplaySpeed={2500} infinite className='max-w-screen-md px-5' slidesToShow={3}>
                        {
                            newsCategories?.map((elem, index) => {
                                return <div className='bg-primary-color  cursor-pointer text-center  text-sm mx-2 font-semibold text-white w-fit rounded-lg p-2 '>
                                    {elem}
                                </div>
                            })
                        }

                    </Carousel>
                    {/* </div> */}
                </div>
                <Divider className={'h-1 bg-yellow-500 my-4 max-w-screen-lg rounded-full mx-auto'} />
                <div>
                    <h1 className='text-primary-color font-bold text-2xl'>Trending Now!</h1>
                    <div>
                        {newsData?.filter((elem) => elem?.isTrending === true)?.map((elem, index) => {
                            return <TrendingNews category={elem?.category} date={elem.date} description={elem?.description} image={elem?.imageUrl} title={elem?.title} />
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}


const TrendingNews = ({ category, date, title, isTrending, image, description }) => {
    return <>
        <div className='w-96 h-fit shadow my-4 p-2'>
            <Flex align='center'>
                <div className=''>
                    <h2 className='text-sm text-gray-700 font-semibold'>{title}</h2>
                    <p className='text-xs my-2 font-light text-grya-700 '>{date}</p>
                </div>
                <img className='w-20' src={image} alt="No Image" />
            </Flex>
        </div>
    </>
}

export default Hero