import React from "react";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { Carousel } from "antd";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  const blogData = [
    {
      title: "5 Tips for NEET Counselling Success",
      description:
        "NEET counselling can be overwhelming. Here are 5 essential tips that will help you make the best decisions during the process.",
      image_url: "https://picsum.photos/800/400?random=1",
    },
    {
      title: "Understanding the NEET Counselling Process: A Step-by-Step Guide",
      description:
        "Confused about how NEET counselling works? This post will walk you through each step of the process, from registration to seat allotment.",
      image_url: "https://picsum.photos/800/400?random=2",
    },
    {
      title: "How to Choose the Right Medical College After NEET",
      description:
        "Choosing the right medical college after NEET is crucial for your career. Here's how to evaluate your options and select the one that suits your needs.",
      image_url: "https://picsum.photos/800/400?random=3",
    },
    {
      title: "Common Mistakes to Avoid During NEET Counselling",
      description:
        "Don't make these common mistakes during NEET counselling that could affect your chances of securing your desired medical college.",
      image_url: "https://picsum.photos/800/400?random=4",
    },
    {
      title: "How NEET Counselling Affects Your Future Medical Career",
      description:
        "Your choice during NEET counselling can shape your medical career. Learn how your seat allocation can influence your future success.",
      image_url: "https://picsum.photos/800/400?random=5",
    },
    {
      title: "The Importance of Document Verification in NEET Counselling",
      description:
        "Document verification is a crucial step in NEET counselling. Learn what documents are needed and how to ensure everything is in order.",
      image_url: "https://picsum.photos/800/400?random=6",
    },
    {
      title: "How to Stay Calm During NEET Counselling",
      description:
        "Feeling anxious during NEET counselling is normal. Here are a few tips to help you stay calm and make informed decisions.",
      image_url: "https://picsum.photos/800/400?random=7",
    },
  ];

  return (
    <>
      <Container className={'bg-gray-200/40'}>
        <h1 className="border-l-2 border-yellow-600 px-2 text-3xl font-bold uppercase text-primary-color">
          Latest <span className="font-extrabold text-yellow-600">Blogs</span>
        </h1>
        <Divider className={"my-4 h-1 w-20 rounded-full bg-yellow-600"} />
        <div className="my-4">
          <Carousel slidesToShow={4} dots={false}  autoplay infinite autoplaySpeed={2500}>
            {blogData?.map((elem, index) => {
              return (
                <div className="relative ">
                  <img
                    src={elem?.image_url}
                    className="h-40"
                    alt={elem?.title}
                  />
                  <div className="absolute inset-0 h-full rounded-md bg-black/80"></div>

                  <div className="absolute top-20 z-10 mx-4 border-l-2 border-yellow-600 ">
                    {/* <h5 className="w-fit border-l-2 border-yellow-600 px-2 font-extrabold text-primary-color brightness-[350%]">
                      {elem?.category}
                    </h5> */}
                    <h4 className="text-xs mx-2 font-bold text-white">
                      {elem?.title?.length > 40
                        ? elem?.title?.substring(0, 40) + "..."
                        : elem?.title}
                    </h4>
                    <p className="font-light text-xs mx-2 text-gray-400">
                      {elem?.description?.length > 30
                        ? elem?.description?.substring(0, 30) + "..."
                        : elem?.description}
                    </p>
                    <FaArrowRight className="w-fit mx-2 my-1 cursor-pointer rounded-full bg-primary-color p-1 text-lg text-white transition-all duration-200 hover:scale-125" />
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

export default Blog;
