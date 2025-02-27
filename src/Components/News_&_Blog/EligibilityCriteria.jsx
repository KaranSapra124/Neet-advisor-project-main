import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { newsData } from "../../Utils/NewsMockData";

const EligibilityCriteria = () => {
  const { eligibilityCriteria } = newsData;
  return (
    <>
      <Container>
        <div className="flex flex-col gap-2.5">
          <h1 className="text-xl font-bold text-yellow-600">
            <span className="font-extrabold text-primary-color">
              Eligibility Criteria
            </span>{" "}
            For NEET Exam 2025
          </h1>
          <p className="text-xs font-semibold text-gray-700">
            Before filling out the NEET application form, aspirants must check
            the eligibility criteria set as per the qualification codes of NEET
            exam. Aspirants can check the NEET 2025 eligibility criteria from
            below.
          </p>
          <Divider className={"h-1 w-12 rounded-full bg-yellow-600"} />
          <h1 className="text-xl font-semibold text-primary-color">
            NEET 2025 application eligibility criteria
          </h1>
          <EligibilityComponent data={eligibilityCriteria} />
        </div>
      </Container>
    </>
  );
};
const EligibilityComponent = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-800">
          <tr>
            {Object.keys(data).map((elem, index) => (
              <th
                key={index}
                className="border border-gray-400 px-4 py-2 text-xs font-semibold text-center"
              >
                {elem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition">
            {Object.keys(data).map((elem, index) => (
              <td
                key={index}
                className="border border-gray-900 px-2 py-2 text-[0.7rem] text-gray-700 font-semibold text-center"
              >
                {data[elem]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EligibilityCriteria;
