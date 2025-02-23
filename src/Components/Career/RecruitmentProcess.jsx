import React from "react";
import Container from "../Helper/Container";
import {
  FaClipboardCheck,
  FaUser,
  FaRegPaperPlane,
  FaComments,
} from "react-icons/fa";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const RecruitmentProcess = () => {
  const recruitmentProcess = [
    {
      id: 1,
      title: "Application Submission",
      description:
        "Submit your application through our careers page. Ensure your resume and cover letter highlight your skills and experiences.",
      icon: "./Career/application-submission.gif",
    },
    {
      id: 2,
      title: "Initial Screening",
      description:
        "Our HR team will review your application to ensure you meet the basic qualifications for the role.",
      icon: "./Career/screening.gif",
    },
    {
      id: 3,
      title: "Interview Process",
      description:
        "If selected, you will be invited for an interview. This may include a phone interview followed by one or more in-person or virtual interviews.",
      icon: "./Career/job-interview.gif",
    },
    // {
    //   id: 4,
    //   title: "Assessment Task",
    //   description:
    //     "Depending on the position, you may be asked to complete an assessment task to demonstrate your skills and suitability for the role.",
    //   icon: <FaRegPaperPlane />,
    // },
    {
      id: 5,
      title: "Offer & Onboarding",
      description:
        "If you successfully pass all stages, you will receive a job offer. Once accepted, we will guide you through the onboarding process.",
      icon: "./Career/job-offer.gif",
    },
  ];
  return (
    <Container className={"relative"}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/50 via-gray-700 to-black/90"></div>

      <ScrollAnimation animateIn="backInLeft" animateOnce={true} duration={1.5}>
        <div className="relative mx-auto">
          <h1 className="text-center lg:text-3xl text-sm font-semibold text-yellow-600">
            Learn Our{" "}
            <span className="font-extrabold text-primary-color brightness-[300%]">
              {" "}
              Recruitment Process
            </span>
          </h1>
          <Divider className="mx-auto lg:my-4 my-2 lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-yellow-600" />
          <div className="my-4 flex flex-wrap justify-around">
            {recruitmentProcess?.map((elem, index) => {
              return (
                <div key={index} className="m-2 flex lg:w-64 cursor-pointer flex-col items-center justify-center rounded-md border-b-2 border-l-2 border-white p-4 shadow-2xl duration-300 hover:scale-105">
                  <img
                    src={elem?.icon}
                    className="lg:h-10 h-7 bg-white lg:w-10 w-7 rounded-full border border-white p-1 shadow-sm shadow-white"
                    alt=""
                    srcset=""
                  />
                  <h2 className="my-1.5 text-sm font-semibold text-gray-200">
                    {elem?.title}
                  </h2>
                  <Divider className="h-0.5 w-12 lg:my-3.5 my-1.5 bg-yellow-600" />
                  <p className="text-xs font-semibold text-gray-200">
                    {elem?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default RecruitmentProcess;
