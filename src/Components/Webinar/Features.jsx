// import { Popover, Steps } from 'antd';
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import Container from "../Helper/Container";
import { PiCursorFill } from "react-icons/pi";
import { Modal, Popover, Steps } from "antd";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
// import { FaICursor } from 'react-icons/fa';
import "./Testimonials.css";
import Divider from "../Helper/Divider";
const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanged, setIsChanged] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [modalVideo, setModalVideo] = useState({
    isOpen: false,
    video: "",
  });
  const data = [
    {
      video:
        "https://videos.pexels.com/video-files/7424129/7424129-sd_640_360_30fps.mp4",
      title: "Master NEET Exam & Counselling in 60 minutes!",
      content: [
        "Learn advanced strategies to excel in NEET with expert counseling guidance.",
        "Gain access to exclusive exam insights, detailed analyses, and top resources.",
        "Get a clear understanding of seat allocation, cut-off patterns, and fee structures.",
      ],
    },
    {
      video:
        "https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4",
      title: "Crack NEET with Expert Tips & Insights!",
      content: [
        "Master proven techniques to boost your NEET preparation effectively.",
        "Unlock powerful tips to stay ahead and manage your exam stress efficiently.",
        "Dive into the latest updates on NEET counseling and admission trends.",
      ],
    },
    {
      video:
        "https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4",
      title: "Your Guide to NEET Success in 2025!",
      content: [
        "Explore key strategies to maximize your NEET score with precision.",
        "Discover essential resources tailored for every NEET aspirant's needs.",
        "Analyze previous years' trends for a strategic approach to counseling and admissions.",
      ],
    },
    {
      video:
        "https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4",
      title: "Top Secrets to Excel in NEET Preparation!",
      content: [
        "Find out how to effectively balance study and revision for optimal results.",
        "Access curated resources for mastering complex NEET topics effortlessly.",
        "Learn time-tested tips to navigate the counseling process with confidence.",
      ],
    },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <Container className={"bg-gray-200/40"}>
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="my-2 text-3xl">
              <span className="font-extrabold text-primary-color`">Features</span>
              <span className="font-bold text-yellow-600">
                {" "}
                to Enhance Your Experience
              </span>
            </h1>
            <p className="mx-auto text-xs font-bold text-gray-700">
              Our best-in-class Webinars effectively communicate your concerns
              with simplified interaction.
            </p>
            <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />
          </div>
          {/* Features Section */}
          <div
            key={activeIndex}
            className={`${!isChanged ? "animate-slideRight" : "animate-slideLeft"} relative my-4`}
          >
            <div className="relative">
              {/* Video Element */}
              <video
                ref={videoRef}
                src={data[activeIndex]?.video}
                autoPlay
                loop
                muted
                className="m-auto h-96 w-full rounded-lg object-cover"
                alt="Video content"
              ></video>

              {/* Overlay */}
              <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`absolute inset-0 left-0 top-0 z-20 m-auto w-full cursor-pointer rounded-lg ${isHover ? "bg-gray-100/20" : "bg-gray-100/30"}`}
              >
                <div
                  className={`mt-24 w-full text-center ${isHover ? "block" : "hidden"}`}
                >
                  <a
                    onClick={() =>
                      setModalVideo((prev) => ({
                        ...prev,
                        isOpen: true,
                        video: data[activeIndex]?.video,
                      }))
                    }
                    className="group inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 213.7 213.7"
                      className="h-40 w-40"
                    >
                      <polygon
                        className="triangle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1"
                      />
                      <circle
                        className="circle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`absolute inset-0 left-0 top-24 z-50 flex h-44 w-[30rem] flex-col items-start justify-center rounded-r-md bg-black/50 p-4 shadow-md shadow-gray-500 transition-all ${isHover ? "hidden" : "block"}`}
            >
              <h2 className="text-md mb-2 font-extrabold text-white">
                {data[activeIndex]?.title}
              </h2>
              <ul className="space-y-2">
                {data[activeIndex]?.content.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <TiTick className="text-xl text-green-500" />
                    <span className="text-xs font-semibold text-gray-100">
                      {item}
                    </span>
                  </li>
                ))}
                <FaPlay className="text-white border-2 cursor-pointer rounded-full p-1 text-xl"/>
              </ul>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center">
            <FaArrowLeft
              onClick={() => {
                setActiveIndex((prev) =>
                  prev !== 0 ? prev - 1 : data.length - 1,
                );
                setIsChanged(true);
              }}
              className="mx-4 cursor-pointer rounded-full bg-yellow-600 p-1 text-2xl text-white shadow-md shadow-black transition-all hover:scale-110"
            />
            <FaArrowRight
              onClick={() => {
                setActiveIndex((prev) =>
                  prev !== data?.length - 1 ? prev + 1 : 0,
                );
                setIsChanged(false);
              }}
              className="cursor-pointer rounded-full bg-yellow-600 p-1 text-2xl text-white shadow-md shadow-black transition-all hover:scale-110"
            />
          </div>
          {/* Remaining Cards Section */}
          <div className="animate-slideIn mt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? "scale-105" : "hover:scale-105"
                  }`}
                >
                  {/* Video Element */}
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    className={`h-40 w-full rounded-lg object-cover transition-transform duration-500 ${
                      activeIndex === index ? "brightness-100" : "brightness-75"
                    }`}
                  ></video>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 ${
                      activeIndex === index
                        ? "opacity-60"
                        : "opacity-100 group-hover:opacity-80"
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="absolute top-24 flex flex-col items-center justify-center space-y-2 p-2 text-center">
                    {/* <PiCursorFill className="text-3xl text-white transition-transform duration-300 group-hover:scale-110" /> */}
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Fullscreen Modal */}
      <Modal
        open={modalVideo?.isOpen}
        onCancel={() =>
          setModalVideo((prev) => ({
            ...prev,
            isOpen: false,
            video: "",
          }))
        }
        footer={null}
        width="lg"
        centered
        bodyStyle={{ padding: "0" }}
        className="rounded-lg shadow-xl"
      >
        {modalVideo && (
          <video
            controls
            autoPlay
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
            className="rounded-xl"
          >
            <source src={modalVideo?.video} type="video/mp4" />
          </video>
        )}
      </Modal>
    </>
  );
};

export default Features;
