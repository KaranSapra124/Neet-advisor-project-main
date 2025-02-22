import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Badge, Carousel, Flex, Modal } from "antd";
import Divider from "../Helper/Divider";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [mainNews, setMainNews] = useState({});
  const [news_Data, setNewsData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    setMainNews(newsData?.find((elem) => elem?.isTrending === true));
  }, []);

  return (
    <>
      {isOpen && (
        <IndividualNewsModal
          data={news_Data}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
      <Container className={"relative bg-gray-200/40"}>
        {/* Hero Title Section */}
        <div className="text-center">
          <h1 className="text-sm font-bold uppercase text-primary-color lg:text-4xl">
            Don't stay behind in race,{" "}
            <span className="px-2 py-0.5 font-extrabold text-yellow-600">
              We Got You Covered!
            </span>
          </h1>
          <p className="my-2 text-[0.5rem] font-bold text-gray-700 lg:text-xs">
            Remain ahead of competition, with latest news!
          </p>
          <Divider
            className={
              "mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-3 lg:h-1 lg:w-20"
            }
          />
        </div>

        {/* Hero Content Section */}
        <div className="flex flex-col justify-center rounded-md lg:flex-row">
          {/* Main News Display Section */}
          <div className="relative h-fit rounded-md">
            <img
              src={mainNews?.imageUrl}
              className="w-full lg:w-[41.5rem]"
              alt="Main News"
            />
            <div className="absolute inset-0 h-full rounded-md bg-black/80"></div>
            <div className="absolute left-10 top-24 flex flex-col justify-center gap-1 lg:top-[23rem]">
              <h5 className="w-fit border-l-2 border-yellow-600 px-2 text-xs font-extrabold text-primary-color brightness-[250%] lg:text-sm">
                {mainNews?.category}
              </h5>
              <h4 className="text-sm font-extrabold text-white lg:text-xl">
                {mainNews?.title}
              </h4>
              <p className="text-[0.6rem] font-light text-gray-400 lg:text-xs">
                {mainNews?.description?.length > 30
                  ? mainNews?.description?.substring(0, 30) + "..."
                  : mainNews?.description}
              </p>
              <FaArrowRight
                onClick={() => {
                  setIsOpen(true);
                  setNewsData(mainNews);
                }}
                className="float-right w-fit cursor-pointer rounded-full bg-primary-color p-1 text-lg text-white transition-all duration-200 hover:scale-125 lg:text-xl"
              />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="my-4 lg:my-0 lg:w-96">
            <Carousel
              slidesToShow={window.outerWidth > 800 ? 3 : 1}
              vertical={window.outerWidth > 800 ? true : false}
              autoplay
              infinite
              arrows
              dots={false}
              className="w-full lg:max-w-screen-sm"
            >
              {newsData?.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="relative"
                    onClick={() => {
                      setIsOpen(true);
                      setNewsData(elem);
                    }}
                  >
                    <img
                      src={elem?.imageUrl}
                      className="lg:h-40"
                      alt={elem?.title}
                    />
                    <div className="absolute inset-0 h-full rounded-md bg-black/80"></div>

                    <div className="absolute top-16 z-10 mx-4 lg:top-[25rem]">
                      <h5 className="w-fit border-l-2 border-yellow-600 px-2 text-xs font-extrabold text-primary-color brightness-[250%] lg:text-sm">
                        {elem?.category}
                      </h5>
                      <h4 className="my-1 text-[0.8rem] font-bold text-white lg:my-0 lg:text-xs">
                        {elem?.title}
                      </h4>
                      <p className="text-[0.6rem] font-light text-gray-400 lg:text-sm">
                        {elem?.description?.length > 30
                          ? elem?.description?.substring(0, 30) + "..."
                          : elem?.description}
                      </p>
                      <FaArrowRight className="w-fit cursor-pointer rounded-full bg-primary-color p-1 text-xl text-white transition-all duration-200 hover:scale-125 lg:text-lg" />
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

const TrendingNews = ({
  category,
  date,
  title,
  isTrending,
  image,
  description,
  id,
}) => {
  return (
    <div
      id={id}
      className="h-90 my-4 cursor-pointer p-2 shadow-lg transition-all duration-200 hover:scale-105"
    >
      <Flex align="center">
        <div className="w-fit">
          <img className="w-full" src={image} alt="No Image" />
          <div className="my-2 flex">
            <div className="rounded border bg-yellow-500 p-1 text-xs font-semibold text-white shadow-lg">
              {category}
            </div>
            <div className="mx-2 rounded border bg-yellow-500 p-1 text-xs font-semibold text-white shadow-lg">
              {date}
            </div>
          </div>
          <h2 className="text-sm font-bold text-gray-700">{title}</h2>
          <p className="my-2 text-xs font-light text-gray-700">
            {description?.length > 20
              ? description?.substring(0, 70) + "...."
              : description}
          </p>
          <div className="my-1 flex w-fit items-center p-1 text-sm font-normal text-primary-color shadow-sm shadow-gray-200 transition-all duration-300 hover:font-semibold hover:shadow-lg">
            {" "}
            <button id={id}>Read More</button>
            <MdArrowOutward className="mx-1" />{" "}
          </div>
        </div>
      </Flex>
    </div>
  );
};

const IndividualNewsModal = ({ isOpen, setIsOpen, data }) => {
  const { title, category, description, imageUrl, date } = data;
  return (
    <Modal footer={false} open={isOpen} onCancel={() => setIsOpen(false)}>
      <div className="p-5">
        <div className="my-2 w-fit rounded-l-full rounded-r-full bg-yellow-600 px-2 py-1 text-xs font-bold text-white">
          # {category}
        </div>
        <h1 className="py-2 text-2xl font-extrabold text-primary-color">
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
  );
};

export default Hero;
