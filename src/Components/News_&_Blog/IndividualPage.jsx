import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Root from "../Helper/Root";
import Container from "../Helper/Container";

const IndividualPage = () => {
  const location = useLocation();
  const { state } = location;
  const { title, description, imageUrl, date, category } = state;
  return (
    <>
      {/* <Root> */}
      <Container>
        <div className="flex max-w-screen-2xl justify-between">
          <img src={imageUrl} alt="" srcset="" />
          <div className="mx-4">
            <p className="w-fit rounded bg-yellow-500 p-1 text-xs font-semibold text-white">
              {category}
            </p>
            <h1 className="py-2 text-3xl font-bold text-primary-color">
              {title}
            </h1>
            <p className="py-2 text-sm">{description}</p>
            <p className="font-bold text-gray-700">{date}</p>
          </div>
        </div>
      </Container>
      {/* </Root> */}
    </>
  );
};

export default IndividualPage;
