import React from "react";

const CounsellingSection = () => {
  const counselingContent = [
    {
      title: "Understanding NEET Preparation Basics",
      keyPoints: [
        "Overview of NEET syllabus and exam pattern.",
        "Importance of choosing the right study material",
        "Setting achievable goals for preparation",
      ],
      position: "bottom", // This will be below the timeline
    },
    {
      title: "Time Management for NEET Aspirants",
      keyPoints: [
        "Creating an effective study timetable.",
        "Allocating time for revision and mock tests.",
        "Balancing study hours with relaxation and self-care.",
      ],
      position: "top", // This will be above the timeline
    },
    {
      title: "Dealing with Exam Stress and Anxiety",
      keyPoints: [
        "Tips for staying positive and focused.",
        "Techniques for reducing exam-related anxiety.",
        "Importance of maintain mental and physical well-being.",
      ],
      position: "bottom", // Below the timeline
    },
    {
      title: "Career Guidance for Medical Aspirant",
      keyPoints: [
        "Understanding Medical Courses and Specialization",
        "How to choose the right medical college.",
        "Insights into career opportunities after NEET.",
      ],
      position: "top", // Above the timeline
    },
  ];

  return (
    <div className="bg-white px-4 py-12">
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
      <div className="relative  mx-auto max-w-screen-xl">
        {/* Background Image */}
        <img src="bg-img.png" className="mx-auto h-[30rem] object-cover" alt="" />

        {/* Content Overlay (Positioned on top of image) */}
        <div className="z-10 flex w-full flex-wrap justify-center">
          {counselingContent?.map((elem, index) => (
            <>
            {/* <img src="icon.png" alt="" srcset="" /> */}
              <div
                key={index}
                className={`absolute left-1/2 top-0 m-4 h-fit w-80 -translate-x-1/2 transform rounded-lg bg-white p-4 shadow-lg ${
                  index === 0
                    ? "-ml-[30rem] mt-[17rem]"
                    : index === 2
                      ? "ml-[10rem] mt-[17rem]"
                      : index === 1
                        ? "-ml-40 mt-[4rem]"
                        : "ml-[30rem] mt-[5rem]"
                }`}
              >
                {/* <img src="" alt="" srcset="" /> */}
                <h2 className="lg:-lg font-bold text-indigo-800">
                  {elem?.title}
                </h2>
                <ul className="mt-2 list-inside list-disc text-gray-700">
                  {elem?.keyPoints?.map((point, ind) => (
                    <li key={ind} className="text-xs">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
