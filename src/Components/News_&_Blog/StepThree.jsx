import React, { useState } from "react";
import { newsData } from "../../Utils/NewsMockData";
import Container from "../Helper/Container";
import { Collapse } from "antd";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
const StepThree = () => {
  const { stepThree } = newsData;

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-yellow-600">
          <span className="font-extrabold text-primary-color">
            {" "}
            Uploading Of Scanned Documents & Images
          </span>{" "}
          For NEET 2025 Registration Form
        </h1>
        <p className="text-xs font-semibold text-gray-700">
          After filling in the details in the NEET form 2025, candidates have to
          upload scanned copies of the photograph and signature as specified.
          Candidates need to click on 'upload documents'. The documents to be
          uploaded are detailed below:
        </p>
        <Divider className={"h-1 w-12 rounded-full bg-yellow-600"} />
        <div>
          <CollapseData data={stepThree} />
        </div>
      </div>
    </Container>
  );
};

const CollapseData = ({ data }) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <div className="flex justify-between">
      <img
        src="https://img.freepik.com/free-vector/isometric-pharmaceutic-laboratory-research-scientists-composition-with-isolated-character-female-with-laptop-microscope-vector-illustration_1284-66452.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid"
        className="w-[28rem] mx-auto"
        alt=""
      />
      <div className="flex flex-col items-center justify-center gap-2">
        {data?.map((elem, index) => (
          <ScrollAnimation animateIn="backInRight" animateOnce>
            <Collapse
              key={index}
              className="mx-auto mb-2 w-[40rem]"
              activeKey={activeKey === index ? index : null}
              onChange={() => setActiveKey(activeKey === index ? null : index)}
              items={[
                {
                  key: index,
                  label: (
                    <h1 className="font-semibold text-primary-color">
                      {elem.title}
                    </h1>
                  ),
                  children: (
                    <p className="rounded border p-1.5 text-xs font-semibold text-gray-700">
                      {elem.desc}
                    </p>
                  ),
                },
              ]}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
