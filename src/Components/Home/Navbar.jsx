import { Dropdown, Menu } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaDownload,
  FaRegEdit,
  FaQuestionCircle,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa"; // Import icons

import QuickLinks from "../Helper/QuickLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/services" },
    { title: "Webinars", link: "/webinar" },
    { title: "About Us", link: "/about" },
    // { title: "About Neet", link: "/about-neet" },
  ];
  const priorityLinks = [
    { title: "Webinars", link: "/", icon: <FaCalendarAlt /> },
    { title: "Fee Structure", link: "/services", icon: <FaFileAlt /> },
    { title: "Downloads", link: "/webinar", icon: <FaDownload /> },
    { title: "Enroll Now", link: "/about", icon: <FaRegEdit /> },
    { title: "Enquiry", link: "/about", icon: <FaQuestionCircle /> },
  ];

  const coursesMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/ug-seminar">Neet UG</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/pg-seminar">Neet PG</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/nta">NTA</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/mbbs">MBBS</Link>
      </Menu.Item>
    </Menu>
  );

  // const quickLinks = (
  //   <Menu
  //     mode="vertical"
  //     className="overflow-y-auto bg-white text-primary-color"
  //   >
  //     <Menu.Item
  //       key="1"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaBook className="mr-2 inline-block" />
  //       <Link to="/ug-seminar">Neet UG</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="2"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaUserGraduate className="mr-2 inline-block" />
  //       <Link to="/pg-seminar">Neet PG</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="3"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaRegClipboard className="mr-2 inline-block" />
  //       <Link to="/">Fee</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="4"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaNewspaper className="mr-2 inline-block" />
  //       <Link to="/news">News & Blog</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="5"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaImage className="mr-2 inline-block" />
  //       <Link to="/gallery">Gallery</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="6"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaBriefcase className="mr-2 inline-block" />
  //       <Link to="/careers">Career</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="7"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaGlobe className="mr-2 inline-block" />
  //       <Link to="/mbbs-abroad">MBBS Abroad</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="8"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaCalendar className="mr-2 inline-block" />
  //       <Link to="/medical-expo">Medical Expo 2025</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="9"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaPhoneAlt className="mr-2 inline-block" />
  //       <Link to="/contact">Contact Us</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="10"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaDownload className="mr-2 inline-block" />
  //       <Link to="/mbbs-abroad">Enroll Now</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="11"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaDownload className="mr-2 inline-block" />
  //       <Link to="/mbbs-abroad">About Neet</Link>
  //     </Menu.Item>

  //     <Menu.Item
  //       key="12"
  //       className="transition-all hover:bg-primary-color hover:text-white"
  //     >
  //       <FaDownload className="mr-2 inline-block" />
  //       <Link to="/mbbs-abroad">Downloads</Link>
  //     </Menu.Item>
  //   </Menu>
  // );
  const aboutNeetMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/neet-ug">Neet UG</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/neet-pg">Neet PG</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="sticky top-0 z-[1000]">
        <nav className="sticky top-0 z-[1000] flex flex-col bg-white p-4 px-8 shadow-lg backdrop-blur-sm lg:px-20">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="neet-advisor-logo-Photoroom.png"
                className="h-10 lg:h-[4rem]"
                alt="Logo"
              />
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center space-x-5">
                {priorityLinks?.map((elem, index) => (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center border-b-2 border-indigo-900 px-4 py-2 font-bold text-indigo-900"
                        : "flex items-center px-4 py-2 text-gray-600 transition-all hover:scale-105 hover:text-indigo-900"
                    }
                    to={elem.link}
                  >
                    {/* Icon with margin */}
                    <span className="mr-2 text-xl">{elem?.icon}</span>
                    <span>{elem.title}</span>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="mx-auto w-full items-center bg-primary-color p-1 px-8 shadow-md sm:hidden md:flex lg:px-20">
          <ul className="mx-auto flex w-full items-center justify-start space-x-4">
            {links.map((elem, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 border-b-2 border-white p-0.5 font-semibold text-white"
                    : "mx-2 p-1 text-white transition-all hover:scale-105 hover:font-semibold"
                }
                to={elem.link}
              >
                {elem.title}
              </NavLink>
            ))}

            <Dropdown overlay={coursesMenu} arrow>
              <a className="cursor-pointer p-2 text-white transition-all hover:font-semibold">
                Our Courses
              </a>
            </Dropdown>

            <Dropdown overlay={aboutNeetMenu} arrow>
              <a className="cursor-pointer p-2 text-white transition-all hover:font-semibold">
                About Neet
              </a>
            </Dropdown>
          </ul>
          <div className="flex w-full justify-end items-center space-x-4">
          
            {/* Phone Icon */}
            <a
              href="tel:+917678126262"
              className="cursor-pointer rounded-full bg-white p-1.5 text-primary-color transition-all hover:scale-125 lg:text-2xl"
            >
              <FaPhoneAlt />
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/+917678126262"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-white p-1.5 text-green-500 transition-all hover:scale-125 lg:text-2xl"
            >
              <FaWhatsapp />
            </a>
            <QuickLinks/>

          </div>
        </div>
      </div>
      <Outlet />
      {/* <QuickLinks /> */}
    </>
  );
}

export default Navbar;
