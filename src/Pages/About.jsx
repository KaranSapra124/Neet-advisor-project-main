import React, { useEffect } from "react";
import Root from "../Components/Helper/Root";
import Container from "../Components/Helper/Container";
import Hero from "../Components/About/Hero";
import GuidingSection from "../Components/About/GuidingSection";
import WhoWeAre from "../Components/About/WhoWeAre";
import OurValues from "../Components/About/OurValues";
import TeamInAction from "../Components/About/TeamInAction";
import Gems from "../Components/About/Gems";
import scrollToTop from "../Utils/ScrollToTop";

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      {/* <Root> */}
        {/* <Container> */}
        <Hero />
        <GuidingSection />
        <WhoWeAre />
        <OurValues />
        <TeamInAction />
        <Gems />
        {/* </Container> */}
      {/* </Root> */}
    </>
  );
};

export default About;
