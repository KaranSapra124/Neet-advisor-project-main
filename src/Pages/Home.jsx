import React, { useEffect, useState } from "react";
import Hero from "../Components/Home/Hero";
import CounsellingSection from "../Components/Home/CounsellingSection";
import WhyUsSection from "../Components/Home/WhyUsSection";
import NewsSection from "../Components/Home/NewsSection";
import Stats from "../Components/Home/Stats";
import Testimonials from "../Components/Home/Testimonials";
import ContactBanner from "../Components/Home/ContactBanner";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import UpperNavbar from "../Components/Helper/UpperNavbar";
import Gallery from "../Components/Home/Gallery";
import Root from "../Components/Helper/Root";
import scrollToTop from "../Utils/ScrollToTop";
import ContactModal from "../Utils/ContactModal";
// import ImageSection from '../Components/Home/ImageSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      {/* <UpperNavbar /> */}
      {/* <Navbar /> */}
      {isOpen && (
        <ContactModal open={isOpen} setIsOpen={() => setIsOpen(false)} />
      )}
      {/* <Root> */}
      <Hero />
      {/* <ImageSection /> */}
      <CounsellingSection />
      <WhyUsSection />
      <NewsSection />
      <Stats />
      <Testimonials />
      <Gallery />
      <ContactBanner />
      {/* </Root> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
