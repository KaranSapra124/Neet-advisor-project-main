import React from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Helper/Divider";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Smt. Deepali Chandra",
      title: "CEO, ABC Corporation",
      testimonial: `I want to share that “ there are different types of people/ professionals in the city“ but a truly professional, not only professional in the professional sense but as a good human beings, we have come to know some very nice, fine person like Mr. Bansal and Vivek Ji who have been very helpful throughout the NEET Counselling and have given us time which is most important. We got best possible advise from neet advisor which has GIVEN US A GREAT assurance, apart from the fact that the child has done well but “fine tuning and making good choices at the right time” , is very important, in which they all have helped.We are grateful to the entire team of NEET ADVISOR. All the very best `,
      image: "./Testimonials/Testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Smt. Deepali Chandra",
      title: "CEO, ABC Corporation",
      testimonial: `I want to share that “ there are different types of people/ professionals in the city“ but a truly professional, not only professional in the professional sense but as a good human beings, we have come to know some very nice, fine person like Mr. Bansal and Vivek Ji who have been very helpful throughout the NEET Counselling and have given us time which is most important. We got best possible advise from neet advisor which has GIVEN US A GREAT assurance, apart from the fact that the child has done well but “fine tuning and making good choices at the right time” , is very important, in which they all have helped.We are grateful to the entire team of NEET ADVISOR. All the very best `,
      image: "./Testimonials/Testimonial-1.jpg",
    },
    // {
    //   id: 2,
    //   name: "Jane Smith",
    //   title: "Marketing Manager, DEF Agency",
    //   testimonial:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    //   image: "https://picsum.photos/200/300",
    // },
    // {
    //   id: 3,
    //   name: "Bob Johnson",
    //   title: "Founder, GHI Startup",
    //   testimonial:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    //   image: "https://picsum.photos/200/300",
    // },
    // {
    //   id: 4,
    //   name: "Alice Brown",
    //   title: "Product Manager, JKL Company",
    //   testimonial:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    //   image: "https://picsum.photos/200/300",
    // },
    // {
    //   id: 5,
    //   name: "Mike Davis",
    //   title: "CTO, MNO Corporation",
    //   testimonial:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    //   image: "https://picsum.photos/200/300",
    // },
  ];

  return (
    <Container>
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-yellow-600">
          Real Experiences,
          <span className="font-extrabold text-primary-color">
            {" "}
            Real Results
          </span>
        </h1>
        <p className="py-2 text-xs font-semibold text-gray-700">
          Our Mentees Speak Out!
        </p>
        <Divider
          className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
        />
        <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
          <Carousel
            dotPosition="bottom"
            slidesToShow={1}
            autoplay
            autoplaySpeed={2500}
            dots={false}
            className="mx-auto my-2 max-w-screen-xl"
          >
            {reviews.map((elem) => {
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
      </div>
    </Container>
  );
};

const TestimonialCard = ({ imgUrl, review, clientName, clientCollege }) => {
  return (
    <>
      <div className="relative flex cursor-pointer flex-col items-center gap-6 rounded-xl border-b-2 border-l-2 border-yellow-600 bg-gradient-to-br from-gray-200 to-gray-100 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl md:flex-row">
        {/* Client Image */}
        <div className="flex-shrink-0">
          <img
            className="absolute left-5 top-12 z-[999] w-8 rounded-md shadow shadow-yellow-600"
            src="https://cdn-icons-gif.flaticon.com/11919/11919487.gif"
            alt=""
            srcset=""
          />
          <img
            src={imgUrl}
            className="h-24 w-24 rounded-full border-2 border-yellow-600 object-cover p-0.5"
            alt="Client"
          />
        </div>
        {/* Testimonial Text */}
        <div className="flex flex-col-reverse items-center gap-4 text-gray-700 md:items-start">
          <p className="text-center text-sm font-semibold italic md:text-left">
            "{review}"
          </p>

          {/* Client Info */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary-color">{clientName}</p>
            <Divider
              className={
                "my-3 h-0.5 w-1/2 rounded-full bg-yellow-600 md:w-full"
              }
            />
            <p className="text-xs font-bold text-gray-800">{clientCollege}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;
