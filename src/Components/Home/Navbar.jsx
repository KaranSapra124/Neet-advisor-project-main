import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white  text-black shadow-lg p-2 px-20">
            <div className="container mx-auto   flex justify-between items-center">
                <div className="flex items-center ">
                    <img src="data:image/jpeg;base64,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" alt="NEET Advisor Logo" className="h-[5rem] " />
                    {/* <span className="font-bold text-xl text-gray-800 ml-2">NEET Advisor</span> */}
                </div>
                <div className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li className="hover:font-bold hover:scale-105 transition-all"><a href="/">Home</a></li>
                        <li className="hover:font-bold hover:scale-105 transition-all"><a href="/courses">Courses</a></li>
                        <li className="hover:font-bold hover:scale-105 transition-all"><a href="/about">About Us</a></li>
                        <li className="hover:font-bold hover:scale-105 transition-all"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
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
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4 w-full absolute top-full left-0">
                    <ul className="flex flex-col space-y-4">
                        <li className="hover:text-blue-500"><a href="/">Home</a></li>
                        <li className="hover:text-blue-500"><a href="/courses">Courses</a></li>
                        <li className="hover:text-blue-500"><a href="/about">About Us</a></li>
                        <li className="hover:text-blue-500"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            )
            }
        </nav >
    );
}

export default Navbar;