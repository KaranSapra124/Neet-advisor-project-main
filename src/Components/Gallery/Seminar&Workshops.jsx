import { Carousel, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Divider from "../Helper/Divider";

const SeminarAndWorkshops = () => {
  let count = 0;
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
      imageAlt: "No Image",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
      imageAlt: "No Image",
    },
  ]);
  const getPartitions = (arr, num) => {
    let nums = [0];
    for (let i = 1; i < arr.length; i++) {
      if (i % num !== 0) {
        count++;
      } else {
        nums.push(count);
        count++;
      }
    }
    return nums;
  };
  const [partitions, setPartitions] = useState(getPartitions(images, 4));
  useEffect(() => {
    const loadingInterval = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingInterval, 2500);
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Elegant Header */}
      <div className="mb-5 space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-yellow-600">
          Seminar And{" "}
          <span className="font-extrabold italic text-primary-color">
            Workshops
          </span>
        </h1>
        <Divider className={"mx-auto h-1 w-12 bg-yellow-600 rounded-full "} />
        <p className="whitespace-pre-wrap text-sm font-bold text-gray-700">
          Through dedication and innovation, we have successfully hosted
          impactful seminars and workshops, <br /> setting new standards of
          excellence in education and professional development.
        </p>
      </div>

      {!isLoading ? (
        <div
          className={`grid grid-cols-${partitions?.length - 1} max-w-screen-xl`}
        >
          {partitions?.map((_, index) => {
            return (
              <Carousel
                autoplay
                autoplaySpeed={2000}
                rtl={index % 2 === 0 ? true : false}
                dots={false}
                vertical={true}
                slidesToShow={3}
                infinite
              >
                {images
                  ?.slice(
                    partitions[index],
                    index + 1 < partitions.length
                      ? partitions[index + 1] + 1
                      : partitions.length,
                  )
                  ?.map((ele, ind) => {
                    // {console.log(ele,ind,"FIRST")}
                    return (
                      <img className="m-2 h-64 w-64" src={ele?.imageUrl} />
                    );
                  })}
              </Carousel>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Spin className="m-aut" />
        </div>
      )}
    </div>
  );
};

export default SeminarAndWorkshops;
