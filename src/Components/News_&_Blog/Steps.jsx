import React, { useEffect, useState } from "react";
import { newsData } from "../../Utils/NewsMockData";
import { Steps } from "antd";
import Container from "../Helper/Container";
const NeetSteps = () => {
  const { stepsData } = newsData;
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    if (curr === stepsData.length ) return; // Jab last step pe pahunch jaye, interval set hi na ho
  
    const currInterval = setInterval(() => {
      setCurr((prev) => (prev < stepsData.length  ? prev + 1 : prev));
    }, 1000);
  
    return () => clearInterval(currInterval); // Cleanup to prevent memory leaks
  }, [curr, stepsData.length]); // curr ko dependency me rakha taaki jab update ho, effect fire ho
  
  
  return (
    <Container>
      <div>
        <h1 className="text-xl font-bold text-yellow-600">
          NEET{" "}
          <span className="font-extrabold text-primary-color">
            Registration
          </span>{" "}
          2025
        </h1>
        <Steps
          type="inline"
          current={2}
          className="custom-stepper"
          items={stepsData?.map((elem, index) => {
            return {
              title: (
                <div className="m-4 h-10 w-52 rounded border border-gray-900 py-2">
                  <p className="text-center text-[0.7rem] font-semibold text-gray-900">
                    {elem}
                  </p>
                </div>
              ),
              status: index < curr ? "finish" : "wait",
            };
          })}
        />
      </div>
    </Container>
  );
};

export default NeetSteps;
