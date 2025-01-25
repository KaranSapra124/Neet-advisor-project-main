import React from "react";
import Container from "../Helper/Container";
import { Carousel } from "antd";
import Divider from "../Helper/Divider";
import { FaGraduationCap, FaRocket, FaUniversity } from "react-icons/fa";
import "./Testimonials.css";

const AspirantsSection = () => {
  const neetAspirants = [
    {
      Name: "Aarav Sharma",
      ImageName: "https://randomuser.me/api/portraits/men/1.jpg",
      AIR_Rank: 1200,
      MBBS: true,
      College_Name:
        "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      Name: "Priya Verma",
      ImageName: "https://randomuser.me/api/portraits/women/1.jpg",
      AIR_Rank: 2500,
      MBBS: true,
      College_Name: "Maulana Azad Medical College, New Delhi",
    },
    {
      Name: "Rohan Gupta",
      ImageName: "https://randomuser.me/api/portraits/men/2.jpg",
      AIR_Rank: 3500,
      MBBS: true,
      College_Name: "King George's Medical University, Lucknow",
    },
    {
      Name: "Sneha Patel",
      ImageName: "https://randomuser.me/api/portraits/women/2.jpg",
      AIR_Rank: 4500,
      MBBS: true,
      College_Name: "Jawaharlal Nehru Medical College, Belgaum",
    },
    {
      Name: "Vikram Singh",
      ImageName: "https://randomuser.me/api/portraits/men/3.jpg",
      AIR_Rank: 5500,
      MBBS: true,
      College_Name: "B.J. Medical College, Pune",
    },
    {
      Name: "Ananya Roy",
      ImageName: "https://randomuser.me/api/portraits/women/3.jpg",
      AIR_Rank: 6700,
      MBBS: true,
      College_Name: "Kasturba Medical College, Manipal",
    },
    {
      Name: "Karan Mehta",
      ImageName: "https://randomuser.me/api/portraits/men/4.jpg",
      AIR_Rank: 7800,
      MBBS: true,
      College_Name: "Government Medical College, Nagpur",
    },
    {
      Name: "Neha Joshi",
      ImageName: "https://randomuser.me/api/portraits/women/4.jpg",
      AIR_Rank: 8900,
      MBBS: true,
      College_Name:
        "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    },
    {
      Name: "Rahul Desai",
      ImageName: "https://randomuser.me/api/portraits/men/5.jpg",
      AIR_Rank: 9900,
      MBBS: true,
      College_Name: "Gandhi Medical College, Bhopal",
    },
    {
      Name: "Tanya Singh",
      ImageName: "https://randomuser.me/api/portraits/women/5.jpg",
      AIR_Rank: 11000,
      MBBS: true,
      College_Name: "Dr. D.Y. Patil Medical College, Navi Mumbai",
    },
    {
      Name: "Arjun Nair",
      ImageName: "https://randomuser.me/api/portraits/men/6.jpg",
      AIR_Rank: 12500,
      MBBS: true,
      College_Name: "Government Medical College, Surat",
    },
    {
      Name: "Meera Iyer",
      ImageName: "https://randomuser.me/api/portraits/women/6.jpg",
      AIR_Rank: 13500,
      MBBS: true,
      College_Name: "Smt. NHL Municipal Medical College, Ahmedabad",
    },
    {
      Name: "Siddharth Rao",
      ImageName: "https://randomuser.me/api/portraits/men/7.jpg",
      AIR_Rank: 14500,
      MBBS: true,
      College_Name: "Mahatma Gandhi Memorial Medical College, Indore",
    },
    {
      Name: "Nisha Kumari",
      ImageName: "https://randomuser.me/api/portraits/women/7.jpg",
      AIR_Rank: 15500,
      MBBS: true,
      College_Name: "Government Medical College, Kottayam",
    },
    {
      Name: "Aarav Sharma",
      ImageName: "https://randomuser.me/api/portraits/men/1.jpg",
      AIR_Rank: 1200,
      MBBS: true,
      College_Name:
        "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      Name: "Priya Verma",
      ImageName: "https://randomuser.me/api/portraits/women/1.jpg",
      AIR_Rank: 2500,
      MBBS: true,
      College_Name: "Maulana Azad Medical College, New Delhi",
    },
    {
      Name: "Rohan Gupta",
      ImageName: "https://randomuser.me/api/portraits/men/2.jpg",
      AIR_Rank: 3500,
      MBBS: true,
      College_Name: "King George's Medical University, Lucknow",
    },
    {
      Name: "Sneha Patel",
      ImageName: "https://randomuser.me/api/portraits/women/2.jpg",
      AIR_Rank: 4500,
      MBBS: true,
      College_Name: "Jawaharlal Nehru Medical College, Belgaum",
    },
    {
      Name: "Vikram Singh",
      ImageName: "https://randomuser.me/api/portraits/men/3.jpg",
      AIR_Rank: 5500,
      MBBS: true,
      College_Name: "B.J. Medical College, Pune",
    },
    {
      Name: "Ananya Roy",
      ImageName: "https://randomuser.me/api/portraits/women/3.jpg",
      AIR_Rank: 6700,
      MBBS: true,
      College_Name: "Kasturba Medical College, Manipal",
    },
    {
      Name: "Karan Mehta",
      ImageName: "https://randomuser.me/api/portraits/men/4.jpg",
      AIR_Rank: 7800,
      MBBS: true,
      College_Name: "Government Medical College, Nagpur",
    },
    {
      Name: "Neha Joshi",
      ImageName: "https://randomuser.me/api/portraits/women/4.jpg",
      AIR_Rank: 8900,
      MBBS: true,
      College_Name:
        "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    },
    {
      Name: "Rahul Desai",
      ImageName: "https://randomuser.me/api/portraits/men/5.jpg",
      AIR_Rank: 9900,
      MBBS: true,
      College_Name: "Gandhi Medical College, Bhopal",
    },
    {
      Name: "Tanya Singh",
      ImageName: "https://randomuser.me/api/portraits/women/5.jpg",
      AIR_Rank: 11000,
      MBBS: true,
      College_Name: "Dr. D.Y. Patil Medical College, Navi Mumbai",
    },
    {
      Name: "Arjun Nair",
      ImageName: "https://randomuser.me/api/portraits/men/6.jpg",
      AIR_Rank: 12500,
      MBBS: true,
      College_Name: "Government Medical College, Surat",
    },
    {
      Name: "Meera Iyer",
      ImageName: "https://randomuser.me/api/portraits/women/6.jpg",
      AIR_Rank: 13500,
      MBBS: true,
      College_Name: "Smt. NHL Municipal Medical College, Ahmedabad",
    },
    {
      Name: "Siddharth Rao",
      ImageName: "https://randomuser.me/api/portraits/men/7.jpg",
      AIR_Rank: 14500,
      MBBS: true,
      College_Name: "Mahatma Gandhi Memorial Medical College, Indore",
    },
    // {
    //     Name: "Nisha Kumari",
    //     ImageName: "https://randomuser.me/api/portraits/women/7.jpg",
    //     AIR_Rank: 15500,
    //     MBBS: true,
    //     College_Name: "Government Medical College, Kottayam"
    // },
    // {
    //     Name: "Aarav Sharma",
    //     ImageName: "https://randomuser.me/api/portraits/men/1.jpg",
    //     AIR_Rank: 1200,
    //     MBBS: true,
    //     College_Name: "All India Institute of Medical Sciences (AIIMS), New Delhi"
    // },
    // {
    //     Name: "Priya Verma",
    //     ImageName: "https://randomuser.me/api/portraits/women/1.jpg",
    //     AIR_Rank: 2500,
    //     MBBS: true,
    //     College_Name: "Maulana Azad Medical College, New Delhi"
    // },
    // {
    //     Name: "Rohan Gupta",
    //     ImageName: "https://randomuser.me/api/portraits/men/2.jpg",
    //     AIR_Rank: 3500,
    //     MBBS: true,
    //     College_Name: "King George's Medical University, Lucknow"
    // },
    // {
    //     Name: "Sneha Patel",
    //     ImageName: "https://randomuser.me/api/portraits/women/2.jpg",
    //     AIR_Rank: 4500,
    //     MBBS: true,
    //     College_Name: "Jawaharlal Nehru Medical College, Belgaum"
    // },
    // {
    //     Name: "Vikram Singh",
    //     ImageName: "https://randomuser.me/api/portraits/men/3.jpg",
    //     AIR_Rank: 5500,
    //     MBBS: true,
    //     College_Name: "B.J. Medical College, Pune"
    // },
    // {
    //     Name: "Ananya Roy",
    //     ImageName: "https://randomuser.me/api/portraits/women/3.jpg",
    //     AIR_Rank: 6700,
    //     MBBS: true,
    //     College_Name: "Kasturba Medical College, Manipal"
    // },
    // {
    //     Name: "Karan Mehta",
    //     ImageName: "https://randomuser.me/api/portraits/men/4.jpg",
    //     AIR_Rank: 7800,
    //     MBBS: true,
    //     College_Name: "Government Medical College, Nagpur"
    // },
    // {
    //     Name: "Neha Joshi",
    //     ImageName: "https://randomuser.me/api/portraits/women/4.jpg",
    //     AIR_Rank: 8900,
    //     MBBS: true,
    //     College_Name: "Sri Ramachandra Institute of Higher Education and Research, Chennai"
    // },
    // {
    //     Name: "Rahul Desai",
    //     ImageName: "https://randomuser.me/api/portraits/men/5.jpg",
    //     AIR_Rank: 9900,
    //     MBBS: true,
    //     College_Name: "Gandhi Medical College, Bhopal"
    // },
    // {
    //     Name: "Tanya Singh",
    //     ImageName: "https://randomuser.me/api/portraits/women/5.jpg",
    //     AIR_Rank: 11000,
    //     MBBS: true,
    //     College_Name: "Dr. D.Y. Patil Medical College, Navi Mumbai"
    // },
    // {
    //     Name: "Arjun Nair",
    //     ImageName: "https://randomuser.me/api/portraits/men/6.jpg",
    //     AIR_Rank: 12500,
    //     MBBS: true,
    //     College_Name: "Government Medical College, Surat"
    // },
    // {
    //     Name: "Meera Iyer",
    //     ImageName: "https://randomuser.me/api/portraits/women/6.jpg",
    //     AIR_Rank: 13500,
    //     MBBS: true,
    //     College_Name: "Smt. NHL Municipal Medical College, Ahmedabad"
    // },
    // {
    //     Name: "Siddharth Rao",
    //     ImageName: "https://randomuser.me/api/portraits/men/7.jpg",
    //     AIR_Rank: 14500,
    //     MBBS: true,
    //     College_Name: "Mahatma Gandhi Memorial Medical College, Indore"
    // },
    // {
    //     Name: "Nisha Kumari",
    //     ImageName: "https://randomuser.me/api/portraits/women/7.jpg",
    //     AIR_Rank: 15500,
    //     MBBS: true,
    //     College_Name: "Government Medical College, Kottayam"
    // },
  ];

  return (
    <Container className={" bg-gray-200/40"}>
      <div className="mb-8 text-center max-w-screen-xl">
        <h1 className="mb-2 text-3xl font-bold text-yellow-600">
          Students Coached to{" "}
          <span className="font-extrabold text-primary-color">
            Top Medical Colleges
          </span>
        </h1>
        <p className="text-xs w-96 mx-auto my-2 font-bold text-gray-700">
          Check out the medical colleges our attendees have reached with
          enhanced confidence, clarity, and applying our strategies.
        </p>
      </div>
      <Carousel autoplay slidesToShow={3} arrows={false} dots={false}>
        {neetAspirants.map((elem, index) => (
          <div key={index} className="p-1 relative">
            <img src="./Webinar/validation-badge-bg-removed.gif" className="w-12 absolute left-[23.5rem] z-20 -top-2 " alt="" srcset="" />
            <div className="rounded-xl bg-white p-4 border-l-2 border-yellow-600 border-b-2 shadow-md cursor-pointer hover:scale-x-105 transition-all  duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  {/* Student Name and Divider */}
                  <h2 className="mb-2 text-sm font-extrabold text-primary-color">
                    {elem?.Name}
                  </h2>
                  <div className="mb-4 h-0.5 w-16 rounded-full bg-yellow-600" />

                  {/* College Info */}
                  <div className="mb-3 flex items-start gap-1">
                    <FaUniversity className="mt-1 flex-shrink-0 text-primary-color" />
                    <p className="line-clamp-1 text-xs font-semibold text-gray-700">
                      {elem?.College_Name}
                    </p>
                  </div>

                  {/* Rank */}
                  <div className="mb-3 flex items-center gap-1">
                    <FaRocket className="text-primary-color" />
                    <span className="text-xs font-semibold">
                      AIR Rank: <span className="text-green-500 font-bold">{elem?.AIR_Rank}</span>
                    </span>
                  </div>

                  {/* MBBS Badge */}
                  <div className="inline-flex items-center rounded-full bg-green-100 px-1 py-1 text-green-600">
                    <FaGraduationCap className="mr-1" />
                    <span className="text-xs font-bold pr-2">
                      {elem?.MBBS ? "MBBS" : "N/A"}
                    </span>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    className="h-full w-full rounded-lg object-cover shadow-md"
                    src={elem?.ImageName}
                    alt={elem?.Name}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default AspirantsSection;
