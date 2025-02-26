import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { newsData } from "../../Utils/NewsMockData";

const MoreNews = () => {
  const { heading, storyData } = newsData;
  return (
    <Container className={"bg-gray-200/40"}>
      <div>
        <p className="text-sm font-thin text-gray-800">{heading}</p>
      </div>
    </Container>
  );
};

export default MoreNews;
