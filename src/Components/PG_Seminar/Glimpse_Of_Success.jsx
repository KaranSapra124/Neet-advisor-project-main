import React from 'react'
import Container from '../Helper/Container'
import Divider from '../Helper/Divider'

const Glimpse_Of_Success = () => {
    return (
        <Container className={'flex justify-center items-center bg-gray-100'}>

            <div className='max-w-screen flex'>
                <div className='w-1/2'>
                    <h1 className='text-4xl pb-4 text-center text-primary-color font-bold'>Highlights Of Our <span className='text-yellow-500 font-extrabold'>Success!</span></h1>
                    <Divider className={'h-1 w-32 bg-yellow-500 mx-auto rounded-lg my-1'} />
                    <p className='py-2 text-sm text-gray-700 font-medium'>Empowering Minds, Shaping Futures. Catch the highlights from Medical Mentor Seminars over the years! </p>
                    <p className='py-2 text-sm text-gray-700 font-medium'>What sets us apart is our focus on understanding each student’s unique aspirations, strengths, and challenges. Whether it's explaining admission procedures, clarifying cutoffs, or selecting the perfect college, our team of experienced counsellors provides tailored advice that ensures no opportunity is missed.</p>
                    <p className='py-2 text-sm text-gray-700 font-medium'>If you’re aiming for a bright medical career, let <strong>Neet Advisor</strong> be your guiding light. With our proven strategies, expert insights, and relentless support, your NEET dreams are just a step away from reality.</p>
                    <h2 className=' border-l-4 pl-2   border-yellow-500 font-semibold text-primary-color text-lg py-2 my-2'>   Contact us today to unlock your potential and <span className='text-yellow-500 text-xl font-extrabold '>secure your future!</span></h2>
                </div>
                <video autoPlay loop muted className='w-1/2 rounded-lg ml-1' src="https://videos.pexels.com/video-files/4919748/4919748-sd_960_506_25fps.mp4"></video>
            </div>
        </Container>
    )
}

export default Glimpse_Of_Success