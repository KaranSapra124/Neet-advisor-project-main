import React from "react";
import Container from "../Helper/Container";
import {
  FaDollarSign,
  FaRegClock,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const Benefits = () => {
  const benefits = [
    {
      title: "Competitive Salary",
      description:
        "We offer a salary that reflects your skills and experience.",
      icon: "./Career/money (1).gif",
    },
    {
      title: "Flexible Work Arrangements",
      description: "Enjoy the freedom of remote work and flexible hours.",
      icon:"./Career/time.gif",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs.",
      icon: "./Career/health.gif",
    },
    {
      title: "Professional Development",
      description:
        "Access to workshops, training, and resources to enhance your skills.",
      icon: "./Career/employee.gif",
    },
  ];
  return (
    <Container className={"relative"}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/50 via-gray-700 to-black/90"></div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5}>
        <div className="relative flex justify-evenly">
          <div className="grid grid-cols-2 gap-3">
            {benefits?.map((elem, index) => {
              return (
                <div className="flex w-60 cursor-pointer flex-col items-center justify-center rounded-lg border-b-2 border-l-2 border-white p-4 transition-all duration-300 hover:scale-110">
                 <img src={elem?.icon} className="h-10 w-10 border border-white rounded-full p-1 shadow-sm shadow-white my-2" alt="" srcset="" />
                  <h2 className="text-centery text-sm font-bold text-white my-1">
                    {elem?.title}
                  </h2>
                  <Divider className={"my-2 h-0.5 w-10 rounded-full bg-yellow-600"} />

                  <p className="py-2 text-xs font-semibold text-gray-200">
                    {elem?.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="max-w-screen-sm">
            <h1 className="text-3xl font-bold text-yellow-600 ">
              Your Life At{" "}
              <span className="font-extrabold text-primary-color  brightness-[300%]">
                Neet Advisor
              </span>
            </h1>
            <Divider className={"my-4 h-1 w-12 rounded-full bg-yellow-600"} />
            <p className="my-4 text-justify text-xs font-semibold text-gray-200">
              At Neet Advisor, life is vibrant, collaborative, and
              purpose-driven. Our team is composed of passionate individuals who
              share a common goal: to empower aspiring medical students to
              achieve their dreams.
            </p>
            <p className="my-4 text-justify text-xs font-semibold text-gray-200">
              Join us at Neet Advisor, where your contributions make a real
              difference, and every day is an opportunity to learn, grow, and
              inspire.
            </p>
            <p className="my-4 text-justify text-xs font-semibold text-gray-200">
              We foster a culture of innovation and inclusivity, where every
              voice is heard and valued. Our open and flexible work environment
              encourages creativity and collaboration, allowing team members to
              thrive both personally and professionally.
            </p>
            <p className="my-4 text-justify text-xs font-semibold text-gray-200">
              Regular team-building activities, workshops, and social events
              create a strong sense of community, making every day at Neet
              Advisor not just about work, but about building lasting
              relationships. We believe in work-life balance, offering flexible
              hours and remote work options to ensure our employees can excel in
              their roles while enjoying their personal lives.
            </p>
            <button className="rounded-l-full rounded-r-full bg-yellow-600 hover:bg-yellow-700 transition-all p-2 text-xs font-extrabold text-white">
              Learn More
            </button>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default Benefits;
