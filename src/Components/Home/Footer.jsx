import React from "react";
import Divider from "../../Components/Helper/Divider";
const Footer = () => {
  return (
    <footer className="bg-primary-color p-10 text-white lg:p-16">
      {/* Footer Layout */}
      <div className="container mx-auto flex flex-col justify-between gap-8 lg:flex-row">
        {/* Newsletter Subscription */}
        <div className="max-w-sm">
          <h3 className=" text-lg font-bold text-white">Stay Updated!</h3>
          <Divider className={'w-12 h-1 bg-yellow-600 rounded-full my-1'}/>
          <p className="text-sm">
            Get the latest NEET UG and NEET PG Counselling updates, policies,
            news, articles, and analysis in your inbox.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              className="w-44 rounded-md border border-gray-300 px-4 py-2 text-gray-700 lg:w-full"
              placeholder="Enter your Email"
            />
            <button className="ml-2 rounded-md bg-yellow-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-yellow-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          <div>
            <h3 className=" text-lg font-bold text-white">Company</h3>
            <Divider className={'w-12 h-1 bg-yellow-600 rounded-full my-1'}/>

            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partnership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" text-lg font-bold text-white">Services</h3>
            <Divider className={'w-12 h-1 bg-yellow-600 rounded-full my-1'}/>

            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Attend Webinar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" text-lg font-bold text-white">Social Media</h3>
            <Divider className={'w-12 h-1 bg-yellow-600 rounded-full my-1'}/>

            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-sm text-center lg:text-left">
          <h3 className=" text-lg font-bold text-white">Contact Us</h3>
          <Divider className={'w-12 h-1 bg-yellow-600 rounded-full my-1'}/>

          <p className="text-sm">
            📞 <strong>+91-991-120-3280</strong>
          </p>
          <p className="text-sm">
            📍{" "}
            <strong>
              US 1 & 2, Ground Floor, U.S. Complex, Jasola, Delhi-110076
            </strong>
          </p>
          <p className="text-sm">
            📍{" "}
            <strong>
              No. 810, B Wing, Kanakia Wall Street, Andheri East, Mumbai-400093
            </strong>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-4 text-sm lg:flex-row">
        <p className="text-gray-400">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
