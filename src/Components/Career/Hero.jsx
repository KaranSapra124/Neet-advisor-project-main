import React from 'react'
import Container from '../Helper/Container'
import CareerAnimation from "./Career-Page-Animation.json"
import Lottie from 'lottie-react'
import { TiTick } from 'react-icons/ti'
import ScrollAnimation from 'react-animate-on-scroll'
const Hero = () => {
    const benefits = [
        {
            title: "Competitive Salary",
            description: "We offer a salary that reflects your skills and experience."
        },
        {
            title: "Flexible Work Arrangements",
            description: "Enjoy the freedom of remote work and flexible hours."
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health benefits and wellness programs."
        },
        {
            title: "Professional Development",
            description: "Access to workshops, training, and resources to enhance your skills."
        },
        {
            title: "Inclusive Culture",
            description: "We celebrate diversity and foster an inclusive environment for all employees."
        }
    ];
    return (
        <>
            <Container className={'bg-gray-100'}>
                <ScrollAnimation animateIn='JackInTheBox' duration={1.5} animateOnce={true} initiallyVisible={true}>
                    <div className='flex max-h-96 max-w-screen-lg items-center mx-auto'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl text-primary-color font-bold'>Join Our Team At <br /> <span className='font-extrabold text-yellow-500'>Neet Advisor</span></h1>
                            <p className='text-gray-700 text-xs font-semibold py-2'>Are you passionate about education and helping students achieve their dreams? At  <strong>Neet Advisor!</strong>, we are on a mission to guide aspiring medical students through their  <strong>Neet</strong> preparation journey. Join us in making a difference!
                            </p>
                            <div>
                                {
                                    benefits?.map((elem, index) => {
                                        return <>
                                            <span className='flex justify-center '>
                                                <TiTick className='text-xl text-gray-700 mx-1' />
                                                <li className='list-none  text-gray-700'>
                                                    <strong className='text-sm'>{elem?.title} : </strong> <span className='text-xs'>{elem?.description}</span>
                                                </li></span>
                                        </>
                                    })
                                }
                            </div>
                            <button className='text-white my-4 mt-4 bg-yellow-500 font-semibold py-1 px-2 text-sm rounded-l-full rounded-r-full'>View Openings</button>
                        </div>
                        <Lottie animationData={CareerAnimation} className='max-w-screen-sm'  loop={false}/>
                    </div>

                </ScrollAnimation>
            </Container>


        </>
    )
}

export default Hero