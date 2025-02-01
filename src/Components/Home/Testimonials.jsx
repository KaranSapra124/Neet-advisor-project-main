import React from "react";
import { Carousel } from "antd";
import "swiper/css"; // You might not need this if you're using AntDesign Carousel
import "swiper/css/navigation"; // Not required for AntDesign's Carousel
// import 'antd/dist/antd.css'; // Ensure you are importing Ant Design's CSS
import ScrollAnimation from "react-animate-on-scroll";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, ABC Corporation",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Manager, DEF Agency",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Bob Johnson",
    title: "Founder, GHI Startup",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Alice Brown",
    title: "Product Manager, JKL Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Mike Davis",
    title: "CTO, MNO Corporation",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "https://picsum.photos/200/300",
  },
];

const Testimonials = () => {
  return (
    <Container className={"bg-gray-200/40"}>
      {/* <div className=" flex flex-col items-center mx-auto py-2 "> */}
      <h1 className="text-center text-3xl font-bold leading-none text-yellow-600">
        What our customers are{" "}
        <span className="font-extrabold text-primary-color">
          saying about us ?
        </span>
      </h1>
      <Divider className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"} />
      {/* </div> */}
      {/* <div className="flex flex-col"> */}
      <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
        <Carousel
          dotPosition="bottom"
          slidesToShow={3}
          autoplay
          autoplaySpeed={2500}
          dots={false}
          className="mx-auto my-8 max-w-screen-xl"
        >
          {testimonialsData.map((elem) => {
            return (
              // <div key={elem.id} className=''>
              <TestimonialCard
                key={elem.id}
                clientCollege={elem.title}
                clientName={elem.name}
                review={elem.testimonial}
                imgUrl={elem.image}
              />
              // </div>
            );
          })}
        </Carousel>
      </ScrollAnimation>
      {/* </div> */}
    </Container>
    // <section className="my-8 bg-yellow-100/20 text-gray-100">

    // </section>
  );
};

const TestimonialCard = ({ imgUrl, review, clientName, clientCollege }) => {
  return (
    <div className="relative left-5 my-12 flex flex-col items-center justify-center rounded-xl border-l-2 border-yellow-600 bg-gradient-to-tr from-white to-gray-100 p-4 text-white shadow-xl md:p-8 dark:border-gray-300 dark:bg-gray-100 dark:text-black">
      {/* Client Image */}
      <img
        src={imgUrl}
        alt={clientName}
        className="absolute -top-10 right-[22rem] h-8 w-8 rounded-full outline outline-offset-2 outline-yellow-600 md:-top-6 md:h-[3.8rem] md:w-[3.8rem]"
      />
      {/* Testimonial Text */}
      <div className="my-4 flex">
        <span className="text-5xl text-primary-color">❝</span>
        <p className="mt-5 text-center text-sm font-semibold text-gray-700">
          {review}
        </p>
        <span className="text-5xl text-primary-color">❞</span>
      </div>
      {/* Client Info */}
      <div className="mt-4 text-center">
        <p className="text-lg font-bold text-gray-700">{clientName}</p>
        <p className="text-xs font-semibold text-gray-700">{clientCollege}</p>
      </div>
    </div>
  );
};

export default Testimonials;
