import React from 'react'
import Hero from '../Components/UG_Seminar/Hero';
import "../Components/UG_Seminar/Ug_seminar.css";
import Root from '../Components/Helper/Root';
import OurPanelists from '../Components/PG_Seminar/OurPanelists';
import SeminarOutcomes from '../Components/PG_Seminar/SeminarOutcomes';
import Why_Attend from '../Components/PG_Seminar/Why_Attend';
const UG_seminar = () => {
    return (
        <>
            <Root>
                <Hero />
                <Why_Attend className={'bg-gray-100'}/>
                <OurPanelists/>
                <SeminarOutcomes/>
            </Root>
        </>
    )
}

export default UG_seminar