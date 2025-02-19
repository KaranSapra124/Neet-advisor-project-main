import React from "react";

const Footer = () => {
  return (
    <footer
      className={`${window.location.pathname.includes("medical-expo") || window.location.pathname.includes("pg-seminar") ? "bg-gradient-to-tr from-black/80 via-gray-900 to-gray-900/80" : window.location.pathname.includes("mbbs-abroad") ? "bg-gradient-to-br from-black/80 to-black/70" : window.location.pathname.includes("gallery") ? "bg-gradient-to-tr from-black/15 to-gray-900/50" : window.location.pathname.includes("ug-seminar") ? "bg-black/95" : window.location.pathname.includes("careers") ? "bg-gradient-to-br from-black/50 via-gray-700 to-black/90" : "bg-primary-color"} p-10 text-white lg:p-20`}
    >
      <div className="mx-auto flex flex-col items-center md:flex-row lg:justify-between lg:p-0 ">
        <div className="mb-2 md:mb-0 lg:mb-4 ">
          <h3 className={`mb-2 text-sm font-bold text-white lg:text-lg`}>
            Stay Updated!
          </h3>
          <p className="text-xs lg:text-sm">
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
        <div className="flex w-full flex-row justify-between gap-2  lg:items-center lg:justify-around">
          <div className="my-5 md:mb-0 lg:my-4">
            <h3 className={`mb-2 text-sm font-bold text-white lg:text-lg`}>
              Company
            </h3>
            <ul>
              <li className="lg:text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  About us
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Contact us
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Careers
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Partnership
                </a>
              </li>
            </ul>
          </div>
          <div className="my-5 md:mb-0 lg:my-4">
            <h3 className={`mb-2 text-sm font-bold text-white lg:text-lg`}>Services</h3>
            <ul>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Attend Webinar
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
          <div className="my-5 md:mb-0 lg:my-4">
            <h3 className={`mb-2 text-sm font-bold text-white lg:text-lg`}>
              Social Media
            </h3>
            <ul>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Facebook
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Instagram
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  Twitter
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="text-xs hover:underline lg:text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
