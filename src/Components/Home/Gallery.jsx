import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";

const imageUrls = [
  { url: "https://picsum.photos/id/10/200/300.webp" },
  { url: "https://picsum.photos/id/20/200/300.webp" },
  { url: "https://picsum.photos/id/30/200/300.webp" },
  { url: "https://picsum.photos/id/40/200/300.webp" },
  { url: "https://picsum.photos/id/50/200/300.webp" },
  { url: "https://picsum.photos/id/60/200/300.webp" },
  { url: "https://picsum.photos/id/70/200/300.webp" },
  { url: "https://picsum.photos/id/80/200/300.webp" },
  { url: "https://picsum.photos/id/90/200/300.webp" },
  { url: "https://picsum.photos/id/100/200/300.webp" },
  { url: "https://picsum.photos/id/110/200/300.webp" },
  
  { url: "https://picsum.photos/id/160/200/300.webp" },
  { url: "https://picsum.photos/id/170/200/300.webp" },
  { url: "https://picsum.photos/id/180/200/300.webp" },
  { url: "https://picsum.photos/id/190/200/300.webp" },
  { url: "https://picsum.photos/id/200/200/300.webp" }
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
        <h1 className="py-2 text-center text-3xl font-bold text-yellow-600">
          Conceptualizing{" "}
          <span className="font-extrabold text-primary-color">
            NEET Counselling
          </span>{" "}
          Easy Way
        </h1>

        <p className="mx-auto mb-8 w-[42rem] text-center text-xs font-bold text-gray-700">
          Our team has developed a set of webinars/seminars and workshops
          exclusively for students aspiring for a successful career in medicine.
          These thoughtfully crafted sessions will cover a wide range of topics
          that will address concerns, answer queries, and clarify doubts of both
          students and parents.
        </p>
        <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          />

        <div className="mx-auto grid w-fit grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
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
                    className="h-32 w-60 object-cover"
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
