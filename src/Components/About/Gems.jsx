import React, { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";
const Gems = () => {
  const teamMemberData = [
    {
      name: "Vipin Bansal",
      title: "Founder & CEO",
      imageUrl: "Vipin-Bansal-square.jpg",
      specialty: "NEET Expert",
      bio: "Leading expert in NEET counseling with over 10 years of experience guiding students to top medical colleges across India.",
      expertise: ["College Admissions", "NEET Counseling", "Career Guidance"],
      socialLinks: [
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaTwitter /> },
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaLinkedin /> },
      ],
    },
    {
      name: "Vivek Singh",
      title: "Co-Founder",
      imageUrl: "vivek-singh-square.jpg",
      specialty: "Admissions Strategist",
      bio: "Specialized in helping students navigate the complex medical college admission process with proven success strategies.",
      expertise: [
        "Medical Education",
        "Strategic Planning",
        "Student Mentoring",
      ],
      socialLinks: [
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaTwitter /> },
        { href: "https://codepen.io/collection/XdWJOQ/", icon: <FaLinkedin /> },
      ],
    },
  ];
  return (
    <>
      <Container className={"relative bg-webinar-hero"}>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-100 via-gray-200 to-white opacity-90"></div>

        <ScrollAnimation animateIn="backInUp" duration={1.5}>
          <div className="relative mx-auto max-w-screen-xl">
            <h1 className="text-center text-3xl font-bold text-yellow-600">
              Gems Of{" "}
              <span className="font-extrabold uppercase text-primary-color">
                neet advisor
              </span>
            </h1>
            <p className="mx-auto max-w-sm py-1 text-center text-xs font-semibold text-gray-700">
              Vipin Bansal and Vivek Singh , two persons who dedicated their
              lives to transforming <strong>NEET</strong> counseling, inspiring
              countless students to achieve their dreams with unwavering support
              and expertise.
            </p>
            <Divider className="mx-auto my-3.5 h-1 w-16 rounded-full bg-yellow-600" />

            <div className="flex items-center justify-evenly">
              {teamMemberData?.map((member, index) => {
                return <TeamMember key={index} member={member} />;
              })}
              {/* Add more TeamMember components here if needed */}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

const TeamMember = ({ member }) => {
  return (
    <div className="group flex w-[35rem] cursor-pointer flex-col overflow-hidden rounded-md border border-b-2 border-l-2 border-gray-300 border-b-yellow-600 border-l-yellow-600 bg-gradient-to-tr from-white to-gray-500/10 shadow-md shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="mx-5 my-auto h-32 w-32 rounded-full shadow-md shadow-yellow-600 transition duration-500"
      />
      <div className="flex max-w-screen-sm flex-col justify-between p-2">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-primary-color transition-all duration-300 group-hover:font-extrabold">
                {member.name}
              </h3>
              <Divider className="my-0.5 h-0.5 w-16 rounded-full bg-yellow-600" />
              <div className="-mx-1 flex items-center">
                <img
                  src="./About/creative-removedBg.gif"
                  className="h-8 w-8"
                  alt=""
                  srcset=""
                />
                <p className="mt-1 text-sm font-semibold text-gray-600">
                  {member.title}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {member.socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="group/icon rounded-full p-2 transition-colors hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.cloneElement(link.icon, {
                    className:
                      "w-5 h-5 text-gray-400 group-hover/icon:text-primary-color transition-all dration-300",
                  })}
                </a>
              ))}
            </div>
          </div>
          <div className="-mx-1 flex">
            <img
              src="./About/BookImg.gif"
              className="h-7 w-7"
              alt=""
              srcset=""
            />
            <p className="mx-1 my-2 line-clamp-2 text-xs font-medium leading-relaxed text-gray-700">
              {member.bio}
            </p>
          </div>
        </div>
        <div className="my-2 flex flex-wrap gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gems;
