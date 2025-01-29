import React, { useEffect } from 'react'
import Root from "../Components/Helper/Root"
import Hero from '../Components/Contact/Hero'
import scrollToTop from '../Utils/ScrollToTop'
const Contact = () => {
    useEffect(()=>{
        scrollToTop()
    },[])
    return (
        <>
            <Root>
                <Hero />
            </Root>
        </>
    )
}

export default Contact