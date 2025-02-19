import React, { useEffect, useState } from "react";

// import { Navigation } from 'swiper'; // Import navigation module
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";
import Container from "../Helper/Container";
import { FaArrowRight, FaLocationArrow, FaRegNewspaper } from "react-icons/fa";
import Divider from "../Helper/Divider";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
  const Navigate = useNavigate();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const headerStyle = {
    background:
      "url(https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 1,
    backgroundAttachment: "fixed",
  };

  const newsData = [
    // Sample data (You can keep the existing array)
    {
      headline:
        "Scientists Discover New Species of Ancient Human in the Philippines",
      description:
        "The discovery of a new species of ancient human in the Philippines has shed new light on human evolution and migration patterns.",
      time: "1 hour ago",
      image: {
        url: "https://picsum.photos/200/300",
        alt: "Ancient human fossil",
      },
    },
    {
      headline: "Global Stock Markets Plummet Amid Fears of Economic Downturn",
      description:
        "Global stock markets have plummeted in recent days amid fears of an economic downturn, with investors scrambling to sell off shares and bonds.",
      time: "3 hours ago",
      image: {
        url: "https://picsum.photos/200/301",
        alt: "Stock market graph",
      },
    },
    {
      headline:
        "New Study Reveals the Devastating Impact of Climate Change on Coral Reefs",
      description:
        "A new study has revealed the devastating impact of climate change on coral reefs, with rising sea temperatures and acidification causing widespread damage and destruction.",
      time: "5 hours ago",
      image: { url: "https://picsum.photos/200/302", alt: "Coral reef damage" },
    },
    {
      headline:
        "NASA's Artemis Mission Aims to Return Humans to the Moon by 2024",
      description:
        "NASA's Artemis mission aims to return humans to the moon by 2024, with the goal of establishing a sustainable presence on the lunar surface.",
      time: "7 hours ago",
      image: {
        url: "https://picsum.photos/200/303",
        alt: "Artemis mission logo",
      },
    },
    {
      headline: "New Breakthrough in the Treatment of Parkinson's Disease",
      description:
        "Scientists have made a major breakthrough in the treatment of Parkinson's disease, developing a new medication that can slow down the progression of the disease.",
      time: "9 hours ago",
      image: {
        url: "https://picsum.photos/200/304",
        alt: "Parkinson's disease medication",
      },
    },
    {
      headline:
        "Global Leaders Meet to Discuss the Growing Threat of Cybersecurity",
      description:
        "Global leaders are meeting in Tokyo today to discuss the growing threat of cybersecurity, with the goal of developing new strategies and technologies to protect against cyber attacks.",
      time: "11 hours ago",
      image: {
        url: "https://picsum.photos/200/305",
        alt: "Cybersecurity conference",
      },
    },
    {
      headline:
        "New Study Reveals the Benefits of Meditation for Mental Health",
      description:
        "A new study has revealed the benefits of meditation for mental health, with regular practice shown to reduce stress and anxiety and improve mood and cognitive function.",
      time: "13 hours ago",
      image: { url: "https://picsum.photos/200/306", alt: "Person meditating" },
    },
    {
      headline:
        "Scientists Discover New Species of Giant Squid in the Deep Sea",
      description:
        "Scientists have discovered a new species of giant squid in the deep sea, with the massive creature measuring over 20 feet in length.",
      time: "15 hours ago",
      image: { url: "https://picsum.photos/200/307", alt: "Giant squid" },
    },
    {
      headline: "New Breakthrough in the Development of Quantum Computing",
      description:
        "Scientists have made a major breakthrough in the development of quantum computing, with the goal of creating a new generation of supercomputers that can solve complex problems and simulate complex systems.",
      time: "17 hours ago",
      image: { url: "https://picsum.photos/200/308", alt: "Quantum computer" },
    },
    {
      headline: "Global Economic Growth Slows Down Amid Trade Tensions",
      description:
        "Global economic growth has slowed down in recent months amid trade tensions and rising interest rates, with investors and policymakers scrambling to respond.",
      time: "19 hours ago",
      image: {
        url: "https://picsum.photos/200/309",
        alt: "Global economic graph",
      },
    },
  ];

  useEffect(() => {
    const updateSlides = () => {
      const currWidth = window.innerWidth;
      if (currWidth <= 768) {
        setSlidesToShow(1);
      } else if (currWidth >= 768 && currWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  return (
    <>
      <Container className={"bg-gray-200/40"}>
        <div className="mx-5 flex flex-col text-center">
          <h1 className="text-center text-[0.8rem] font-bold text-yellow-600 lg:text-3xl">
            Get the{" "}
            <span className="font-extrabold text-primary-color">
              Latest News and Updates
            </span>{" "}
            all at One place!
          </h1>
          <p className="mx-auto py-2 text-[0.5rem] font-bold text-gray-700 lg:w-[42rem] lg:text-xs">
            Stay Updated With Our Realtime News Feed!
          </p>
          <Divider
            className={
              "mx-auto my-4 h-1 w-12 rounded-full bg-yellow-600 lg:w-20"
            }
          />
        </div>
        <ScrollAnimation animateIn="backInUp" animateOnce={true} duration={1.5}>
          <Carousel
            slidesToShow={slidesToShow}
            dots={false}
            className="gap-x-1 lg:mx-10 lg:my-5"
            arrows={true}
            dotPosition="bottom"
            autoplay
          >
            {/* Render each group of 3 slides here */}
            {newsData?.map((elem, index) => {
              // console.log(elem,"ELEM")
              return (
                <div className="flex">
                  <div className="flex w-full items-center whitespace-pre-wrap">
                    {/* Adjust each box width to 30% to fit 3 items per row */}
                    <div className="newsBox relative m-2 mx-2 w-full cursor-pointer overflow-hidden rounded border bg-white p-2.5 shadow-lg transition-all hover:scale-105 lg:p-2">
                      {/* Hover effect container */}
                      <div className="absolute bottom-0 left-0 right-0 top-0 transform border-4 border-transparent transition-all duration-300 ease-linear group-hover:translate-x-0 group-hover:border-yellow-600"></div>

                      {/* Inner content */}
                      <div className="flex items-center">
                        <FaRegNewspaper className="text-yellow-600" />
                        <p className="mx-2 text-[0.6rem] font-bold lg:text-xs">
                          {elem.time}
                        </p>
                      </div>
                      <div className="flex items-center p-2">
                        <h4 className="text-wrap text-justify text-[0.5rem] text-gray-700 lg:text-xs">
                          {elem.headline.substring(0, 40) + " ..."}
                        </h4>
                        <FaLocationArrow className="mx-5 text-yellow-600 transition-all hover:text-yellow-700" />
                      </div>

                      {/* Before & After pseudo elements */}
                      <div className="absolute left-0 top-0 h-4 w-full border-r-4 border-t-4 border-transparent bg-transparent transition-all duration-500 group-hover:h-full group-hover:translate-x-0"></div>
                      <div className="absolute bottom-0 left-0 h-4 w-full border-b-4 border-l-4 border-transparent bg-transparent transition-all duration-500 group-hover:h-full group-hover:translate-x-0"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
          {/* </div>
                    </div> */}
          <button
            onClick={() => Navigate("/news")}
            className="m-auto flex items-center justify-center rounded-md bg-yellow-600 p-2 text-[0.5rem] font-semibold text-white duration-200 hover:scale-105 hover:bg-yellow-500 lg:text-sm"
          >
            View More{" "}
            <span>
              <FaArrowRight className="mx-2 text-sm" />
            </span>
          </button>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default NewsSection;
