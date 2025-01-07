import React from 'react'
import Container from "../Helper/Container"
import { FaMapLocation } from 'react-icons/fa6'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

const EventLocation = () => {
    return (
        <Container className={'bg-gradient-to-br from-black to-black/85 flex flex-col justify-center items-center '}>
            <h1 className="text-3xl text-center text-white font-semibold">
                Event <span className="text-yellow-600 font-extrabold inline-flex items-center">
                    Location <FaMapLocation className="ml-2" />
                </span>
            </h1>
            <p className='text-gray-300 text-center my-4 font-semibold text-xs'>Contact us for more details on the Medical Advisor Expo</p>
            <div className='flex  justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0180566231634!2d77.2802189754974!3d28.539176975715858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce386847e1c93%3A0x535231df782a3e3d!2sNEET%20ADVISOR!5e0!3m2!1sen!2sin!4v1736235673499!5m2!1sen!2sin" className='rounded-lg border-none  hover:scale-105 transition-all cursor-pointer w-96' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <img className='w-96 mx-5 hover:scale-105 transition-all cursor-pointer' src="https://neetadvisor.com/assets/images/1-(1).webp" alt="" />
                    </div>
                </div>
                <EventDetails />
            </div>
        </Container>
    )
}

const EventDetails = () => {
    const eventDetailsData = [
        {
            icon: <FiMail />,
            content: 'info@neetadvisor.com'
        },
        {
            icon: <FiMapPin />,
            content: 'US 1 & 2, Ground Floor, U.S. Complex,Jasola, New Delhi - 110076'
        },
        {
            icon: <FiPhoneCall />,
            content: '+91-991-120-3280'
        },
    ]
    return <>
        <div className='flex flex-col h-full  justify-center items-center '>
            {eventDetailsData?.map((elem, index) => {
                return <div key={index} className='text-gray-300 text-center w-64 p-4 justify-center items-center flex flex-col my-1 rounded-md  bg-black/20   hover:bg-gray-500/10 transition-all cursor-pointer hover:scale-105 border border-gray-600 mx-2'>
                    <p className=' text-lg py-2'> {elem?.icon}</p>
                    <p className='text-xs font-semibold text-gray-400'>{elem?.content}</p>
                </div>
            })}
        </div>
    </>
}

export default EventLocation