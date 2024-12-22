import React from 'react'
import Root from '../Components/Helper/Root'
import Hero from '../Components/Webinar/Hero'
import AspirantsSection from '../Components/Webinar/AspirantsSection'
import WhyAttend from '../Components/Webinar/WhyAttend'
import Features from '../Components/Webinar/Features'
import Speakers from '../Components/Webinar/Speakers'
import UpcomingWebinars from '../Components/Webinar/UpcomingWebinars'
import Values from '../Components/Webinar/Values'

const Webinars = () => {
    return (
        <>
            <Root>
                <Hero />
                <AspirantsSection />
                <WhyAttend />
                <Features/>
                <Speakers/>
                <UpcomingWebinars/>
                <Values/>
            </Root>
        </>
    )
}

export default Webinars