import React, { useState } from "react";
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
import { motion } from "framer-motion"; // Import Framer Motion
import Container from "../Helper/Container";

const EnrollServices = () => {
  const [isPlaying, setIsPlaying] = useState({});
  const [modalVideo, setModalVideo] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const servicesArr = [
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Shortlist Your Success",
      content:
        "Based on your expected NEET Score, we shortlist for you the state & college you should apply for.",
      icon: <MedicineBoxOutlined className="text-xl text-primary-color" />,
      extendedContent:
        "Our expert team uses advanced algorithms and years of experience to analyze your NEET score and predict the best possible colleges.",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Guidance from our Advisor",
      content:
        "An Intensive one to one NEET counselling session from our Advisor who will answer your queries about AIQ & State Quota NEET Counselling.",
      icon: <UserOutlined className="text-xl text-primary-color" />,
      extendedContent:
        "Get personalized guidance from experienced advisors who have helped thousands of students secure medical seats.",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Application Filling",
      content:
        "Support with filling of application form of All India Quota/ESI/AFMC/Deemed Universities & different state quota counselling.",
      icon: <FormOutlined className="text-xl text-primary-color" />,
      extendedContent:
        "Our step-by-step assistance ensures error-free application submission.",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Look beyond MBBS",
      content:
        "There are many more medical courses like BDS, BAMS, Physiotherapy, DNB, etc.",
      icon: <BookOutlined className="text-xl text-primary-color" />,
      extendedContent:
        "Explore alternative medical careers with excellent growth prospects.",
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
    <>
      <Container>
        <div className="mx-auto bg-yellow-100/20">
          {/* Hero Section */}
          <div className="my-4 text-center">
            <h1 className="primary mb-4 text-3xl font-bold md:text-4xl">
              On your marks , get set ,{" "}
              <span className="font-extrabold text-yellow-600">Enroll!</span>
            </h1>
            <p className="mx-auto text-xs font-semibold text-gray-700">
              Once you have enrolled, the excitement begins! We focus on helping
              you win the race and are beside you right up to the finish line.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto flex max-w-screen-md flex-col">
          {/* First Card on Top */}
          <motion.div
            key={0}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, width: 250 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex flex-col rounded-md shadow-lg"
          >
            {/* Video Section */}
            <div className="group relative w-full">
              <video
                id={`video-${0}`}
                className="aspect-video h-64 w-full rounded-md object-cover"
                onPlay={() => setIsPlaying((prev) => ({ ...prev, [0]: true }))}
                onPause={() =>
                  setIsPlaying((prev) => ({ ...prev, [0]: false }))
                }
              >
                <source src={servicesArr[0].video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex h-full items-center justify-center gap-2 rounded-lg bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Tooltip title={isPlaying[0] ? "Pause" : "Play"}>
                  <Button
                    type="text"
                    icon={
                      isPlaying[0] ? (
                        <PauseCircleOutlined className="text-xl text-white" />
                      ) : (
                        <PlayCircleOutlined className="text-xl text-white" />
                      )
                    }
                    onClick={() => togglePlay(0)}
                    className="transition-transform duration-200 hover:scale-110"
                  />
                </Tooltip>
                <Tooltip title="Fullscreen">
                  <Button
                    type="text"
                    icon={<ExpandAltOutlined className="text-lg text-white" />}
                    onClick={() => setModalVideo(servicesArr[0])}
                    className="transition-transform duration-200 hover:scale-110"
                  />
                </Tooltip>
              </div>
            </div>

            {/* Content Section */}
            <div className="ml-2 flex-1 px-1.5 py-2">
              <div className="mb-3 flex items-center gap-2">
                {servicesArr[0].icon}
                <span className="text-sm font-bold text-primary-color">
                  {servicesArr[0].title}
                </span>
              </div>

              <p className="mb-4 text-xs font-semibold text-gray-900">
                {expandedCards === 0
                  ? servicesArr[0].content
                  : servicesArr[0]?.content?.substring(0, 45) +
                    " " +
                    " Read more..."}
              </p>
              <button
                className="mt-2 rounded-lg bg-yellow-600 p-2 py-2 text-xs font-semibold text-white shadow transition-all duration-300"
                onClick={() => toggleExpand(0)}
              >
                {expandedCards[0] ? (
                  <>
                    <UpOutlined /> Show Less
                  </>
                ) : (
                  <>
                    <DownOutlined /> Learn More
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Remaining Cards in a Row */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {servicesArr.slice(1).map((service, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }} // Scale effect on hover
                className="flex flex-col rounded-md shadow-lg"
              >
                {/* Video Section */}
                <div className="group relative w-full">
                  <video
                    id={`video-${index + 1}`}
                    className="aspect-video h-full w-full rounded-md object-cover"
                    onPlay={() =>
                      setIsPlaying((prev) => ({ ...prev, [index + 1]: true }))
                    }
                    onPause={() =>
                      setIsPlaying((prev) => ({ ...prev, [index + 1]: false }))
                    }
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex h-full items-center justify-center gap-2 rounded-lg bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Tooltip title={isPlaying[index + 1] ? "Pause" : "Play"}>
                      <Button
                        type="text"
                        icon={
                          isPlaying[index + 1] ? (
                            <PauseCircleOutlined className="text-xl text-white" />
                          ) : (
                            <PlayCircleOutlined className="text-xl text-white" />
                          )
                        }
                        onClick={() => togglePlay(index + 1)}
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
                <div className="ml-2 flex-1 px-1.5 py-2">
                  <div className="mb-3 flex items-center gap-2">
                    {service.icon}
                    <span className="text-sm font-bold text-primary-color">
                      {service.title}
                    </span>
                  </div>

                  <p className="mb-4 text-xs font-semibold text-gray-900">
                    {expandedCards === index + 1
                      ? service.content
                      : service?.content?.substring(0, 45) +
                        " " +
                        " Read more....."}
                  </p>

                  {expandedCards === index + 1 ? (
                    <>
                      <div
                        onClick={() => toggleExpand({})}
                        className="mt-2 w-fit cursor-pointer rounded-lg bg-yellow-600 p-2 py-2 text-xs font-semibold text-white shadow transition-all duration-300"
                      >
                        <UpOutlined> </UpOutlined>
                        <span className="mx-1">Show Less</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => toggleExpand(index + 1)}
                        className="mt-2 w-fit cursor-pointer rounded-lg bg-yellow-600 p-2 py-2 text-xs font-semibold text-white shadow transition-all duration-300"
                      >
                        <DownOutlined> </DownOutlined>
                        <span className="mx-1">Learn More</span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
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
          className="rounded-lg shadow-2xl"
        >
          {modalVideo && (
            <video
              className="rounded-xl"
              controls
              autoPlay
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            >
              <source src={modalVideo.video} type="video/mp4" />
            </video>
          )}
        </Modal>
      </Container>
    </>
  );
};

export default EnrollServices;
