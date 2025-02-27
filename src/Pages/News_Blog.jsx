import React, { useEffect, useState } from "react";
import Root from "../Components/Helper/Root";
import Hero from "../Components/News_&_Blog/Hero";
import LatestNews from "../Components/News_&_Blog/LatestNews";
import NewsCategories from "../Components/News_&_Blog/NewsCategories";
import NewsLetter from "../Components/News_&_Blog/NewsLetter";
import scrollToTop from "../Utils/ScrollToTop";
import NewsBanner from "../Components/News_&_Blog/NewsBanner";
import Blog from "../Components/News_&_Blog/Blog";
import SocialLinks from "../Components/Services/SocialLinks";
import MoreNews from "../Components/News_&_Blog/MoreNews";
import Schedule from "../Components/News_&_Blog/Schedule";
import EligibilityCriteria from "../Components/News_&_Blog/EligibilityCriteria";
import NeetSteps from "../Components/News_&_Blog/Steps";
import StepOne from "../Components/News_&_Blog/StepOne";
import StepTwo from "../Components/News_&_Blog/StepTwo";
import StepThree from "../Components/News_&_Blog/StepThree";
const News_Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    scrollToTop();
    const newsLetterTimeout = setTimeout(() => setIsOpen(true), 2000);
    return clearTimeout(() => newsLetterTimeout);
  }, []);
  return (
    <>
      {isOpen && <NewsLetter isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Root>
        <Hero />
        <NewsCategories />
        <MoreNews />
        <Schedule />
        <EligibilityCriteria />
        <NeetSteps />
        <StepOne />
        <StepTwo />
        <StepThree/>
        {/* <LatestNews />
        <NewsBanner />
        <Blog />
        <SocialLinks /> */}
      </Root>
    </>
  );
};

export default News_Blog;
