import React, { useEffect } from 'react'
import Root from '../Components/Helper/Root'
import Hero from '../Components/Mbbs_Abroad/Hero'
import ExploreEvents from '../Components/Mbbs_Abroad/ExploreEvents'
import ApplyForDreamUniversity from '../Components/Mbbs_Abroad/ApplyForDreamUniversity'
import Scope from '../Components/Mbbs_Abroad/Scope'
import scrollToTop from '../Utils/ScrollToTop'

const MBBS_Abroad = () => {
    useEffect(()=>{
        scrollToTop()
    },[])
    return <>
        {/* <Root> */}
            <Hero />
            <ExploreEvents />
            <ApplyForDreamUniversity />
            <Scope/>
        {/* </Root> */}
    </>

}

export default MBBS_Abroad