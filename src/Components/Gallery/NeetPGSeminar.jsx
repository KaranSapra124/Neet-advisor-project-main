import { Carousel, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Divider from "../Helper/Divider";
import GlobalImageComponent from "../Helper/GlobalImageComponent";

const NeetPGSeminar = () => {
  let count = 0;
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
  const [isLoading, setIsLoading] = useState(true);
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
  const [partitions, setPartitions] = useState(getPartitions(images, 5));
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
          NEET PG{" "}
          <span className="font-extrabold italic text-primary-color">
            Info Sessions
          </span>
        </h1>
        <Divider className={"mx-auto h-1 w-12 rounded-full bg-yellow-600"} />
        <p className="text-sm font-bold text-gray-700">
          Through dedication and innovation, we have successfully conducted NEET
          PG seminars, <br /> setting new standards of excellence in medical
          education and preparation.
        </p>
      </div>

      {!isLoading ? (
        <div className={`flex max-w-screen-xl flex-col`}>
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

export default NeetPGSeminar;
