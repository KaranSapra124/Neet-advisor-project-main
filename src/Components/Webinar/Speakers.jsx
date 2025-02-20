import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const SpeakerCard = ({ member }) => {
  return (
    <div className="group flex lg:w-[35rem] w-full cursor-pointer  flex-row  overflow-hidden rounded-md border border-b-2 border-l-2 border-gray-300 border-b-yellow-600 border-l-yellow-600 bg-gradient-to-tr from-white to-gray-500/10 shadow-md shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="mx-5 my-auto lg:h-32 lg:w-32 w-16 rounded-full shadow-md shadow-yellow-600 transition duration-500"
      />
      <div className="flex max-w-screen-sm flex-col justify-between p-2">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="lg:text-lg text-[0.6rem] font-bold text-primary-color transition-all duration-300 group-hover:font-extrabold">
                {member.name}
              </h3>
              <Divider className="my-1 h-0.5 lg:w-16 w-8 rounded-full bg-yellow-600" />
              <div className="-mx-1 flex items-center">
                <img
                  src="./Webinar/creative-removedBg.gif"
                  className="lg:h-8 lg:w-8 w-6 h-6 "
                  alt=""
                  srcset=""
                />
                <p className="mt-1 mx-1 lg:text-sm text-[0.6rem] font-semibold text-gray-800">
                  {member.title}
                </p>
              </div>
            </div>
            <div className="flex  lg:gap-3 gap-1">
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
              className="lg:h-8 lg:w-8 w-6 h-6 "
              alt=""
              srcset=""
            />
            <p className="lg:mx-2 lg:my-2 mx-0.5 my-0.5 italic line-clamp-2 lg:text-xs text-[0.6rem] font-semibold leading-relaxed text-gray-800">
              "{member.bio}"
            </p>
          </div>
        </div>
        <div className="my-2 flex flex-wrap    lg:gap-2 gap-1">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="rounded-full w-fit border border-primary-color lg:px-3 lg:py-1 px-0.5 py-0.5 lg:text-xs text-[0.46rem] font-semibold text-primary-color"
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
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
    <Container>
      <ScrollAnimation animateIn="backInLeft" animateOnce={true} duration={1.5}>
        <div className="mb-4 text-center">
          <h2 className="lg:mb-2 mb-1 lg:text-3xl text-sm font-bold text-yellow-600">
            Our <span className="font-extrabold text-primary-color">Speakers</span> Who Will Guide You
          </h2>
          <p className="mx-auto line-clamp-2 lg:max-w-lg lg:my-4 my-2 lg:text-xs text-[0.6rem] font-semibold text-gray-800">
            Learn from industry experts who have helped thousands of students
            achieve their dreams of becoming medical professionals.
          </p>
          <Divider
            className={"mx-auto lg:my-4  lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-yellow-600"}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {teamMemberData.map((member, index) => (
            <SpeakerCard key={index} member={member} />
          ))}
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default Speakers;
