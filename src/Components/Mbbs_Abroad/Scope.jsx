import React from "react";
import { Card, Carousel, Collapse, Timeline, Typography } from "antd";
import { FaMedkit, FaGraduationCap, FaGlobeAmericas } from "react-icons/fa";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import ScrollAnimation from "react-animate-on-scroll";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Scope = () => {
  const mbbsAbroadScope = [
    {
      category: "Practice Medicine in the Home Country",
      options: [
        {
          title: "Clear Licensing Exams",
          details:
            "Appear for exams like FMGE/NExT (India), USMLE (USA), PLAB (UK), or other local medical council exams.",
        },
        {
          title: "Pursue Clinical Practice",
          details:
            "Work in hospitals, clinics, or healthcare institutions, or start private practice after gaining necessary approvals.",
        },
      ],
    },
    {
      category: "Practice Medicine Abroad",
      options: [
        {
          title: "Country-Specific Licensing",
          details:
            "Meet eligibility criteria for practicing in the country where the degree was earned or other countries like the USA, UK, or Australia.",
        },
        {
          title: "Residency Programs",
          details:
            "Apply for postgraduate residency programs abroad for specialized training.",
        },
        {
          title: "Medical Practice in the Studied Country",
          details:
            "Continue working in the country where the MBBS was completed, depending on visa and licensing policies.",
        },
      ],
    },
    {
      category: "Pursue Postgraduate Studies",
      options: [
        {
          title: "Specialization (MD/MS)",
          details:
            "Choose a specialization such as Surgery, Pediatrics, or Cardiology and enroll in postgraduate courses.",
        },
        {
          title: "Super Specialization (DM/MCh)",
          details:
            "Further specialization for advanced fields like Cardiac Surgery or Neurology.",
        },
      ],
    },
    {
      category: "Research and Academia",
      options: [
        {
          title: "Medical Research",
          details:
            "Join research institutions to contribute to medical advancements or pursue a PhD.",
        },
        {
          title: "Teaching",
          details:
            "Become a lecturer or professor at medical colleges or universities.",
        },
      ],
    },
    {
      category: "Alternative Career Paths",
      options: [
        {
          title: "Healthcare Management",
          details:
            "Take up roles in hospital administration or healthcare policy-making.",
        },
        {
          title: "Medical Writing and Journalism",
          details:
            "Write for medical journals, publications, or media outlets.",
        },
        {
          title: "Medical Technology and Innovation",
          details:
            "Work with companies developing medical devices, apps, or software.",
        },
      ],
    },
    {
      category: "Public Health and Community Work",
      options: [
        {
          title: "Public Health Programs",
          details:
            "Work with international health organizations like WHO or NGOs focusing on disease prevention and community healthcare.",
        },
        {
          title: "Government Health Services",
          details:
            "Join national health programs or work as a public health officer.",
        },
      ],
    },
    {
      category: "Competitive Exams and Civil Services",
      options: [
        {
          title: "Civil Services with Medical Background",
          details:
            "Appear for exams like UPSC or similar for administrative roles in healthcare.",
        },
      ],
    },
    {
      category: "Entrepreneurship",
      options: [
        {
          title: "Healthcare Ventures",
          details:
            "Start a business in telemedicine, healthcare consultancy, or medical tourism.",
        },
        {
          title: "Hospital or Clinic Ownership",
          details: "Establish and run private healthcare facilities.",
        },
      ],
    },
    {
      category: "Further Certifications and Fellowships",
      options: [
        {
          title: "Specialized Training",
          details:
            "Pursue certifications in areas like Emergency Medicine or Radiology.",
        },
        {
          title: "Fellowship Programs",
          details:
            "Join fellowships in advanced surgical techniques, research, or global health.",
        },
      ],
    },
    {
      category: "Work with International Organizations",
      options: [
        {
          title: "Global Collaboration",
          details:
            "Collaborate with bodies like the United Nations or Doctors Without Borders (MSF).",
        },
      ],
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Practice Medicine in the Home Country":
        return <img src="./Mbbs/medical-kit.gif" className="h-10 w-10" />;
      case "Practice Medicine Abroad":
        return <img src="./Mbbs/location-pin-bg-removed.gif" className="h-10 w-10" />;

      case "Pursue Postgraduate Studies":
        return <img src="./Mbbs/graduationCap.gif" className="h-10 w-10" />;

      default:
        return <img src="./Mbbs/graduationCap.gif" className="h-10 w-10" />;
    }
  };

  return (
    <Container
      className={"bg-mbbs-hero relative bg-cover bg-fixed bg-no-repeat"}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-300/10 to-blue-900/60 backdrop-blur-lg"></div>

      <div className="relative mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          {/* <div className="mb-4 inline-block rounded-full bg-primary-color/10 px-6 py-2">
            <Text className="font-semibold text-primary-color">
              Career Opportunities
            </Text>
          </div> */}
          <h1 className="text-3xl font-bold text-yellow-600">
            Why To Pursue{" "}
            <span className="font-extrabold text-primary-color">MBBS Abroad?</span>
          </h1>
          <p className="my-2 text-xs font-bold text-gray-800">
            MBBS abroad is vast, offering numerous opportunities depending on
            the individual's preferences and qualifications.
          </p>
          <Divider
            className={"mx-auto my-4 h-1 w-12 rounded-full bg-yellow-600"}
          />
        </div>

        {/* Cards Grid */}
        <div className="">
          <Timeline mode="alternate">
            {mbbsAbroadScope.map((item, index) => {
              return (
                <Timeline.Item
                  key={index}
                  // className={index % 2 === 0 ? "text-left" : "text-right"} // Adjust alignment
                  color="#201169"
                >
                  <ScrollAnimation
                    animateIn={index % 2 !== 0 ? "backInLeft" : "backInRight"}
                    duration={1.5}
                  >
                    <Card
                      className="mx-4 bg-gradient-to-br from-blue-200/90 via-blue-500/10 to-blue-900/50 shadow-lg shadow-gray-400 transition-shadow duration-300 hover:shadow-xl"
                      title={
                        <div className="flex items-center space-x-2 py-2">
                          <div className="border-l-2 border-yellow-600 p-2">
                            {getCategoryIcon(item.category)}
                          </div>
                          <Title
                            level={5}
                            className="!mb-0 !text-lg !font-bold !text-primary-color"
                          >
                            {item.category}
                          </Title>
                        </div>
                      }
                    >
                      <Collapse
                        ghost
                        className="bg-transparent"
                        expandIconPosition="right"
                      >
                        {item.options.map((option, idx) => (
                          <Collapse.Panel
                            key={idx}
                            header={
                              <div className="float-left py-2">
                                <Text className="font-bold text-gray-900">
                                  {option.title}
                                </Text>
                              </div>
                            }
                          >
                            <div className="border-l-2 border-primary-color/30 pl-4 text-left">
                              <Text className="text-center font-semibold text-gray-800">
                                {option.details}
                              </Text>
                            </div>
                          </Collapse.Panel>
                        ))}
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="rounded-lg rounded-l-full rounded-r-full bg-yellow-600 px-3 py-2 font-extrabold text-white shadow-md transition-all duration-300 hover:bg-yellow-700 hover:bg-opacity-90">
            Explore Opportunities
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Scope;
