import React from "react";
import Container from "../Helper/Container";
import {
  FaDollarSign,
  FaRegClock,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      title: "Competitive Salary",
      description:
        "We offer a salary that reflects your skills and experience.",
      icon: <FaDollarSign />,
    },
    {
      title: "Flexible Work Arrangements",
      description: "Enjoy the freedom of remote work and flexible hours.",
      icon: <FaRegClock />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs.",
      icon: <FaHeartbeat />,
    },
    {
      title: "Professional Development",
      description:
        "Access to workshops, training, and resources to enhance your skills.",
      icon: <FaChalkboardTeacher />,
    },
  ];
  return (
    <Container className={"relative"}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/50 via-gray-700 to-black/90"></div>
      <div className="relative  flex justify-evenly">
        <div className="grid grid-cols-2 gap-2">
          {benefits?.map((elem, index) => {
            return (
              <div className="m-1 flex w-64 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-b-2 border-l-2 border-white p-5 transition-all duration-300 hover:scale-110">
                <div className="py-2 text-3xl brightness-150 text-primary-color">
                  {" "}
                  {elem?.icon}{" "}
                </div>
                <h2 className="text-centery text-sm font-semibold text-gray-200">
                  {elem?.title}
                </h2>
                <p className="py-2 text-xs font-normal text-gray-300">
                  {elem?.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="max-w-screen-sm">
          <h1 className="text-3xl brightness-200 font-semibold text-primary-color">
            Your Life At{" "}
            <span className="font-bold text-yellow-600 brightness-50 ">Neet Advisor</span>
          </h1>
          <p className="my-4 text-justify text-xs text-gray-200 font-semibold">
            At Neet Advisor, life is vibrant, collaborative, and purpose-driven.
            Our team is composed of passionate individuals who share a common
            goal: to empower aspiring medical students to achieve their dreams.
          </p>
          <p className="my-4 text-justify text-xs text-gray-200 font-semibold">
            Join us at Neet Advisor, where your contributions make a real
            difference, and every day is an opportunity to learn, grow, and
            inspire.
          </p>
          <p className="my-4 text-justify text-xs text-gray-200 font-semibold">
            We foster a culture of innovation and inclusivity, where every voice
            is heard and valued. Our open and flexible work environment
            encourages creativity and collaboration, allowing team members to
            thrive both personally and professionally.
          </p>
          <p className="my-4 text-justify text-xs text-gray-200 font-semibold">
            Regular team-building activities, workshops, and social events
            create a strong sense of community, making every day at Neet Advisor
            not just about work, but about building lasting relationships. We
            believe in work-life balance, offering flexible hours and remote
            work options to ensure our employees can excel in their roles while
            enjoying their personal lives.
          </p>
          <button className="rounded-l-full rounded-r-full bg-yellow-600  p-2 text-xs font-extrabold text-white">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Benefits;
