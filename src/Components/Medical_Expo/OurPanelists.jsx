import React from 'react';
import Container from "../Helper/Container";
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const OurPanelists = () => {
    const teamMemberData = [{
        name: 'Vipin Bansal',
        title: 'Founder & CEO',
        imageUrl: 'Vipin-Bansal-square.jpg',
        socialLinks: [
            { href: 'https://codepen.io/collection/XdWJOQ/', icon: <FaTwitter /> },
            { href: 'https://codepen.io/collection/XdWJOQ/', icon: <FaLinkedin /> },
        ],
    },
    {
        name: 'Vivek Singh',
        title: 'Co-Founder',
        imageUrl: 'vivek-singh-square.jpg',
        socialLinks: [
            { href: 'https://codepen.io/collection/XdWJOQ/', icon: <FaTwitter /> },
            { href: 'https://codepen.io/collection/XdWJOQ/', icon: <FaLinkedin /> },
        ],
    }];

    return (
        <Container className="bg-gradient-to-br from-black to-black/85 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center my-4">
                    <h1 className="text-white  text-3xl font-normal mb-2">
                        Expo <span className="font-extrabold text-yellow-600">Panelists</span> Who Will <span className="font-extrabold text-yellow-600">Guide You!</span>
                    </h1>
                    <p className="text-gray-400  text-xs md:text-xs max-w-md font-semibold mx-auto">
                        Learn from doctors, professors, and alumni of India's leading medical colleges. 
                        Carve your path in competitive medical landscape.
                    </p>
                </div>

                <div className="flex justify-center">
                    {teamMemberData.map((member, index) => (
                        <div 
                            key={index}
                            className="bg-[#4C585B]  bg-opacity-50 border-l-2 border-b-2 border-gray-200 cursor-pointer w-64 p-6 m-4 flex-wrap rounded-lg 
                                     transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex cursor-pointer flex-col items-center">
                                <div className="mb-4 relative">
                                    <img 
                                        className="w-32 h-32 rounded-full object-cover  shadow-md shadow-gray-200" 
                                        src={member.imageUrl} 
                                        alt={member.name}
                                    />
                                </div>
                                <h2 className="text-gray-200 text-lg font-bold mb-2">{member.name}</h2>
                                <p className="text-gray-400 font-semibold mb-4 text-xs ">{member.title}</p>
                                
                                <div className="flex space-x-4">
                                    {member.socialLinks.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.href}
                                            className="text-gray-400 hover:text-yellow-600 transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {React.cloneElement(link.icon, { className: "w-5 h-5" })}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default OurPanelists;