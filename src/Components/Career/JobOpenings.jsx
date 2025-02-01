import React, { useState } from "react";
import Container from "../Helper/Container";
import CareerModal from "./Modal";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const JobOpenings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobOpenings, setJobOpenings] = useState([
    {
      id: 1,
      title: "NEET Academic Advisor",
      jobType: "Full-time",
      description:
        "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
      responsibilities: [
        "Conduct one-on-one advising sessions with students.",
        "Create customized study plans based on individual needs.",
        "Monitor student progress and provide constructive feedback.",
        "Stay updated on NEET exam patterns and syllabus changes.",
      ],
      qualifications: [
        "Bachelor’s degree in Biology, Chemistry, or a related field.",
        "Previous experience in academic advising or tutoring preferred.",
        "Strong communication and interpersonal skills.",
      ],
      benefits: [
        "Flexible work hours",
        "Health and wellness programs",
        "Professional development opportunities",
      ],
    },
    {
      id: 2,
      title: "Content Writer",
      jobType: "Part-time",
      description:
        "We are looking for a creative Content Writer to produce engaging articles and resources related to NEET preparation. You will research topics, write informative content, and collaborate with the marketing team to enhance our online presence.",
      responsibilities: [
        "Write articles, blog posts, and social media content.",
        "Research NEET-related topics to ensure accuracy and relevance.",
        "Collaborate with the marketing team to develop content strategies.",
        "Edit and proofread content for clarity and quality.",
      ],
      qualifications: [
        "Bachelor’s degree in English, Journalism, or a related field.",
        "Excellent writing and editing skills.",
        "Familiarity with SEO best practices is a plus.",
      ],
      benefits: [
        "Flexible work arrangements",
        "Creative freedom in content creation",
        "Opportunity to work with a passionate team",
      ],
    },
    {
      id: 3,
      title: "Marketing Specialist",
      jobType: "Full-time",
      description:
        "As a Marketing Specialist, you will develop and execute marketing campaigns to promote Neet Advisor’s services. You will analyze market trends, manage social media accounts, and engage with our online community.",
      responsibilities: [
        "Create and implement marketing strategies.",
        "Analyze market trends and competitor activities.",
        "Manage social media accounts and engage with followers.",
        "Collaborate with the content team to create promotional materials.",
      ],
      qualifications: [
        "Bachelor’s degree in Marketing, Business, or a related field.",
        "Proven experience in digital marketing and social media management.",
        "Strong analytical and creative thinking skills.",
      ],
      benefits: [
        "Remote work options",
        "Performance-based bonuses",
        "Access to professional development resources",
      ],
    },
    {
      id: 4,
      title: "Graphic Designer",
      jobType: "Contract",
      description:
        "We are seeking a talented Graphic Designer to create visually appealing graphics for our marketing materials, website, and social media. You will work closely with the marketing team to ensure brand consistency and effective communication.",
      responsibilities: [
        "Design graphics for digital and print media.",
        "Collaborate with the marketing team to develop visual content.",
        "Ensure brand consistency across all platforms.",
        "Stay updated on design trends and software.",
      ],
      qualifications: [
        "Bachelor’s degree in Graphic Design or a related field.",
        "Proficiency in design software (Adobe Creative Suite, etc.).",
        "Strong portfolio showcasing previous design work.",
      ],
      benefits: [
        "Flexible hours",
        "Creative work environment",
        "Opportunity to work on diverse projects",
      ],
    },
    {
      id: 1,
      title: "NEET Academic Advisor",
      jobType: "Full-time",
      description:
        "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
      responsibilities: [
        "Conduct one-on-one advising sessions with students.",
        "Create customized study plans based on individual needs.",
        "Monitor student progress and provide constructive feedback.",
        "Stay updated on NEET exam patterns and syllabus changes.",
      ],
      qualifications: [
        "Bachelor’s degree in Biology, Chemistry, or a related field.",
        "Previous experience in academic advising or tutoring preferred.",
        "Strong communication and interpersonal skills.",
      ],
      benefits: [
        "Flexible work hours",
        "Health and wellness programs",
        "Professional development opportunities",
      ],
    },
    {
      id: 1,
      title: "NEET Academic Advisor",
      jobType: "Full-time",
      description:
        "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
      responsibilities: [
        "Conduct one-on-one advising sessions with students.",
        "Create customized study plans based on individual needs.",
        "Monitor student progress and provide constructive feedback.",
        "Stay updated on NEET exam patterns and syllabus changes.",
      ],
      qualifications: [
        "Bachelor’s degree in Biology, Chemistry, or a related field.",
        "Previous experience in academic advising or tutoring preferred.",
        "Strong communication and interpersonal skills.",
      ],
      benefits: [
        "Flexible work hours",
        "Health and wellness programs",
        "Professional development opportunities",
      ],
    },
    {
      id: 1,
      title: "NEET Academic Advisor",
      jobType: "Full-time",
      description:
        "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
      responsibilities: [
        "Conduct one-on-one advising sessions with students.",
        "Create customized study plans based on individual needs.",
        "Monitor student progress and provide constructive feedback.",
        "Stay updated on NEET exam patterns and syllabus changes.",
      ],
      qualifications: [
        "Bachelor’s degree in Biology, Chemistry, or a related field.",
        "Previous experience in academic advising or tutoring preferred.",
        "Strong communication and interpersonal skills.",
      ],
      benefits: [
        "Flexible work hours",
        "Health and wellness programs",
        "Professional development opportunities",
      ],
    },
    {
      id: 1,
      title: "NEET Academic Advisor",
      jobType: "Full-time",
      description:
        "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
      responsibilities: [
        "Conduct one-on-one advising sessions with students.",
        "Create customized study plans based on individual needs.",
        "Monitor student progress and provide constructive feedback.",
        "Stay updated on NEET exam patterns and syllabus changes.",
      ],
      qualifications: [
        "Bachelor’s degree in Biology, Chemistry, or a related field.",
        "Previous experience in academic advising or tutoring preferred.",
        "Strong communication and interpersonal skills.",
      ],
      benefits: [
        "Flexible work hours",
        "Health and wellness programs",
        "Professional development opportunities",
      ],
    },
    {
      id: 1,
      title: "NEET Academic Advisor",
      jobType: "Full-time",
      description:
        "As a NEET Academic Advisor, you will provide personalized guidance to students preparing for the NEET exam. You will develop tailored study plans, monitor progress, and offer support to help students achieve their academic goals.",
      responsibilities: [
        "Conduct one-on-one advising sessions with students.",
        "Create customized study plans based on individual needs.",
        "Monitor student progress and provide constructive feedback.",
        "Stay updated on NEET exam patterns and syllabus changes.",
      ],
      qualifications: [
        "Bachelor’s degree in Biology, Chemistry, or a related field.",
        "Previous experience in academic advising or tutoring preferred.",
        "Strong communication and interpersonal skills.",
      ],
      benefits: [
        "Flexible work hours",
        "Health and wellness programs",
        "Professional development opportunities",
      ],
    },
  ]);
  const [data, setData] = useState([...jobOpenings]);
  const handleSearch = (e) => {
    const { value } = e.target;

    setData(
      value?.length > 0
        ? jobOpenings?.filter((elem, index) =>
            elem?.title?.toLowerCase().includes(value?.toLowerCase()),
          )
        : jobOpenings,
    );
  };

  const handleOpen = (e) => {
    if (e.target.tagName === "BUTTON") {
      setIsOpen(true);
    }
  };

  return (
    <>
      {isOpen && <CareerModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Container className={"relative"}>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/50 via-gray-700 to-black/90"></div>

        <ScrollAnimation animateIn="backInRight" animateOnce={true}>
          <div
            onClick={handleOpen}
            className="relative mx-auto max-w-screen-xl"
          >
            <h1 className="text-center text-3xl font-bold text-yellow-600">
              Apply, To Be{" "}
              <span className="font-extrabold text-primary-color brightness-[400%]">
                Part Of Neet Advisor!
              </span>
            </h1>
            <Divider
              className={"mx-auto my-4 h-1 w-16 rounded-full bg-yellow-600"}
            />
            <input
              onChange={handleSearch}
              type="text"
              name=""
              id=""
              placeholder="Enter Your Search..."
              className="w-full rounded-md border-2 border-white bg-gray-400/10 p-2 text-white shadow-lg"
            />
            <div className="my-4 flex justify-center flex-wrap gap-2">
              {data?.map((elem, index) => {
                return (
                  <>
                    <div className="my-1 flex h-28 w-48  flex-col justify-center rounded-md border-b-2 border-l-2 border-white p-2 shadow-lg">
                      <h1 className="text-sm font-bold text-gray-300">
                        {elem?.title}
                      </h1>
                      <p className="my-2 text-xs font-semibold text-gray-300">
                        {elem?.jobType}
                      </p>
                      <button className="w-fit rounded-l-full rounded-r-full bg-yellow-500 px-2 py-1 text-xs font-bold text-white">
                        Apply Now
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default JobOpenings;
