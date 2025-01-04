import React, { useState } from 'react';
import { Card, Modal, Button, Tooltip } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, ExpandAltOutlined, BookOutlined, UserOutlined, FormOutlined, MedicineBoxOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import ScrollAnimation from 'react-animate-on-scroll';

const EnrollServices = () => {
    const [isPlaying, setIsPlaying] = useState({});
    const [modalVideo, setModalVideo] = useState(null);
    const [expandedCards, setExpandedCards] = useState({});

    const servicesArr = [
        {
            video: "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
            title: "Shortlist Your Success",
            content: 'Based on your expected NEET Score, we shortlist for you the state & college you should apply for. The smallest error here can cost you a career.',
            icon: <MedicineBoxOutlined className="text-2xl text-blue-500" />,
            extendedContent: "Our expert team uses advanced algorithms and years of experience to analyze your NEET score and predict the best possible colleges and states where you have strong chances of admission. We consider factors like previous year cutoffs, seat matrix, and reservation policies to give you the most accurate predictions."
        },
        {
            video: "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
            title: "Guidance from our Advisor",
            content: 'An Intensive one to one NEET counselling session from our Advisor who will answer your queries about AIQ & State Quota NEET Counselling.',
            icon: <UserOutlined className="text-2xl text-green-500" />,
            extendedContent: "Get personalized guidance from experienced advisors who have helped thousands of students secure medical seats. Our counselors provide detailed insights about quota distributions, seat matrices, and help you make informed decisions about your medical career."
        },
        {
            video: "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
            title: "Application Filling",
            content: 'Support with filling of application form of All India Quota/ESI/AFMC/Deemed Universities & different state quota counselling.',
            icon: <FormOutlined className="text-2xl text-purple-500" />,
            extendedContent: "Our step-by-step assistance ensures error-free application submission. We help you with document verification, form filling, choice filling, and seat allocation process for multiple counseling rounds across different quotas and universities."
        },
        {
            video: "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
            title: "Look beyond MBBS",
            content: "There are many more medical courses like BDS, BAMS, Physiotherapy, DNB, etc. Our Counsellors will open up a whole new world of opportunities for you.",
            icon: <BookOutlined className="text-2xl text-orange-500" />,
            extendedContent: "Explore alternative medical careers with excellent growth prospects. We provide detailed insights about various medical courses, their scope, career opportunities, and help you make an informed decision about your medical career path."
        },
    ];

    const togglePlay = (index) => {
        const video = document.getElementById(`video-${index}`);
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(prev => ({ ...prev, [index]: true }));
            } else {
                video.pause();
                setIsPlaying(prev => ({ ...prev, [index]: false }));
            }
        }
    };

    const toggleExpand = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <div className="container mx-auto p-20 bg-yellow-100/20">
                {/* Hero Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold primary mb-4">
                        On your marks, get set, <span className="text-yellow-400 font-extrabold">Enroll!</span>
                    </h1>
                    <p className="text-gray-700 font-semibold text-base mx-auto">
                        Once you have enrolled, the excitement begins! We focus on helping you win the race and are beside you right up to the finish line.
                    </p>
                </div>

                {/* Services Grid */}
                <ScrollAnimation animateIn='backInUp' duration={2} animateOnce={true}>

                    <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 gap-3 w-[68rem] mx-auto">
                        {servicesArr.map((service, index) => (
                            <Card
                                key={index}
                                className={`hover:shadow-2xl  shadow-xl transition-all duration-500 transform hover:-translate-y-1`}
                            >
                                <div className="flex flex-col md:flex-row gap-2">
                                    {/* Video Section */}
                                    <div className="relative group w-full md:w-48">
                                        <video
                                            id={`video-${index}`}
                                            className="w-full aspect-video h-full object-cover rounded-lg"
                                            onPlay={() => setIsPlaying(prev => ({ ...prev, [index]: true }))}
                                            onPause={() => setIsPlaying(prev => ({ ...prev, [index]: false }))}
                                        >
                                            <source src={service.video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 h-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 rounded-lg">
                                            <Tooltip title={isPlaying[index] ? "Pause" : "Play"}>
                                                <Button
                                                    type="text"
                                                    icon={isPlaying[index] ? <PauseCircleOutlined className="text-white text-xl" /> : <PlayCircleOutlined className="text-white text-xl" />}
                                                    onClick={() => togglePlay(index)}
                                                    className="hover:scale-110 transition-transform duration-200"
                                                />
                                            </Tooltip>
                                            <Tooltip title="Fullscreen">
                                                <Button
                                                    type="text"
                                                    icon={<ExpandAltOutlined className="text-white text-lg " />}
                                                    onClick={() => setModalVideo(service)}
                                                    className="hover:scale-110 transition-transform duration-200"
                                                />
                                            </Tooltip>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            {service.icon}
                                            <span className="text-lg font-semibold primary">{service.title}</span>
                                        </div>

                                        <div className={`transition-all md:w-full  duration-500 overflow-hidden ${expandedCards[index] ? 'max-h-96' : 'max-h-20'}`}>
                                            <p className="text-gray-900 mb-4 text-xs">{service.content}</p>
                                            <p className="text-gray-900 text-xs">{service.extendedContent}</p>
                                        </div>

                                        <button className='transition-all duration-300 py-2 shadow p-2 bg-yellow-400 text-white font-semibold rounded-lg mt-2 text-xs' onClick={() => toggleExpand(index)}>
                                            <span className='pr-2'>{expandedCards[index] ? <UpOutlined /> : <DownOutlined />}</span>
                                            {expandedCards[index] ? 'Show Less' : 'Learn More'}
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Fullscreen Modal */}
                <Modal
                    open={!!modalVideo}
                    onCancel={() => setModalVideo(null)}
                    footer={null}
                    width="lg" // Use Tailwind's large width
                    centered
                    bodyStyle={{ padding: '0' }} // Remove default padding
                    className="rounded-lg shadow-2xl" // Add rounded corners and shadow
                >
                    {modalVideo && (
                        <video className="rounded-xl" controls autoPlay style={{ maxWidth: '100%', maxHeight: '80vh' }}>
                            <source src={modalVideo.video} type="video/mp4" />
                        </video>
                    )}
                </Modal>
            </div>
        </>
    );
};

export default EnrollServices;