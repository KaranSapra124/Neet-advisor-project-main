import React from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import Container from '../Helper/Container';

const GuidingSection = () => {
  return (
    <Container className={"bg-gray-100"}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-primary-color font-bold text-center mb-12">
          Guiding you towards your{' '}
          <span className="relative inline-block">
            <span className="text-yellow-500 font-extrabold">DREAM CAREER</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500/50 rounded-full"></div>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* First Card */}
          <div className="flex-1 cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6 flex flex-col items-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary-color/10 rounded-full animate-pulse"></div>
                <FaPeopleGroup className="text-[5rem] text-primary-color relative z-10 m-auto p-4 rounded-full bg-gray-50" />
              </div>
              <p className="text-gray-700 text-sm font-semibold text-center leading-relaxed">
                At NEET advisor we are a team of young professionals dedicated to resolve your doubts about NEET Counselling and support you in the crucial application process, documentation and admission procedures for medical colleges across India and the World too!
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex-1 cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6 flex flex-col items-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary-color/10 rounded-full animate-pulse"></div>
                <GiTeacher className="text-[5rem] text-primary-color relative z-10 m-auto p-4 rounded-full bg-gray-50" />
              </div>
              <p className="text-gray-700 text-sm font-semibold text-center leading-relaxed">
                Our innovative offerings have been exclusively designed for NEET UG and NEET PG aspirants. Our programs are like having your own personal coach who will empower you with all the important aspects of NEET counselling which plays a crucial role in getting a medical seat even at low NEET score by smart counselling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GuidingSection;