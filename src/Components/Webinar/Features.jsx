import { Popover, Steps } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import Container from '../Helper/Container';

const Features = () => {
    const [curr, setCurr] = useState(0);
    const data = [
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        },
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        },
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        },
        {
            video: 'https://videos.pexels.com/video-files/5183279/5183279-sd_640_360_30fps.mp4',
            title: "Master NEET Exam & Counselling in 60 minutes!",
            content: [
                "Top-notch preparation strategies and counseling support for exams.",
                "Access valuable insights, analyses, and resources.",
                "Understanding the college seat distribution, cutoff scores, and fee structures."
            ]
        }
    ];
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <>
            <Container>
                <div className='pb-6'>
                    <h1 className='text-4xl font-bold text-primary-color text-center pb-2'><span className='text-yellow-500 font-extrabold'>Features</span> to Enhance Your Experience</h1>
                    <p className='text-sm font-bold text-gray-700 text-center'>Our best-in-class Webinars effectively communicate your concerns with simplified interaction.</p>
                </div>
                <div className='cursor-pointer '>

                    <Steps className='custom-steps' progressDot  current={curr} items={data?.map((elem, index) => {
                        return {
                            // title: <h1 className='text-red-500 '>{elem.title}</h1>,
                            title: <Popover className='featuresPopover'
                                onOpenChange={() => setCurr(index)}
                                content={
                                    <>
                                        <div  className='w-80 h-56 cursor-pointer'>
                                            <video src={elem.video} ref={videoRef} autoPlay loop ></video>
                                            {/* <ul>
                                                {elem.content.map((item, idx) => (
                                                    <li key={idx} className='text-white flex items-center text-xs'>
                                                        <TiTick className='mr-2' /> <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </>
                                }
                            >
                             <h4 className='text-wrap text-xs text-gray-800'> {elem.title}</h4>
                            </Popover>
                        }
                    })}>

                    </Steps>
                </div>
            </Container>
        </>
    );
};

export default Features;