import React, { useEffect, useState } from "react";
import { newsData } from "../../Utils/NewsMockData";
import { Steps } from "antd";
import Container from "../Helper/Container";
const NeetSteps = () => {
  const { stepsData } = newsData;
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    if (curr === stepsData.length) return; // Jab last step pe pahunch jaye, interval set hi na ho

    const currInterval = setInterval(() => {
      setCurr((prev) => (prev < stepsData.length ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(currInterval); // Cleanup to prevent memory leaks
  }, []);

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-yellow-600">
          NEET{" "}
          <span className="font-extrabold text-primary-color">
            Registration
          </span>{" "}
          2025
        </h1>
        <p className="text-xs font-semibold text-gray-700">
          To fill the NEET application form 2025, candidates are required to
          click on 'fill application form'. On the new page, click on 'NTA NEET
          registration 2025 link' which will lead to the instructions papage
          which must be read carefully.
        </p>
        <Steps
          type="inline"
          current={2}
          className="custom-stepper mx-auto"
          items={stepsData?.map((elem, index) => {
            return {
              title: (
                <div
                  className={`${index < curr ? "relative m-4 h-10 w-52 rounded border-l-2 border-yellow-600 bg-white text-gray-900 shadow shadow-gray-900" : "m-4 relative h-10 w-52 rounded border border-gray-900 "}`}
                >
                  <h2
                    className={`${index < curr ? "absolute -left-2 -top-2 w-fit rounded-full bg-yellow-600 px-1.5 text-sm font-bold text-white shadow shadow-yellow-600" : "absolute -left-2 -top-2 w-fit rounded-full bg-white px-1.5 text-sm font-bold text-gray-500 shadow shadow-yellow-600"}`}
                  >
                    {index + 1}
                  </h2>
                  <p className="py-3 text-center text-xs font-bold">{elem}</p>
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
