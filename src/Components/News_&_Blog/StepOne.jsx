import React, { Children } from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import { Collapse } from "antd";

const StepOne = () => {
  const { neetDetails, stepOneDetails } = newsData;
  return (
    <>
      <Container>
        <div className="flex flex-col">
          <h1 className="text-yellow-600 text-xl font-bold">NEET <span>Registration 2025</span></h1>
          <p>
            To fill the NEET application form 2025, candidates are required to
            click on 'fill application form'.On the new page, click on 'NTA NEET
            registration 2025 link' which will lead to the instructions page
            which must be read carefully.
          </p>
          <p>
            During NEET-UG registration process, candidates have to fill the
            below mentioned details.A password must also be created as per the
            given specifications which is used for all future login. A NEET
            application number is generated after registration for NEET NTA
            2025. This user ID is used to login to NEET form fill up 2025.
          </p>
          <div>
            {neetDetails?.map((elem, index) => {
              return <li>{elem}</li>;
            })}
          </div>
          <StepOneDetails data={stepOneDetails} />
        </div>
      </Container>
    </>
  );
};

const StepOneDetails = ({ data }) => {
  return (
    <>
      <div>
        <Collapse accordion 
          items={data?.map((elem, index) => {
            return {
              key: index,
              label: elem?.title,
              children: <p>{elem?.desc}</p>,
            };
          })}
        />
      </div>
    </>
  );
};

export default StepOne;
