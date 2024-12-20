import React from 'react';
import { MdElectricBolt } from 'react-icons/md';

const ContactBanner = () => {
  return (
    <section className='bg-gray-100 p-20'>
      <div className="max-w-screen-xl mx-auto shadow-lg shadow-gray-500 rounded-xl p-8 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 flex flex-col items-start p-8">
          <h1 className="text-yellow-400 text-3xl font-bold mb-4">Still Got Doubts?</h1>
          <h2 className="font-bold text-xl mb-6 primary">Get Your Doubts Cleared By Booking A 1 to 1 Meet!</h2>
          <p className="text-gray-600 font-semibold mb-4">Limited slots available! Don’t miss your chance to get personalized guidance.</p>
          <button className="noselect  bg-yellow-500"><span className="text text-white ">Book Now</span><span className="icon "><MdElectricBolt />
          </span></button>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <video
            id="videoId"
            src='https://videos.pexels.com/video-files/5713512/5713512-sd_640_360_25fps.mp4'
            loop
            autoPlay
            muted
            className="w-full max-w-md rounded-lg shadow-lg transform lg:translate-x-12 lg:-translate-y-12"
            aria-label="Promotional video for booking a meeting"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;