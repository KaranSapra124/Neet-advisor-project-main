import React, { useEffect } from 'react'
import PricingComponent from '../Components/Services/Plans'
import EnrollServices from '../Components/Services/EnrollServices'
import SocialLinks from '../Components/Services/SocialLinks'
import Reviews from '../Components/Services/Reviews'
import Root from '../Components/Helper/Root'
import scrollToTop from '../Utils/ScrollToTop'
import Testimonials from '../Components/Home/Testimonials'

const Services = () => {
    useEffect(()=>{
        scrollToTop()
    },[])
    return (
        <>
            <Root>

                <PricingComponent />
                <EnrollServices />
                <SocialLinks />
                <Testimonials/>
            </Root>
        </>
    )
}

export default Services