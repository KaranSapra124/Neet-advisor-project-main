import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
const Hero = () => {
  const { date, editor, title, registration_link } = newsData;
  return (
    <>
      <Container className={"bg-gray-900"}>
        <h1>{title}</h1>
        <p>Edited By: {editor} | {date}</p>
      </Container>
    </>
  );
};

export default Hero;
