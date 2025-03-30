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
      <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-sm"></div>

      <div className="relative text-center">
        <h1 className="py-1 lg:text-4xl text-sm font-bold text-yellow-600">
          What You Will{" "}
          <span className="font-extrabold text-primary-color ">
            Gain ?
          </span>
        </h1>
        <p className="mx-auto lg:my-4 lg:w-96 my-2 lg:text-xs text-[0.5rem] font-semibold text-gray-800">
          Leave prepared for the NEET PG counselling journey. Here's how our
          attendees benefit from Medical Mentor's seminar!
        </p>
        <Divider
          className={"mx-auto lg:my-4 my-2 lg:h-1 h-0.5 lg:w-32 w-12 rounded-full bg-primary-color"}
        />
      </div>
      <div className="relative my-5 flex lg:flex-row flex-col justify-center gap-2">
        {data?.map((elem, index) => {
          return (
            <div
              key={index}
              className="my-2 lg:h-[21rem]  lg:w-72 w-fit animate-rubberBand cursor-pointer rounded bg-gray-100/40 border border-black/20 p-4 text-center shadow-sm shadow-white transition-all hover:scale-105"
            >
              {index < 2 ? (
                <img
                  src={elem?.image}
                  className="animate-backIn mx-auto lg:h-52 lg:w-64 w-36 h-36 mb-2 lg:mb-0 max-[600px]:object-cover "
                  alt="No Image"
                  srcset=""
                />
              ) : (
                <video
                  className="mx-auto lg:h-52   mb-2 rounded-md lg:mb-0 max-[600px]:object-cover"
                  autoPlay
                  loop
                  muted
                  src={elem?.image}
                />
              )}
              <h2 className="w-fit  text-[0.6rem] rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 lg:text-xs font-bold text-white">
                # {elem?.title}
              </h2>
              <Divider
                className={"lg:my-3 my-2 h-0.5 w-10 rounded-full bg-primary-color"}
              />
              <p className="lg:text-xs text-[0.7rem] font-semibold text-justify text-gray-800">
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
