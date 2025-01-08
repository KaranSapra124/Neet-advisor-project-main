import React, { useEffect, useState } from 'react'
import Container from "../Helper/Container"
import ScrollAnimation from 'react-animate-on-scroll'
const Outcome = () => {
    const [random, setRandom] = useState(0)
    const [card, setCards] = useState([
        {
            "image": "https://picsum.photos/400/300?random=1",
            "title": "Enhanced Knowledge and Skills",
            "description": "Participants gain a deeper understanding of specific topics and develop new skills relevant to their field of study."
        },
        {
            "image": "https://picsum.photos/400/300?random=2",
            "title": "Networking Opportunities",
            "description": "Attendees can connect with peers and engage with industry professionals, fostering valuable relationships for future collaborations."
        },
        {
            "image": "https://picsum.photos/400/300?random=3",
            "title": "Improved Engagement and Motivation",
            "description": "Interactive elements like Q&A sessions and polls enhance participant engagement and motivation during the learning process."
        },
        {
            "image": "https://picsum.photos/400/300?random=4",
            "title": "Access to Resources and Materials",
            "description": "Participants receive supplementary materials, including slides and recordings, to aid in further study and understanding."
        },
        {
            "image": "https://picsum.photos/400/300?random=5",
            "title": "Increased Confidence and Professional Development",
            "description": "Engaging in discussions boosts participants' confidence in their knowledge and prepares them for future job opportunities."
        },
        {
            "image": "https://picsum.photos/400/300?random=6",
            "title": "Flexibility and Convenience",
            "description": "Webinars allow participants to attend from anywhere, making it easier to fit learning into their schedules and choose from a variety of topics."
        },
        {
            "image": "https://picsum.photos/400/300?random=5",
            "title": "Increased Confidence and Professional Development",
            "description": "Engaging in discussions boosts participants' confidence in their knowledge and prepares them for future job opportunities."
        },
        {
            "image": "https://picsum.photos/400/300?random=6",
            "title": "Flexibility and Convenience",
            "description": "Webinars allow participants to attend from anywhere, making it easier to fit learning into their schedules and choose from a variety of topics."
        }
    ])
    useEffect(() => {
        const generateIndex = setInterval(() => {
            setRandom(Math.floor(Math.random() * card.length))
        }, 3500)
        return () => clearInterval(generateIndex)
    }, [])
    return (
        <ScrollAnimation className='relative' animateIn='backInRight' animateOnce={true} duration={1.5}>
            <Container>
                <h1 className='text-primary-color font-bold text-3xl text-center'>Webinar <span className='text-yellow-600 font-extrabold'>Outcomes</span></h1>
                <p className='text-gray-700 text-center font-semibold py-2 text-xs'>Our sessions are designed to drive your confidence and empower your decisions for guaranteed success.  </p>
                <div className='flex flex-wrap justify-center  '>
                    {/* Create here */}
                    {
                        card?.map((elem, index) => {
                            return <>
                                <OutcomeCard className={`${index === random ? "animate-rotateIt" : ""}`} description={elem?.description} imageUrl={elem?.image} title={elem?.title} />
                            </>
                        })
                    }
                </div>

            </Container>
        </ScrollAnimation>
    )
}

const OutcomeCard = ({ className, title, imageUrl, description }) => (
    <div className={`bg-white   ${className}     shadow cursor-pointer m-4 rounded-md w-72 overflow-hidden transform transition duration-500 hover:scale-110 hover:shadow-2xl`}>

        <img src={imageUrl} alt={description} className="h-40   w-full p-2 rounded-xl object-cover" />
        {/* <div className='absolute shadow-xl h-[2rem]'></div> */}
        <div className="px-2  py-2">
            <h2 className="text-sm font-bold mb-3 text-primary-color">{title}</h2>
            <p className="text-gray-700 text-xs font-semibold line-clamp-4">{description}</p>
        </div>
    </div>
);

export default Outcome