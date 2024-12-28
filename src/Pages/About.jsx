import React from 'react'
import Root from "../Components/Helper/Root"
import Container from "../Components/Helper/Container"
import Hero from '../Components/About/Hero'
import GuidingSection from '../Components/About/GuidingSection'
import WhoWeAre from '../Components/About/WhoWeAre'

const About = () => {
    return (
        <>
            <Root>
                {/* <Container> */}
                <Hero />
                <GuidingSection />
                <WhoWeAre />
                {/* </Container> */}
            </Root>
        </>
    )
}

export default About