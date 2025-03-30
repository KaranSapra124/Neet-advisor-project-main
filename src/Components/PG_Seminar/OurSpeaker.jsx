import React from "react";
import Container from "../Helper/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Helper/Divider";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const OurSpeaker = () => {
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
    <Container
      className={"no-repeat relative bg-webinar-hero bg-cover bg-fixed"}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-100/90 backdrop-blur-sm"></div>
      <ScrollAnimation
        animateIn="backInRight"
        animateOnce={true}
        duration={1.5}
      >
        <div className="relative">
          <div className="text-center">
            <h1 className="my-2 text-sm font-bold text-yellow-600 lg:text-3xl">
              Insightful{" "}
              <span className="font-extrabold text-primary-color ">
                Voices!
              </span>
            </h1>
            <p className="my-2 text-[0.5rem] font-semibold text-gray-800 lg:text-xs">
              You Will Get , Industry Expert's Knowledge
            </p>
            <Divider
              className={
                "mx-auto my-2.5 h-0.5 w-12 rounded-full bg-primary-color lg:my-4 lg:h-1 lg:w-20"
              }
            />
          </div>
          <div className="mx-auto flex flex-col justify-evenly gap-2 lg:max-w-screen-xl lg:flex-row lg:gap-0">
            {teamMemberData?.map((elem, index) => {
              return <TeamMember member={elem} key={index} />;
            })}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};
// const TeamMember = ({ member }) => {
//   return (
//     <div className="group flex w-[35rem] cursor-pointer flex-col overflow-hidden rounded-md bg-gradient-to-tr from-black/50 via-gray-500/10 to-gray-900/40 shadow shadow-white transition-all duration-300 hover:scale-105 sm:flex-row">
//       <img
//         src={member.imageUrl}
//         alt={member.name}
//         className="mx-5 my-auto h-32 w-32 rounded-full shadow-md shadow-white transition duration-500"
//       />
//       <div className="flex max-w-screen-sm flex-col justify-between p-2">
//         <div>
//           <div className="flex items-start justify-between">
//             <div>
//               <h3 className="text-lg font-bold text-primary-color brightness-[250%] transition-all duration-300 group-hover:font-extrabold">
//                 {member.name}
//               </h3>
//               <Divider className="my-1 h-0.5 w-16 rounded-full bg-yellow-600" />
//               <div className="-mx-1 flex items-center">
//                 <img
//                   src="./About/creative-removedBg.gif"
//                   className="h-8 w-8"
//                   alt=""
//                   srcset=""
//                 />
//                 <p className="mt-1 text-sm font-semibold text-gray-400 brightness-150">
//                   {member.title}
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               {member.socialLinks.map((link, i) => (
//                 <a
//                   key={i}
//                   href={link.href}
//                   className="group/icon rounded-full p-2 brightness-200 transition-colors hover:bg-gray-100"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {React.cloneElement(link.icon, {
//                     className:
//                       "w-5 h-5 text-gray-400 group-hover/icon:text-primary-color transition-all dration-300",
//                   })}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="-mx-1 flex">
//             <img
//               src="./About/BookImg.gif"
//               className="h-7 w-7"
//               alt=""
//               srcset=""
//             />
//             <p className="mx-1 my-2 line-clamp-2 text-xs font-semibold italic leading-relaxed text-gray-400 brightness-200">
//               "{member.bio}"
//             </p>
//           </div>
//         </div>
//         <div className="my-2 flex flex-wrap gap-2">
//           {member.expertise.map((skill, index) => (
//             <span
//               key={index}
//               className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-primary-color"
//             >
//               # {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
const TeamMember = ({ member }) => {
  return (
    <div className="group flex w-full cursor-pointer flex-row overflow-hidden rounded-md border   border-black/20  bg-gray-100/40 lg:shadow-md shadow-yellow-200 transition-all duration-300 hover:scale-105 sm:flex-row lg:w-[35rem]">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="mx-5 my-auto w-16 rounded-full shadow-md shadow-yellow-600 transition duration-500 lg:h-32 lg:w-32"
      />
      <div className="flex max-w-screen-sm flex-col justify-between p-2">
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
        <div className="my-2 flex flex-wrap gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-200/40 border border-black/20 px-3 py-1 text-[0.4rem] text-xs font-semibold text-primary-color lg:text-sm"
            >
              # {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSpeaker;
