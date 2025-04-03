import React from "react";
import { TiTick } from "react-icons/ti";

const CounsellingSection = () => {
  const counselingContent = [
    {
      title: "Understanding NEET Preparation Basics",
      keyPoints: ["Reduces lack of awareness about application deadline."],
      position: "bottom", // This will be below the timeline
    },
    {
      title: "Time Management for NEET Aspirants",
      keyPoints: [
        "To choose best possible college on your respective Neet Rank.",
      ],
      position: "top", // This will be above the timeline
    },
    {
      title: "Dealing with Exam Stress and Anxiety",
      keyPoints: ["Better clarity about counselling & admission process"],
      position: "bottom", // Below the timeline
    },
    {
      title: "Career Guidance for Medical Aspirant",
      keyPoints: ["To know your college & surrounding before you choose."],
      position: "top", // Above the timeline
    },
  ];

  return (
    <div className="bg-white px-4 py-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-3xl font-bold">
          <span className="text-yellow-500">Importance of</span>{" "}
          <span className="text-indigo-800">Counselling Guidance</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Get personalized and ease your biggest doubts with video Counselling
          from our curated experts.
        </p>
      </div>

      {/* Cards */}
      {/* <div className="flex ">
        {counselingContent?.map((elem, index) => {
          return (
            <div className="w-full  p-0 relative">
              <img src="bg.png" className="w-full  absolute p-0" alt="" srcset="" />
              <div className="mx-auto w-52  ">
                <h4 className="text-sm">{elem?.title}</h4>
                <div>
                  {elem?.keyPoints?.map((point, ind) => {
                    return <li>{point}</li>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="relative mx-auto max-w-screen-xl">
        {/* Background Image */}
        <img
          src="bg-img.png"
          className="mx-auto h-[20rem] object-cover"
          alt=""
        />

        {/* Content Overlay (Positioned on top of image) */}
        <div className="z-10 flex w-full flex-wrap justify-center">
          {counselingContent?.map((elem, index) => (
            <>
              <img
                src="icon.png"
                className={`absolute ${index === 0 ? "-ml-[58rem] -mt-[17.6rem] h-10 w-16" : index === 1 ? "-ml-[20.8rem] -mt-[5.5rem] h-10 w-16" : index === 2 ? "-mt-[17.6rem] ml-[20rem] h-10 w-16" : "-mt-[5.5rem] ml-[57.5rem] h-10 w-16"}`}
                alt=""
                srcset=""
              />
              <div
                key={index}
                className={`absolute left-1/2 top-0 m-4 h-fit w-80 -translate-x-1/2 transform rounded-lg bg-white p-4 shadow ${
                  index === 0
                    ? "-ml-[29rem] mt-[12rem]"
                    : index === 2
                      ? "ml-[10rem] mt-[12rem]"
                      : index === 1
                        ? "-ml-40 mt-[4rem]"
                        : "ml-[30rem] mt-[4rem]"
                }`}
              >
                <img
                  src="./Seminar/validation-badge-bg-removed.gif"
                  className="absolute -left-4 -top-3 w-10"
                  alt=""
                  srcset=""
                />
                <h2 className="lg:text-sm font-extrabold text-indigo-800">
                  {elem?.keyPoints[0]}
                </h2>
                {/* <ul className="mt-2 list-inside list-disc text-gray-700">
                  {elem?.keyPoints?.map((point, ind) => (
                    <li
                      key={ind}
                      className="flex list-none space-x-1 text-[0.7rem]"
                    >
                      <TiTick className="text-sm" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
