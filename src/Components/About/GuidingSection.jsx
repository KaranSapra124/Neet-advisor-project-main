import React from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import Container from '../Helper/Container';

const GuidingSection = () => {
  return (
    <Container className={"bg-gray-100/50"}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl  text-primary-color font-bold text-center mb-12">
          Guiding you towards your{' '}
          <span className="relative inline-block">
            <span className="text-yellow-600 font-extrabold">DREAM CAREER</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-600 rounded-full"></div>
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto">
          {/* First Card */}
          <div className="w-full md:w-96 h-auto cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-primary-color/10 rounded-full animate-pulse"></div>
                <FaPeopleGroup className="text-5xl text-primary-color relative z-10 shadow-lg p-1 rounded-full bg-gray-50" />
              </div>
              <p className="text-gray-700  text-xs font-semibold leading-relaxed">
                At NEET advisor, we are a team of young professionals dedicated to resolving your doubts about NEET Counselling and supporting you in the crucial application process, documentation, and admission procedures for medical colleges across India and the world too!
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full md:w-96 h-auto cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-primary-color/10 rounded-full animate-pulse"></div>
                <GiTeacher className="text-5xl text-primary-color relative z-10  shadow-lg rounded-full bg-gray-50" />
              </div>
              <p className="text-gray-700  text-xs font-semibold leading-relaxed">
                Our innovative offerings have been exclusively designed for NEET UG and NEET PG aspirants. Our programs are like having your own personal coach who will empower you with all the important aspects of NEET counselling, which plays a crucial role in getting a medical seat even at a low NEET score through smart counselling.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default GuidingSection;