import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Rate } from "antd";
import Container from "../Helper/Container";
import Lottie from "lottie-react";

import medicalReception from "./Medical Clipboard.json";

const Hero = () => {
  return (
    <Container className="relative">
      {/* Medical-themed background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute opacity-8">
          <defs>
            <pattern id="medical-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Stethoscope */}
              <path 
                d="M40 40c0 11 9 20 20 20s20-9 20-20h10c0 16.6-13.4 30-30 30S30 56.6 30 40h10z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
              {/* Heart */}
              <path 
                d="M150 65c-3.9 0-7.5-1.4-10.4-3.8-2.9 2.4-6.5 3.8-10.4 3.8-9.1 0-16.5-7.4-16.5-16.5 0-9.1 7.4-16.5 16.5-16.5 3.9 0 7.5 1.4 10.4 3.8 2.9-2.4 6.5-3.8 10.4-3.8 9.1 0 16.5 7.4 16.5 16.5 0 9.1-7.4 16.5-16.5 16.5z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
              {/* Eye */}
              <path 
                d="M100 140c-20 0-36.8-11.5-45-28.2 8.2-16.7 25-28.2 45-28.2s36.8 11.5 45 28.2c-8.2 16.7-25 28.2-45 28.2zm0-46.4c10.1 0 18.2 8.1 18.2 18.2S110.1 130 100 130s-18.2-8.1-18.2-18.2 8.1-18.2 18.2-18.2z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
              {/* Test tube */}
              <path 
                d="M180 160l-20-40v-60h40v60l-20 40z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
              {/* Doctor icon - simplified outline */}
              <path 
                d="M20 140c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20zm0-30c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
              {/* Additional medical crosses */}
              <path 
                d="M160 180h10v-10h10v10h10v10h-10v10h-10v-10h-10z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
              <path 
                d="M40 180h10v-10h10v10h10v10h-10v10h-10v-10h-10z" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-pattern)"/>
        </svg>
      </div>
       {/* Add these gradients right after the SVG background */}
       <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="flex justify-center items-center relative z-10">
        <div className="w-full flex justify-center items-center flex-col animateHeroContent">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold  primary text-indigo-900">
              Complete Handholding for <br />{" "}
              <span className="text-yellow-500">
                <span className="font-bold">NEET</span> Counselling Guidance
              </span>
            </h1>
            <Lottie
              className="z-0 w-[10rem]"
              animationData={medicalReception}
              loop={true}
            />
          </div>
          <div className="text-sm text-gray-700">
            <p className="">
              <strong> 23,33,863</strong> students in India aspire to study MBBS
              and BDS & AYUSH.Only 8.3% could achieve it in 2024.
            </p>
            <p className="text-sm">
              Complete <span className="font-[900]">NEET</span> Counselling
              Guidance till Admission. NEET UG & NEET PG Counselling Experts
              Since 2016.
            </p>
          </div>
          <button className="bg-yellow-500 gabriela-regular hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mt-5 mr-2">
            Book a Free session
          </button>
          <div className="flex flex-wrap items-center justify-center gap-12 mt-12 bg-white/90 backdrop-blur px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="gabriela-regular text-center md:text-left md:border-r md:border-gray-200 md:pr-12">
              <h2 className="text-2xl font-black mb-2 text-indigo-900">50K+</h2>
              <p className="text-md text-gray-600">Sessions Completed</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-full shadow-md">
                <FcGoogle className="text-4xl" />
              </div>
              <div className="flex flex-col">
                <div className="flex mb-2">
                  <Rate count={5} value={5} className="text-yellow-400" />
                </div>
                <p className="font-bold text-md text-indigo-950">
                  5/5 | <span className="text-gray-600 text-sm">4406 Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

