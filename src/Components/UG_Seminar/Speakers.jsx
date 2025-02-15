import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import ScrollAnimation from "react-animate-on-scroll";
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
    <>
      <Container 
        className={"no-repeat h-full relative bg-seminar-hero bg-cover bg-fixed"}
      >
        <div className="absolute inset-0 h-full w-full bg-black/95 backdrop-blur-md"></div>
        <ScrollAnimation
          animateIn="backInRight"
          animateOnce={true}
          duration={1.5}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="my-2 text-3xl font-bold text-yellow-600">
                Insightful{" "}
                <span className="font-extrabold text-primary-color brightness-200">
                  Voices!
                </span>
              </h1>
              <p className="my-2' text-xs font-semibold text-gray-400">
                You Will Get , Industry Expert's Knowledge
              </p>
              <Divider
                className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
              />
            </div>
            <div className="mx-auto flex max-w-screen-xl justify-center gap-4">
              {teamMemberData?.map((elem, index) => {
                return <TeamMember member={elem} key={index} />;
              })}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

const TeamMember = ({ member }) => {
  return (
    <div className="group flex w-[35rem] cursor-pointer flex-col overflow-hidden rounded-md bg-gradient-to-tr from-black/10 to-gray-500/10 border border-white transition-all duration-300 hover:scale-105 sm:flex-row">
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
                  src="./About/creative-removedBg.gif"
                  className="h-8 w-8"
                  alt=""
                  srcset=""
                />
                <p className="mt-1 text-sm font-semibold text-gray-200  mx-2">
                  {member.title}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {member.socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="group/icon rounded-full p-2 brightness-200 transition-colors hover:bg-gray-100"
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
          <div className="-mx-1 flex gap-2">
            <img
              src="./About/BookImg.gif"
              className="h-7 w-7"
              alt=""
              srcset=""
            />
            <p className="mx-1 my-2 line-clamp-2 italic text-xs font-semibold leading-relaxed text-gray-400 brightness-200">
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

export default Speakers;
