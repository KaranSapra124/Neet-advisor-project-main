import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Collapse } from 'antd';

const WhyUsSection = () => {
  const [activeKey, setActiveKey] = useState([1, 2, 3, 4]); // State to manage active keys
  const services = [
    {
      key: 1,
      label: `Identifying Student's Aspirations`,
      children: 'Pooling their expertise and their strengths , our NEET Advisor have set up convenient and accessible platforms which helps in identifying the student’s aspirations.',
    },
    {
      key: 2,
      label: 'Shortlisting of Success',
      children: 'Based on your inputs like NEET exam score, a personalised report will be designed to make sure you get the best medical colleges available.',
    },
    {
      key: 3,
      label: 'One to One Counselling Sessions',
      children: 'An intensive one to one session with our NEET Advisor, who will answer your queries about NEET counselling.',
    },
    {
      key: 4,
      label: 'Complete Tracking & Monitoring',
      children: 'At NEET Advisor, we handhold you throughout the entire NEET Counselling process , till you get admission in your desired medical college.',
    },
  ];

  // Handle the change when a collapse item is toggled
  const handleCollapseChange = (key) => {
    setActiveKey(key); // Update the active key(s)
  };

  return (
    <ScrollAnimation animateIn='backInLeft' animateOnce={true} duration={1.5} className='p-20'>
      <div className="w-full flex flex-col justify-center items-center mx-auto rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-center primary">Why <span className='text-yellow-400'>Neet Advisor ?</span></h1>
        <p className="text-lg font-semibold text-gray-600 mb-6 text-center">Unlock Your Success in 4 Simple Steps: NEET Counselling Guidance</p>
        <div className="flex w-full justify-center items-center gap-4">
          {/* First Collapse Section */}
          <div className='w-1/2 flex flex-col '>
            {services?.slice(0, 2)?.map((elem) => {
              return (
                <Collapse
                  key={elem.key}
                  className='my-2'
                  items={[elem]}
                  activeKey={activeKey} // Controlled active key
                  onChange={handleCollapseChange} // Handle change of active key
                />
              );
            })}
          </div>

          {/* Image Section */}
          <div className='w-1/2 flex justify-center items-center'>
            <img
              src="https://img.freepik.com/free-photo/attractive-female-doctor-standing-with-documents-hospital_1303-20688.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid"
              className='  rounded   m-auto'
              alt=""
            />
          </div>

          {/* Second Collapse Section */}
          <div className='w-1/2 flex flex-col '>
            {services?.slice(2, services?.length)?.map((elem) => {
              return (
                <Collapse
                  key={elem.key}
                  className='my-2'
                  items={[elem]}
                  activeKey={activeKey} // Controlled active key
                  onChange={handleCollapseChange} // Handle change of active key
                />
              );
            })}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default WhyUsSection;
