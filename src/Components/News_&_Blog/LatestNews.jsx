import React, { useState } from "react";
import Container from "../Helper/Container";
import { Carousel, Flex, Modal } from "antd";
import { FaArrowRight } from "react-icons/fa";
import Divider from "../Helper/Divider";
import { MdArrowOutward } from "react-icons/md";

const LatestNews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [news_Data, setNewsData] = useState("");
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

  const handleOpenNews = (data) => {
    setIsOpen(true);
    setNewsData(data);
  };
  return (
    <>
      {isOpen && (
        <NewsModal
          data={news_Data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          key={isOpen}
        />
      )}
      <Container className={"bg-gray-200/40 py-10"}>
        <div>
          <h1 className="border-l-2 border-yellow-600 px-2 text-3xl font-bold uppercase text-primary-color">
            Latest <span className="font-extrabold text-yellow-600">News</span>
          </h1>
          <Divider className={"my-4 h-1 w-20 rounded-full bg-yellow-600"} />
          <div className="my-4">
            <Carousel slidesToShow={4} dots={false} autoplay infinite>
              {newsData?.map((elem, index) => {
                return (
                  <div className="relative">
                    <img
                      src={elem?.imageUrl}
                      className="h-40"
                      alt={elem?.title}
                    />
                    <div className="absolute inset-0 h-full rounded-md bg-black/80"></div>

                    <div className="absolute top-16 z-10 mx-4">
                      <h5 className="w-fit border-l-2 border-yellow-600 px-2 font-extrabold text-primary-color brightness-[350%]">
                        {elem?.category}
                      </h5>
                      <h4 className="text-xs font-bold text-white">
                        {elem?.title?.length > 40
                          ? elem?.title?.substring(0, 40) + "..."
                          : elem?.title}
                      </h4>
                      <p className="font-light text-gray-400">
                        {elem?.description?.length > 30
                          ? elem?.description?.substring(0, 30) + "..."
                          : elem?.description}
                      </p>
                      <FaArrowRight
                        onClick={() => {
                          handleOpenNews(elem);
                        }}
                        className="w-fit cursor-pointer rounded-full bg-primary-color p-1 text-lg text-white transition-all duration-200 hover:scale-125"
                      />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Container>
    </>
  );
};

const NewsModal = ({ data, setIsOpen, isOpen }) => {
  const { category, date, title, isTrending, imageUrl, description, id } = data;
  return (
    <>
      <Modal footer={false} open={isOpen} onCancel={() => setIsOpen(false)}>
        <div className="p-5">
          <div className="my-2 w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-bold text-white">
            # {category}
          </div>
          <h1 className="py-2 text-3xl font-extrabold text-primary-color">
            {title}
          </h1>
          <img
            src={imageUrl}
            className="h-52 rounded-sm object-cover shadow-md shadow-gray-400"
            alt={title}
          />
          <p className="my-2 flex justify-end font-bold text-gray-700">
            <span className="px-1 font-normal italic">Published On :</span>
            {date}
          </p>
          <p className="font-semibold text-gray-700">{description}</p>
        </div>
      </Modal>
    </>
  );
};

export default LatestNews;
