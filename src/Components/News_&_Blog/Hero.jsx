import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import { Badge, Carousel, Flex, Modal } from "antd";
import Divider from "../Helper/Divider";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [mainNews, setMainNews] = useState(0);
  const [news_Data, setNewsData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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
    // setMainNews(newsData?.find((elem) => elem?.isTrending === true));
    const loadedInterval = setTimeout(() => {
      setIsLoaded((prev) => !prev);
    }, 1500);
    return () => clearTimeout(loadedInterval);
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
      {/* <Container className={"relative bg-gray-200/40"}> */}
      <div className="relative">
        <div className="absolute inset-0 z-[99] h-full bg-black/60">
          <h1 className="py-4 text-center text-lg font-extrabold text-white lg:text-3xl">
            {newsData[mainNews]?.title}
          </h1>
          <div className="max-w-screen-xl mx-auto flex h-full items-center justify-between">
            <div className="max-w-lg">
              <p className="text-sm font-extralight text-white">
                {newsData[mainNews]?.description}
              </p>
              <button
                onClick={() => {
                  setNewsData(newsData[mainNews]);
                  setIsOpen(true);
                }}
                className="my-2 rounded bg-yellow-600 px-1.5 py-1 text-sm font-semibold text-white"
              >
                More
              </button>
            </div>
            <div className="ml-auto max-w-lg">
              {isLoaded && (
                <>
                  <Carousel
                    prevArrow={<FaArrowLeft />}
                    nextArrow={<FaArrowRight />}
                    className="news-carousel"
                    afterChange={() =>
                      setMainNews((prev) =>
                        prev !== newsData?.length - 1 ? prev + 1 : 0,
                      )
                    }
                    dots={true}
                    arrows={true}
                    slidesToShow={3}
                    autoplay
                    autoplaySpeed={2000}
                  >
                    {newsData?.map((elem, index) => {
                      return (
                        <div className="relative rounded-md border border-white">
                          <img src={elem?.imageUrl} alt={elem?.title} />
                          <div className="absolute inset-0 z-[999] h-full w-full rounded-md bg-gray-900/60">
                            <h1 className="mt-6 p-2 text-center text-xs font-semibold text-white">
                              {elem?.title}
                            </h1>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </>
              )}
            </div>
          </div>
        </div>
        <img
          className="h-96 rounded-none"
          src={newsData[mainNews]?.imageUrl}
          alt=""
          srcset=""
        />
      </div>
      {/* </Container> */}
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
