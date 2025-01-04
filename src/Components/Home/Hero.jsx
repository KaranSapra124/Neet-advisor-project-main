import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Rate } from "antd";
import Container from "../Helper/Container";
import Lottie from "lottie-react";

import medicalReception from "./Medical Clipboard.json";

const Hero = () => {
  return (
    <Container className="relative overflow-hidden">
      {/* Medical-themed background pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ maxHeight: "100%" }}>
        <svg viewBox="0 0 1000 1000" >
          <defs>
            <pattern
              id="medical-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 15h5v-5h5v5h5v5h-5v5h-5v-5h-5z"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M50 20c0 6 4 10 10 10s10-4 10-10h5c0 8-7 15-15 15s-15-7-15-15h5z"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M90 25l10-10c2-2 6-2 8 0l10 10c2 2 2 6 0 8l-10 10c-2 2-6 2-8 0l-10-10c-2-2-2-6 0-8z"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M140 15l-15 15m0 0l20 20m-20-20h10m-10 0v10"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M170 10c5 5-5 15 0 20s15-5 20 0"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M20 50h15v15h-15zm7-5v25m-5-12h10"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M50 60h5l2-4 4 8 4-8 2 4h5"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M80 50c2 0 5 5 5 10v5h5v-5l-5-10m-10 15h15"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M110 50l15 15m-15 0l15-15m-7.5 7.5c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3z"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M150 50c3 6 6 10 6 14 0 3-3 6-6 6s-6-3-6-6c0-4 3-8 6-14z"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M20 90v15h10v-15h-10m-2-5h14m-7-5v5"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M45 90c3-3 9-3 12 0 3-3 9-3 12 0"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M80 90h20v15h-20zm5 7.5h10m-5-5v10"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M110 90c0 5 2 7 5 7s5-2 5-7m-15 0h20"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M150 90v10l5 10h10l5-10v-10z"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M20 130h15v20h-15zm3 5h9m-9 5h6m-6 5h9"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M50 140c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5m0-10h10v10"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M70 130h20v15h-20zm5-5v5m15 0l5 5v5h-5"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M110 130c0 0 0 15 10 15s10-15 10-15m-15-5l10 5 10-5"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M150 140c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5m-5-8v3m0 10v3m8-8h-3m-10 0h-3"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M20 170h25v5h-25zm5-5v10m15-10v10"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M60 170l5-15h5l5 15m-10-7.5h10"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M85 165h15v15h-15zm0 5l5 3 3-5 7 7"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M120 165v15m-2 0h4m-2-15c2 0 2 1 2 2v8"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />

              <path
                d="M140 165h15v15h-15zm3 3h9m-9 3h6m-6 3h9"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-pattern)" />
        </svg>
      </div>
      {/* Add these gradients right after the SVG background */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="flex justify-center items-center relative z-10 ">
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
                  5/5 |{" "}
                  <span className="text-gray-600 text-sm">4406 Reviews</span>
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
