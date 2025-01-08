import React, { useState } from 'react'
import Container from "../Helper/Container"
import "./Testimonials.css"
import { FaPause, FaPlay } from 'react-icons/fa'
import { Modal } from 'antd'
const Testimonials = () => {
    const [isPlay, setIsPlay] = useState(false);
    const [video, setVideo] = useState('')
    const handlePlay = (item) => {
        setIsPlay(true)
        setVideo(item)
    }
    const [data, setData] = useState([
        {
            name: "Alice Johnson",
            review: "The webinar was incredibly insightful and helped me gain a deeper understanding of the subject matter. Highly recommend!",
            college: "Harvard University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "Michael Smith",
            review: "I loved the interactive elements of the session. It kept me engaged and motivated throughout!",
            college: "Stanford University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "Emily Davis",
            review: "The resources provided after the webinar were invaluable. I was able to apply what I learned immediately.",
            college: "University of California, Berkeley",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "David Brown",
            review: "Networking with industry professionals during the webinar opened up new opportunities for me. Thank you!",
            college: "Massachusetts Institute of Technology",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "Sophia Wilson",
            review: "The flexibility of attending from home made it easy for me to participate. I learned so much!",
            college: "University of Michigan",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "James Taylor",
            review: "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
            college: "Columbia University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "James Taylor",
            review: "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
            college: "Columbia University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "James Taylor",
            review: "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
            college: "Columbia University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "James Taylor",
            review: "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
            college: "Columbia University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        },
        {
            name: "James Taylor",
            review: "I gained a lot of confidence in my knowledge after participating in the discussions. Great experience!",
            college: "Columbia University",
            videoUrl: "https://videos.pexels.com/video-files/4170245/4170245-sd_640_360_30fps.mp4"
        }
    ])
    return (
        <>
            {isPlay && <PlayVideoModal file={video} isOpen={isPlay} setisOpen={setIsPlay} key={0} />}
            <Container className={"bg-gray-200/40"}>
                <div className='py-2'>
                    <h1 className='text-3xl text-center text-primary-color font-bold'>What Our <span className='text-yellow-500 font-extrabold '> Attendees Say ?</span></h1>
                    <p className='text-gray-700 font-semibold text-xs py-2 text-center'>Here's what future healers speak of Hello Mentor's guidance.</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {
                        data?.map((elem, index) => {
                            return <>
                                <InteractiveCard college={elem?.college} name={elem?.name} review={elem?.review} videoUrl={elem?.videoUrl} />
                            </>
                        })
                    }
                </div>
            </Container >
        </>
    )
}


const PlayVideoModal = ({ file, isOpen, setisOpen }) => {
    return <Modal centered className='rounded-xl' footer={null} width={"lg"} onCancel={() => setisOpen(false)} closeIcon={true} open={isOpen}>
        <video autoPlay className='rounded-xl' src={file}></video>
    </Modal>
}

const InteractiveCard = ({ review, name, college, videoUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-60 h-60 m-2 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {/* Main Card Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg 
          transform transition-all duration-500 ease-out hover:scale-105 
         ">

                {/* Content Area */}
                <div className="p-4 h-full flex flex-col">
                    {/* Quote Design */}
                    <div className="text-4xl text-purple-200 font-serif">"</div>

                    {/* Review Text */}
                    <div className="flex-1">
                        <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
                    </div>

                    {/* Author Info */}
                    <div className="mt-2">
                        <h3 className="text-gray-700 text-sm  font-bold">{name}</h3>
                        <p className="text-gray-600 text-xs">{college}</p>
                    </div>
                </div>
            </div>

            {/* Video Preview Overlay */}
            <div className={`absolute inset-0 bg-black/5 cursor-pointer  rounded-2xl overflow-hidden transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <PlayVideoModal file={videoUrl} isOpen={isPlaying} setisOpen={setIsPlaying} />

                {/* Play Button */}
                <button
                    onClick={handlePlayToggle}
                    className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center
              bg-white/20 backdrop-blur-sm rounded-full
              hover:bg-white/30 transition-all duration-300
              transform hover:scale-110">
                    {isPlaying ? (
                        <FaPlay className="text-black w-6 h-6" />
                    ) : (
                        <FaPause className="text-black w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl -z-10" />
        </div>
    );
};
export default Testimonials