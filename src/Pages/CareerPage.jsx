import React from 'react'
import Root from "../Components/Helper/Root"
// import Container from "../Components/Helper/Container"
import Hero from '../Components/Career/Hero'
import Benefits from '../Components/Career/Benefits'
import JobOpenings from '../Components/Career/JobOpenings'
import RecruitmentProcess from '../Components/Career/RecruitmentProcess'

const CareerPage = () => {
    return (
        <>
            <Root>
                <Hero />
                <Benefits/>
                <JobOpenings/>
                <RecruitmentProcess/>
            </Root>
        </>
    )
}

export default CareerPage