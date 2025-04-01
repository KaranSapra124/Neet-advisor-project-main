import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaNewspaper,
  FaImage,
  FaRegClipboard,
  FaBriefcase,
  FaUserGraduate,
  FaGlobe,
  FaCalendar,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

const QuickLinks = () => {
  const quickLinks = (
    <Menu
      mode="vertical"
      className=" bg-white lg:w-60 overflow-y-auto text-primary-color "
    >
      <h2 className="bg-primary-color text-center p-1.5 font-bold text-white lg:text-2xl">
        Quick Links
      </h2>

      <Menu.Item
        key="1"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaBook className="mr-2 inline-block" />
        <Link to="/ug-seminar">Neet UG</Link>
      </Menu.Item>

      <Menu.Item
        key="2"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaUserGraduate className="mr-2 inline-block" />
        <Link to="/pg-seminar">Neet PG</Link>
      </Menu.Item>

      <Menu.Item
        key="3"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaRegClipboard className="mr-2 inline-block" />
        <Link to="/">Fee</Link>
      </Menu.Item>

      <Menu.Item
        key="4"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaNewspaper className="mr-2 inline-block" />
        <Link to="/news">News & Blog</Link>
      </Menu.Item>

      <Menu.Item
        key="5"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaImage className="mr-2 inline-block" />
        <Link to="/gallery">Gallery</Link>
      </Menu.Item>

      <Menu.Item
        key="6"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaBriefcase className="mr-2 inline-block" />
        <Link to="/careers">Career</Link>
      </Menu.Item>

      <Menu.Item
        key="7"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaGlobe className="mr-2 inline-block" />
        <Link to="/mbbs-abroad">MBBS Abroad</Link>
      </Menu.Item>

      <Menu.Item
        key="8"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaCalendar className="mr-2 inline-block" />
        <Link to="/medical-expo">Medical Expo 2025</Link>
      </Menu.Item>

      <Menu.Item
        key="9"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaPhoneAlt className="mr-2 inline-block" />
        <Link to="/contact">Contact Us</Link>
      </Menu.Item>

      <Menu.Item
        key="10"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaDownload className="mr-2 inline-block" />
        <Link to="/mbbs-abroad">Enroll Now</Link>
      </Menu.Item>

      <Menu.Item
        key="11"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaDownload className="mr-2 inline-block" />
        <Link to="/mbbs-abroad">About Neet</Link>
      </Menu.Item>

      <Menu.Item
        key="12"
        className="transition-all hover:bg-primary-color hover:text-white"
      >
        <FaDownload className="mr-2 inline-block" />
        <Link to="/mbbs-abroad">Downloads</Link>
      </Menu.Item>
    </Menu>
  );
  return <div className="flex  border  h-96 justify-center">{quickLinks}</div>;
};

export default QuickLinks;
