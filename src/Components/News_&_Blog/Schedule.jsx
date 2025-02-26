import React from "react";
import { newsData } from "../../Utils/NewsMockData";
import Container from "../Helper/Container";
import { Steps } from "antd";

const Schedule = () => {
  const { neetSchedule } = newsData;
  return (
    <Container>
      <div>
        <h1>NEET 2025 application form date</h1>
        <p>
          All the important NEET UG application form 2025 date are provided by
          the NTA in its NEET information bulletin. Among the NEET 2025 major
          updates, the NTA is expected to announce the important NEET
          registration date anytime soon. Candidates can check the NEET
          application date here.
        </p>
        <h1>NEET application form date</h1>
        <div>
          {Object.keys(neetSchedule)?.map((key, index) => {
            return (
              <div>
                {key}:{neetSchedule[key]}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Schedule;
