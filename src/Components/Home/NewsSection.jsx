import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
// import { Navigation } from 'swiper'; // Import navigation module
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from "antd"
import { FaArrowRight, FaLocationArrow, FaRegNewspaper } from 'react-icons/fa'

const NewsSection = () => {
    const headerStyle = {
        background: "url(https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 1,
        backgroundAttachment: "fixed"
    };

    const newsData = [
        // Sample data (You can keep the existing array)
        {
            headline: "Scientists Discover New Species of Ancient Human in the Philippines",
            description: "The discovery of a new species of ancient human in the Philippines has shed new light on human evolution and migration patterns.",
            time: "1 hour ago",
            image: { url: "https://picsum.photos/200/300", alt: "Ancient human fossil" }
        },
        {
            headline: "Global Stock Markets Plummet Amid Fears of Economic Downturn",
            description: "Global stock markets have plummeted in recent days amid fears of an economic downturn, with investors scrambling to sell off shares and bonds.",
            time: "3 hours ago",
            image: { url: "https://picsum.photos/200/301", alt: "Stock market graph" }
        },
        {
            headline: "New Study Reveals the Devastating Impact of Climate Change on Coral Reefs",
            description: "A new study has revealed the devastating impact of climate change on coral reefs, with rising sea temperatures and acidification causing widespread damage and destruction.",
            time: "5 hours ago",
            image: { url: "https://picsum.photos/200/302", alt: "Coral reef damage" }
        },
        {
            headline: "NASA's Artemis Mission Aims to Return Humans to the Moon by 2024",
            description: "NASA's Artemis mission aims to return humans to the moon by 2024, with the goal of establishing a sustainable presence on the lunar surface.",
            time: "7 hours ago",
            image: { url: "https://picsum.photos/200/303", alt: "Artemis mission logo" }
        },
        {
            headline: "New Breakthrough in the Treatment of Parkinson's Disease",
            description: "Scientists have made a major breakthrough in the treatment of Parkinson's disease, developing a new medication that can slow down the progression of the disease.",
            time: "9 hours ago",
            image: { url: "https://picsum.photos/200/304", alt: "Parkinson's disease medication" }
        },
        {
            headline: "Global Leaders Meet to Discuss the Growing Threat of Cybersecurity",
            description: "Global leaders are meeting in Tokyo today to discuss the growing threat of cybersecurity, with the goal of developing new strategies and technologies to protect against cyber attacks.",
            time: "11 hours ago",
            image: { url: "https://picsum.photos/200/305", alt: "Cybersecurity conference" }
        },
        {
            headline: "New Study Reveals the Benefits of Meditation for Mental Health",
            description: "A new study has revealed the benefits of meditation for mental health, with regular practice shown to reduce stress and anxiety and improve mood and cognitive function.",
            time: "13 hours ago",
            image: { url: "https://picsum.photos/200/306", alt: "Person meditating" }
        },
        {
            headline: "Scientists Discover New Species of Giant Squid in the Deep Sea",
            description: "Scientists have discovered a new species of giant squid in the deep sea, with the massive creature measuring over 20 feet in length.",
            time: "15 hours ago",
            image: { url: "https://picsum.photos/200/307", alt: "Giant squid" }
        },
        {
            headline: "New Breakthrough in the Development of Quantum Computing",
            description: "Scientists have made a major breakthrough in the development of quantum computing, with the goal of creating a new generation of supercomputers that can solve complex problems and simulate complex systems.",
            time: "17 hours ago",
            image: { url: "https://picsum.photos/200/308", alt: "Quantum computer" }
        },
        {
            headline: "Global Economic Growth Slows Down Amid Trade Tensions",
            description: "Global economic growth has slowed down in recent months amid trade tensions and rising interest rates, with investors and policymakers scrambling to respond.",
            time: "19 hours ago",
            image: { url: "https://picsum.photos/200/309", alt: "Global economic graph" }
        }
    ];

    return (
        <>
            <div className='p-10 flex flex-col justify-between bg-gray-100' >
                <div className='flex flex-col text-center mx-5'>
                    <h1 className='text-3xl primary font-bold text-center '>
                        Get the <span className='text-yellow-400 font-extrabold'>Latest News and Updates</span> ,  all at One place!
                    </h1>
                    <p className='py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis ipsam harum quaerat eaque quam quibusdam dolore voluptates voluptas ratione, quisquam beatae dignissimos debitis recusandae suscipit totam qui nam! Sint.</p>


                </div>
                <ScrollAnimation animateIn='backInUp' animateOnce={true} duration={1.5}>

                    <Carousel slidesToShow={4} className='gap-x-1 my-5 mx-10' arrows={true} dotPosition='bottom' autoplay>
                        {/* Render each group of 3 slides here */}
                        {newsData?.map((elem, index) => {
                            // console.log(elem,"ELEM")
                            return (
                                <div className='flex'>

                                    <div className="flex  whitespace-pre-wrap items-center  w-full">
                                        {/* Adjust each box width to 30% to fit 3 items per row */}
                                        <div className="relative  newsBox mx-2 border  rounded cursor-pointer hover:scale-105 transition-all shadow-lg bg-white m-2 p-2 w-full overflow-hidden">
                                            {/* Hover effect container */}
                                            <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-transparent transform transition-all duration-300 ease-linear group-hover:border-[#262626] group-hover:translate-x-0"></div>

                                            {/* Inner content */}
                                            <div className="flex items-center">
                                                <FaRegNewspaper className="text-yellow-500" />
                                                <p className="mx-2 font-bold text-[0.8rem]">{elem.time}</p>
                                            </div>
                                            <div className="flex p-2 items-center ">
                                                <h4 className='text-[0.8rem] text-wrap text-justify'>{elem.headline.substring(0, 40) + ' ...'}</h4>
                                                <FaLocationArrow className="mx-5 hover:text-yellow-500 transition-all" />
                                            </div>

                                            {/* Before & After pseudo elements */}
                                            <div className="absolute top-0 left-0 w-full h-4 bg-transparent border-t-4 border-r-4 border-transparent group-hover:h-full group-hover:translate-x-0 transition-all duration-500"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-4 bg-transparent border-b-4 border-l-4 border-transparent group-hover:h-full group-hover:translate-x-0 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                    {/* </div>
                    </div> */}
                    <button className="noselect m-auto bg-yellow-500"><span className="text text-white ">View More</span><span className="icon"><FaArrowRight></FaArrowRight>
                    </span></button>
                </ScrollAnimation>
            </div>
        </>
    );
};

export default NewsSection;
