import React from "react";
import { newsData } from "../../Utils/NewsMockData";
import Container from "../Helper/Container";
import { Collapse } from "antd";
const StepThree = () => {
  const { stepThree } = newsData;
  return (
    <Container>
      <div>
        <h1>
          Uploading Of Scanned Documents & Images For NEET 2025 Registration
          Form
        </h1>
        <p>
          After filling in the details in the NEET form 2025, candidates have to
          upload scanned copies of the photograph and signature as specified.
          Candidates need to click on 'upload documents'. The documents to be
          uploaded are detailed below:
        </p>
        <div>
          <CollapseData data={stepThree} />
        </div>
      </div>
    </Container>
  );
};

const CollapseData = ({ data }) => {
  return (
    <>
      <div>
        {data?.map((elem, index) => {
          return (
            <>
              <Collapse
                defaultActiveKey={[0]}
                className="mx-auto mb-2 w-96"
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default StepThree;
