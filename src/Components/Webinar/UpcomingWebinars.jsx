import React from 'react'
import Container from "../Helper/Container"
import { Tabs } from 'antd'
const UpcomingWebinars = () => {
    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <Container>
            <div className='text-center pb-6'>
                <h1 className='text-4xl pb-2 text-primary-color font-bold'><span className="text-yellow-500 font-extrabold">Upcoming</span> Webinars</h1>
                <p className='text-sm font-bold text-gray-700'>Mark your calendars for Hello Mentor’s upcoming NEET Counselling webinars.</p>
            </div>
            <div>
                <Tabs defaultActiveKey='1' items={items} onChange={(key) => console.log(key)} />
            </div>

        </Container>
    )
}

export default UpcomingWebinars