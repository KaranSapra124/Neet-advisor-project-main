import { Dropdown, Menu } from 'antd';
import { useState } from 'react';
import { Link, NavLink, } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Webinars",
            link: "/webinar"
        },
        // {
        //     title: "Gallery",
        //     link: "/gallery"
        // },
        {
            title: "About Us",
            link: "/about"
        }
    ]

    const items = [
        {
            key: 1,
            label: (<Link to={"/pg-seminar"}>PG Seminar</Link>)
        },
        {
            key: 2,
            label: (<Link to={"/ug-seminar"}>UG Seminar</Link>)
        },
        {
            key: 3,
            label: (<Link to={"/news"}>News & Blog</Link>)
        },
        {
            key: 4,
            label: (<Link to={"/gallery"}>Gallery</Link>)
        }
        ,
        {
            key: 5,
            label: (<Link to={"/careers"}>Career</Link>)
        },
        {
            key: 6,
            label: (<Link to={"/mbbs-abroad"}>MBBS Abroad</Link>)
        },
        {
            key: 7,
            label: (<Link to={"/medical-expo"}>Medical Expo 2025</Link>)
        },
        {
            key: 8,
            label: (<Link to={"/contact"}>Contact Us</Link>)
        }
    ]

    const menu = (
        <Menu className={`${window.location.pathname.includes('medical-expo') ? "bg-gradient-to-br from-black to-black/85  " : "bg-white "}`}>
            {items.map(item => (
                <Menu.Item key={item.key} className={`z-[999] ${window.location.pathname.includes('medical-expo') ? "!text-gray-200 " : "bg-white "}`}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );


    return (
        <nav className={` ${window.location.pathname.includes('medical-expo') ? "bg-gradient-to-br from-black to-black/85 " : "bg-white "} sticky top-0 z-[1000]  backdrop-blur-sm shadow-lg p-4 px-20`}>
            <div className="container mx-auto   flex justify-between items-center">
                <div className='flex items-center'>
                    {!window?.location?.pathname?.includes("medical-expo") && <img src="neet-advisor-logo-Photoroom.png" className='h-[4rem] ' alt="" srcset="" />}
                    {/* <span className="font-bold text-xl text-gray-800 ml-2">NEET Advisor</span> */}
                </div>
                <div className="hidden md:block">
                    <ul className="flex space-x-6">
                        {links?.map((elem, index) => {
                            return <NavLink key={index} className={({ isActive }) => (isActive ? "hover:font-bold hover:scale-105 transition-all font-bold text-indigo-900" : `hover:font-bold hover:scale-105 transition-all ${window.location.pathname.includes("medical-expo") ? 'text-white' : 'text-gray-600'}`)} to={elem?.link}>
                                {elem?.title}   </NavLink>
                        })}
                        <Dropdown className={`cursor-pointer ${window.location.pathname.includes('medical-expo') ? 'text-white' : "text-gray-600"}`} overlay={menu} arrow placement='bottom'>
                            <a onClick={e => e.preventDefault()}>
                                More
                            </a>
                        </Dropdown>
                    </ul>
                </div >
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div >

        </nav >
    );
}

export default Navbar;