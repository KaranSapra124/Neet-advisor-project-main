import React, { useEffect, useState, useRef } from "react";
import { TiPin } from "react-icons/ti";

const ImageSection = () => {
  const [images, setImages] = useState([
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/6.webp",
      imageAlt: "Image 1",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/7.webp",
      imageAlt: "Image 2",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/8.webp",
      imageAlt: "Image 3",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/9.webp",
      imageAlt: "Image 4",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/10.webp",
      imageAlt: "Image 5",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/6.webp",
      imageAlt: "Image 6",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/7.webp",
      imageAlt: "Image 7",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/8.webp",
      imageAlt: "Image 8",
    },
    {
      imageUrl: "https://neetadvisor.com/assets/images/gallery/country/9.webp",
      imageAlt: "Image 9",
    },
  ]);

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(4); // Center index
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationMode, setAnimationMode] = useState("rotate"); // 'rotate', 'shuffle', 'wave'
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [autoplayActive, setAutoplayActive] = useState(true);

  // Animation variants
  const animationModes = ["rotate", "shuffle", "wave", "bloom"];

  // Change animation mode randomly
  useEffect(() => {
    const modeChangeInterval = setInterval(() => {
      if (autoplayActive) {
        const randomMode =
          animationModes[Math.floor(Math.random() * animationModes.length)];
        setAnimationMode(randomMode);

        // Occasionally reverse direction
        if (Math.random() > 0.7) {
          setDirection((prev) => prev * -1);
        }
      }
    }, 12000); // Change animation mode every 12 seconds

    return () => clearInterval(modeChangeInterval);
  }, [autoplayActive]);

  // Auto rotate images
  useEffect(() => {
    if (!autoplayActive) return;

    const rotationInterval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);

        setTimeout(() => {
          setCurrentIndex((prevIndex) => {
            const newIndex =
              (prevIndex + direction + images.length) % images.length;
            return newIndex;
          });

          setTimeout(() => {
            setIsAnimating(false);
          }, 500);
        }, 100);
      }
    }, 3000);

    return () => clearInterval(rotationInterval);
  }, [isAnimating, images.length, direction, autoplayActive]);

  // Get animation style for each position
  const getPositionStyle = (index) => {
    // Calculate relative position (distance from current)
    const positions = images.length;
    let relativePos = (index - currentIndex + positions) % positions;

    // Ensure we use the shortest path around the circle
    if (relativePos > positions / 2) {
      relativePos = relativePos - positions;
    }

    // Base values
    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    let opacity = 1;
    let rotate = 0;
    let zIndex = 50 - Math.abs(relativePos) * 10;

    // Different animation styles based on mode
    switch (animationMode) {
      case "rotate":
        // Circular positioning
        const radius = 150;
        const angle = (relativePos * Math.PI) / 4; // Distribute around half circle
        translateX = Math.sin(angle) * radius;
        translateY = -Math.cos(angle) * radius * 0.5; // Flatten to oval
        scale = 1 - Math.abs(relativePos) * 0.15;
        opacity = relativePos === 0 ? 1 : 0.7 - Math.abs(relativePos) * 0.1;
        break;

      case "shuffle":
        // Stacked card-like effect
        translateX = relativePos * 60;
        translateY = Math.abs(relativePos) * 10;
        scale = 1 - Math.abs(relativePos) * 0.08;
        opacity = relativePos === 0 ? 1 : 0.9 - Math.abs(relativePos) * 0.15;
        rotate = relativePos * -5; // Slight rotation for each card
        break;

      case "wave":
        // Wavy pattern
        translateX = relativePos * 100;
        translateY = Math.sin(relativePos * 0.8) * 50;
        scale = 1 - Math.abs(relativePos) * 0.1;
        opacity = relativePos === 0 ? 1 : 0.8 - Math.abs(relativePos) * 0.1;
        rotate = Math.sin(relativePos * 0.8) * 10;
        break;

      case "bloom":
        // Flower-like pattern
        const bloomRadius = Math.abs(relativePos) === 0 ? 0 : 120;
        const bloomAngle = (relativePos * Math.PI * 2) / 8;
        translateX = Math.sin(bloomAngle) * bloomRadius;
        translateY = Math.cos(bloomAngle) * bloomRadius;
        scale = relativePos === 0 ? 1.2 : 0.8;
        opacity = relativePos === 0 ? 1 : 0.7;
        rotate = relativePos * 15;
        break;
    }

    // Only show a subset of images for cleaner display
    if (Math.abs(relativePos) > 4) {
      opacity = 0;
      zIndex = -1;
    }

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      opacity,
      zIndex,
      transition: `all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)`, // Bouncy easing
    };
  };

  // Handle manual navigation
  const navigate = (direction) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(direction);

      setTimeout(() => {
        setCurrentIndex(
          (prev) => (prev + direction + images.length) % images.length,
        );
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 100);
    }
  };

  // Random color generator for highlights
  const getRandomHighlightColor = () => {
    const colors = [
      "ring-yellow-500",
      "ring-blue-500",
      "ring-purple-500",
      "ring-pink-500",
      "ring-emerald-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="mx-auto w-full py-8">
      <div className="relative flex h-[30rem] items-center justify-center overflow-hidden">
        {/* Background elements for visual interest */}
        <div className="absolute h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100/20 to-purple-200/20 blur-xl"></div>
          <div className="absolute left-1/3 top-1/3 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-100/30 to-pink-200/30 blur-lg"></div>
        </div>

        {/* Image container */}
        <div
          ref={containerRef}
          className="relative flex h-full w-full items-center justify-center"
        >
          {images.map((image, index) => {
            const style = getPositionStyle(index);
            const isCurrent = index === currentIndex;
            const highlightColor = getRandomHighlightColor();

            return (
              <div
                key={`${image.imageAlt}-${index}`}
                className={`absolute cursor-pointer rounded-lg shadow-xl transition-all   `}
                style={{
                  ...style,
                  width: "20rem",
                  height: "20rem",
                }}
                onClick={() => {
                  if (!isCurrent && !isAnimating) {
                    setAutoplayActive(false);
                    const clickDirection =
                      (index - currentIndex + images.length) % images.length >
                      images.length / 2
                        ? -1
                        : 1;
                    navigate(clickDirection);
                  }
                }}
              >
                {/* {isCurrent && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
                    <TiPin className="text-red-500 text-3xl filter drop-shadow-md" />
                  </div>
                )} */}
                <img
                  src={image.imageUrl}
                  alt={image.imageAlt}
                  className={`h-full w-full rounded-lg transition-all ${
                    isCurrent ? "contrast-105 brightness-105" : "brightness-90"
                  }`}
                />

                {/* Image frame effect */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg border-2 border-white/30 ${isCurrent ? "bg-gradient-to-t from-black/10 to-transparent" : ""}`}
                ></div>

                {/* Caption for center image */}
                {isCurrent && (
                  <div className="absolute bottom-0 left-0 right-0 transform rounded-b-lg bg-black/60 p-2 text-center text-sm font-medium text-white transition-transform duration-300">
                    {image.imageAlt}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-primary-color px-4 py-2 text-white transition-colors hover:bg-opacity-90"
        >
          Previous
        </button>

        <button
          onClick={() => setAutoplayActive(!autoplayActive)}
          className={`rounded-lg px-4 py-2 transition-colors ${
            autoplayActive
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {autoplayActive ? "Pause" : "Play"}
        </button>

        <button
          onClick={() => navigate(1)}
          className="rounded-lg bg-primary-color px-4 py-2 text-white transition-colors hover:bg-opacity-90"
        >
          Next
        </button>

        <select
          value={animationMode}
          onChange={(e) => {
            setAnimationMode(e.target.value);
            setAutoplayActive(false);
          }}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700"
        >
          <option value="rotate">Rotate</option>
          <option value="shuffle">Shuffle</option>
          <option value="wave">Wave</option>
          <option value="bloom">Bloom</option>
        </select>
      </div>
    </div>
  );
};

export default ImageSection;
