import React from 'react'
import Container from "../Helper/Container"
import Divider from "../Helper/Divider"
const BookSpot = () => {
    return (
        <>
            <Container className={'bg-gradient-to-tr from-black to-black/85'} >
                <div className='flex p-4 justify-between max-w-screen-lg mx-auto bg-black/20 border border-gray-200 rounded-md'>
                    <div className='p-2'>
                        <h1 className='text-white font-bold text-xl '>
                            Book your slot now!
                        </h1>
                        <Divider className={'h-0.5 w-12 bg-yellow-600 rounded-full my-2'}/>
                        <p className='text-gray-200 font-semibold text-xs max-w-lg '> Attend the Medical Mentor’s Expo, join the movement for medical education excellence, and shape your medical career</p>
                    </div>
                    <button className='bg-yellow-600 hover:bg-yellow-700 transition-all w-fit h-fit text-white font-semibold text-sm my-auto px-4 py-2 rounded-l-full rounded-r-full'>Book Free Slot</button>
                </div>
            </Container>
        </>
    )
}

export default BookSpot