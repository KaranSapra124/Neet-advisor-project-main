import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const EligibilityCriteria = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-2">
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
        </div>
      </Container>
    </>
  );
};

export default EligibilityCriteria;
