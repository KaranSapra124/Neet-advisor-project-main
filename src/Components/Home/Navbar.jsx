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
    { title: "About Neet", link: "/about" },
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

  const quickLinks = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/ug-seminar">Neet UG</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/pg-seminar">Neet PG</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/">Fee Structure</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/news">News & Blog</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/gallery">Gallery</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/careers">Career</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/mbbs-abroad">MBBS Abroad</Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/medical-expo">Medical Expo 2025</Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link to="/contact">Contact Us</Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link to="/mbbs-abroad">Enroll Now</Link>
      </Menu.Item>
      <Menu.Item key="10">
        <Link to="/mbbs-abroad">About Neet</Link>
      </Menu.Item>
      <Menu.Item key="11">
        <Link to="/mbbs-abroad">Downloads</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="sticky top-0 z-[1000] bg-white p-4 px-8 shadow-lg backdrop-blur-sm lg:px-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="neet-advisor-logo-Photoroom.png"
            className="h-10 lg:h-[4rem]"
            alt="Logo"
          />
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((elem, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-indigo-900"
                    : "text-gray-600 hover:scale-105"
                }
                to={elem.link}
              >
                {elem.title}
              </NavLink>
            ))}

            <Dropdown overlay={coursesMenu} arrow>
              <a className="cursor-pointer text-gray-600">Our Courses</a>
            </Dropdown>

            <Dropdown overlay={quickLinks} arrow>
              <a className="cursor-pointer text-gray-600">Quick Links</a>
            </Dropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
