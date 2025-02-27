import React, { Children } from "react";
import Container from "../Helper/Container";
import { newsData } from "../../Utils/NewsMockData";
import { Collapse } from "antd";
import Divider from "../Helper/Divider";

const StepOne = () => {
  const { neetDetails, stepOneDetails } = newsData;
  return (
    <>
      <Container>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-yellow-600">
            NEET{" "}
            <span className="font-extrabold text-primary-color">
              Registration 2025
            </span>
          </h1>
          <p className="text-xs font-semibold text-gray-700">
            To fill the NEET application form 2025, candidates are required to
            click on 'fill application form'.On the new page, click on 'NTA NEET
            registration 2025 link' which will lead to the instructions page
            which must be read carefully.
          </p>
          <p className="text-xs font-semibold text-gray-700">
            During NEET-UG registration process, candidates have to fill the
            below mentioned details.A password must also be created as per the
            given specifications which is used for all future login. A NEET
            application number is generated after registration for NEET NTA
            2025. This user ID is used to login to NEET form fill up 2025.
          </p>
          <Divider className={"h-1 w-12 rounded-full bg-yellow-600"} />
          <div className="flex w-full justify-between">
            <div className="w-1/2">
              <div className="rounded border bg-gray-100/80 p-2">
                {neetDetails?.map((elem, index) => {
                  return (
                    <li className="list-none text-sm text-primary-color">
                      <span className="mx-1 border-b border-yellow-600 font-semibold">
                        {" "}
                        {index + 1}.{" "}
                      </span>
                      {elem}
                    </li>
                  );
                })}
              </div>
            </div>
            <StepOneDetails data={stepOneDetails} />
          </div>
        </div>
      </Container>
    </>
  );
};

const StepOneDetails = ({ data }) => {
  // console.log(data)
  return (
    <>
      <div className="w-1/2">
        {data?.map((elem, index) => {
          console.log(elem);
          return (
            <Collapse
              defaultActiveKey={[0]}
              className="mx-auto my-2 w-96"
              accordion
              items={[
                {
                  key: index,
                  label: (
                    <h1 className="font-semibold text-primary-color">
                      {elem?.title}
                    </h1>
                  ),
                  children: (
                    <p className="rounded border p-1.5 text-xs font-semibold text-gray-700">
                      {elem?.desc}
                    </p>
                  ),
                },
              ]}
            />
          );
        })}
      </div>
    </>
  );
};

export default StepOne;
