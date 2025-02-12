import React, { useState } from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Carousel, Modal } from "antd";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  const [blog_Data, setBlogData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const blogData = [
    {
      title: "5 Tips for NEET Counselling Success",
      description:
        "NEET counselling can be overwhelming. Here are 5 essential tips that will help you make the best decisions during the process.",
      image_url: "https://picsum.photos/800/400?random=1",
      date: "2025-02-01",
      author: "Dr. John Doe",
    },
    {
      title: "Understanding the NEET Counselling Process: A Step-by-Step Guide",
      description:
        "Confused about how NEET counselling works? This post will walk you through each step of the process, from registration to seat allotment.",
      image_url: "https://picsum.photos/800/400?random=2",
      date: "2025-01-29",
      author: "Dr. Jane Smith",
    },
    {
      title: "How to Choose the Right Medical College After NEET",
      description:
        "Choosing the right medical college after NEET is crucial for your career. Here's how to evaluate your options and select the one that suits your needs.",
      image_url: "https://picsum.photos/800/400?random=3",
      date: "2025-01-28",
      author: "Dr. Michael Brown",
    },
    {
      title: "Common Mistakes to Avoid During NEET Counselling",
      description:
        "Don't make these common mistakes during NEET counselling that could affect your chances of securing your desired medical college.",
      image_url: "https://picsum.photos/800/400?random=4",
      date: "2025-01-25",
      author: "Dr. Sarah Lee",
    },
    {
      title: "How NEET Counselling Affects Your Future Medical Career",
      description:
        "Your choice during NEET counselling can shape your medical career. Learn how your seat allocation can influence your future success.",
      image_url: "https://picsum.photos/800/400?random=5",
      date: "2025-01-20",
      author: "Dr. David Wilson",
    },
    {
      title: "The Importance of Document Verification in NEET Counselling",
      description:
        "Document verification is a crucial step in NEET counselling. Learn what documents are needed and how to ensure everything is in order.",
      image_url: "https://picsum.photos/800/400?random=6",
      date: "2025-01-15",
      author: "Dr. Emily Davis",
    },
    {
      title: "How to Stay Calm During NEET Counselling",
      description:
        "Feeling anxious during NEET counselling is normal. Here are a few tips to help you stay calm and make informed decisions.",
      image_url: "https://picsum.photos/800/400?random=7",
      date: "2025-01-10",
      author: "Dr. Chris Adams",
    },
  ];

  const handleOpenNews = (data) => {
    setIsOpen(true);
    setBlogData(data);
  };
  return (
    <>
      {isOpen && (
        <BlogModal
          data={blog_Data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          key={isOpen}
        />
      )}
      <Container className={"bg-gray-200/40"}>
        <h1 className="border-l-2 border-yellow-600 px-2 text-3xl font-bold uppercase text-primary-color">
          Latest <span className="font-extrabold text-yellow-600">Blogs</span>
        </h1>
        <Divider className={"my-4 h-1 w-20 rounded-full bg-yellow-600"} />
        <div className="my-4">
          <Carousel
            slidesToShow={4}
            dots={false}
            autoplay
            infinite
            autoplaySpeed={2500}
          >
            {blogData?.map((elem, index) => {
              return (
                <div className="relative">
                  <img
                    src={elem?.image_url}
                    className="h-40"
                    alt={elem?.title}
                  />
                  <div className="absolute inset-0 h-full rounded-md bg-black/80"></div>

                  <div className="absolute top-20 z-10 mx-4 border-l-2 border-yellow-600">
                    {/* <h5 className="w-fit border-l-2 border-yellow-600 px-2 font-extrabold text-primary-color brightness-[350%]">
                      {elem?.category}
                    </h5> */}
                    <h4 className="mx-2 text-xs line-clamp-1 font-bold text-white">
                    {elem?.title}
                    </h4>
                    <p className="mx-2 text-xs font-light line-clamp-1 text-gray-400">
                      {/* {elem?.description?.length > 30
                        ? elem?.description?.substring(0, 30) + "..."
                        : elem?.description} */}
                        {elem?.description}
                    </p>
                    <FaArrowRight
                      onClick={() => handleOpenNews(elem)}
                      className="mx-2 my-1 w-fit cursor-pointer rounded-full bg-primary-color p-1 text-lg text-white transition-all duration-200 hover:scale-125"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

const BlogModal = ({ data, setIsOpen, isOpen }) => {
  const { title, description, image_url, date, author } = data;

  return (
    <Modal 
      footer={false} 
      open={isOpen} 
      onCancel={() => setIsOpen(false)}
      className="rounded-lg"
    >
      <div className="p-6 bg-white rounded-lg shadow-xl">
        {/* Category Badge */}
        <div className="my-2 w-fit rounded-full bg-yellow-600 px-3 py-1 text-xs font-bold text-white shadow-md">
          # Category
        </div>

        {/* Title */}
        <h1 className="py-2 text-2xl font-extrabold bg-primary-color bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Image */}
        <img
          src={image_url}
          className="h-60 w-full rounded-md object-cover shadow-lg"
          alt={title}
        />

        {/* Author & Date */}
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <p className="flex items-center">
            ✍️ <span className="ml-1 italic font-medium">{author}</span>
          </p>
          <p className="flex items-center">
            📅 <span className="ml-1 italic font-medium">{date}</span>
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </Modal>
  );
};

export default Blog;
