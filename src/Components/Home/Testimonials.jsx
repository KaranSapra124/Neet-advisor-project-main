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
        <Container className={'bg-gray-100'} >
            {/* <div className=" flex flex-col items-center mx-auto py-2 "> */}
                <h1 className="p-4 text-4xl leading-none text-center text-primary-color font-bold">What our customers are saying about us ?</h1>
            {/* </div> */}
            {/* <div className="flex flex-col"> */}
                <ScrollAnimation animateIn='backInUp' animateOnce={true} duration={1.5}>

                    <Carousel dotPosition='bottom' slidesToShow={3} autoplay autoplaySpeed={1500} dots={false} className='my-5 max-w-screen-xl mx-auto '>
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

        <div className="my-8 mx-2 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-lg shadow-black">
            <div className="px-2 py-4 rounded-t-lg sm:px-2   md:px-2 bg-gray-200">
                <p className="relative  px-6 py-1 mb-6 text-md italic text-center text-gray-700 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-yellow-400">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>{review}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-yellow-400">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-4 rounded-b-lg bg-[#201169]  text-gray-200">
                <img src={imgUrl} alt={clientName} className="w-10 h-10 mb-2 -mt-12 bg-center bg-cover rounded-full bg-gray-500 " />
                <p className="text-md font-semibold leading-tight">{clientName}</p>
                <p className="text-xs uppercase">{clientCollege}</p>
            </div>

        </div>

    );
};

export default Testimonials;
