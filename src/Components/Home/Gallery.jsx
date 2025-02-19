import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const imageUrls = [
  { "url": "https://neetadvisor.com/assets/images/gallery/country/6.webp", "imageAlt": "Image 1" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/7.webp", "imageAlt": "Image 2" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/8.webp", "imageAlt": "Image 3" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/9.webp", "imageAlt": "Image 4" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/10.webp", "imageAlt": "Image 5" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/6.webp", "imageAlt": "Image 1" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/7.webp", "imageAlt": "Image 2" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/8.webp", "imageAlt": "Image 3" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/9.webp", "imageAlt": "Image 4" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/10.webp", "imageAlt": "Image 5" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/6.webp", "imageAlt": "Image 1" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/7.webp", "imageAlt": "Image 2" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/8.webp", "imageAlt": "Image 3" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/9.webp", "imageAlt": "Image 4" },
  { "url": "https://neetadvisor.com/assets/images/gallery/country/10.webp", "imageAlt": "Image 5" },
];

const Gallery = () => {
  const [images, setImages] = useState(
    imageUrls.map((img, i) => ({ ...img, id: i })),
  );

  const shuffleImages = () => {
    // Shuffle logic to move the first image to the end
    setImages((prevImages) => {
      const shuffled = [...prevImages];
      const firstImage = shuffled.shift(); // Remove the first image
      shuffled.push(firstImage); // Add it to the end
      return shuffled; // Return the new array
    });
  };

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      shuffleImages();
    }, 3000); // Shuffle every 5 seconds

    return () => clearInterval(shuffleInterval);
  }, []);

  return (
    <Container>
      <div className="mx-auto w-full">
        <h1 className="py-2 text-center lg:text-3xl text-[0.7rem] font-bold text-yellow-600">
          Conceptualizing{" "}
          <span className="font-extrabold text-primary-color">
            NEET Counselling
          </span>{" "}
          Easy Way
        </h1>

        <p className="mx-auto lg:mb-8 lg:w-[42rem]  text-center text-[0.4rem] font-bold text-gray-700">
          Our team has developed a set of webinars/seminars and workshops
          exclusively for students aspiring for a successful career in medicine.
          These thoughtfully crafted sessions will cover a wide range of topics
          that will address concerns, answer queries, and clarify doubts of both
          students and parents.
        </p>
        <Divider
            className={"mx-auto my-4 h-1 lg:w-20 w-12 rounded-full bg-yellow-600"}
          />

        <div className="mx-auto grid w-fit grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-4">
          <AnimatePresence>
            {images.slice(0, 12).map(
              (
                image, // Limit to first 8 images
              ) => (
                <motion.div
                  key={image.id}
                  // initial={{ opacity: 0, y: -20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-fit overflow-hidden rounded-lg shadow-lg"
                  layout // Enables layout animations
                >
                  <img
                    loading="lazy"
                    src={image.url}
                    className="lg:h-32 h-20 lg:w-60 lg:object-cover"
                    alt=""
                  />
                </motion.div>
              ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
