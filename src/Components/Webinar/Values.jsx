import React, { useState } from "react";
import { Badge, Modal } from "antd";
import { TiTick } from "react-icons/ti";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { FaPlayCircle } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Values = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalVideo, setModalVideo] = useState({
    isOpen: false,
    video: "",
  });

  const data = [
    {
      title: "For Parents",
      description:
        "Proven NEET exam scoring tricks, overview of Central & State Counselling, College & Medical Seat data.",
      points: [
        "Ace the NEET exam with winning strategies & learn past NEET Cut-Offs and Competition Trends.",
        "Understand Central & State Counselling processes and how they impact seat allocation.",
        "Get insights into the latest NEET trends to make informed decisions.",
      ],
      video:
        "https://videos.pexels.com/video-files/6209572/6209572-sd_960_506_25fps.mp4",
    },
    {
      title: "For Students",
      description:
        "Discover essential strategies for NEET exam success, including insights into Central & State Counselling processes.",
      points: [
        "Equip yourself with effective strategies to excel in the NEET exam.",
        "Learn about past NEET cut-off trends to gauge competition.",
        "Stay informed about medical college seat availability to plan ahead.",
      ],
      video:
        "https://videos.pexels.com/video-files/6209572/6209572-sd_960_506_25fps.mp4",
    },
  ];

  return (
    <Container>
      <ScrollAnimation animateIn="backInUp" animateOnce={true} duration={1.5}>
        <div>
          <h1 className="text-center text-3xl font-bold text-yellow-600">
            Who Is This Webinar{" "}
            <span className="font-extrabold text-primary-color">For?</span>
          </h1>
          <p className="my-1 text-center text-xs font-semibold text-gray-700">
            This webinar is designed to help both parents and students excel in
            the NEET exam by providing valuable insights and proven strategies.
          </p>
          <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />
        </div>
        <div className="m-auto my-2 flex max-w-screen-xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="mx-4 mt-5  w-[40rem] rounded-lg border bg-white shadow-md"
            >
              <div className="relative  flex">
                <img
                  src="./Webinar/output-onlinegiftools.gif"
                  alt=""
                  className="absolute shadow-white shadow-md -top-5 left-[36.5rem] z-50 h-10 w-10 rounded-full bg-gray-300 p-1"
                  srcset=""
                />
                <div className="absolute h-full w-full rounded-lg bg-black/50"></div>

                <video className="w-fit  rounded-lg" autoPlay loop muted>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`absolute inset-0 left-0 top-0 z-20 m-auto w-full cursor-pointer rounded-lg ${
                    hoveredIndex === index ? "bg-black/30" : "bg-black/10"
                  }`}
                >
                  <div
                    className={`mt-24 w-full text-center ${
                      hoveredIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <a
                      onClick={() =>
                        setModalVideo({
                          isOpen: true,
                          video: item.video,
                        })
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
                <div className="absolute h-full w-fit rounded-lg border-gray-100 bg-gray-900/10 p-2">
                  <Badge className="rounded-md bg-black/90 p-2 text-sm font-bold text-white">
                    {item.title}
                  </Badge>
                  <p className="mt-2 text-sm font-bold text-gray-100">
                    {item.description}
                  </p>
                  <Divider
                    className={"my-2 h-0.5 w-16 rounded-full bg-yellow-600"}
                  />
                  <ul className="list-disc">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="mt-2  flex items-center text-xs">
                        <TiTick className="text-2xl text-green-400" />
                        <span className="font-semibold text-gray-50">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <FaPlayCircle className="mx-2 my-1.5 cursor-pointer rounded-md text-lg font-bold text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
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
      </ScrollAnimation>
    </Container>
  );
};

export default Values;
