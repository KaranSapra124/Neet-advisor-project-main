import React from "react";
import Container from "../Helper/Container";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const OurPanelists = () => {
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
    <Container className="bg-gradient-to-br from-black to-black/85 py-16">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1.5}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="my-4 text-center">
            <h1 className="mb-2 text-lg font-normal text-white lg:text-3xl">
              Our{" "}
              <span className="font-extrabold text-yellow-600">Qualified</span>{" "}
              Expo{" "}
              <span className="font-extrabold text-yellow-600">Panelist</span>
            </h1>
            <p className="mx-auto text-[0.5rem] font-semibold text-gray-200 lg:my-4 lg:max-w-md lg:text-xs">
              Learn from doctors, professors, and alumni of India's leading
              medical colleges. Carve your path in competitive medical
              landscape.
            </p>
            <Divider className="mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4" />
          </div>

          <div className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-8">
            {teamMemberData.map((member, index) => (
              <SpeakerCard key={index} member={member} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

const SpeakerCard = ({ member }) => {
  return (
    <div className="group flex w-full cursor-pointer flex-row overflow-hidden rounded-md border border-gray-300 bg-black/95 shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row lg:w-[35rem] lg:shadow-md">
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
                  <p className="mx-1 mt-1 text-[0.6rem] font-semibold text-gray-400 lg:text-sm">
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
              <p className="mx-0.5 my-0.5 line-clamp-2 text-[0.6rem] font-semibold italic leading-relaxed text-gray-400 lg:mx-2 lg:my-2 lg:text-xs">
                "{member.bio}"
              </p>
            </div>
          </div>
        </div>
        <div className="my-2 flex justify-center flex-row lg:gap-2 gap-1">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="rounded-full w-fit bg-gray-200 lg:px-3 px-0.5 py-1 text-[0.5rem] font-semibold  lg:font-semibold text-primary-color lg:text-sm"
            >
              # {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPanelists;
