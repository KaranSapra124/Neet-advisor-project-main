import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonialsData] = useState([
    "📢 Your NEET score_ your dream college_ 🩺🏆 Let NEET Advisor guide you to the best medical college. Don_t miss your chance_enroll now _ make your med(.mp4",
    "Your trust in NEET Advisor fuels our passion to guide future doctors_ 🩺✨ Hear from our successful students and start your journey with expert counseli_1.mp4",
    "Your trust in NEET Advisor fuels our passion to guide future doctors_ 🩺✨ Hear from our successful students and start your journey with expert counselin(.mp4",
    "Your trust in NEET Advisor fuels our passion to guide future doctors_ 🩺✨ Hear from our successful students and start your journey with expert counselin(.mp4",
    "Your trust in NEET Advisor fuels our passion to guide future doctors_ 🩺✨ Hear from our successful students and start your journey with expert counselin(.mp4",
    "Your trust in NEET Advisor fuels our passion to guide future doctors_ 🩺✨ Hear from our successful students and start your journey with expert counselin(.mp4",

  ]);

  const [currentSlide, setCurrentSlide] = useState(1);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Play the current slide's video when active
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play().catch((error) => console.log("Autoplay failed:", error));
        } else {
          video.pause();
          video.currentTime = 0; // Reset video to start
        }
      }
    });
  }, [currentSlide]);

  return (
    <div className="bg-white py-10">
      <h1 className="text-center text-lg font-bold text-yellow-600 lg:text-3xl">
        What our customers are{" "}
        <span className="text-primary-color">saying about us?</span>
      </h1>

      <div className="mt-6 flex justify-center">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          spaceBetween={20}
          slidesPerView={3} // Ensure 3 slides are shown
          centeredSlides={true} // Center active slide
          loop={true}
          autoplay={{ delay: 20000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          effect={"coverflow"}
          grabCursor={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="max-w-screen-md"
        >
          {testimonialsData.map((video, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                videoUrl={video}
                isActive={index === currentSlide}
                videoRef={(el) => (videoRefs.current[index] = el)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const TestimonialCard = ({ videoUrl, isActive, videoRef }) => {
  return (
    <div
      className={`relative flex flex-col items-center rounded-lg text-white shadow-lg transition-all duration-500 ease-in-out ${
        isActive ? "scale-110 opacity-100" : "scale-90 opacity-60"
      }`}
    >
      <video
        ref={videoRef}
        className="w-full rounded-lg"
        muted={!isActive}
        autoPlay={false} // Autoplay is handled in useEffect
        loop
        controls
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Testimonials;
