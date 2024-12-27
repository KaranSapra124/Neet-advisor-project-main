import React from 'react';
import { Button, Card, Rate, Typography } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h1 level={1} className="mb-6 text-primary-color font-bold text-3xl">
              Shape Your Medical Future at India's Premier{' '}
              <span className="bg-gradient-to-r from-yellow-500  to-yellow-600 bg-clip-text text-transparent font-extrabold">
                NEET Counselling
              </span>{' '}
              Webinar
            </h1>
            
            <Paragraph className="text-lg text-gray-600 mb-8">
              Join expert mentors who've guided 3.5L+ students to medical success. 
              Get personalized strategies from exam preparation to college admission.
            </Paragraph>

            <Card className="mb-8 bg-white/80 border border-gray-100">
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

            <Button type="primary" size="large" className="mb-8 bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600">
              Register Now
            </Button>

            {/* Social Proof Card */}
            <Card className="mb-6 bg-white/90">
              <div className="flex items-center gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GoogleOutlined className="text-xl" />
                    <Rate disabled defaultValue={5} className="text-sm" />
                  </div>
                  <div className="text-sm text-gray-600">
                    4406+ Students Rated Us 5/5
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-900">3.5L+</div>
                  <div className="text-sm text-gray-600">Students Guided</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            {/* Video Section */}
            <video
              autoPlay
              loop
              muted
              // controls
              className="w-full rounded-lg"
              src="https://videos.pexels.com/video-files/1580507/1580507-sd_640_360_30fps.mp4"
            />

            {/* Key Benefits Card */}
            <Card
              title="What You'll Learn"
              className="bg-white/90 shadow-lg"
            >
              <ul className="list-none p-0 m-0">
                <li className="mb-3 flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✓</span>
                  Expert NEET preparation strategies
                </li>
                <li className="mb-3 flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✓</span>
                  College selection guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✓</span>
                  Admission process mastery
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;