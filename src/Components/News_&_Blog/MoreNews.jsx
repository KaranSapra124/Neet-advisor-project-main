import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const MoreNews = () => {
  const newsData = [
    {
      id: 1,
      category: "Counselling Schedule",
      title: "NEET UG Counselling 2025 Begins Tomorrow",
      description:
        "The registration for the first round of NEET UG 2025 counselling starts tomorrow. Students are encouraged to visit the official website for detailed information regarding the registration process, eligibility criteria, and important dates to ensure a smooth application experience.",
      date: "2025-01-02",
      isTrending: true,
      imageUrl: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      category: "Eligibility Criteria",
      title: "Revised Eligibility for NEET PG Counselling",
      description:
        "The eligibility criteria for NEET PG counselling have been updated to include a lower cut-off for certain categories. This change aims to provide more opportunities for candidates from diverse backgrounds to participate in the counselling process and secure their desired seats in postgraduate medical programs.",
      date: "2025-01-01",
      isTrending: false,
      imageUrl: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      category: "Reservation Policies",
      title: "State Quota Reservations Updated for NEET 2025",
      description:
        "Several states have announced changes to their reservation policies for NEET UG counselling. These updates are designed to enhance fairness and accessibility in the admission process, ensuring that students from various backgrounds have equitable chances of securing seats in medical colleges.",
      date: "2024-12-30",
      isTrending: true,
      imageUrl: "https://picsum.photos/400/300?random=3",
    },
    {
      id: 4,
      category: "Seat Matrix",
      title: "NEET 2025: AIIMS Releases Updated Seat Matrix",
      description:
        "AIIMS has released the latest seat matrix for UG admissions, detailing seat availability across campuses. This comprehensive document is crucial for aspiring medical students as it provides insights into the number of seats available in various disciplines and helps them make informed choices during the counselling process.",
      date: "2024-12-29",
      isTrending: false,
      imageUrl: "https://picsum.photos/400/300?random=4",
    },
    {
      id: 5,
      category: "Document Verification",
      title: "Important: Documents Required for NEET Counselling",
      description:
        "A detailed list of mandatory documents required for verification during the NEET 2025 counselling process has been released. Candidates must ensure they have all necessary documents ready, including identity proof, educational certificates, and other relevant paperwork, to avoid any last-minute issues during the verification stage.",
      date: "2025-01-02",
      isTrending: true,
      imageUrl: "https://picsum.photos/400/300?random=5",
    },
    {
      id: 6,
      category: "Cut-off Trends",
      title: "NEET 2024 Cut-off Analysis and Predictions for 2025",
      description:
        "Experts analyze the previous year’s cut-offs and provide predictions for the upcoming NEET 2025 counselling. This analysis is essential for candidates to understand the competitive landscape and set realistic expectations for their chances of admission based on historical data and trends.",
      date: "2024-12-28",
      isTrending: false,
      imageUrl: "https://picsum.photos/400/300?random=6",
    },
    {
      id: 7,
      category: "FAQs and Helpdesk",
      title: "Helpdesk Launched for NEET 2025 Aspirants",
      description:
        "A dedicated helpdesk has been launched to assist students with their NEET 2025 counselling queries. This initiative aims to provide timely support and guidance to candidates, helping them navigate the complexities of the counselling process and address any concerns they may have.",
      date: "2025-01-01",
      isTrending: true,
      imageUrl: "https://picsum.photos/400/300?random=7",
    },
    {
      id: 8,
      category: "Counselling Schedule",
      title: "Last Date to Register for NEET PG Counselling",
      description:
        "The last date for NEET PG counselling registration is approaching. Candidates are urged to ensure they complete the registration process on time to avoid missing out on the opportunity to secure a seat in their preferred postgraduate medical programs. Timely registration is crucial for a successful counselling experience.",
      date: "2025-01-03",
      isTrending: true,
      imageUrl: "https://picsum.photos/400/300?random=8",
    },
  ];
  return (
    <Container className={'bg-gray-200/40'}>
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-2 lg:grid-cols-2">
        {newsData?.slice(0, 4).map((elem, index) => {
          return (
            <div className="flex hover:scale-105 transition-all cursor-pointer bg-white p-1 h-fit rounded-lg shadow-sm shadow-yellow-600 items-center gap-2 border-l-2 border-yellow-600 border-b-2  ">
              <img className="w-44" src={elem?.imageUrl} alt="" srcset="" />
              <div>
                <h2 className="text-sm  font-extrabold text-primary-color">{elem?.title}</h2>
                <Divider className={"h-0.5 bg-yellow-600 w-12 rounded-full my-2"}/>
                <p className="text-xs text-gray-700 font-semibold line-clamp-3">{elem?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MoreNews;
