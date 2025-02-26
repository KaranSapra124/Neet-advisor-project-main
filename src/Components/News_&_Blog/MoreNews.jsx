import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { newsData } from "../../Utils/NewsMockData";

const MoreNews = () => {
  const { heading, storyData } = newsData;
  return (
    <Container className={"bg-gray-200/40"}>
      <div>
        <p className="text-sm font-thin text-gray-800">{heading}</p>
        <div className="flex items-center justify-between">
          <ol className="flex h-80 w-1/2  flex-col gap-2 rounded border bg-gray-200/10 p-4">
            {storyData?.map((elem, index) => {
              return (
                <>
                  <li className="cursor-pointer text-sm text-primary-color">
                    <span className="mx-1 border-b border-yellow-600 text-gray-900">
                      {index + 1}.
                    </span>
                    {elem}
                  </li>
                </>
              );
            })}
          </ol>
          <img className="w-1/2 h-80  "
            src="https://neetadvisor.com/assets/images/About-Us-Pic-1.webp"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </Container>
  );
};

export default MoreNews;
