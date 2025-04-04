import { Table } from "antd";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  FaBook,
  FaTrophy,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaFileAlt,
  FaShieldAlt,
  FaLightbulb,
  FaCheckCircle,
  FaHeart,
  FaStar,
  FaGraduationCap,
  FaHospital,
  FaUniversity,
  FaTooth,
  FaLeaf,
  FaBookOpen,
  FaCertificate,
  FaHeartbeat,
  FaBrain,
  FaClinicMedical,
  FaUserMd,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Divider from "../Helper/Divider";

const NEET_MDS = () => {
  // Custom table styles
  const tableStyle = {
    marginBottom: "2rem",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const examData = [
    {
      key: "1",
      attribute: "Mode of Exam",
      details: "Computer Network based (Online)",
    },
    { key: "2", attribute: "Duration", details: "3 hours" },
    { key: "3", attribute: "Total Questions", details: "240 Questions" },
    {
      key: "4",
      attribute: "Question Type",
      details: "Multiple Choice Questions (MCQs)",
    },
    {
      key: "5",
      attribute: "Maximum Marks",
      details: "960 Marks",
    },
    {
      key: "6",
      attribute: "Marking Scheme",
      details: "+4 for correct, -1 for incorrect, 0 for unattempted",
    },
    {
      key: "7",
      attribute: "Language Option",
      details: "English only",
    },
  ];

  const eligibilityData = [
    {
      key: "1",
      attribute: "Nationality",
      details:
        "Indian Nationals, NRIs, OCIs, PIOs, and Foreign Nationals are eligible to apply.",
    },
    {
      key: "2",
      attribute: "Age Limit",
      details:
        "Candidates must be at least 17 years old by December 31, 2025. There is no upper age limit as per the Supreme Court's order.",
    },
    {
      key: "3",
      attribute: "Educational Qualification",
      details:
        "Must have passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English as core subjects.",
    },
    {
      key: "4",
      attribute: "Minimum Marks in Qualifying Exam",
      details: (
        <div>
          <p>
            <strong>General category:</strong> 50% in Physics, Chemistry, and
            Biology
          </p>
          <p>
            <strong>OBC/SC/ST:</strong> 40% in Physics, Chemistry, and Biology
          </p>
          <p>
            <strong>PwD:</strong> 45% in Physics, Chemistry, and Biology
          </p>
        </div>
      ),
    },
    {
      key: "5",
      attribute: "Number of Attempts",
      details: "There is no limit on the number of attempts.",
    },
    {
      key: "6",
      attribute: "Year of Passing",
      details:
        "Candidates appearing for their qualifying exam in 2025 are also eligible to apply.",
    },
  ];

  // Custom styling for table columns
  const columns = [
    {
      title: (
        <h1 className="p-1 text-center font-bold uppercase text-white lg:text-xl">
          Exam Attribute
        </h1>
      ),
      dataIndex: "attribute",
      key: "attribute",
      // width: 250,
      render: (text) => (
        <p className="text-center font-extrabold text-[#201169] lg:text-lg">
          {text}
        </p>
      ),
    },
    {
      title: (
        <h1 className="text-center font-bold uppercase text-white lg:text-xl">
          Details
        </h1>
      ),
      dataIndex: "details",
      key: "details",
      render: (text) => (
        <p className="text-center font-semibold text-gray-700 lg:text-[1rem]">
          {text}
        </p>
      ),
    },
  ];
  //   const eligibilityColumns = [
  //     {
  //       title: (
  //         <h1 className="text-center font-bold uppercase text-white lg:text-xl">
  //           Criteria
  //         </h1>
  //       ),
  //       dataIndex: "attribute",
  //       key: "attribute",
  //       // width: 300,
  //       render: (text) => (
  //         <p className="text-center font-extrabold text-[#201169] lg:text-lg">
  //           {text}
  //         </p>
  //       ),
  //     },
  //     {
  //       title: (
  //         <h1 className="text-center font-bold uppercase text-white lg:text-xl">
  //           Details
  //         </h1>
  //       ),
  //       dataIndex: "details",
  //       key: "details",
  //       render: (text) => (
  //         <p className="text-center font-semibold text-gray-700 lg:text-[1rem]">
  //           {text}
  //         </p>
  //       ),
  //     },
  //   ];

  return (
    <div className="min-h-screen">
      {/* Header Section with Hero Banner */}
      {/* <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[#201169] opacity-90"></div>
        <img
          src="/api/placeholder/1200/500"
          alt="Medical students studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="text-center mb-4">
            <FaGraduationCap size={56} className="mx-auto mb-4 text-white opacity-90" />
          </div>
          <h1 className="mb-2 text-center text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              NEET UG
            </span>
          </h1>
          <p className="max-w-2xl text-center text-xl font-light md:text-2xl mt-2">
            Your Gateway to Medical Education in India
          </p>
        </div>
      </div> */}

      {/* Main Content Container */}
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        {/* Introduction Card */}
        <div className="mb-12 rounded-xl border-l-4 border-[#201169] bg-white p-6 shadow-xl md:p-8">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-[#201169]">
                About <strong>MDS</strong>
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                <strong>NEET-MDS</strong> is an eligibility-cum-ranking
                examination prescribed as the single entrance examination for
                admission to various Master in Dental Surgery course under
                Dentists Act, 1948 (amended from time to time).
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                A candidate for admission to the <strong>MDS</strong> Courses,
                must possess a recognised degree of Bachelor in Dental Surgery
                awarded by a university or institute in India and registered
                with the State Dental Council and has obtained provisional or
                permanent registration and has undergone compulsory rotatory
                internship of a year in an approved/recognised dental college.
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                <strong>NEET MDS</strong> is mandatory even for foreign
                nationals seeking admission in Master in Dental Surgery course
                in India.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-[#f3f4ff] p-6">
                <FaShieldAlt size={100} className="text-[#201169]" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex "> */}
        {/* NEET Exam Pattern Table */}
        <ScrollAnimation
          animateIn="fadeIn"
          className="flex justify-between"
          duration={1.5}
        >
          <div className="">
            <h2 className="mb-6 text-3xl font-bold text-[#201169] after:ml-0 after:mt-2 after:block after:h-1 after:w-24 after:bg-[#201169] after:content-['']">
              NEET PG Exam Pattern
            </h2>

            {/* Table Wrapper */}
            <div className="relative">
              {/* Image positioned absolutely */}
              <img
                src="./Seminar/validation-badge-bg-removed.gif"
                className="absolute -left-4 -top-3 z-10 w-10"
                alt=""
              />
              {/* AntD Table */}
              <Table
                size="small"
                columns={columns}
                dataSource={examData}
                pagination={false}
                bordered
                className="exam-pattern-table"
              />
            </div>
          </div>
          {/* Key Features Section */}
          {/* MDS Admission Coverage Pie Chart */}
          <div className="flex flex-col items-center w-1/2">
            <h2 className="mb-6 text-center text-3xl font-bold text-[#201169] after:block after:h-1 after:w-24 after:bg-[#201169]">
              NEET MDS Admission Coverage
            </h2>
            <BarChartComponent />
          </div>
        </ScrollAnimation>
        {/* </div> */}

        {/* CTA Section */}
        {/* <div className="mb-12 rounded-xl bg-[#201169] p-8 text-center text-white shadow-xl">
          <FaLightbulb size={48} className="mx-auto mb-4" />
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl">
            Join thousands of aspiring medical professionals in preparing for
            one of India's most competitive entrance examinations.
          </p>
          <button className="rounded-lg bg-white px-6 py-3 font-medium text-[#201169] transition duration-300 hover:bg-blue-50">
            Start Your Preparation
          </button>
        </div> */}
        <LinksSection />
      </div>

      {/* Footer
      <footer className="bg-[#201169] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 NEET UG Information Portal | This is an informational website only</p>
          <p className="text-sm opacity-75">For official information, please visit the National Testing Agency website</p>
        </div>
      </footer> */}
    </div>
  );
};

const LinksSection = () => {
  const importantLinks = [
    {
      name: "National Medical Commission (NMC)",
      link: "http://www.nmc.org.in/",
    },
    {
      name: "National Testing Agency (NTA)",
      link: "http://www.nta.ac.in/",
    },
    {
      name: "BDS Course Regulations",
      link: "http://www.dciindia.gov.in/",
    },
    {
      name: "Medical Counselling Committee (MCC)",
      link: "https://mcc.nic.in/UGCounselling/",
    },
    {
      name: "AYUSH Admissions Central Counselling Committee (AACCC)",
      link: "https://aaccc.gov.in/aacccug/home/homepage",
    },
  ];

  return (
    <div className="py-10 text-white">
      <div className="text-center">
        <h2 className="text-start text-3xl font-bold text-[#201169] after:mt-2 after:block after:h-1 after:w-24 after:bg-[#201169] after:content-['']">
          🚀 <span className="text-start">Important</span> Links 🌟
        </h2>
        <p className="my-3 text-start text-sm font-semibold text-gray-800">
          Stay updated with the latest official resources.
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        {importantLinks.map((item, index) => (
          <li
            key={index}
            className="group flex items-center justify-between rounded-lg bg-white px-2 py-1.5 shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="font-bold text-gray-800 group-hover:text-primary-color">
              {item.name}
            </span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary-color px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-yellow-500"
            >
              Visit 🔗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BarChartComponent = () => {
  const admissionCoverageData = [
    {
      name: "All India Quota (50%)",
      fullForm:
        "All India 50% quota MDS seats for all States/Union territories of India.",
      value: 20,
    },
    {
      name: "State Quota",
      fullForm: "State quota seats for all States/Union territories of India.",
      value: 20,
    },
    {
      name: "Private & Deemed University",
      fullForm:
        "All Private Dental Colleges, Institutions & Universities/Deemed Universities all across the country.",
      value: 20,
    },
    {
      name: "Armed Forces Institution",
      fullForm: "MDS Courses at Armed Forces Medical Services Institutions.",
      value: 20,
    },
    {
      name: "Army Dental Corps Screening",
      fullForm:
        "Screening exam for dental surgeons (BDS & MDS) for Short Service Commission in Army Dental Corps.",
      value: 20,
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md bg-white p-3 text-black shadow-md">
          <p className="py-2 text-sm font-extrabold text-gray-800">
            {payload[0].payload.name}
          </p>
          <p className="text-xs font-bold text-gray-600">
            {payload[0].payload.fullForm}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={380}>
      <BarChart
        layout="vertical" // Switched to vertical
        data={admissionCoverageData}
        barSize={20}

        margin={{ top: 0, right: 0, left: 0, bottom: 0 }} // Adjusted margins for better spacing
      >
        <YAxis
          dataKey="name"
          type="category"
          tick={{
            fill: "#201169",
            fontWeight: "900",
            fontSize: 9,

          }}
          tickLine={false}
        />
        <XAxis type="number" hide />{" "}
        {/* Hides X-Axis since we don't need numbers */}
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#201169" radius={[0, 5, 5, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default NEET_MDS;
