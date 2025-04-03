import { Table } from "antd";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
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
} from "react-icons/fa";

const NEET_UG = () => {
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
      details: "Pen-and-paper-based (offline)",
    },
    { key: "2", attribute: "Duration", details: "3 Hours" },
    { key: "3", attribute: "Total Questions", details: "180 Questions" },
    {
      key: "4",
      attribute: "Sectional Distribution",
      details: "Physics: 45, Chemistry: 45, Biology: 90",
    },
    {
      key: "5",
      attribute: "Marking Scheme",
      details: "+4 for correct, -1 for incorrect, 0 for unattempted",
    },
    { key: "6", attribute: "Maximum Marks", details: "720 Marks" },
    {
      key: "7",
      attribute: "Question Type",
      details: "Multiple-choice questions (MCQs)",
    },
    {
      key: "8",
      attribute: "Language Options",
      details:
        "English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu",
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
  const eligibilityColumns = [
    {
      title: (
        <h1 className="text-center font-bold uppercase text-white lg:text-xl">
          Criteria
        </h1>
      ),
      dataIndex: "attribute",
      key: "attribute",
      // width: 300,
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
                About NEET UG
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                The National Eligibility cum Entrance Test (Undergraduate) is
                India's unified medical entrance examination conducted by the
                National Testing Agency (NTA) since 2019 on behalf of the
                National Medical Commission.
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                The <strong className="text-[#201169]">NEET</strong> (UG) has to
                be conducted as a common and uniform{" "}
                <strong className="text-[#201169]">
                  National Eligibility-cum-Entrance Test
                </strong>{" "}
                for admission to undergraduate medical education in all medical
                institutions. Similarly, as per Section 14 of the National
                Commission for Indian System of Medicine Act, 2020, there shall
                be a uniform
                <strong className="text-[#201169]"> NEET</strong> (UG) for
                admission to undergraduate courses in each of the disciplines
                i.e. BAMS, BUMS, and BSMS courses of the Indian System of
                Medicine in all Medical Institutions governed under this Act.
                NEET (UG) shall also be applicable to admission to the BHMS
                course under the National Commission for Homeopathy.{" "}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-[#f3f4ff] p-6">
                <FaShieldAlt size={100} className="text-[#201169]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* NEET Exam Pattern Table */}
          <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-[#201169] after:ml-0 after:mt-2 after:block after:h-1 after:w-24 after:bg-[#201169] after:content-['']">
                NEET UG Exam Pattern
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
          </ScrollAnimation>
          {/* Key Features Section */}
          <div>
            <h2 className="mb-6 text-left text-3xl font-bold text-[#201169] after:ml-0 after:mt-2 after:block after:h-1 after:w-24 after:bg-[#201169] after:content-['']">
              Key Features
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-6">
              {/* Feature Card 1 */}
              <div className="rounded-lg border-t-4 border-[#201169] bg-white p-3 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-full bg-[#f3f4ff] p-3">
                    <FaBook size={24} className="text-[#201169]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#201169]">
                    Single Entrance Exam
                  </h3>
                </div>
                <p className="text-gray-600">
                  One unified exam for all medical, dental, AYUSH, and health
                  science courses.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="rounded-lg border-t-4 border-[#201169] bg-white p-3 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-full bg-[#f3f4ff] p-3">
                    <FaTrophy size={24} className="text-[#201169]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#201169]">
                    Merit-Based Selection
                  </h3>
                </div>
                <p className="text-gray-600">
                  Transparent and merit-based selection for premier medical
                  institutions.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="rounded-lg border-t-4 border-[#201169] bg-white p-3 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-full bg-[#f3f4ff] p-3">
                    <FaUsers size={24} className="text-[#201169]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#201169]">
                    Nationwide Recognition
                  </h3>
                </div>
                <p className="text-gray-600">
                  Scores accepted by all medical colleges and universities in
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          {/* Course Types Section */}
          <div className="-mt-5 rounded-xl bg-white p-6">
            <h2 className="mb-6 text-left text-3xl font-bold text-[#201169] after:ml-0 after:mt-2 after:block after:h-1 after:w-24 after:bg-[#201169] after:content-['']">
              NEET UG Courses
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border-b-2 border-[#201169] bg-[#f3f4ff] p-4 text-center">
                <FaHospital size={32} className="mx-auto mb-2 text-[#201169]" />
                <h3 className="font-bold text-[#201169]">MBBS</h3>
                <p className="text-sm text-gray-600">
                  Bachelor of Medicine and Bachelor of Surgery
                </p>
              </div>
              <div className="rounded-lg border-b-2 border-[#201169] bg-[#f3f4ff] p-4 text-center">
                <FaTooth size={32} className="mx-auto mb-2 text-[#201169]" />
                <h3 className="font-bold text-[#201169]">BDS</h3>
                <p className="text-sm text-gray-600">
                  Bachelor of Dental Surgery
                </p>
              </div>
              <div className="rounded-lg border-b-2 border-[#201169] bg-[#f3f4ff] p-4 text-center">
                <FaLeaf size={32} className="mx-auto mb-2 text-[#201169]" />
                <h3 className="font-bold text-[#201169]">BAMS</h3>
                <p className="text-sm text-gray-600">
                  Bachelor of Ayurvedic Medicine and Surgery
                </p>
              </div>
              <div className="rounded-lg border-b-2 border-[#201169] bg-[#f3f4ff] p-4 text-center">
                <FaUniversity
                  size={32}
                  className="mx-auto mb-2 text-[#201169]"
                />
                <h3 className="font-bold text-[#201169]">BHMS</h3>
                <p className="text-sm text-gray-600">
                  Bachelor of Homeopathic Medicine and Surgery
                </p>
              </div>
            </div>
          </div>

          {/* NEET Eligibility Table */}
          <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-[#201169] after:mt-2 after:block after:h-1 after:w-24 after:bg-[#201169] after:content-['']">
                NEET UG Eligibility Criteria
              </h2>
              {/* Table Wrapper */}
              <div className="relative">
                {/* Image positioned absolutely */}
                <img
                  src="./Seminar/validation-badge-bg-removed.gif"
                  className="absolute -left-3 -top-3 z-10 w-10"
                  alt=""
                />
                {/* AntD Table */}
                <Table
                  size="small"
                  columns={eligibilityColumns}
                  dataSource={eligibilityData}
                  pagination={false}
                  bordered
                  className="eligibility-table"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

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
    <div className="text-white">
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
            className="group flex items-center  justify-between rounded-lg bg-white px-2 py-1.5 shadow-md transition-transform duration-300 hover:scale-105"
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

// export default LinksSection;

export default NEET_UG;
