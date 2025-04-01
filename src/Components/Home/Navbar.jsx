import { Dropdown, Menu } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/services" },
    { title: "Webinars", link: "/webinar" },
    { title: "About Us", link: "/about" },
  ];

  const courseItems = [
    { key: 1, label: <Link to="/neet-ug">Neet UG</Link> },
    { key: 2, label: <Link to="/neet-pg">Neet PG</Link> },
    { key: 3, label: <Link to="/mbbs">MBBS</Link> },
    { key: 4, label: <Link to="/nta">NTA</Link> },
  ];

  const quickLinksItems = [
    { key: 1, label: <Link to="/ug-seminar">Neet UG</Link> },
    { key: 2, label: <Link to="/pg-seminar">Neet PG</Link> },
    { key: 3, label: <Link to="/news">News & Blog</Link> },
    { key: 4, label: <Link to="/gallery">Gallery</Link> },
    { key: 5, label: <Link to="/careers">Career</Link> },
    { key: 6, label: <Link to="/mbbs-abroad">MBBS Abroad</Link> },
    { key: 7, label: <Link to="/medical-expo">Medical Expo 2025</Link> },
    { key: 8, label: <Link to="/contact">Contact Us</Link> },
  ];

  return (
    <nav className="sticky top-0 z-[1000] p-4 px-8 shadow-lg backdrop-blur-sm bg-white lg:px-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="neet-advisor-logo-Photoroom.png" className="h-10 lg:h-[4rem]" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((elem, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive ? "font-bold text-indigo-900 hover:scale-105" : "text-gray-600 hover:scale-105"
                }
                to={elem.link}
              >
                {elem.title}
              </NavLink>
            ))}
            
            {/* Our Courses Dropdown */}
            <Dropdown overlay={<Menu items={courseItems} />} arrow placement="bottom">
              <a className="cursor-pointer text-gray-600">Our Courses</a>
            </Dropdown>
            
            {/* Quick Links Dropdown */}
            <Dropdown overlay={<Menu items={quickLinksItems} />} arrow placement="bottom">
              <a className="cursor-pointer text-gray-600">Quick Links</a>
            </Dropdown>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-16 z-50 w-full bg-white py-4 shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {links.map((elem, index) => (
              <NavLink
                key={index}
                className={({ isActive }) => (isActive ? "font-bold text-indigo-900" : "text-gray-600")}
                to={elem.link}
                onClick={() => setIsOpen(false)}
              >
                {elem.title}
              </NavLink>
            ))}
            {courseItems.map((item) => (
              <Link
                key={item.key}
                to={item.label.props.to}
                className="text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label.props.children}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
