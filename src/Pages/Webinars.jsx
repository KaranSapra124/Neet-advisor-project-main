import React, { useEffect } from "react";
import Root from "../Components/Helper/Root";
import Hero from "../Components/Webinar/Hero";
import AspirantsSection from "../Components/Webinar/AspirantsSection";
import WhyAttend from "../Components/Webinar/WhyAttend";
import Features from "../Components/Webinar/Features";
import Speakers from "../Components/Webinar/Speakers";
import UpcomingWebinars from "../Components/Webinar/UpcomingWebinars";
import Values from "../Components/Webinar/Values";
import Outcome from "../Components/Webinar/Outcome";
import Testimonials from "../Components/Webinar/Testimonials";
import ShowWebinar from "../Components/Webinar/ShowWebinar";
import scrollToTop from "../Utils/ScrollToTop";

const Webinars = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Root>
        <Hero />
        <ShowWebinar />
        <AspirantsSection />
        <WhyAttend />
        <Features />
        <Speakers />
        <UpcomingWebinars />
        <Values />
        <Outcome />
        <Testimonials />
      </Root>
    </>
  );
};

export default Webinars;
