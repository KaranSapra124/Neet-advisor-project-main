import React, { useEffect, useRef, useState } from "react";
import Container from "../Helper/Container";

const WhoWeAre = () => {
  const mainImg = useRef(null);
  const [isChanged, setIsChanged] = useState(false);
  const [animation, setAnimation] = useState("animate-slideRight");
  const [gridAnimation, setGridAnimation] = useState("animate-slideOutUp");
  const [imageUrls, setImgUrls] = useState([
      "https://neetadvisor.com/assets/images/gallery/seminars/1.webp",
      "https://neetadvisor.com/assets/images/gallery/seminars/2.webp",
      "https://neetadvisor.com/assets/images/gallery/seminars/3.webp",
      "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
      "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
      "https://neetadvisor.com/assets/images/gallery/seminars/4.webp",
      "https://neetadvisor.com/assets/images/gallery/seminars/5.webp",
    
  ]);

  // Image auto-slide effect
  useEffect(() => {
    const imgIntervals = setInterval(() => {
      setAnimation("animate-slideOutLeft");
      setTimeout(() => {
        setImgUrls((prevUrls) => {
          const [first, ...rest] = prevUrls;
          return [...rest, first];
        });
        setAnimation("animate-slideRight");
      }, 500); // Sync with animation duration
    }, 3500);

    return () => clearInterval(imgIntervals);
  }, []);

  return (
    <>
      <Container className="relative bg-webinar-hero">
        {/* Background Overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-gray-100 via-gray-200 to-white opacity-90"></div>

        {/* Content */}
        <div className="relative mx-auto lg:px-4">
          <h1 className="text-center lg:text-3xl text-sm font-bold text-yellow-600">
            Our Vision{" "}
            <span className="font-extrabold text-primary-color">& Mission</span>
          </h1>
          <p className="lg:text-xs text-[0.5rem] text-gray-800  lg:my-4 my-2 text-center font-semibold mx-auto  max-w-sm leading-[1.4]">Our Vision is to empower individuals to achieve their fullest potential, and our Mission is to provide personalized guidance, resources, and support to help them succeed in their dream careers.</p>
          <div className="m-auto lg:my-4 my-2.5 lg:h-1 h-0.5 lg:w-20 w-12 rounded-full bg-yellow-600"></div>

          <div className="mx-auto flex lg:flex-row flex-col lg:max-w-screen-lg  lg:gap-0 gap-4    items-center lg:justify-evenly justify-center">
            <div className="grid w-fit grid-cols-1 overflow-hidden rounded-lg p-2 border-l-2 border-b-2 border-yellow-600 shadow">
              {/* Image Section */}
              <div className="flex flex-col">
                <div className="relative w-full">
                  <img
                    className={`lg:h-60 h-full  ${animation} ${animation !== "animate-slideOutLeft" ? "opacity-100" : "opacity-0"} rounded-lg object-cover shadow-md transition-all duration-500`}
                    ref={mainImg}
                    src={imageUrls[0]}
                    alt="Main"
                  />
                </div>
                <div
                  key={isChanged}
                  className={` ${animation !== "animate-slideOutLeft" ? "opacity-100" : "opacity-0"} mt-2 grid grid-cols-3 gap-2 transition-all duration-150`}
                >
                  {imageUrls.slice(1).map((url, index) => (
                    <img
                      key={index}
                      className="lg:h-28 w-full rounded-lg object-cover shadow-sm"
                      src={url}
                      alt={`Thumbnail ${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mission and Vision Section */}
            <div className="lg:space-y-8 space-y-4  ">
              <div className="lg:h-36 lg:w-96   hover:scale-110 transition-all cursor-pointer rounded-lg border-b-2 border-l-2 border-yellow-600 bg-gradient-to-tr from-white to-gray-300/50 px-4 py-2 shadow-lg">
                <img
                  src="./About/mission.gif"
                  className="mx-auto my-2 lg:h-8 lg:w-8 h-6 w-6 mb-4 rounded-full border bg-gray-200 shadow-md shadow-yellow-600"
                  alt=""
                />
                <p className="lg:text-xs text-[0.5rem] leading-[1.2] font-semibold text-gray-800">
                  To empower medical students to make lifelong, responsible, and
                  meaningful choices in a global and dynamic world. We will
                  accomplish this by building personal relationships in a
                  professional yet helping environment.
                </p>
              </div>

              <div className="lg:h-36 lg:w-96   hover:scale-110 transition-all cursor-pointer rounded-lg border-b-2 border-l-2 border-yellow-600 bg-gradient-to-tr from-white to-gray-300/50 px-4 py-2 shadow-lg">
                <img
                  src="./About/motivationGif.gif"
                  className="mx-auto my-2 lg:h-8 lg:w-8 w-6 h-6 mb-4 rounded-full border bg-gray-200 shadow-md shadow-yellow-600"
                  alt=""
                />
                <p className="lg:text-xs text-[0.5rem] font-semibold text-gray-800">
                  Be the most preferred choice for the medical students who are
                  goal-oriented, determined, and wish to pursue medical
                  education without any obstacles.
                </p>
              </div>

              <div className="lg:h-36 lg:w-96   hover:scale-110 transition-all cursor-pointer rounded-lg border-b-2 border-l-2 border-yellow-600 bg-gradient-to-tr from-white to-gray-300/50 px-4 py-2 shadow-lg">
                <img
                  src="./graduationCap.gif"
                  className="mx-auto my-2 lg:h-8 lg:w-8 w-6 lg:mb-4 mb-2 rounded-full border bg-gray-200 shadow-md shadow-yellow-600"
                  alt=""
                />
                <p className="lg:text-xs text-[0.5rem] font-semibold text-gray-800">
                  Be the most preferred choice for the medical students who are
                  goal-oriented, determined, and wish to pursue medical
                  education without any obstacles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhoWeAre;
