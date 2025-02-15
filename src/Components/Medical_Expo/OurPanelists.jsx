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
            <h1 className="mb-2 text-3xl font-normal text-white">
              Expo{" "}
              <span className="font-extrabold text-yellow-600">Panelists</span>{" "}
              Who Will{" "}
              <span className="font-extrabold text-yellow-600">Guide You!</span>
            </h1>
            <p className="mx-auto max-w-md text-xs font-semibold my-4 text-gray-200 md:text-xs">
              Learn from doctors, professors, and alumni of India's leading
              medical colleges. Carve your path in competitive medical
              landscape.
            </p>
            <Divider className="mx-auto w-12 my-4 h-0.5 bg-yellow-600 rounded-full" />
          </div>

          <div className="flex justify-center gap-8">
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
    <div className="group flex w-[35rem] cursor-pointer flex-col overflow-hidden rounded-md border border-b-2 border-l-2 border-gray-300 bg-none transition-all duration-300 hover:scale-105 sm:flex-row">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="mx-5 my-auto h-32 w-32 rounded-full shadow-md shadow-white transition duration-500"
      />
      <div className="flex max-w-screen-sm flex-col justify-between p-2">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-primary-color brightness-200 transition-all duration-300 group-hover:font-extrabold">
                {member.name}
              </h3>
              <Divider className="my-2 h-0.5 w-16 rounded-full bg-yellow-600" />
              <div className="-mx-1 flex items-center">
                <img
                  src="./Webinar/creative-removedBg.gif"
                  className="h-8 mx-1 w-8"
                  alt=""
                  srcset=""
                />
                <p className="mt-1 text-sm font-semibold text-gray-200">
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
                      "w-5 h-5 text-gray-200 group-hover/icon:text-primary-color transition-all dration-300",
                  })}
                </a>
              ))}
            </div>
          </div>
          <div className="-mx-1 flex">
            <img
              src="./Webinar/BookImg.gif"
              className="h-7 mx-1 w-7"
              alt=""
              srcset=""
            />
            <p className="mx-1 my-2 line-clamp-2  text-xs font-semibold italic leading-relaxed text-gray-200">
              "{member.bio}"
            </p>
          </div>
        </div>
        <div className="my-2 flex flex-wrap gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-primary-color"
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
