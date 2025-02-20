import React from "react";
import { Button, Card, Carousel, Rate, Typography } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ShowWebinar from "./ShowWebinar";
import ScrollAnimation from "react-animate-on-scroll";
const { Paragraph } = Typography;

const images = [
  {
    imageUrl: "https://neetadvisor.com/assets/images/gallery/country/6.webp",
    imageAlt: "Image 1",
  },
  {
    imageUrl: "https://neetadvisor.com/assets/images/gallery/country/7.webp",
    imageAlt: "Image 2",
  },
  {
    imageUrl: "https://neetadvisor.com/assets/images/gallery/country/8.webp",
    imageAlt: "Image 3",
  },
  {
    imageUrl: "https://neetadvisor.com/assets/images/gallery/country/9.webp",
    imageAlt: "Image 4",
  },
  {
    imageUrl: "https://neetadvisor.com/assets/images/gallery/country/10.webp",
    imageAlt: "Image 5",
  },
];

const Hero = () => {
  return (
    <Container
      className={"flex flex-col items-center justify-center"}
    >
      <div className="z-1 absolute lg:h-[35rem] h-full w-full bg-white/85"></div>

      <div className="z-[99] mx-auto flex lg:flex-row flex-col lg:max-w-screen-xl items-center justify-center">
        {/* Left Content */}
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          animateOnce={true}
        >
          <div className="-ml-5 lg:ml-0">
            <h1
              level={1}
              className="lg:mb-4 mb-2 lg:text-3xl text-sm font-bold text-primary-color"
            >
              Shape Your Medical Future at India's Premier <br />
              <span className="bg-clip-text  font-extrabold text-transparent text-yellow-600">
                NEET Counselling
              </span>{" "}
              Webinar
            </h1>
            <Divider className={"h-1 w-12 bg-yellow-600 rounded-full my-4"}/>

            <Paragraph className="lg:my-4 my-2 lg:max-w-xl bg-none lg:text-xs text-[0.7rem] font-bold text-gray-700">
              Join expert mentors who've guided 3.5L+ students to medical
              success. Get personalized strategies from exam preparation to
              college admission.
            </Paragraph>

            <Card className="my-4 -mx-4 border-none bg-gray-200/10">
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  <CalendarOutlined className="text-sm lg:text-xl text-indigo-900" />
                  <span className="font-bold lg:text-sm text-[0.7rem]  text-gray-700 ">20-12-2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockCircleOutlined className="text-sm lg:text-xl text-indigo-900" />
                  <span className="font-bold lg:text-sm text-[0.7rem]  text-gray-700 ">11:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserOutlined className="text-sm lg:text-xl text-indigo-900" />
                  <span className="font-bold lg:text-sm text-[0.7rem]  text-gray-700 ">Limited Seats</span>
                </div>
              </div>
            </Card>

            <button className="rounded-l-full text-xs lg:text-sm rounded-r-full border-yellow-500 bg-yellow-600  p-2 font-semibold text-white transition-all duration-300 hover:bg-yellow-700 ">
              Register Now
            </button>

            {/* Social Proof Card */}
            <Card className="my-4 border-none bg-gray-200/10">
              <div className="flex items-center gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <GoogleOutlined className="text-sm lg:text-xl" />
                    <Rate disabled defaultValue={5} className="lg:text-sm text-xs " />
                  </div>
                  <div className="lg:text-xs text-[0.7rem] font-bold text-gray-800">
                    4406+ Students Rated Us 5/5
                  </div>
                </div>
                <div>
                  <div className="lg:text-2xl text-sm font-extrabold text-primary-color">
                    3.5L+
                  </div>
                  <div className="lg:text-xs text-[0.7rem] mt-1 font-bold text-gray-800">
                    Students Guided
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollAnimation>

        {/* Right Content */}
        <ScrollAnimation
          animateIn="backInRight"
          duration={1.5}
          animateOnce={true}
        >
          <div className="lg:mx-10 mx-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
            {/* Video Section */}
            <Carousel
              autoplay
              autoplaySpeed={1500}
              infinite
              dots={false}
              className="lg:w-[30rem] max-w-96 -ml-12"
            >
              {images?.map((elem, index) => {
                return (
                  <>
                    <img
                      key={index}
                      src={elem?.imageUrl}
                      className="h-96 "
                      alt={elem?.imageAlt}
                    />
                  </>
                );
              })}
            </Carousel>
          </div>
        </ScrollAnimation>
      </div>
      {/* <ShowWebinar /> */}
    </Container>
  );
};

export default Hero;
