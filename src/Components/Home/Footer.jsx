import React from "react";

const Footer = () => {
  return (
    <footer
      className={`${window.location.pathname.includes("medical-expo") || window.location.pathname.includes("ug-seminar") ? "bg-gradient-to-br from-black to-black/80" : "bg-primary-color"} p-20 text-white`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 text-lg font-bold">Stay Updated!</h3>
          <p className="text-sm">
            Get the latest NEET UG and NEET PG Counselling updates, Policies,
            News, Articles, and Analysis in your inbox.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              className="mr-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700"
              placeholder="Enter your Email"
            />
            <button className="rounded-md bg-yellow-600 px-4 py-2 font-bold text-white transition-all hover:bg-yellow-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 text-lg font-bold">Company</h3>
          <ul>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Partnership
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 text-lg font-bold">Services</h3>
          <ul>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Attend Webinar
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Book a Session
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 text-lg font-bold">Social Media</h3>
          <ul>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
