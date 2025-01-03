import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Root from '../Helper/Root'
import Container from '../Helper/Container'

const IndividualPage = () => {
    const location = useLocation()
    const { state } = location;
    const { title, description, imageUrl, date, category } = state
    return (
        <>
            <Root>
                <Container>
                    <div className='max-w-screen-2xl flex justify-between'>
                        <img src={imageUrl} alt="" srcset="" />
                        <div className='mx-4'>
                            <p className='bg-yellow-500 text-xs text-white font-semibold w-fit p-1 rounded'>{category}</p>
                            <h1 className='text-primary-color font-bold text-3xl py-2'>{title}</h1>
                            <p className='text-sm py-2'>{description}</p>
                            <p className='text-gray-700 font-bold'>{date}</p>
                        </div>

                    </div>
                </Container>
            </Root>
        </>
    )
}

export default IndividualPage