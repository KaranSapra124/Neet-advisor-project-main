import React, { useEffect } from "react";
import Hero from "../Components/UG_Seminar/Hero";
import "../Components/UG_Seminar/Ug_seminar.css";
import Root from "../Components/Helper/Root";
import Purpose from "../Components/UG_Seminar/Purpose";
import SeminarDetails from "../Components/UG_Seminar/SeminarDetails";
import "../Components/UG_Seminar/Ug_seminar.css";
import Agenda from "../Components/UG_Seminar/Agenda";
import WhoShouldAttend from "../Components/UG_Seminar/WhoShouldAttend";
import Speakers from "../Components/UG_Seminar/Speakers";
import scrollToTop from "../Utils/ScrollToTop";
const UG_seminar = () => {
  useEffect(()=>{
    scrollToTop()
},[])
  return (
    <>
      {/* <Root> */}
        <Hero />
        <Purpose />
        <SeminarDetails/>
        <Agenda/>
        <WhoShouldAttend/>
        <Speakers/>
      {/* </Root> */}
    </>
  );
};

export default UG_seminar;
