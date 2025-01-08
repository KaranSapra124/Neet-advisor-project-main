import React from 'react';
import { Carousel } from "antd";
import 'swiper/css';  // You might not need this if you're using AntDesign Carousel
import 'swiper/css/navigation';  // Not required for AntDesign's Carousel
// import 'antd/dist/antd.css'; // Ensure you are importing Ant Design's CSS
import ScrollAnimation from 'react-animate-on-scroll';
import Container from "../Helper/Container"

const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO, ABC Corporation',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Marketing Manager, DEF Agency',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        title: 'Founder, GHI Startup',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 4,
        name: 'Alice Brown',
        title: 'Product Manager, JKL Company',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 5,
        name: 'Mike Davis',
        title: 'CTO, MNO Corporation',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
];

const Testimonials = () => {
    return (
        <Container className={'bg-gray-200/40'} >
            {/* <div className=" flex flex-col items-center mx-auto py-2 "> */}
            <h1 className="text-3xl leading-none text-center text-primary-color font-bold">What our customers are <span className='text-yellow-600 font-extrabold'>saying about us ?</span></h1>
            {/* </div> */}
            {/* <div className="flex flex-col"> */}
            <ScrollAnimation animateIn='backInUp' animateOnce={true} duration={1.5}>

                <Carousel dotPosition='bottom' slidesToShow={4} autoplay autoplaySpeed={1500} dots={false} className='my-5 max-w-screen-xl mx-auto '>
                    {testimonialsData.map((elem) => {
                        return (
                            // <div key={elem.id} className=''>
                            <TestimonialCard key={elem.id}
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
        <div className="relative bg-white backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mx-4 my-8">
            {/* Review Section */}
            <div className="px-6 py-8 bg-gradient-to-br from-white/30 to-white/10">
                <p className="relative text-xs italic text-center text-gray-700 font-semibold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute mb-2 -top-6 left-6 w-5 h-5 text-yellow-400"
                    >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    {review}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute mt-2 -bottom-6 right-6 w-5 h-5 text-yellow-400"
                    >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>

            {/* Client Info Section */}
            <div className="flex flex-col items-center justify-center px-6 py-6 bg-white/20 backdrop-blur-md">
                <img
                    src={imgUrl}
                    alt={clientName}
                    className="w-16 h-16 mb-4 rounded-full border-2 border-yellow-400 shadow-md"
                />
                <p className="text-sm font-semibold text-gray-700">{clientName}</p>
                <p className="text-xs uppercase text-yellow-600">{clientCollege}</p>
            </div>

            {/* Floating Decorative Blurs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Testimonials;
