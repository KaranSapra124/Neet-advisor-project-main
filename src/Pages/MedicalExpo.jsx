import React, { useEffect } from "react";
import Root from "../Components/Helper/Root";
import Hero from "../Components/Medical_Expo/Hero";
import SuperChargeDream from "../Components/Medical_Expo/OurAchievements";
import OurPanelists from "../Components/Medical_Expo/OurPanelists";
import Schedule from "../Components/Medical_Expo/Schedule";
import EventLocation from "../Components/Medical_Expo/EventLocation";
import BookSpot from "../Components/Medical_Expo/BookSpot";
import scrollToTop from "../Utils/ScrollToTop";

const MedicalExpo = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Hero />
      <SuperChargeDream />
      <OurPanelists />
      <Schedule />
      <EventLocation />
      <BookSpot />
    </>
    //    <Root>
    //    </Root>
  );
};

export default MedicalExpo;
