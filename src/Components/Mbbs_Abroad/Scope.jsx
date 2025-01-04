import React from 'react';
import { Card, Carousel, Collapse, Typography } from 'antd';
import { FaMedkit, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';
import Container from '../Helper/Container';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Scope = () => {
    const mbbsAbroadScope = [
        {
            category: "Practice Medicine in the Home Country",
            options: [
                {
                    title: "Clear Licensing Exams",
                    details: "Appear for exams like FMGE/NExT (India), USMLE (USA), PLAB (UK), or other local medical council exams."
                },
                {
                    title: "Pursue Clinical Practice",
                    details: "Work in hospitals, clinics, or healthcare institutions, or start private practice after gaining necessary approvals."
                }
            ]
        },
        {
            category: "Practice Medicine Abroad",
            options: [
                {
                    title: "Country-Specific Licensing",
                    details: "Meet eligibility criteria for practicing in the country where the degree was earned or other countries like the USA, UK, or Australia."
                },
                {
                    title: "Residency Programs",
                    details: "Apply for postgraduate residency programs abroad for specialized training."
                },
                {
                    title: "Medical Practice in the Studied Country",
                    details: "Continue working in the country where the MBBS was completed, depending on visa and licensing policies."
                }
            ]
        },
        {
            category: "Pursue Postgraduate Studies",
            options: [
                {
                    title: "Specialization (MD/MS)",
                    details: "Choose a specialization such as Surgery, Pediatrics, or Cardiology and enroll in postgraduate courses."
                },
                {
                    title: "Super Specialization (DM/MCh)",
                    details: "Further specialization for advanced fields like Cardiac Surgery or Neurology."
                }
            ]
        },
        {
            category: "Research and Academia",
            options: [
                {
                    title: "Medical Research",
                    details: "Join research institutions to contribute to medical advancements or pursue a PhD."
                },
                {
                    title: "Teaching",
                    details: "Become a lecturer or professor at medical colleges or universities."
                }
            ]
        },
        {
            category: "Alternative Career Paths",
            options: [
                {
                    title: "Healthcare Management",
                    details: "Take up roles in hospital administration or healthcare policy-making."
                },
                {
                    title: "Medical Writing and Journalism",
                    details: "Write for medical journals, publications, or media outlets."
                },
                {
                    title: "Medical Technology and Innovation",
                    details: "Work with companies developing medical devices, apps, or software."
                }
            ]
        },
        {
            category: "Public Health and Community Work",
            options: [
                {
                    title: "Public Health Programs",
                    details: "Work with international health organizations like WHO or NGOs focusing on disease prevention and community healthcare."
                },
                {
                    title: "Government Health Services",
                    details: "Join national health programs or work as a public health officer."
                }
            ]
        },
        {
            category: "Competitive Exams and Civil Services",
            options: [
                {
                    title: "Civil Services with Medical Background",
                    details: "Appear for exams like UPSC or similar for administrative roles in healthcare."
                }
            ]
        },
        {
            category: "Entrepreneurship",
            options: [
                {
                    title: "Healthcare Ventures",
                    details: "Start a business in telemedicine, healthcare consultancy, or medical tourism."
                },
                {
                    title: "Hospital or Clinic Ownership",
                    details: "Establish and run private healthcare facilities."
                }
            ]
        },
        {
            category: "Further Certifications and Fellowships",
            options: [
                {
                    title: "Specialized Training",
                    details: "Pursue certifications in areas like Emergency Medicine or Radiology."
                },
                {
                    title: "Fellowship Programs",
                    details: "Join fellowships in advanced surgical techniques, research, or global health."
                }
            ]
        },
        {
            category: "Work with International Organizations",
            options: [
                {
                    title: "Global Collaboration",
                    details: "Collaborate with bodies like the United Nations or Doctors Without Borders (MSF)."
                }
            ]
        }
    ];

    const getCategoryIcon = (category) => {
        switch (category) {
            case "Practice Medicine in the Home Country":
                return <FaMedkit className="text-2xl text-primary-color" />;
            case "Practice Medicine Abroad":
                return <FaGlobeAmericas className="text-2xl text-primary-color" />;
            case "Pursue Postgraduate Studies":
                return <FaGraduationCap className="text-2xl text-primary-color" />;
            default:
                return <FaGraduationCap className="text-2xl text-primary-color" />;
        }
    };

    return (
        <Container className={'bg-gray-100'}>
            <div className=" mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-primary-color/10 px-6 py-2 rounded-full mb-4">
                        <Text className="text-primary-color font-semibold">
                            Career Opportunities
                        </Text>
                    </div>
                    <h1 className="text-4xl text-primary-color  font-bold">
                        Why To Pursue{' '}
                        <span className="text-yellow-500 font-extrabold">
                            MBBS Abroad?
                        </span>
                    </h1>
                    <Text className="text-gray-700 text-xs font-semibold">
                        MBBS abroad is vast, offering numerous opportunities depending on
                        the individual's preferences and qualifications.
                    </Text>
                </div>

                {/* Cards Grid */}
                <div className="">
                    <Carousel arrows slidesToShow={2}>
                        {mbbsAbroadScope.map((item, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-xl shadow-lg shadow-gray-400 transition-shadow duration-300 "

                                title={
                                    <div className="flex items-center py-2 space-x-2">
                                        <div className="bg-primary-color/10 p-2 rounded-lg">
                                            {getCategoryIcon(item.category)}
                                        </div>
                                        <Title level={5} className="!mb-0 !text-primary-color">
                                            {item.category}
                                        </Title>
                                    </div>
                                }
                            >
                                <Collapse
                                    ghost
                                    className="bg-transparent"
                                    expandIconPosition="end"
                                >
                                    {item.options.map((option, idx) => (
                                        <Panel
                                            key={idx}
                                            header={
                                                <div className="py-2">
                                                    <Text className="font-semibold text-gray-800">
                                                        {option.title}
                                                    </Text>
                                                </div>
                                            }
                                        >
                                            <div className="pl-4 border-l-2 border-primary-color/30">
                                                <Text className="text-gray-600">
                                                    {option.details}
                                                </Text>
                                            </div>
                                        </Panel>
                                    ))}
                                </Collapse>
                            </Card>
                        ))}

                    </Carousel>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <button className="bg-primary-color text-white px-8 py-3 rounded-lg 
                                         hover:bg-opacity-90 transition-all duration-300 
                                         shadow-md font-semibold">
                        Explore Opportunities
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Scope;