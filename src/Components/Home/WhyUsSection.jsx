import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Collapse } from 'antd';
import { FaGraduationCap, FaListAlt, FaUserFriends, FaChartLine } from 'react-icons/fa';
import Container from "../Helper/Container"
const WhyUsSection = () => {
  const [activeKey, setActiveKey] = useState([1]);

  const services = [
    {
      key: 1,
      icon: <FaGraduationCap className="text-3xl text-yellow-600" />,
      label: "Identifying Student's Aspirations",
      children: 'Pooling their expertise and their strengths, our NEET Advisor have set up convenient and accessible platforms which helps in identifying the students aspirations.',
    },
    {
      key: 2,
      icon: <FaListAlt className="text-3xl text-yellow-600" />,
      label: 'Shortlisting of Success',
      children: 'Based on your inputs like NEET exam score, a personalised report will be designed to make sure you get the best medical colleges available.',
    },
    {
      key: 3,
      icon: <FaUserFriends className="text-3xl text-yellow-600" />,
      label: 'One to One Counselling Sessions',
      children: 'An intensive one to one session with our NEET Advisor, who will answer your queries about NEET counselling.',
    },
    {
      key: 4,
      icon: <FaChartLine className="text-3xl text-yellow-600" />,
      label: 'Complete Tracking & Monitoring',
      children: 'At NEET Advisor, we handhold you throughout the entire NEET Counselling process, till you get admission in your desired medical college.',
    },
  ];

  const handleCollapseChange = (key) => {
    setActiveKey(key);
  };

  return (
    <Container >

      <div className=" mx-auto ">
        {/* Header Section */}
        <div className="text-center my-4">
          <h1 className="text-3xl  font-semibold mb-1 primary">
            Why <span className="text-yellow-600 font-extrabold">Neet Advisor?</span>
          </h1>
          <p className="text-xs text-gray-700 font-semibold mx-auto">
            Unlock Your Success in 4 Simple Steps: <strong>NEET</strong> Counselling Guidance
          </p>

        </div>

        {/* Main Content Section */}
        <div className="flex m-auto flex-col lg:flex-row gap-6 items-center lg:items-start">
          {/* Left Image Section */}
          <div className="w-1/2">
            <ScrollAnimation animateIn="fadeInLeft" duration={1}>
              <div className="relative">
                {/* Background Decorative Element */}
                <div className="absolute inset-0 bg-yellow-400 rounded-3xl opacity-10 blur-3xl transform rotate-3"></div>

                {/* Grid Container */}
                <div className="grid grid-cols-2 gap-4 h-96">
                  {/* First two images in two columns */}
                  <img
                    src="https://neetadvisor.com/assets/images/gallery/international/6.webp"
                    className="rounded-md shadow-2xl transform hover:scale-105 transition-all duration-500 w-80 h-80 object-cover"
                    alt="NEET Advisor"
                  />
                  <img
                    src="https://neetadvisor.com/assets/images/gallery/international/3.webp"
                    className="rounded-md shadow-2xl transform hover:scale-105 transition-all duration-500 w-80 h-80 object-cover"
                    alt="NEET Advisor"
                  />
                </div>

                {/* Additional Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
              </div>
            </ScrollAnimation>
          </div>


          {/* Right Accordions Section */}
          <div className="w-1/2 space-y-4">
            {services.map((service, index) => (
              <ScrollAnimation
                key={service.key}
                animateIn="fadeInRight"
                delay={index * 100}
                className="w-full"
              >
                <div className="bg-white max-h-svh   border-b-2 border-yellow-600  transition-all duration-300 overflow-hidden">
                  <Collapse
                    items={[{
                      ...service,
                      label: (
                        <div className="flex  items-center  gap-1 p-1">
                          <div className="p-1 bg-gray-50 rounded-xl">
                            {service.icon}
                          </div>
                          <span className="text-sm font-semibold text-primary-color group-hover:text-yellow-600 transition-colors">
                            {service.label}
                          </span>
                        </div>
                      ),
                      children: (
                        <div className="p-1 bg-gray-50/50">
                          <p className="text-gray-700 font-semibold leading-relaxed">
                            {service.children}
                          </p>
                        </div>
                      )
                    }]}
                    activeKey={activeKey}
                    onChange={handleCollapseChange}
                    className="bg-transparent border-none h-full"
                    expandIconPosition="right"

                  />

                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

    </Container>

  );
};

export default WhyUsSection;