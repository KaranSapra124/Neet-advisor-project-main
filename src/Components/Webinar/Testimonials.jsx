import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import "./Testimonials.css";
import { FaPause, FaPlay } from "react-icons/fa";
import { Carousel, Modal } from "antd";
import Divider from "../Helper/Divider";
const Testimonials = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [video, setVideo] = useState("");
  const handlePlay = (item) => {
    setIsPlay(true);
    setVideo(item);
  };
  const [data, setData] = useState([
    {
      name: "Alice Johnson",
      review:
        "The webinar was incredibly insightful and helped me gain a deeper understanding of the subject matter. Highly recommend!",
      college: "Harvard University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "Michael Smith",
      review:
        "I loved the interactive elements of the session. It kept me engaged and motivated throughout!",
      college: "Stanford University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "Emily Davis",
      review:
        "The resources provided after the webinar were invaluable. I was able to apply what I learned immediately.",
      college: "University of California, Berkeley",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "David Brown",
      review:
        "Networking with industry professionals during the webinar opened up new opportunities for me. Thank you!",
      college: "Massachusetts Institute of Technology",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "Sophia Wilson",
      review:
        "The flexibility of attending from home made it easy for me to participate. I learned so much!",
      college: "University of Michigan",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "James Taylor",
      review:
        "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
      college: "Columbia University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "James Taylor",
      review:
        "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
      college: "Columbia University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "James Taylor",
      review:
        "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
      college: "Columbia University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "James Taylor",
      review:
        "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
      college: "Columbia University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
    {
      name: "James Taylor",
      review:
        "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
      college: "Columbia University",
      videoUrl:
        "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4",
    },
  ]);
  return (
    <>
      {isPlay && (
        <PlayVideoModal
          file={video}
          isOpen={isPlay}
          setisOpen={setIsPlay}
          key={0}
        />
      )}
      <Container>
        <div className="py-1">
          <h1 className="text-center text-3xl font-bold text-yellow-600">
            What Our{" "}
            <span className="font-extrabold text-primary-color">
              {" "}
              Attendees Say ?
            </span>
          </h1>
          <p className="my-4 text-center text-xs font-semibold text-gray-800">
            Here's what future healers speak of Hello Mentor's guidance.
          </p>
          <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <Carousel
            className="max-w-screen-xl"
            dots={false}
            arrows={false}
            autoplay
            autoplaySpeed={2000}
            slidesToShow={5}
          >
            {data?.map((elem, index) => {
              return (
                <>
                  <InteractiveCard
                    college={elem?.college}
                    name={elem?.name}
                    review={elem?.review}
                    videoUrl={elem?.videoUrl}
                  />
                </>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

const PlayVideoModal = ({ file, isOpen, setisOpen }) => {
  return (
    <Modal
      centered
      className="rounded-xl"
      footer={null}
      width={"lg"}
      onCancel={() => setisOpen(false)}
      closeIcon={true}
      open={isOpen}
    >
      <video autoPlay className="rounded-xl" src={file}></video>
    </Modal>
  );
};

const InteractiveCard = ({ review, name, college, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="group relative m-2 h-48 w-56"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Main Card Container */}
      <div className="absolute inset-0 transform rounded-lg bg-gradient-to-br from-white to-gray-200 shadow-lg transition-all duration-500 ease-out hover:scale-105">
        {/* Content Area */}
        <img
            src="./About/validation-badge-bg-removed.gif"
            className="z-20 w-10 absolute -top-3 -right-5 "
            alt=""
            srcset=""
          />
        
        <div className="flex h-48 flex-col p-3">
          {/* Quote Design */}
          
          <div className="text-2xl text-primary-color">”</div>

          {/* Review Text */}
          <div className="flex-1">
            <p className="text-xs font-semibold leading-relaxed text-gray-800">
              {review}
            </p>
          </div>

          {/* Author Info */}
          <div className="mt-2">
            
            <h3 className="text-sm font-bold text-primary-color">{name}</h3>
            <p className="text-[0.7rem] font-semibold text-gray-800">{college}</p>
          </div>
        </div>
      </div>

      {/* Video Preview Overlay */}
      <div
        className={`absolute inset-0 cursor-pointer overflow-hidden rounded-lg bg-black/5 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <PlayVideoModal
          file={videoUrl}
          isOpen={isPlaying}
          setisOpen={setIsPlaying}
        />

        {/* Play Button */}
        <button
          onClick={handlePlayToggle}
          className="absolute inset-0 m-auto flex h-12 w-12 transform items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
        >
          {isPlaying ? (
            <FaPlay className="h-6 w-6 text-black" />
          ) : (
            <FaPause className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-lg bg-gradient-to-br from-white to-black/30" />
    </div>
  );
};
export default Testimonials;
