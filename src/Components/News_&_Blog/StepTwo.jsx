import React from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import Divider from "../Helper/Divider";
import { FaArrowRight } from "react-icons/fa";

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
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {stepTwoDetails?.map((elem, index) => {
              return (
                <>
                  <div className="flex justify-center">
                    <div className="my-2 flex w-fit flex-col gap-1.5 rounded border bg-gray-100/50 px-2 py-1.5 lg:my-0">
                      <h1 className="text-lg font-extrabold">{elem?.title}</h1>
                      <Divider
                        className={"h-1 w-12 rounded-full bg-yellow-600"}
                      />
                      <p className="text-xs font-semibold text-gray-700">
                        {elem?.desc}
                      </p>
                      <ol className="my-2 flex flex-col">
                        {Object.keys(elem?.content)?.map((key, index) => {
                          return (
                            <li className="my-1 text-sm text-primary-color">
                              <span className="mx-1 text-sm font-semibold text-gray-900">
                                {" "}
                                {key?.replaceAll("_", " ")}:
                              </span>
                              {elem.content[key]}
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                    {index < stepTwoDetails?.length - 1 && (
                      <FaArrowRight className="mx-2 my-auto hidden w-4 animate-pulse lg:block" />
                    )}
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
