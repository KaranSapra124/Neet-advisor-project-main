import React, { useEffect, useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Collapse } from "antd";

import Container from "../Helper/Container";
import Divider from "../Helper/Divider"

const WhyUsSection = () => {
  const [activeKey, setActiveKey] = useState([1]);
  const [random, setRandom] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  const images = [
    "https://neetadvisor.com/assets/images/gallery/international/6.webp",
    "https://neetadvisor.com/assets/images/gallery/international/5.webp",
    "https://neetadvisor.com/assets/images/gallery/international/4.webp",
    "https://neetadvisor.com/assets/images/gallery/international/3.webp",
    "https://neetadvisor.com/assets/images/gallery/international/2.webp",
    "https://neetadvisor.com/assets/images/gallery/international/1.webp",
    "https://neetadvisor.com/assets/images/gallery/international/7.webp",
  ];

  const services = [
    {
      key: 1,
      icon: "graduationCap.gif",
      label: "Identifying Student's Aspirations",
      children:
        "Pooling their expertise and strengths, our NEET Advisors have set up accessible platforms to help identify students' aspirations effectively.",
    },
    {
      key: 2,
      icon: "taskGif.gif",
      label: "Shortlisting of Success",
      children:
        "Based on your inputs, like NEET exam score, a personalized report is crafted to help you choose the best medical colleges.",
    },
    {
      key: 3,
      icon: "teachingGif.gif",
      label: "One-to-One Counselling Sessions",
      children:
        "Engage in intensive one-to-one sessions with our NEET Advisor to resolve all your queries about NEET counselling.",
    },
    {
      key: 4,
      icon: "motivationGif.gif",
      label: "Complete Tracking & Monitoring",
      children:
        "At NEET Advisor, we guide you throughout the entire NEET Counselling process until you secure admission to your desired medical college.",
    },
  ];

  const handleCollapseChange = (key) => {
    setActiveKey(key);
  };

  // Function to restart animations
  const restartAnimations = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    // Randomize the highlighted service icon every 3 seconds
    const randomInterval = setInterval(() => {
      setRandom(Math.floor(Math.random() * services.length));
    }, 3000);

    // Restart animations every 35 seconds
    const animationInterval = setInterval(() => {
      restartAnimations();
    }, 38000);

    return () => {
      clearInterval(randomInterval);
      clearInterval(animationInterval);
    };
  }, [services.length]);

  // Observer to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          restartAnimations();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <div ref={sectionRef} key={animationKey} className="mx-auto">
        {/* Header Section */}
        <div className="lg:my-8 my-4 text-center">
          <h1 className="mb-2  lg:text-3xl text-lg font-bold text-yellow-600">
            Why{" "}
            <span className="font-extrabold  text-primary-color">
              NEET Advisor?
            </span>
          </h1>
          <p className="lg:text-xs text-[0.5rem]  lg:w-96 mx-auto text-gray-700 font-bold">
            Unlock Your Success in 4 Simple Steps with our <strong>NEET</strong>{" "}
            Counselling Guidance.
          </p>
          <Divider
            className={"mx-auto my-4 h-1 lg:w-20 w-10 rounded-full bg-yellow-600"}
          />
        </div>
        {/* Main Content Section */}
        <div className="mx-auto flex lg:max-w-screen-lg flex-col items-center justify-center lg:flex-row">
          {/* Left Image Section */}
          <div className="w-full  lg:ml-32 lg:w-1/2">
            <ScrollAnimation
              initiallyVisible
              animateIn="fadeInLeft"
              duration={1}

            >
              <div className="why-us-gallery rounded-lg">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                  />
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Accordion Section */}
          <div className=" w-full lg:space-y-6 space-y-3 lg:mt-0 my-4   lg:w-1/2">
            {services.map((service, index) => (
              <ScrollAnimation
                initiallyVisible
                key={service.key}
                animateIn="fadeInRight"
                delay={index * 100}
                className="w-full"
              >
                <Collapse
                  rootClassName="shadow-lg"
                  size="small"
                  items={[
                    {
                      ...service,
                      label: (
                        <div className="flex  items-center gap-2">
                          <div
                            className={`rounded-lg ${
                              random === index &&
                              "border-2 border-yellow-600 transition-all"
                            } bg-gray-100 p-2 shadow-sm transition-transform duration-300 hover:scale-110`}
                          >
                            <img className="lg:w-10 w-8" src={service?.icon} />
                          </div>
                          <span
                            className={`lg:text-lg text-[0.7rem] ${
                              index === random ? "font-extrabold" : "font-bold"
                            } text-gray-600  transition-colors group-hover:text-yellow-600`}
                          >
                            {service.label}
                          </span>
                        </div>
                      ),
                      children: (
                        <div className="rounded-lg bg-gray-50 lg:p-4 p-2  shadow-inner">
                          <p className="font-medium lg:text-sm text-[0.5rem] leading-relaxed text-gray-700">
                            {service.children}
                          </p>
                        </div>
                      ),
                    },
                  ]}
                  activeKey={activeKey}
                  accordion
                  onChange={handleCollapseChange}
                  className="border-none bg-transparent"
                  expandIconPosition="right"
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyUsSection;
