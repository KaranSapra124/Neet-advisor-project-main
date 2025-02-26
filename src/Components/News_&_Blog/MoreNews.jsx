import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { newsData } from "../../Utils/NewsMockData";

const MoreNews = () => {
  const { heading, storyData } = newsData;
  return (
    <Container className={"bg-gray-200/10"}>
      <div>
        <p className="text-sm font-thin text-gray-800">{heading}</p>
        <Divider className={'w-12 h-1 rounded-full bg-yellow-600 my-4'}/>
        <StoryContent storyData={storyData}/>
      </div>

    </Container>
  );
};

const StoryContent = ({storyData}) => {
  return (
    <>
      <div className="flex py-5 items-center justify-between">

        <ol className="flex relative h-80 w-1/2 flex-col gap-3.5 rounded border bg-gray-200/10 px-5 py-4">
        <img src="./Webinar/BookImg.gif" className="w-7 shadow shadow-yellow-600 rounded-full absolute -top-4 -left-4 bg-white" alt="" srcset="" />
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
        <img
          className="h-80 w-1/2"
          src="https://neetadvisor.com/assets/images/About-Us-Pic-1.webp"
          alt=""
          srcset=""
        />
      </div>
    </>
  );
};

export default MoreNews;
