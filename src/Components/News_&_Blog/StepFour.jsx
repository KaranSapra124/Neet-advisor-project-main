import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { newsData } from "../../Utils/NewsMockData";
const StepFour = () => {
  const { stepFour, stepFourHeader } = newsData;
  return (
    <Container className={"bg-gray-200/40"}>
      <div className="flex gap-2 flex-col">
        <h1 className="text-xl font-bold text-yellow-600">NEET 2025 <span className="text-primary-color font-extrabold">application form - Specification of scanned documents</span></h1>
        <p className="text-xs text-gray-700 font-semibold">
          To complete the application form, aspirants have to upload certain
          documents required for NEET 2025.The following documents need to be
          submitted in the format as prescribed in the below table.For a
          detailed understanding, candidates can check the article on NEET 2025
          photo and document format.
        </p>
        <Divider className={"h-1 w-12 bg-yellow-600 rounded-full"}/>
        <div>
          <table className="min-w-full rounded-lg border border-gray-300 shadow-md">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                {stepFourHeader?.map((elem, index) => (
                  <th
                    key={index}
                    className="border border-gray-400 px-4 py-2 text-center text-xs font-semibold"
                  >
                    {elem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stepFour?.map((row, rowIndex) => (
                <tr key={rowIndex} className="transition hover:bg-gray-100">
                  {Object.keys(row)?.map((key, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-400 px-2 py-2 text-center text-[0.7rem] font-semibold text-gray-700"
                    >
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default StepFour;
