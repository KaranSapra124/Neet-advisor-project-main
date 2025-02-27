import React from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import Divider from "../Helper/Divider";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

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
          <div className="my-2 grid grid-cols-1 lg:grid-cols-3">
            {stepTwoDetails?.map((elem, index) => {
              return (
                <>
                  <ScrollAnimation animateIn="backInUp" className="h-full" animateOnce>
                    <div className="flex justify-center h-full">
                      <div className="relative my-2 flex w-fit flex-col gap-1.5 rounded border bg-white px-2 py-1.5 lg:my-0">
                        <img
                          src="https://cdn-icons-gif.flaticon.com/18986/18986425.gif"
                          className="absolute -left-4 -top-4 w-7 rounded-full bg-white p-1 shadow shadow-yellow-600"
                          alt=""
                          srcset=""
                        />
                        <h1 className="text-lg font-extrabold">
                          {elem?.title}
                        </h1>
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
                  </ScrollAnimation>
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
