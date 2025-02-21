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

  const items = [
    { key: 1, label: <Link to={"/pg-seminar"}>PG Seminar</Link> },
    { key: 2, label: <Link to={"/ug-seminar"}>UG Seminar</Link> },
    { key: 3, label: <Link to={"/news"}>News & Blog</Link> },
    { key: 4, label: <Link to={"/gallery"}>Gallery</Link> },
    { key: 5, label: <Link to={"/careers"}>Career</Link> },
    { key: 6, label: <Link to={"/mbbs-abroad"}>MBBS Abroad</Link> },
    { key: 7, label: <Link to={"/medical-expo"}>Medical Expo 2025</Link> },
    { key: 8, label: <Link to={"/contact"}>Contact Us</Link> },
  ];

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <nav
      className={`sticky top-0 z-[1000] p-4 px-8 shadow-lg backdrop-blur-sm lg:px-20 ${window.location.pathname.includes("ug-seminar") || window.location.pathname.includes("pg-seminar") ||  window.location.pathname.includes("careers") ||  window.location.pathname.includes("mbbs-abroad") || window.location.pathname.includes("medical-expo") ? "bg-black/85" : "bg-white"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="neet-advisor-logo-Photoroom.png"
            className="h-10 lg:h-[4rem]"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((elem, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-indigo-900 transition-all hover:scale-105 hover:font-bold"
                    : `${window.location.pathname.includes("ug-seminar") ||  window.location.pathname.includes("mbbs-abroad") ||  window.location.pathname.includes("medical-expo") || window.location.pathname.includes("pg-seminar") ||  window.location.pathname.includes("careers") ? "text-white" : "text-gray-600"} transition-all hover:scale-105 hover:font-bold`
                }
                to={elem.link}
              >
                {elem.title}
              </NavLink>
            ))}
            <Dropdown overlay={menu} arrow placement="bottom">
              <a
                className={`cursor-pointer ${window.location.pathname.includes("ug-seminar") ||  window.location.pathname.includes("mbbs-abroad") ||  window.location.pathname.includes("medical-expo") || window.location.pathname.includes("pg-seminar") ||  window.location.pathname.includes("careers") ? "text-white" : "text-gray-600"}`}
              >
                More
              </a>
            </Dropdown>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-indigo-900"
                    : "text-gray-600 transition-all hover:scale-105"
                }
                to={elem.link}
                onClick={() => setIsOpen(false)}
              >
                {elem.title}
              </NavLink>
            ))}
            {items.map((item) => (
              <Link
                key={item.key}
                to={item.label.props.to}
                className="text-gray-600 transition-all hover:scale-105"
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
