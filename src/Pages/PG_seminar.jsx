import React from "react";
import Root from "../Components/Helper/Root";
import Hero from "../Components/PG_Seminar/Hero";
import Why_Attend from "../Components/PG_Seminar/Why_Attend";
import Glimpse_Of_Success from "../Components/PG_Seminar/Glimpse_Of_Success";
import OurPanelists from "../Components/PG_Seminar/OurPanelists";
import SeminarOutcomes from "../Components/PG_Seminar/SeminarOutcomes";
import WhoShouldAttend from "../Components/PG_Seminar/WhoShouldAttend";
import OurSpeaker from "../Components/PG_Seminar/OurSpeaker";

const PG_seminar = () => {
  return (
    <Root>
      <Hero />
      <Why_Attend />
      <Glimpse_Of_Success />
      <OurPanelists />
      <WhoShouldAttend />
      <SeminarOutcomes />
      <OurSpeaker />
    </Root>
  );
};

export default PG_seminar;
