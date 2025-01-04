import React from 'react';
import { MdElectricBolt } from 'react-icons/md';
import Container from "../Helper/Container"
const ContactBanner = () => {
  return (
    <>
      <Container >
        <div className=" p-2 flex flex-col lg:flex-row items-center  lg:items-start justify-center space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 flex flex-col items-start p-4 lg:p-8">
            <h1 className="text-yellow-400 text-3xl font-bold ">Still Got Doubts?</h1>
            <h2 className="font-bold text-xl my-2 text-primary-color">Get Your Doubts Cleared By Booking A 1 to 1 Meet!</h2>
            <p className="text-gray-600 text-sm font-semibold my-2">Limited slots available! Don’t miss your chance to get personalized guidance.</p>
            <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-300">
              <span className="mr-2 font-bold">Book Now</span>
              <MdElectricBolt className="text-lg" />
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <video
              id="videoId"
              src='https://videos.pexels.com/video-files/5713512/5713512-sd_640_360_25fps.mp4'
              loop
              autoPlay
              muted
              className="w-80 max-w-md rounded-lg shadow-lg transform"
              aria-label="Promotional video for booking a meeting"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactBanner;