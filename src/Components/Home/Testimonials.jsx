import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const testimonialsData = [
  {
    id: 1,
    name: "Smt. Deepali Chandra",
    title: "CEO, ABC Corporation",
    testimonial: `I want to share that “ there are different types of people/ professionals in the city“ but a truly professional, not only professional in the professional sense but as a good human beings, we have come to know some very nice, fine person like Mr. Bansal and Vivek Ji who have been very helpful throughout the NEET Counselling and have given us time which is most important. We got best possible advise from neet advisor which has GIVEN US A GREAT assurance, apart from the fact that the child has done well but “fine tuning and making good choices at the right time” , is very important, in which they all have helped. We are grateful to the entire team of NEET ADVISOR. All the very best.`,
    image: "./Testimonials/Testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Entrepreneur, StartUp India",
    testimonial: `The personalized attention and expertise provided by the NEET Advisor team were outstanding. They guided us at every step, ensuring that we made informed decisions. Their insights were invaluable, and I would recommend them to anyone looking for professional, heartfelt advice.`,
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 3,
    name: "Anita Verma",
    title: "Parent of a Medical Student",
    testimonial: `Before we came to NEET Advisor, we were overwhelmed by the sheer volume of decisions we needed to make. They simplified the process, gave us a clear roadmap, and constantly supported us throughout the journey. I can’t thank them enough for their commitment and dedication.`,
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 4,
    name: "John Smith",
    title: "Software Engineer, TechCorp",
    testimonial: `Professionalism, attention to detail, and understanding our specific needs made working with NEET Advisor an amazing experience. They were proactive, transparent, and approachable at every stage of the process. Highly recommended!`,
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    id: 5,
    name: "Dr. Kavita Sharma",
    title: "Parent of NEET Aspirant",
    testimonial: `Thank you so much to the NEET Advisor team for being a true guiding light for my child. From college selection to documentation, everything was seamless, which gave us immense peace of mind. We felt secure in making decisions with their honest and expert advice.`,
    image: "https://picsum.photos/200/300?random=4",
  },
  // {
  //   id: 5,
  //   name: "Dr. Kavita Sharma",
  //   title: "Parent of NEET Aspirant",
  //   testimonial: `Thank you so much to the NEET Advisor team for being a true guiding light for my child. From college selection to documentation, everything was seamless, which gave us immense peace of mind. We felt secure in making decisions with their honest and expert advice.`,
  //   image: "https://picsum.photos/200/300?random=4",
  // },
  {
    id: 6,
    name: "Sneha Gupta",
    title: "High School Teacher",
    testimonial: `The team at NEET Advisor is phenomenal. They don’t just provide advice; they ensure that you feel confident in your decisions. Their ability to understand both student and parent concerns is exceptional. This is what sets them apart!`,
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    id: 7,
    name: "Ramesh Malhotra",
    title: "Businessman",
    testimonial: `We were completely lost until we came across NEET Advisor. They took the time to analyze our situation and provided tailored advice. Their knowledge and dedication are truly praiseworthy.`,
    image: "https://picsum.photos/200/300?random=6",
  },
  {
    id: 8,
    name: "Priya Kapoor",
    title: "Parent of a NEET Ranker",
    testimonial: `A heartfelt thank you to NEET Advisor! It’s rare to find professionals who are so compassionate and understanding. Their guidance was instrumental in my child securing admission to a top medical college.`,
    image: "https://picsum.photos/200/300?random=7",
  },
  {
    id: 9,
    name: "Vikas Sharma",
    title: "Father of a NEET Aspirant",
    testimonial: `NEET Advisor not only helped us with the admission process but also provided emotional support throughout. They’re truly dedicated to ensuring success for every student.`,
    image: "https://picsum.photos/200/300?random=8",
  },
  {
    id: 10,
    name: "Preeti Mishra",
    title: "Parent of a NEET Candidate",
    testimonial: `The NEET Advisor team was incredibly helpful in navigating the complexities of counseling. Their professionalism and personal touch gave us the confidence to move forward.`,
    image: "https://picsum.photos/200/300?random=9",
  },
];

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Calculate slides to show based on testimonial length
  const getSlideCount = (testimonial) => {
    const length = testimonial.length;
    if (length > 0 && length <= 200) return 3;
    else if (length > 200 && length < 500) return 2;
    else return 1;
  };

  // Group testimonials by how many should show at once
  const groupedTestimonials = testimonialsData.reduce((acc, testimonial) => {
    const slideCount = getSlideCount(testimonial.testimonial);
    if (!acc[slideCount]) {
      acc[slideCount] = [];
    }
    acc[slideCount].push(testimonial);
    return acc;
  }, {});

  useEffect(() => {
    const updateSlides = () => {
      const currWidth = window.innerWidth;
      setSlidesToShow(currWidth);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Create slides array with proper grouping
  const slides = Object.entries(groupedTestimonials).flatMap(
    ([count, items]) => {
      const groups = [];
      for (let i = 0; i < items.length; i += Number(count)) {
        groups.push(items.slice(i, i + Number(count)));
      }
      return groups;
    },
  );

  return (
    <Container className="bg-gray-200/40">
      <h1 className="text-center text-sm font-bold leading-none text-yellow-600 lg:text-3xl">
        What our customers are{" "}
        <span className="font-extrabold text-primary-color">
          saying about us?
        </span>
      </h1>
      <Divider className="mx-auto my-4 h-1 w-12 rounded-full bg-yellow-600 lg:w-20" />

      <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
        <Carousel
          dotPosition="bottom"
          autoplay
          autoplaySpeed={3000}
          dots={true}
          arrows
          infinite
          className="mx-auto lg:my-8 max-w-screen-xl"
        >
          {slidesToShow > 768
            ? slides.map((group, groupIndex) => (
                <div key={groupIndex} className="px-4">
                  <div className="flex gap-4">
                    {group.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="relative flex flex-col max-[600px]:flex-wrap"
                      >
                        <TestimonialCard
                          clientCollege={testimonial.title}
                          clientName={testimonial.name}
                          review={testimonial.testimonial}
                          imgUrl={testimonial.image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : testimonialsData?.map((testimonial, index) => {
                return (
                  <>
                    <TestimonialCard
                      clientCollege={testimonial.title}
                      clientName={testimonial.name}
                      review={testimonial.testimonial}
                      imgUrl={testimonial.image}
                    />
                  </>
                );
              })}
        </Carousel>
      </ScrollAnimation>
    </Container>
  );
};

const TestimonialCard = ({ imgUrl, review, clientName, clientCollege }) => {
  return (
    <div className="relative lg:my-0 my-3.5 lg:mx-0 mx-auto flex h-full rounded-md border-l-2 border-yellow-600 bg-gray-200/5 p-4 shadow-md shadow-gray-400 lg:max-h-72 max-h-full lg:gap-4">
      <img
        className="absolute -left-3 -top-3 lg:h-14 lg:w-14 w-10 h-10 rounded-full shadow shadow-yellow-600"
        src={imgUrl}
        alt=""
        srcset=""
      />
      <div className="lg:px-6 lg:py-5 px-3 py-4">
        <h1 className="lg:text-sm text-[0.7rem] font-bold text-primary-color">{clientName}</h1>
        <h2 className="my-1 lg:text-xs text-[0.5rem] font-medium text-gray-800">
          {clientCollege}
        </h2>
        <Divider className="my-4 h-1 lg:w-20 w-12 rounded-full bg-yellow-600" />
        <p className="lg:text-xs text-[0.5rem] font-bold italic">"{review}"</p>
      </div>
    </div>
  );
};

export default Testimonials;
