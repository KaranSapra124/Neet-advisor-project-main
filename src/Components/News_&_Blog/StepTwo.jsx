import React from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";

const StepTwo = () => {
  const { stepTwoDetails } = newsData;
  return (
    <>
      <Container className={"bg-gray-200/40"}>
        <div>
          <h1>Filling Up The NEET Exam Form</h1>
          <p>
            Once the registration process is completed, candidates have to click
            on 'Complete Application Form' as shown in the image below.
            Aspirants have to login using the provisional registration number
            and password. It is mandatory to fill in the remainining details in
            application form of NEET 2025. The other details to be filled in
            NEET online appication form 2025 are:{" "}
          </p>
          <div>
            {stepTwoDetails?.map((elem, index) => {
              return (
                <>
                  <div>
                    <h1>{elem?.title}</h1>
                    <p>{elem?.desc}</p>
                    <ol>
                      {Object.keys(elem?.content)?.map((key, index) => {
                        console.log(elem.content[key])
                        return (
                          <li>
                            {key?.replaceAll("_"," ")}:{elem.content[key]}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default StepTwo;
