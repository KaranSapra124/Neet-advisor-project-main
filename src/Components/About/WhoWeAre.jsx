import React, { useEffect, useRef, useState } from "react";
import Container from "../Helper/Container";

const WhoWeAre = () => {
  const mainImg = useRef(null);
  const [isChanged, setIsChanged] = useState(false);
  const [imageUrls, setImgUrls] = useState([
    "https://assets.codepen.io/1506195/unsplash-1.jpg",
    "https://assets.codepen.io/1506195/unsplash-7.jpg",
    "https://assets.codepen.io/1506195/unsplash-3.jpg",
    "https://assets.codepen.io/1506195/unsplash-2.jpg",
    "https://assets.codepen.io/1506195/unsplash-6.jpg",
    "https://assets.codepen.io/1506195/unsplash-0.jpg",
    "https://assets.codepen.io/1506195/unsplash-8.jpg",
  ]);

  // Image auto-slide effect
  useEffect(() => {
    const imgIntervals = setInterval(() => {
      setIsChanged((prev) => !prev);
      setImgUrls((prevUrls) => {
        const [first, ...rest] = prevUrls;
        return [...rest, first];
      });
    }, 3500);

    return () => clearInterval(imgIntervals);
  }, []);

  return (
    <>
      <Container className="relative bg-webinar-hero ">
        {/* Background Overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-gray-100 via-gray-200 to-white opacity-90"></div>

        {/* Content */}
        <div className="relative mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-primary-color">
            Our Vision{" "}
            <span className="font-extrabold text-yellow-600">& Mission</span>
          </h1>
          <div className="m-auto my-5 h-1 w-20 rounded-full bg-yellow-600"></div>

          <div className="mx-auto flex max-w-screen-lg items-center justify-evenly">
            <div className="grid w-fit grid-cols-1 overflow-hidden rounded-lg p-2 shadow-md shadow-primary-color">
              {/* Image Section */}
              <div className="flex flex-col">
                <div className="relative w-full max-w-md">
                  {/* <div className="flex flex-row">
                    {" "}
                    {/* <img
                      className="animate-slideOutLeft h-44  rounded-lg object-cover shadow-md"
                      ref={mainImg}
                      src={imageUrls[imageUrls?.length - 1]}
                      alt="Main"
                      key={isChanged}
                    /> */}
                  {/* </div> */} 
                    <img
                      className="h-44 w-full animate-slideRight rounded-lg object-cover shadow-md"
                      ref={mainImg}
                      src={imageUrls[0]}
                      alt="Main"
                      key={isChanged}
                    />
                </div>
                <div
                  key={isChanged}
                  className="animate-slideUp mt-2 grid grid-cols-3 gap-2"
                >
                  {imageUrls.slice(1).map((url, index) => (
                    <img
                      key={index}
                      className="h-16 w-full rounded-lg object-cover shadow-sm"
                      src={url}
                      alt={`Thumbnail ${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mission and Vision Section */}
            <div className="space-y-9">
              <div className="h-36 w-96 rounded-lg border-b-2 border-l-2 border-yellow-600 bg-white px-4 py-2 shadow-lg">
                <img
                  src="./About/mission.gif"
                  className="mx-auto my-2 h-10 w-10 rounded-full border bg-gray-200 shadow-md shadow-yellow-600"
                  alt=""
                  srcset=""
                />

                <p className="text-xs font-semibold text-gray-700">
                  To empower medical students to make lifelong, responsible, and
                  meaningful choices in a global and dynamic world. We will
                  accomplish this by building personal relationships in a
                  professional yet helping environment.
                </p>
              </div>

              <div className="h-36 w-96 rounded-lg border-b-2 border-l-2 border-yellow-600 bg-white px-4 py-2 shadow-lg">
                <img
                  src="./About/motivationGif.gif"
                  className="mx-auto my-2 h-10 w-10 rounded-full border bg-gray-200 shadow-md shadow-yellow-600"
                  alt=""
                  srcset=""
                />
                <p className="text-xs font-semibold text-gray-700">
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
