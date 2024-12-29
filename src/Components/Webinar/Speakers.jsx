import React from 'react'
import Container from '../Helper/Container';
import { BsCursorFill } from 'react-icons/bs';

const Speakers = () => {
    const speakersData = [
        {
            speakerName: "John Doe",
            designation: "Software Developer",
            qualification: "BTech",
            collegeName: "Test College",
            imgUrl: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            speakerName: "Jane Smith",
            designation: "Data Scientist",
            qualification: "MSc Computer Science",
            collegeName: "Tech University",
            imgUrl: "https://randomuser.me/api/portraits/women/20.jpg"
        },
        {
            speakerName: "Michael Brown",
            designation: "UX/UI Designer",
            qualification: "BFA",
            collegeName: "Art School",
            imgUrl: "https://randomuser.me/api/portraits/men/25.jpg"
        },
        {
            speakerName: "Emily Davis",
            designation: "Project Manager",
            qualification: "MBA",
            collegeName: "Business University",
            imgUrl: "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            speakerName: "Alice Green",
            designation: "Frontend Developer",
            qualification: "BSc Computer Science",
            collegeName: "State University",
            imgUrl: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            speakerName: "David Wilson",
            designation: "Backend Developer",
            qualification: "MSc Software Engineering",
            collegeName: "National Institute of Technology",
            imgUrl: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            speakerName: "Sarah Johnson",
            designation: "Business Analyst",
            qualification: "MBA",
            collegeName: "Harvard University",
            imgUrl: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
            speakerName: "Robert Martinez",
            designation: "Cloud Architect",
            qualification: "MTech",
            collegeName: "Global Institute of Technology",
            imgUrl: "https://randomuser.me/api/portraits/men/30.jpg"
        },
        {
            speakerName: "Olivia Taylor",
            designation: "Digital Marketer",
            qualification: "BBA",
            collegeName: "Business School",
            imgUrl: "https://randomuser.me/api/portraits/women/60.jpg"
        },
        {
            speakerName: "James Anderson",
            designation: "Network Engineer",
            qualification: "BTech Networking",
            collegeName: "Tech University",
            imgUrl: "https://randomuser.me/api/portraits/men/40.jpg"
        }
    ];

    return (
        <Container className={"bg-gray-100/50"}>
            <div className='pb-10'>
                <h1 className='text-4xl py-5 text-primary-color font-bold text-center'>Our <span className='text-yellow-500 font-extrabold '>Speakers</span></h1>
                <p className='text-sm font-bold text-gray-700 text-center'>Discover the best colleges & counselling approach for your NEET score

                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-6 p-6">
                {speakersData?.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            className="max-w-xs cursor-pointer w-64 rounded-lg bg-white shadow-lg p-4 flex flex-col items-center relative transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 hover:border hover:border-primary-color"
                        >
                            <img
                                className="rounded-full w-24 h-24 border-4 border-primary-color mb-4 shadow-md transition-all transform hover:scale-110"
                                src={elem?.imgUrl}
                                alt={elem?.speakerName}
                            />
                            <h2 className="text-sm text-primary-color font-semibold text-center mb-1">{elem.speakerName}</h2>
                            <h3 className="text-gray-600 text-sm font-medium text-center mb-1">{elem?.designation}</h3>
                            <p className="text-xs text-gray-700 font-semibold text-center mb-3">{elem?.qualification}</p>
                            <h5 className="bg-primary-color text-white text-xs p-2 rounded-full shadow-sm text-center">{elem?.collegeName}</h5>

                            {/* Position the cursor icon at the bottom-right of the card */}
                            <BsCursorFill className="absolute  bottom-6 right-6 text-primary-color" />
                        </div>
                    );
                })}
            </div>


        </Container>
    )
}

export default Speakers