import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 p-20 text-white ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Stay Updated!</h3>
                    <p className="text-sm">Get the latest NEET UG and NEET PG Counselling updates, Policies, News, Articles, and Analysis in your inbox.</p>
                    <div className="flex mt-4">
                        <input type="email" className="border border-gray-300 rounded-md px-4 py-2 mr-2" placeholder="Enter your Email" />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">Subscribe</button>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Company</h3>
                    <ul>
                        <li className="text-sm"><a href="#" className="hover:underline">About us</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">Contact us</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">Careers</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">Partnership</a></li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Services</h3>
                    <ul>
                        <li className="text-sm"><a href="#" className="hover:underline">Attend Webinar</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">Book a Session</a></li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Social Media</h3>
                    <ul>
                        <li className="text-sm"><a href="#" className="hover:underline">Facebook</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">Instagram</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">Twitter</a></li>
                        <li className="text-sm"><a href="#" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer