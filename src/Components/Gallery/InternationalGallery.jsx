import React, { useEffect, useState } from "react";
import Container from "../Helper/Container";
import "./Gallery.css";
import { BsZoomIn } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Carousel, Spin } from "antd";
import Divider from "../Helper/Divider";
import GlobalImageComponent from "../Helper/GlobalImageComponent";

const InternationalGallery = () => {
  let count = 0;
  const [isLoading, setIsLoading] = useState(false);
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
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const loadingInterval = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingInterval, 2500);
  }, []);

  return (
    // <Container>
    <div className=" mx-auto px-4">
      {/* Elegant Header */}
      <div className="mb-5 space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-yellow-600">
          Explore Our{" "}
          <span className="font-extrabold italic text-primary-color">
            Achievements
          </span>
        </h1>
        <Divider className={"mx-auto h-1 w-12 rounded-full bg-yellow-600"} />
        <p className="mx-auto w-full text-xs font-bold text-gray-700">
          Through dedication and innovation, we have successfully achieved
          greater heights in education.
        </p>
      </div>

      {!isLoading ? (
        <div className={`flex max-w-screen-xl flex-col`}>
          <GlobalImageComponent image={images} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Spin className="m-auto" />
        </div>
      )}
    </div>
    // </Container>
  );
};

export default InternationalGallery;
