import React, { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Helper/Container";
const Gems = () => {
  const teamMemberData = [
    {
      name: "Vipin Bansal",
      title: "Founder & CEO",
      imageUrl: "Vipin-Bansal-square.jpg",
      socialLinks: [
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaTwitter /> },
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaLinkedin /> },
      ],
    },
    {
      name: "Vivek Singh",
      title: "Co-Founder",
      imageUrl: "vivek-singh-square.jpg",
      socialLinks: [
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaTwitter /> },
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaLinkedin /> },
      ],
    },
  ];
  return (
    <>
      <Container className={" bg-gray-100/50"}>
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-primary-color text-4xl font-bold text-center">
            Gems Of{" "}
            <span className="uppercase text-yellow-500 font-extrabold">
              neet advisor
            </span>
          </h1>
          <p className="text-gray-700 font-semibold py-2 text-xs text-center">
            Vipin Bansal and Vivek Singh , two persons who dedicated their lives
            to transforming <strong>NEET</strong> counseling, inspiring
            countless students to achieve their dreams with unwavering support
            and expertise.
          </p>
          <div className="flex flex-wrap justify-evenly items-center">
            {teamMemberData?.map((elem, index) => {
              return (
                <TeamMember
                  key={index}
                  imageUrl={elem?.imageUrl}
                  name={elem?.name}
                  socialLinks={elem?.socialLinks}
                  title={elem?.title}
                />
              );
            })}
            {/* Add more TeamMember components here if needed */}
          </div>
        </div>
      </Container>
    </>
  );
};

const TeamMember = ({ name, title, imageUrl, socialLinks }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="team-member-container  cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="our-team rounded bg-gray-100/50 p-12">
        {/* Picture Section */}
        <div className="picture-container">
          <div
            className={`picture-overlay ${isHovered ? "hovered" : ""}`}
          ></div>
          <div className="picture-background"></div>
          <img
            className={`team-image ${isHovered ? "image-hovered" : ""}`}
            src={`${imageUrl}`}
            alt={name}
          />
        </div>

        {/* Team Content */}
        <div className="team-content">
          <h3 className="name text-primary-color font-bold">{name}</h3>
          <h4 className="title font-semibold text-gray-700">{title}</h4>
        </div>

        {/* Social Links */}
        <ul
          className={`social-links ${isHovered ? "social-links-visible" : ""}`}
        >
          {socialLinks.map((link, index) => (
            <li key={index} className="social-item">
              <a href={link.href} className="social-link" aria-hidden="true">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gems;
