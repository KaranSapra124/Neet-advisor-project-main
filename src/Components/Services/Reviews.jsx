import React from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      imgUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Example image URL
      rating: Math.round(Math.random() * 5), // Random rating between 0 and 5
      review:
        "This product exceeded my expectations! Highly recommend it to everyone.",
      clientName: "John Doe",
      clientCollege: "Harvard University",
    },
    {
      id: 2,
      imgUrl: "https://randomuser.me/api/portraits/women/2.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Great quality and fantastic customer service. Will buy again!",
      clientName: "Jane Smith",
      clientCollege: "Stanford University",
    },
    {
      id: 3,
      imgUrl: "https://randomuser.me/api/portraits/men/3.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Not what I expected. The quality could be better.",
      clientName: "Michael Johnson",
      clientCollege: "MIT",
    },
    {
      id: 4,
      imgUrl: "https://randomuser.me/api/portraits/women/4.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Absolutely love this! It has made my life so much easier.",
      clientName: "Emily Davis",
      clientCollege: "University of California",
    },
    {
      id: 5,
      imgUrl: "https://randomuser.me/api/portraits/men/5.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Decent product, but I had some issues with delivery.",
      clientName: "David Wilson",
      clientCollege: "Columbia University",
    },
    {
      id: 6,
      imgUrl: "https://randomuser.me/api/portraits/women/6.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Fantastic experience! Will definitely recommend to friends.",
      clientName: "Sarah Brown",
      clientCollege: "Yale University",
    },
    {
      id: 7,
      imgUrl: "https://randomuser.me/api/portraits/men/7.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Good value for money. Satisfied with my purchase.",
      clientName: "James Miller",
      clientCollege: "Princeton University",
    },
    {
      id: 8,
      imgUrl: "https://randomuser.me/api/portraits/women/8.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "I had high hopes, but it didn't meet my expectations.",
      clientName: "Laura Garcia",
      clientCollege: "University of Chicago",
    },
    {
      id: 9,
      imgUrl: "https://randomuser.me/api/portraits/men/9.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Excellent product! Will buy again without hesitation.",
      clientName: "Robert Martinez",
      clientCollege: "Northwestern University",
    },
    {
      id: 10,
      imgUrl: "https://randomuser.me/api/portraits/women/10.jpg", // Example image URL
      rating: Math.round(Math.random() * 5),
      review: "Not worth the price. I expected more features.",
      clientName: "Jessica Taylor",
      clientCollege: "Duke University",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto justify-center">
        <h1 className="text-yellow-600 text-3xl font-bold">
          Real Experiences,
          <span className="font-extrabold text-primary-color"> Real Results</span>
        </h1>
        <p className="py-2 text-xs font-semibold text-gray-700">
          Our Mentees Speak Out!
        </p>
        <ScrollAnimation animateIn="fadeInUp"  duration={1.5}>
               <Carousel
                 dotPosition="bottom"
                 slidesToShow={3}
                 autoplay
                 autoplaySpeed={2500}
                 dots={false}
                 className="mx-auto my-8 max-w-screen-xl"
               >
                 {reviews.map((elem) => {
                   return (
                     // <div key={elem.id} className=''>
                     <TestimonialCard
                       key={elem.id}
                       clientCollege={elem.clientCollege}
                       clientName={elem.clientName}
                       review={elem.review}
                       imgUrl={elem.imgUrl}
                     />
                     // </div>
                   );
                 })}
               </Carousel>
             </ScrollAnimation>
      </div>
    </Container>
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
export default Reviews;
