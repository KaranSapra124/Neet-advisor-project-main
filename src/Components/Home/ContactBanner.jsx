import React from "react";
import { MdElectricBolt } from "react-icons/md";
import { motion } from "framer-motion";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const ContactBanner = () => {
  // Animation settings
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    // <Container>
    <>
      <Divider className={"mx-auto h-1 w-64 rounded-full bg-yellow-600"} />
      <ScrollAnimation animateIn="backInUp" duration={1.5}>
        <div className="my-4 mx-auto flex  max-w-screen-lg flex-col items-center justify-center  rounded-lg border-l-2 border-b-2 border-yellow-600 bg-gray-200/40 p-3 shadow-md lg:flex-row lg:space-y-0 lg:p-2">
          <motion.div
            className="flex flex-col items-start p-4 lg:w-1/2 lg:p-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2 text-2xl font-extrabold text-yellow-600">
              Still Got Doubts?
            </h1>
            <Divider className={"my-1 h-1 w-12 rounded-full bg-yellow-600"} />
            <h2 className="text-sm my-2 font-bold text-primary-color">
              Get Your Doubts Cleared By Booking A 1 to 1 Meet!
            </h2>
            <p className="my-2 text-xs font-semibold text-gray-700">
              Limited slots available! Don’t miss your chance to get
              personalized guidance.
            </p>
            <div className="flex items-center justify-center">
              <motion.button
                className="flex items-center rounded-lg bg-yellow-600 px-5 py-3 text-white shadow-lg transition duration-300 hover:bg-yellow-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-sm font-bold">Book Now</span>
                <MdElectricBolt className="text-lg" />
              </motion.button>
              <span>
                <img className="w-12 font-extrabold" src="left-arrow-bg.gif" alt="" srcset="" />
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex w-full  justify-center lg:w-1/2 lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={videoVariants}
            transition={{ duration: 0.5 }}
          >
            <video
              id="videoId"
              src="https://videos.pexels.com/video-files/5713512/5713512-sd_640_360_25fps.mp4"
              loop
              autoPlay
              muted
              className="w-full  max-w-80 transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              aria-label="Promotional video for booking a meeting"
            />
          </motion.div>
        </div>
      </ScrollAnimation>
    </>
    // {/* </Container> */}
  );
};

export default ContactBanner;
