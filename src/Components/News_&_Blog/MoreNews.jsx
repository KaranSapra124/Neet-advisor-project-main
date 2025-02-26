import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { newsData } from "../../Utils/NewsMockData";

const MoreNews = () => {
  const { heading, storyData, importantLinks } = newsData;
  return (
    <Container className={"bg-gray-200/10"}>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-thin text-gray-800">{heading}</p>
        <Divider className={"my-4 h-1 w-12 rounded-full bg-yellow-600"} />
        <StoryContent storyData={storyData} />
        <ImportantLinks importantLinks={importantLinks} />
      </div>
    </Container>
  );
};

const StoryContent = ({ storyData }) => {
  return (
    <>
      <div className="flex items-center justify-between py-5">
        <ol className="relative flex h-80 w-1/2 flex-col gap-3.5 rounded border bg-gray-200/10 px-5 py-4">
          <img
            src="./Webinar/BookImg.gif"
            className="absolute -left-4 -top-4 w-7 rounded-full bg-white shadow shadow-yellow-600"
            alt=""
            srcset=""
          />
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

const ImportantLinks = ({ importantLinks }) => {
  return (
    <>
      {/* <div className="flex  w-full "> */}
        {/* <img
          className="w-1/2"
          src="https://img.freepik.com/premium-vector/portrait-doctor-one-line-drawing-isolated-vector_566661-900.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid"
          alt=""
          srcset=""
        /> */}
        <div className="w-full rounded flex flex-col gap-3.5 border py-4  px-5 relative bg-gray-200/10 ">
        <img
            src="./Webinar/BookImg.gif"
            className="absolute -left-3 -top-4 w-7 rounded-full bg-white shadow shadow-yellow-600"
            alt=""
            srcset=""
          />
          {importantLinks?.map((elem, index) => {
            {
              return Object.keys(elem)?.map((key) => {
                return (
                  <li className="list-none text-primary-color">
                    <span className="border-b border-yellow-600 font-thin mx-1 text-gray-900">{key}:</span>
                    {elem[key]}
                  </li>
                );
              });
            }
          })}
        </div>
      {/* </div> */}
    </>
  );
};

export default MoreNews;
