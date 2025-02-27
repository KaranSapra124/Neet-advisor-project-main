import React, { useState } from "react";
import { newsData } from "../../Utils/NewsMockData";
import { Steps } from "antd";
import Container from "../Helper/Container";
const NeetSteps = () => {
  const { stepsData } = newsData;
  const [curr,setCurr] = useState(2)
  return (
    <Container>
      <div>
        <Steps
        
          type="inline"
          current={2}
          className="custom-stepper"
          items={stepsData?.map((elem, index) => {
            return {
              title: (
                <div className="border py-2 m-4 rounded border-gray-900 w-52 h-10">
                  <p className="text-center text-gray-900 text-[0.7rem] font-semibold">
                    {elem}
                  </p>
                </div>
              ),
              status:index < curr ? "finish" : "wait",
              
              
            };
          })}
        />
      </div>
    </Container>
  );
};

export default NeetSteps;
