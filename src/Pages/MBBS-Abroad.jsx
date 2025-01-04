import React from 'react'
import Root from '../Components/Helper/Root'
import Hero from '../Components/Mbbs_Abroad/Hero'
import ExploreEvents from '../Components/Mbbs_Abroad/ExploreEvents'
import ApplyForDreamUniversity from '../Components/Mbbs_Abroad/ApplyForDreamUniversity'
import Scope from '../Components/Mbbs_Abroad/Scope'

const MBBS_Abroad = () => {
    return <>
        <Root>
            <Hero />
            <ExploreEvents />
            <ApplyForDreamUniversity />
            <Scope/>
        </Root>
    </>

}

export default MBBS_Abroad