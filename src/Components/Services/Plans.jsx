import React, { useState, useRef } from "react";
import {
  FaTools,
  FaClipboardList,
  FaBook,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
// import "../../src/css/costum.css";
// import { useNavigate } from "react-router-dom";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider"

const PricingComponent = () => {
  const [planType, setPlanType] = useState("UG");
  const pricingRef = useRef(null);
  const cardRefs = useRef([]);
  // const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/login", { state: { course: planType } }); // navigating to the login page
  };

  const pricingData = {
    UG: [
      {
        id: 1,
        title: "Free",
        price: "₹0/-",
        discountedPrice: "₹980/-+GST",
        icon: "https://cdn-icons-gif.flaticon.com/11679/11679149.gif",

        offer: "FREE",
        features: [
          { icon: <FaTools />, text: "Rank Predictor" },
          { icon: <FaChartLine />, text: "Exam Paper" },
          { icon: <FaClipboardList />, text: "5 year competition" },
          { icon: <FaBook />, text: "Latest Webinar recording (24 Hrs)" },
          { icon: <FaBook />, text: "All State Counselling e-books" },
        ],
      },
      {
        id: 2,
        title: "Explore",
        price: "₹4,980/-+GST",
        discountedPrice: "₹2,980/-+GST",
        icon: "https://cdn-icons-gif.flaticon.com/17513/17513876.gif",

        offer: "MOST",
        features: [
          { icon: <FaTools />, text: "NEET Score Booster" },
          { icon: <FaClipboardList />, text: "Cut-off & allotment" },
          { icon: <FaChartLine />, text: "Fees & Seat Matrix" },
          { icon: <FaGraduationCap />, text: "College Compare" },
          { icon: <FaClipboardList />, text: "Merit List" },
          { icon: <FaClipboardList />, text: "Seat Matrix" },
          { icon: <FaClipboardList />, text: "Cut-off" },
          { icon: <FaClipboardList />, text: "Document Checklist" },
          { icon: <FaBook />, text: "Medical Guide Handbook" },
          { icon: <FaBook />, text: "Webinars & Workshops" },
          { icon: <FaBook />, text: "Counselling Videos" },
          { icon: <FaBook />, text: "News & Alerts" },
        ],
      },
      {
        id: 3,
        title: "Achieve",
        price: "₹29,980/-+GST",
        discountedPrice: "₹24,980/-+GST",
        offer: "PREMIUM",
        icon: "https://cdn-icons-gif.flaticon.com/17204/17204103.gif",

        features: [
          { icon: <FaTools />, text: "College Ranking" },
          { icon: <FaGraduationCap />, text: "Academic Mentor" },
          { icon: <FaGraduationCap />, text: "Success Coach" },
          { icon: <FaGraduationCap />, text: "Junior Mentor" },
          { icon: <FaGraduationCap />, text: "Senior Mentor" },
          {
            icon: <FaClipboardList />,
            text: "Shortlist Your Counselling & Colleges",
          },
          { icon: <FaClipboardList />, text: "Documentation & Verification" },
          { icon: <FaClipboardList />, text: "Application Filling" },
          { icon: <FaClipboardList />, text: "Choice Filling" },
        ],
        specialOffer: "",
      },
    ],
    PG: [
      {
        id: 1,
        title: "Free",
        icon: "https://cdn-icons-gif.flaticon.com/11679/11679149.gif",
        price: "₹0/-",
        discountedPrice: "₹2,980/-+GST",
        offer: "FREE PLAN",
        features: [
          { icon: <FaBook />, text: "Latest Webinar recording (24 Hrs)" },
          { icon: <FaBook />, text: "All State Counselling e-books" },
          { icon: <FaTools />, text: "Rank Predictor" },
        ],
      },
      {
        id: 2,
        title: "Explore",
        price: "₹8,980/-+GST",
        icon: "https://cdn-icons-gif.flaticon.com/17513/17513876.gif",

        discountedPrice: "₹4,980/-+GST",
        offer: "POPULAR ",
        features: [
          { icon: <FaTools />, text: "NEET Score Booster" },
          { icon: <FaClipboardList />, text: "Cut-off & allotment" },
          { icon: <FaChartLine />, text: "Fees & Seat Matrix" },
          { icon: <FaGraduationCap />, text: "College Compare" },
          { icon: <FaClipboardList />, text: "Merit List" },
          { icon: <FaClipboardList />, text: "Seat Matrix" },
          { icon: <FaClipboardList />, text: "Cut-off" },
          { icon: <FaClipboardList />, text: "Document Checklist" },
          { icon: <FaBook />, text: "Medical Guide Handbook" },
          { icon: <FaBook />, text: "Webinars & Workshops" },
          { icon: <FaBook />, text: "Counselling Videos" },
          { icon: <FaBook />, text: "News & Alerts" },
        ],
      },
      {
        id: 3,
        title: "Achieve",
        price: "₹29,980/-+GST",
        discountedPrice: "₹24,980/-+GST",
        offer: "PREMIUM",
        icon: "https://cdn-icons-gif.flaticon.com/17204/17204103.gif",
        features: [
          { icon: <FaTools />, text: "College Ranking" },
          { icon: <FaGraduationCap />, text: "Pre-Exam Mentorship" },
          { icon: <FaGraduationCap />, text: "Academic Mentor" },
          { icon: <FaGraduationCap />, text: "Success Coach" },
          { icon: <FaGraduationCap />, text: "Post-Exam Mentorship" },
          { icon: <FaGraduationCap />, text: "Junior Mentor" },
          { icon: <FaGraduationCap />, text: "Senior Mentor" },
          {
            icon: <FaClipboardList />,
            text: "Shortlist Your Counselling & Colleges",
          },
          { icon: <FaClipboardList />, text: "Documentation & Verification" },
          { icon: <FaClipboardList />, text: "Application Filling" },
          { icon: <FaClipboardList />, text: "Choice Filling" },
        ],
        specialOffer: "",
      },
    ],
  };

  const scrollToPlan = (planIndex) => {
    if (pricingRef.current) {
      const scrollAmount = pricingRef.current.children[planIndex].offsetLeft;
      pricingRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const renderPricingPlans = () => {
    const plans = pricingData[planType];

    return plans.filter((elem)=>elem.title !== "Free").map((plan, index) => (
      <div
        key={plan.id}
        className="relative w-full flex-shrink-0 cursor-pointer p-6  md:max-w-sm  "
      >
        <div
          ref={(el) => (cardRefs.current[index] = el)}
          className="flex transform flex-col justify-between rounded-xl bg-white p-6 shadow-xl transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={plan.icon}
            className="absolute -left-5 -top-4 lg:w-12 w-10 rounded-full p-0.5 shadow-lg "
            alt="No Image"
            srcset=""
          />
          <h2 className="mb-2 flex items-center gap-10 lg:text-2xl text-lg font-bold sm:gap-[10px] md:gap-[20px] lg:gap-[80px] xl:gap-[100px]">
            {plan.title}{" "}
            <span
              className={`ml-auto rounded-md lg:px-5 px-2 lg:py-1.5 py-0.5  lg:text-xs text-[0.6rem] lg:font-semibold font-bold transition duration-300 ${
                plan.offer === "PREMIUM"
                  ? "ml-auto border-amber-700 text-amber-600 hover:border-inherit hover:bg-amber-600 hover:text-white"
                  : "ml-auto border-indigo-800 text-indigo-900 hover:border-inherit hover:bg-indigo-900 hover:text-white"
              } border-2`}
            >
              {plan.offer}
            </span>
          </h2>

          <div className="mb-4 lg:text-xl text-sm lg:font-bold font-extrabold text-gray-800">
            {plan.price}
          </div>
          {plan.discountedPrice && (
            <div className="mb-4 lg:text-sm text-xs text-gray-500 line-through">
              {plan.discountedPrice}
            </div>
          )}
          <ul className="lg:mb-4 mb-2 h-[29rem] list-inside list-disc text-sm">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className="mb-5 mt-5 flex items-center lg:text-[13px] text-xs text-primary-color"
              >
                {feature.icon}{" "}
                <span className="ml-2 lg:text-sm text-xs lg:font-extralight font-light  text-gray-900">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          {plan.specialOffer && (
            <div className="mt-2 text-sm italic text-gray-600">
              {plan.specialOffer}
            </div>
          )}
          <button
            className="duration-400 lg:text-lg text-xs lg:mt-4 mt-1 rounded bg-yellow-600 px-4 py-2 font-bold text-white shadow-lg transition ease-in-out hover:bg-yellow-700 hover:shadow-xl"
            onClick={handleClick}
          >
            {plan.title === "Free" ? "Sign Up" : "Buy Now"}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <Container className={"bg-gray-200/40"}>
      <div className="container mx-auto">
        <h1 className="my-2 text-center lg:text-5xl text-lg font-bold md:text-4xl">
          <span className="font-bold text-yellow-600">
            Transparent Pricing.
          </span>
          {" "}
          <span className="font-extrabold text-primary-color">
            Defined Goals.
          </span>
        </h1>
        <p className="mx-auto lg:my-4 lg:w-[40rem] text-center text-[0.5rem] lg:text-xs font-semibold text-gray-700">
          Our well-defined, pocket-friendly plans reflect our commitment to
          making your <strong>NEET</strong> Counselling Process a smooth,
          hassle-free experience. Choose the one that best suits your goal and
          budget!
        </p>
        <Divider
            className={"mx-auto lg:my-4 my-2 h-1 lg:w-20 w-12 rounded-full bg-yellow-600"}
          />
        <div className="mb-8 flex justify-center">
          <button
            className={`rounded-bl-full  rounded-tl-full lg:px-10 px-4 py-2 font-bold ${
              planType === "UG"
                ? "bg-indigo-900 text-xs lg:text-sm text-white"
                : "bg-gray-200 text-xs lg:text-sm text-gray-800"
            }`}
            onClick={() => setPlanType("UG")}
          >
            UG
          </button>
          <button
            className={`rounded-br-full rounded-tr-full lg:px-10 px-4 py-2 font-bold ${
              planType === "PG"
                ? "bg-indigo-900 text-xs lg:text-sm text-white"
                : "bg-gray-300 text-xs lg:text-sm text-gray-800"
            }`}
            onClick={() => setPlanType("PG")}
          >
            PG
          </button>
        </div>
        <div
          className="custom-scrollbar-style overflow-x-auto md:overflow-x-hidden"
          ref={pricingRef}
        >
          <div className="flex space-x-4  md:justify-center md:space-x-0">
            {renderPricingPlans()}
          </div>
        </div>

        <div className="my-2 lg:mt-20 mt-10 text-center lg:text-3xl text-lg font-bold text-yellow-600">
          Get the
          <span className="font-extrabold text-primary-color">
            {" "}
            Achieve Plan{" "}
          </span>
          For Free !
        </div>
        <div className="lg:mb-4 mb-2 text-center lg:text-xs text-[0.5rem] font-semibold text-gray-700">
          Have you scored an All-India Ranking within the top 5000? Let’s reward
          you with a complimentary plan!
        </div>
        <div className="lg:mb-8 mb-4 text-center lg:text-sm text-[0.5rem] font-bold text-gray-600">
          *Terms and Conditions Apply
        </div>
      </div>
    </Container>
  );
};

export default PricingComponent;
