import React from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import Divider from "../Helper/Divider";

const StepTwo = () => {
  const { stepTwoDetails } = newsData;
  return (
    <>
      <Container className={"bg-gray-200/40"}>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-yellow-600">
            <span className="font-extrabold text-primary-color">Filling</span>{" "}
            Up The NEET Exam Form
          </h1>
          <p className="text-xs font-semibold text-gray-700">
            Once the registration process is completed, candidates have to click
            on 'Complete Application Form' as shown in the image below.
            Aspirants have to login using the provisional registration number
            and password. It is mandatory to fill in the remainining details in
            application form of NEET 2025. The other details to be filled in
            NEET online appication form 2025 are:{" "}
          </p>
          <Divider className={"h-1 w-12 rounded-full bg-yellow-600"} />
          <div className="grid grid-cols-1 space-x-1 lg:grid-cols-3 lg:space-x-4">
            {stepTwoDetails?.map((elem, index) => {
              return (
                <>
                  <div className="w-fit border p-4">
                    <h1 className="text-lg font-bold">{elem?.title}</h1>
                    <p className="text-xs font-semibold text-gray-700">
                      {elem?.desc}
                    </p>
                    <ol className="flex my-2 flex-col">
                      {Object.keys(elem?.content)?.map((key, index) => {
                        return (
                          <li className="text-sm my-1 text-primary-color ">
                            <span className="text-gray-900 text-sm font-semibold mx-1"> {key?.replaceAll("_", " ")}:</span>
                            {elem.content[key]}
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
