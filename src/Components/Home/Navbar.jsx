import { Dropdown, Menu } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Webinars",
      link: "/webinar",
    },
    // {
    //     title: "Gallery",
    //     link: "/gallery"
    // },
    {
      title: "About Us",
      link: "/about",
    },
  ];

  const items = [
    {
      key: 1,
      label: <Link to={"/pg-seminar"}>PG Seminar</Link>,
    },
    {
      key: 2,
      label: <Link to={"/ug-seminar"}>UG Seminar</Link>,
    },
    {
      key: 3,
      label: <Link to={"/news"}>News & Blog</Link>,
    },
    {
      key: 4,
      label: <Link to={"/gallery"}>Gallery</Link>,
    },
    {
      key: 5,
      label: <Link to={"/careers"}>Career</Link>,
    },
    {
      key: 6,
      label: <Link to={"/mbbs-abroad"}>MBBS Abroad</Link>,
    },
    {
      key: 7,
      label: <Link to={"/medical-expo"}>Medical Expo 2025</Link>,
    },
    {
      key: 8,
      label: <Link to={"/contact"}>Contact Us</Link>,
    },
  ];

  const menu = (
    <Menu
      className={`${window.location.pathname.includes("medical-expo") ? "bg-gradient-to-br from-black to-black/85" : "bg-white"}`}
    >
      {items.map((item) => (
        <Menu.Item
          key={item.key}
          className={`z-[999] ${window.location.pathname.includes("medical-expo") ? "!text-gray-200" : "bg-white"}`}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <nav
      className={` ${window.location.pathname.includes("medical-expo") || window.location.pathname.includes("pg-seminar") ? "bg-gradient-to-br from-black/80 via-gray-900 to-gray-900/80" : window.location.pathname.includes("mbbs-abroad") ? "bg-gradient-to-tr from-black/80 to-black/70" : window.location.pathname.includes("ug-seminar") ? "bg-black/95" : window.location.pathname.includes("careers") ? "bg-gradient-to-r from-black/50 via-gray-700 to-black/90" : window.location.pathname.includes("gallery") ? "bg-gradient-to-tr from-black/15   to-gray-900/50" : "bg-white"} sticky top-0 z-[1000] p-4 px-20 shadow-lg backdrop-blur-sm`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {!window?.location?.pathname?.includes("medical-expo") && (
            <img
              src="neet-advisor-logo-Photoroom.png"
              className="h-[4rem]"
              alt=""
              srcset=""
            />
          )}
          {/* <span className="font-bold text-xl text-gray-800 ml-2">NEET Advisor</span> */}
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {links?.map((elem, index) => {
              return (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-indigo-900 transition-all hover:scale-105 hover:font-bold"
                      : `transition-all hover:scale-105 hover:font-bold ${window.location.pathname.includes("medical-expo") || window.location.pathname.includes("mbbs-abroad") || window.location.pathname.includes("careers") || window.location.pathname.includes("ug-seminar") || window.location.pathname.includes("pg-seminar") || window.location.pathname.includes("gallery") ? "text-white" : "text-gray-600"}`
                  }
                  to={elem?.link}
                >
                  {elem?.title}{" "}
                </NavLink>
              );
            })}
            <Dropdown
              className={`cursor-pointer ${window.location.pathname.includes("medical-expo") || window.location.pathname.includes("gallery") || window.location.pathname.includes("mbbs-abroad") || window.location.pathname.includes("careers") || window.location.pathname.includes("ug-seminar") || window.location.pathname.includes("pg-seminar") ? "text-white" : "text-gray-600"}`}
              overlay={menu}
              arrow
              placement="bottom"
            >
              <a onClick={(e) => e.preventDefault()}>More</a>
            </Dropdown>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
    </nav>
  );
}

export default Navbar;
