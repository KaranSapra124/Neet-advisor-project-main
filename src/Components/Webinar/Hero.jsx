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
      <div className="z-1 absolute h-[35rem] w-full bg-white/85"></div>

      <div className="z-[99] mx-auto flex max-w-screen-xl items-center justify-center">
        {/* Left Content */}
        <ScrollAnimation
          animateIn="backInLeft"
          duration={1.5}
          animateOnce={true}
        >
          <div>
            <h1
              level={1}
              className="mb-6 text-3xl font-bold text-primary-color"
            >
              Shape Your Medical Future at India's Premier <br />
              <span className="bg-clip-text font-extrabold text-transparent text-yellow-600">
                NEET Counselling
              </span>{" "}
              Webinar
            </h1>

            <Paragraph className="my-4 max-w-xl bg-none text-sm font-semibold text-gray-700">
              Join expert mentors who've guided 3.5L+ students to medical
              success. Get personalized strategies from exam preparation to
              college admission.
            </Paragraph>

            <Card className="my-4 border-none bg-gray-200/10">
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

            <button className="rounded-l-full rounded-r-full border-yellow-500 bg-yellow-600 p-2 font-semibold text-white transition-all duration-300 hover:border-yellow-600 hover:bg-yellow-600">
              Register Now
            </button>

            {/* Social Proof Card */}
            <Card className="my-4 border-none bg-gray-200/10">
              <div className="flex items-center gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <GoogleOutlined className="text-xl" />
                    <Rate disabled defaultValue={5} className="text-sm" />
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
                    4406+ Students Rated Us 5/5
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-primary-color">
                    3.5L+
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
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
          <div className="mx-10 flex flex-col items-center justify-center">
            {/* Video Section */}
            <Carousel
              autoplay
              autoplaySpeed={1500}
              infinite
              dots={false}
              className="w-[30rem]"
            >
              {images?.map((elem, index) => {
                return (
                  <>
                    <img
                      key={index}
                      src={elem?.imageUrl}
                      className="h-96"
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
