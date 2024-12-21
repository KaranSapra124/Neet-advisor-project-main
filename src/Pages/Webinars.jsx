import React from 'react'
import Root from '../Components/Helper/Root'
import Hero from '../Components/Webinar/Hero'
import AspirantsSection from '../Components/Webinar/AspirantsSection'
import WhyAttend from '../Components/Webinar/WhyAttend'
import Features from '../Components/Webinar/Features'

const Webinars = () => {
    return (
        <>
            <Root>
                <Hero />
                <AspirantsSection />
                <WhyAttend />
                <Features/>
            </Root>
        </>
    )
}

export default Webinars