import React from 'react'
import Container from "../Helper/Container"
import { Carousel } from 'antd';
const Reviews = () => {
    const reviews = [
        {
            id: 1,
            imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
            rating: Math.round(Math.random() * 5), // Random rating between 0 and 5
            review: "This product exceeded my expectations! Highly recommend it to everyone.",
            clientName: "John Doe",
            clientCollege: "Harvard University"
        },
        {
            id: 2,
            imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Great quality and fantastic customer service. Will buy again!",
            clientName: "Jane Smith",
            clientCollege: "Stanford University"
        },
        {
            id: 3,
            imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Not what I expected. The quality could be better.",
            clientName: "Michael Johnson",
            clientCollege: "MIT"
        },
        {
            id: 4,
            imgUrl: 'https://randomuser.me/api/portraits/women/4.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Absolutely love this! It has made my life so much easier.",
            clientName: "Emily Davis",
            clientCollege: "University of California"
        },
        {
            id: 5,
            imgUrl: 'https://randomuser.me/api/portraits/men/5.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Decent product, but I had some issues with delivery.",
            clientName: "David Wilson",
            clientCollege: "Columbia University"
        },
        {
            id: 6,
            imgUrl: 'https://randomuser.me/api/portraits/women/6.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Fantastic experience! Will definitely recommend to friends.",
            clientName: "Sarah Brown",
            clientCollege: "Yale University"
        },
        {
            id: 7,
            imgUrl: 'https://randomuser.me/api/portraits/men/7.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Good value for money. Satisfied with my purchase.",
            clientName: "James Miller",
            clientCollege: "Princeton University"
        },
        {
            id: 8,
            imgUrl: 'https://randomuser.me/api/portraits/women/8.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "I had high hopes, but it didn't meet my expectations.",
            clientName: "Laura Garcia",
            clientCollege: "University of Chicago"
        },
        {
            id: 9,
            imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Excellent product! Will buy again without hesitation.",
            clientName: "Robert Martinez",
            clientCollege: "Northwestern University"
        },
        {
            id: 10,
            imgUrl: 'https://randomuser.me/api/portraits/women/10.jpg', // Example image URL
            rating: Math.round(Math.random() * 5),
            review: "Not worth the price. I expected more features.",
            clientName: "Jessica Taylor",
            clientCollege: "Duke University"
        }
    ];



    return (
        <Container >
            <div className='flex  flex-col justify-center items-center'>
                <h1 className='primary text-3xl font-bold '>Real Experiences,<span className='text-yellow-600 font-extrabold'> Real Results</span></h1>
                <p className='text-xs font-semibold text-gray-700 py-2'>Our Mentees Speak Out!</p>
                <Carousel autoplay autoplaySpeed={2500} className='max-w-screen-xl' dots={false} arrows={false} infinite slidesToShow={4}>
                    {reviews?.map((elem) => {
                        return <TestimonialCard clientName={elem?.clientName} clientCollege={elem?.clientCollege} imgUrl={elem?.imgUrl} review={elem?.review} />
                    })}
                </Carousel>
            </div>
        </Container>
    )
}

const TestimonialCard = ({ imgUrl, review, clientName, clientCollege }) => {

    return (
        <div className=" mx-5  rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-lg shadow-black">
            <div className="px-2 py-4 h-[15rem]  rounded-t-lg sm:px-8 md:px-12 bg-gray-200/40">
                <p className="relative px-6 py-1 mb-6 text-md italic text-center text-gray-700 font-semibold">
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
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#201169]  text-gray-200">
                <img src={imgUrl} alt={clientName} className="w-10 h-10 mb-2 -mt-12 bg-center bg-cover rounded-full bg-gray-500 " />
                <p className="text-sm font-semibold leading-tight">{clientName}</p>
                <p className="text-xs uppercase">{clientCollege}</p>
            </div>

        </div>

    );
};
export default Reviews