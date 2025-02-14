import React from "react";
import Container from "../Helper/Container";
import "./Pg_Seminar.css";
import { Steps } from "antd";
import Divider from "../Helper/Divider";
const SeminarOutcomes = () => {
  const data = [
    {
      title: "MM Guidebook",
      description:
        "A chance to win the NEET PG Counselling encyclopedia worth Rs. 3000!",
      image: "./Seminar/Guide.png",
    },
    {
      title: "Free Counselling Handbook",
      description:
        "Get the complete Karnataka Counselling Handbook worth Rs. 500/- Learn all about KEA Counselling.",
      image: "./Seminar/Booklet.png",
    },
    {
      title: "Free 1-to-1 Session",
      description:
        "Correct advice is priceless. Interact with our counselling experts.",
      image:
        "https://videos.pexels.com/video-files/4428753/4428753-sd_640_360_25fps.mp4",
    },
    {
      title: "Clear Your Doubts",
      description:
        "Voice your concerns. Feel heard with our doubt-clearing segment. Put your fears to rest.",
      image:
        "https://videos.pexels.com/video-files/8108609/8108609-sd_960_506_25fps.mp4",
    },
  ];

  return (
    <Container
      className={"no-repeat relative h-full bg-webinar-hero bg-cover bg-fixed"}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/80 via-gray-900 to-gray-900/80 backdrop-blur-sm"></div>

      <div className="relative text-center">
        <h1 className="py-1 text-4xl font-bold text-yellow-600">
          What You Will{" "}
          <span className="font-extrabold text-primary-color brightness-200">
            Gain ?
          </span>
        </h1>
        <p className="mx-auto my-4 w-96 text-xs font-semibold text-gray-300">
          Leave prepared for the NEET PG counselling journey. Here's how our
          attendees benefit from Medical Mentor's seminar!
        </p>
        <Divider
          className={"mx-auto mt-4 h-1 w-32 rounded-full bg-yellow-600"}
        />
      </div>
      <div className="relative my-5 flex justify-center gap-2">
        {data?.map((elem, index) => {
          return (
            <div
              key={index}
              className="my-2 h-[21rem]  w-72 animate-rubberBand cursor-pointer rounded bg-gradient-to-tr from-black/50 via-gray-500/10 to-gray-900/40 p-4 text-center shadow-sm shadow-white transition-all duration-500 hover:scale-105"
            >
              {index < 2 ? (
                <img
                  src={elem?.image}
                  className="animate-backIn mx-auto h-52 w-64"
                  alt="No Image"
                  srcset=""
                />
              ) : (
                <video
                  className="mx-auto h-52"
                  autoPlay
                  loop
                  muted
                  src={elem?.image}
                />
              )}
              <h2 className="w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-bold text-white">
                # {elem?.title}
              </h2>
              <Divider
                className={"my-3 h-0.5 w-10 rounded-full bg-yellow-600"}
              />
              <p className="text-xs font-semibold text-justify text-gray-300">
                {elem?.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default SeminarOutcomes;
