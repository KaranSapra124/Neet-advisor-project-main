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
        className={
          "no-repeat relative h-full bg-seminar-hero bg-cover bg-fixed"
        }
      >
        <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-md"></div>
        <ScrollAnimation
          animateIn="backInRight"
          animateOnce={true}
          duration={1.5}
        >
          <div className="relative">
            <div className="text-center">
              <h1 className="my-2 text-sm font-bold text-yellow-600 lg:text-3xl">
                Insightful{" "}
                <span className="font-extrabold text-primary-color brightness-200">
                  Voices!
                </span>
              </h1>
              <p className="my-2 text-[0.5rem] font-semibold text-gray-800 lg:text-xs">
                You Will Get , Industry Expert's Knowledge
              </p>
              <Divider
                className={
                  "mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-2 lg:h-1 lg:w-20"
                }
              />
            </div>
            <div className="mx-auto flex flex-col justify-center gap-2 lg:max-w-screen-xl lg:flex-row lg:gap-4">
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
    <div className="group flex w-full cursor-pointer flex-row overflow-hidden rounded-md border border-gray-300 bg-100/40 shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row lg:w-[35rem] lg:shadow-md">
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
                <h3 className="text-[0.6rem] font-bold text-primary-color  transition-all duration-300 group-hover:font-extrabold lg:text-lg">
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
        </div>
        <div className="my-2 lg:my-4 flex flex-row justify-center gap-1 lg:gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="w-fit rounded-full border border-black/20 bg-gray-200 px-0.5 py-1 text-[0.5rem] font-semibold text-primary-color lg:px-3 lg:text-sm lg:font-semibold"
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
