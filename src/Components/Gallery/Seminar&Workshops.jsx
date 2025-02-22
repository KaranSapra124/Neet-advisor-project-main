import { Carousel, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Divider from "../Helper/Divider";
import GlobalImageComponent from "../Helper/GlobalImageComponent";

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
      <div className="mb-5 space-y-2 text-center lg:space-y-4">
        <h1 className="text-sm font-bold tracking-tight text-yellow-600 lg:text-3xl">
          Seminar And{" "}
          <span className="font-extrabold italic text-primary-color">
            Workshops
          </span>
        </h1>
        <Divider
          className={"mx-auto h-0.5 w-12 rounded-full bg-yellow-600 lg:h-1"}
        />
        <p className="whitespace-pre-wrap lg:text-xs text-[0.5rem] font-bold text-gray-700">
          Through dedication and innovation, we have successfully hosted
          impactful seminars and workshops.
        </p>
      </div>

      {!isLoading ? (
        <div className={`lg:max-w-screen-xl`}>
          <GlobalImageComponent image={images} />
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
