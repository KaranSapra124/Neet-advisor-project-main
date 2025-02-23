import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const SpeakerCard = ({ member }) => {
  return (
    <div className="group flex w-full cursor-pointer flex-row overflow-hidden rounded-md border border-gray-500 bg-white shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row lg:w-[35rem] lg:shadow-md">
      <div>
        <div className="flex max-w-screen-sm flex-row justify-between p-2">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="mx-5 my-auto w-16 rounded-full shadow-md shadow-yellow-600 transition duration-500 lg:h-32 lg:w-32"
          />
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[0.6rem] font-bold text-primary-color brightness-[250%] transition-all duration-300 group-hover:font-extrabold lg:text-lg">
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
                  <p className="mx-1 mt-1 text-[0.6rem] font-semibold text-gray-900 lg:text-sm">
                    {member.title}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 lg:gap-3">
                {member.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="group/icon rounded-full p-2 transition-colors hover:bg-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.cloneElement(link.icon, {
                      className:
                        "lg:w-5 lg:h-5 w-4 h-4 text-gray-900 group-hover/icon:text-primary-color transition-all dration-300",
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
              <p className="mx-0.5 my-0.5 line-clamp-2 text-[0.6rem] font-semibold italic leading-relaxed text-gray-900 lg:mx-2 lg:my-2 lg:text-xs">
                "{member.bio}"
              </p>
            </div>
          </div>
        </div>
        <div className="my-2  flex flex-row justify-center gap-1 lg:my-4 lg:gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="w-fit rounded-full border border-gray-100  px-0.5 py-1 text-[0.5rem] font-semibold text-primary-color lg:px-3 lg:text-sm lg:font-semibold"
            >
              # {skill}
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
          <h2 className="mb-1 text-lg font-bold text-yellow-600 lg:mb-2 lg:text-3xl">
            Our{" "}
            <span className="font-extrabold text-primary-color">Speakers</span>{" "}
            Who Will Guide You
          </h2>
          <p className="mx-auto my-2 line-clamp-2 text-[0.6rem] font-semibold text-gray-800 lg:my-4 lg:max-w-lg lg:text-xs">
            Learn from industry experts who have helped thousands of students
            achieve their dreams of becoming medical professionals.
          </p>
          <Divider
            className={
              "mx-auto h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:h-1 lg:w-20"
            }
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
