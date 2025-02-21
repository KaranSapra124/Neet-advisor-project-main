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
          <div className="relative mx-auto lg:max-w-screen-xl">
            <h1 className="text-center font-bold text-yellow-600 lg:text-3xl">
              Gems Of{" "}
              <span className="font-extrabold uppercase text-primary-color">
                neet advisor
              </span>
            </h1>
            <p className="mx-auto my-2 text-center text-[0.5rem] font-semibold text-gray-800 lg:my-4 lg:max-w-sm lg:text-xs lg:leading-5">
              Vipin Bansal and Vivek Singh , two persons who dedicated their
              lives to transforming <strong>NEET</strong> counseling, inspiring
              countless students to achieve their dreams with unwavering support
              and expertise.
            </p>
            <Divider className="mx-auto my-2 h-0.5 w-16 rounded-full bg-yellow-600 lg:my-4 lg:h-1" />

            <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
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
    <div className="group flex w-full cursor-pointer flex-row overflow-hidden rounded-md border border-b-2 border-l-2 border-gray-300 border-b-yellow-600 border-l-yellow-600 bg-gradient-to-tr from-white to-gray-500/10 shadow-md shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row lg:w-[35rem]">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="mx-5 my-auto w-16 rounded-full shadow-md shadow-yellow-600 transition duration-500 lg:h-32 lg:w-32"
      />
      <div className="flex max-w-screen-sm flex-col justify-between p-2">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[0.6rem] font-bold text-primary-color transition-all duration-300 group-hover:font-extrabold lg:text-lg">
                {member.name}
              </h3>
              <Divider className="my-1 h-0.5 w-8 rounded-full bg-yellow-600 lg:w-16" />
              <div className="-mx-1 flex items-center">
                <img
                  src="./Webinar/creative-removedBg.gif"
                  className="h-6 w-6 lg:h-8 lg:w-8"
                  alt=""
                  srcset=""
                />
                <p className="mx-1 mt-1 text-[0.6rem] font-semibold text-gray-800 lg:text-sm">
                  {member.title}
                </p>
              </div>
            </div>
            <div className="flex gap-1 lg:gap-3">
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
                      "lg:w-5 lg:h-5 w-4 h-4 text-gray-400 group-hover/icon:text-primary-color transition-all dration-300",
                  })}
                </a>
              ))}
            </div>
          </div>
          <div className="-mx-1 flex">
            <img
              src="./Webinar/BookImg.gif"
              className="h-6 w-6 lg:h-8 lg:w-8"
              alt=""
              srcset=""
            />
            <p className="mx-0.5 my-0.5 line-clamp-2 text-[0.6rem] font-semibold italic leading-relaxed text-gray-800 lg:mx-2 lg:my-2 lg:text-xs">
              "{member.bio}"
            </p>
          </div>
        </div>
        <div className="my-2 flex flex-wrap gap-1 lg:gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="w-fit rounded-full border border-primary-color px-0.5 py-0.5 text-[0.46rem] font-semibold text-primary-color lg:px-3 lg:py-1 lg:text-xs"
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gems;
