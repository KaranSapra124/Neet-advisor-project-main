import React from 'react'
import Hero from '../Components/Home/Hero'
import CounsellingSection from '../Components/Home/CounsellingSection'
import WhyUsSection from '../Components/Home/WhyUsSection'
import NewsSection from '../Components/Home/NewsSection'
import Stats from '../Components/Home/Stats'
import Testimonials from '../Components/Home/Testimonials'
import ContactBanner from '../Components/Home/ContactBanner'
import Footer from '../Components/Home/Footer'
import Navbar from '../Components/Home/Navbar'
import UpperNavbar from '../Components/Helper/UpperNavbar'
import Gallery from '../Components/Home/Gallery'
import Root from '../Components/Helper/Root'
// import ImageSection from '../Components/Home/ImageSection'

const Home = () => {
    return (
        <>
            {/* <UpperNavbar /> */}
            {/* <Navbar /> */}
            <Root>
                <Hero />
                {/* <ImageSection /> */}
                <CounsellingSection />
                <WhyUsSection />
                <NewsSection />
                <Stats />
                <Testimonials />
                <Gallery />
                <ContactBanner />
            </Root>
            {/* <Footer /> */}
        </>
    )
}

export default Home