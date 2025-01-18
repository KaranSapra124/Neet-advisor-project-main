import React from "react";
import Hero from "../Components/UG_Seminar/Hero";
import "../Components/UG_Seminar/Ug_seminar.css";
import Root from "../Components/Helper/Root";
import Purpose from "../Components/UG_Seminar/Purpose";
const UG_seminar = () => {
  return (
    <>
      <Root>
        <Hero />
        <Purpose />
     
      </Root>
    </>
  );
};

export default UG_seminar;
