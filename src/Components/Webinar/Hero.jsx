import React from 'react';
import { Button, Card, Rate, Typography } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';
import Container from "../Helper/Container"
import Divider from "../Helper/Divider"
const {  Paragraph } = Typography;

const Hero = () => {
  return (
    <Container className={'bg-gray-200/40 flex justify-center items-center'}>

      <div className="grid mx-auto max-w-screen-lg grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h1 level={1} className="mb-6 text-primary-color font-bold text-3xl">
            Shape Your Medical Future at India's Premier{' '}
            <span className="text-yellow-600 bg-clip-text text-transparent font-extrabold">
              NEET Counselling
            </span>{' '}
            Webinar
          </h1>

          <Paragraph className="text-sm font-semibold text-gray-600 my-4">
            Join expert mentors who've guided 3.5L+ students to medical success.
            Get personalized strategies from exam preparation to college admission.
          </Paragraph>

          <Card className="my-4 bg-gray-100/10 ">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CalendarOutlined className="text-xl text-indigo-900" />
                <span className="font-semibold">20-12-2024</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockCircleOutlined className="text-xl text-indigo-900" />
                <span className="font-semibold">11:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <UserOutlined className="text-xl text-indigo-900" />
                <span className="font-semibold">Limited Seats</span>
              </div>
            </div>
          </Card>

          <button className="p-2 transition-all duration-300 rounded-l-full rounded-r-full text-white font-semibold   bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600">
            Register Now
          </button>

          {/* Social Proof Card */}
          <Card className="my-4 bg-gray-100/20">
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GoogleOutlined className="text-xl" />
                  <Rate disabled defaultValue={5} className="text-sm" />
                </div>
                <div className="text-xs font-semibold text-gray-600">
                  4406+ Students Rated Us 5/5
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-primary-color">3.5L+</div>
                <div className="text-xs font-semibold text-gray-600">Students Guided</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Content */}
        <div className="flex w-96 justify-end items-end flex-col gap-6">
          {/* Video Section */}
          <video
            autoPlay
            loop
            muted
            // controls
            className="w-96 rounded-lg"
            src="https://videos.pexels.com/video-files/1580507/1580507-sd_640_360_30fps.mp4"
          />

          {/* Key Benefits Card */}
          <div className='border w-full rounded-md mx-auto p-4 bg-white/90'>
            <h1 className='text-gray-700 font-bold text-md'>What You will Learn ?</h1>
            <Divider className={'h-[0.1rem] my-2 bg-gray-500 rounded-full'}/>
            <ul className="list-none p-0 m-0">
              <li className="mb-3 flex text-xs text-gray-700 font-normal items-center gap-2">
                <span className="text-indigo-900 font-bold">✓</span>
                Expert NEET preparation strategies
              </li>
              <li className="mb-3 flex text-xs text-gray-700 font-normal items-center gap-2">
                <span className="text-indigo-900 font-bold">✓</span>
                College selection guidance
              </li>
              <li className="flex text-xs text-gray-700 font-normal items-center gap-2">
                <span className="text-indigo-900 font-bold">✓</span>
                Admission process mastery
              </li>
            </ul>
          </div>
        </div>
      </div>


    </Container>

  );
};

export default Hero;