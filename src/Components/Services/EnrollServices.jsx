import React, { useEffect, useState } from "react";
import { Modal, Button, Tooltip } from "antd";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  ExpandAltOutlined,
  BookOutlined,
  UserOutlined,
  FormOutlined,
  MedicineBoxOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import Container from "../Helper/Container";
import { FaArrowLeft, FaArrowRight, FaPlayCircle } from "react-icons/fa";
import Divider from "../Helper/Divider";

const EnrollServices = () => {
  const [isPlaying, setIsPlaying] = useState({});
  const [modalVideo, setModalVideo] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [currIndex, setCurrIndex] = useState(0);
  const [isChanged, setIsChanged] = useState(false);

  const servicesArr = [
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Shortlist Your Success",
      content:
        "Based on your expected NEET Score, we shortlist for you the state & college you should apply for.",
      icon: "./About/motivationGif.gif",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Guidance from our Advisor",
      content:
        "An Intensive one to one NEET counselling session from our Advisor who will answer your queries about AIQ & State Quota NEET Counselling.",
      icon: "./About/person-speaker.gif",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Application Filling",
      content:
        "Support with filling of application form of All India Quota/ESI/AFMC/Deemed Universities & different state quota counselling.",
      icon: "./About/BookImg.gif",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Look beyond MBBS",
      content:
        "There are many more medical courses like BDS, BAMS, Physiotherapy, DNB, etc.",
      icon: "./About/mission.gif",
    },
  ];

  const togglePlay = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying((prev) => ({ ...prev, [index]: true }));
      } else {
        video.pause();
        setIsPlaying((prev) => ({ ...prev, [index]: false }));
      }
    }
  };

  const toggleExpand = (index) => {
    setExpandedCards(index);
  };

  return (
    <Container>
      <div className="mx-auto">
        {/* Hero Section */}
        <div className="my-4 text-center">
          <h1 className="mb-2 text-3xl font-bold text-yellow-600 md:text-4xl">
            On your marks , get set ,{" "}
            <span className="font-extrabold text-primary-color">Enroll!</span>
          </h1>
          <p className="mx-auto max-w-lg text-xs font-semibold text-gray-700">
            Once you have enrolled, the excitement begins! We focus on helping
            you win the race and are beside you right up to the finish line.
          </p>
          <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto flex max-w-screen-lg flex-col">
        {/* Current Service Card */}
        <motion.div
          key={currIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex flex-col rounded-md shadow-lg"
        >
          {/* Video Background Section */}
          <div className="relative h-64 w-full">
            {/* Video */}
            <video
              id={`video-${currIndex}`}
              className="absolute inset-0 h-full w-full rounded-md object-cover"
              autoPlay
              muted
              loop
              onPlay={() =>
                setIsPlaying((prev) => ({ ...prev, [currIndex]: true }))
              }
              onPause={() =>
                setIsPlaying((prev) => ({ ...prev, [currIndex]: false }))
              }
            >
              <source src={servicesArr[currIndex].video} type="video/mp4" />
            </video>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center gap-4 rounded-md bg-black/50 p-4 text-white">
              <div className="flex items-center gap-2">
                {/* <span className="text-white">{servicesArr[currIndex].icon}</span>  */}
                <span className="text-lg font-bold">
                  {servicesArr[currIndex].title}
                </span>
              </div>
              <p className="text-xs font-semibold text-gray-300">
                {servicesArr[currIndex].content}
              </p>
              <div className="flex items-center gap-2">
                <FaPlayCircle
                  onClick={() => setModalVideo(servicesArr[currIndex])}
                  className="mt-2 cursor-pointer text-xl transition-all duration-200 hover:scale-125 hover:text-gray-200"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="mb-2 flex">
          <FaArrowLeft
            onClick={() => {
              setCurrIndex((prev) =>
                prev === 0 ? servicesArr.length - 1 : prev - 1,
              );
              setIsChanged(!isChanged);
            }}
            className="my-2 cursor-pointer rounded-full bg-yellow-600 p-2 text-3xl text-white shadow-md shadow-black duration-200 hover:scale-105"
          />
          <FaArrowRight
            onClick={() => {
              setCurrIndex((prev) =>
                prev === servicesArr.length - 1 ? 0 : prev + 1,
              );
              setIsChanged(!isChanged);
            }}
            className="mx-2 my-2 cursor-pointer rounded-full bg-yellow-600 p-2 text-3xl text-white shadow-md shadow-black duration-200 hover:scale-105"
          />
        </div>

        {/* Remaining Cards in a Row */}
        <div
          className="animate-fadeIn   gap-5   grid lg:grid-cols-3 grid-cols-1"
          key={isChanged}
        >
          {servicesArr &&
            servicesArr
              .filter((_, index) => index !== currIndex)
              .map((service, serviceIndex) => {
                // if (index === currIndex) return null; // Skip the current card here

                return (
                  <motion.div
                    key={`${service?.title}-${serviceIndex}`}
                    initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
                    animate={{ opacity: 1, x: [100, 0] }} // Slide in to position
                    exit={{ opacity: 0, x: -100 }} // Slide out to the right
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }} // Scale effect on hover
                    // whileHover={{ scale: 1.05 }} // Scale effect on hover
                    className="flex flex-col  rounded-md border-b-2 border-l-2 border-yellow-600 shadow-lg"
                  >
                    {/* Video Section */}
                    <div className="group relative ">
                      <video
                        id={`video-${serviceIndex}`}
                        className="aspect-video m-1 h-full w-full rounded-md object-cover"
                        onPlay={() =>
                          setIsPlaying((prev) => ({
                            ...prev,
                            [serviceIndex]: true,
                          }))
                        }
                        autoPlay
                        loop
                        muted
                        onPause={() =>
                          setIsPlaying((prev) => ({
                            ...prev,
                            [serviceIndex]: false,
                          }))
                        }
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                      <div className="absolute m-1 cursor-pointer inset-0 flex h-full items-center justify-center gap-2 rounded-lg bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Tooltip
                          title={isPlaying[serviceIndex] ? "Pause" : "Play"}
                        >
                          <Button
                            type="text"
                            icon={
                              isPlaying[serviceIndex] ? (
                                <PauseCircleOutlined className="text-xl text-white" />
                              ) : (
                                <PlayCircleOutlined className="text-xl text-white" />
                              )
                            }
                            onClick={() => togglePlay(serviceIndex)}
                            className="transition-transform duration-200 hover:scale-110"
                          />
                        </Tooltip>
                        <Tooltip title="Fullscreen">
                          <Button
                            type="text"
                            icon={
                              <ExpandAltOutlined className="text-lg text-white" />
                            }
                            onClick={() => setModalVideo(service)}
                            className="transition-transform duration-200 hover:scale-110"
                          />
                        </Tooltip>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="ml-2 flex-1 px-1.5 py-4">
                      <div className="mb-1 flex items-center gap-2">
                        <img
                          src={service?.icon}
                          className="w-8 rounded-full p-1 shadow-md shadow-gray-300"
                        />
                        <span className="text-sm font-bold text-primary-color">
                          {service.title}
                        </span>
                      </div>
                      <Divider className="my-4 h-0.5 w-12  rounded-full bg-yellow-600" />

                      <p className="mb-4 text-xs leading-[1.5] italic font-semibold text-gray-900">
                        {expandedCards === serviceIndex
                          ? `"${service.content}"`
                          : service?.content?.substring(0, 45) + "..."}
                      </p>
                      {expandedCards === serviceIndex ? (
                        <>
                          <div
                            onClick={() => toggleExpand({})}
                            className="duration=300 mt-2 w-fit cursor-pointer rounded-lg bg-yellow-600 p-2 py-2 text-xs font-semibold text-white shadow transition-all"
                          >
                            <UpOutlined className="transition-all duration-150" />{" "}
                            Show Less
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => toggleExpand(serviceIndex)}
                            className="duration=300 mt-2 w-fit cursor-pointer rounded-lg bg-yellow-600 p-2 py-2 text-xs font-semibold text-white shadow transition-all"
                          >
                            <DownOutlined /> Learn More
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Modal
        open={!!modalVideo}
        onCancel={() => setModalVideo(null)}
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
            <source src={modalVideo.video} type="video/mp4" />
          </video>
        )}
      </Modal>
    </Container>
  );
};

export default EnrollServices;
