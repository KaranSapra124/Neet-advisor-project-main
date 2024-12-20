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

        return plans.map((plan, index) => (
            <div
                key={plan.id}
                className="min-h-full w-full flex-shrink-0 cursor-pointer p-6 md:w-1/4"
            >
                <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="flex flex-col justify-between rounded-xl bg-white p-6  shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"
                >
                    <h2 className="mb-2 flex items-center gap-[120px] text-xl font-bold sm:gap-[10px] md:gap-[20px] lg:gap-[80px] xl:gap-[100px]">
                        {plan.title}{" "}
                        <span
                            className={`rounded-md px-5 py-1.5 text-xs font-semibold transition duration-300 ${plan.offer === "PREMIUM"
                                    ? "border-amber-700 text-amber-600 hover:border-inherit hover:bg-amber-600 hover:text-white"
                                    : "border-indigo-800 text-indigo-900 hover:border-inherit hover:bg-indigo-900 hover:text-white"
                                } border-2`}
                        >
                            {plan.offer}
                        </span>
                    </h2>

                    <div className="mb-4 text-2xl font-bold text-gray-800">
                        {plan.price}
                    </div>
                    {plan.discountedPrice && (
                        <div className="mb-4 text-sm text-gray-500 line-through">
                            {plan.discountedPrice}
                        </div>
                    )}
                    <ul
                        className="mb-4 list-inside list-disc text-sm"
                        style={{ minHeight: "500px" }}
                    >
                        {plan.features.map((feature, index) => (
                            <li
                                key={index}
                                className="mb-5 mt-5 flex items-center text-[13px] text-indigo-900"
                            >
                                {feature.icon}{" "}
                                <span className="ml-2 text-gray-900">{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                    {plan.specialOffer && (
                        <div className="mt-2 text-sm italic text-gray-600">
                            {plan.specialOffer}
                        </div>
                    )}
                    <button
                        className="duration-400 mt-4   rounded bg-indigo-700 px-4 py-2 font-bold text-white shadow-lg  transition ease-in-out hover:bg-indigo-900 hover:shadow-xl"
                        onClick={handleClick}
                    >
                        {plan.title === "Free" ? "Sign Up" : "Buy Now"}
                    </button>
                </div>
            </div>
        ));
    };

    return (
        <div className="">
            <div className="container mx-auto py-20">
                <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
                    <span className="text-indigo-900 font-bold" >Transparent Pricing.</span>{" "}
                    <span className="text-yellow-300 font-bold">Defined Goals.</span>
                </h1>
                <p className="text-[14px] mx-auto mb-12 max-w-3xl text-center text-gray-900">
                    Our well-defined, pocket-friendly plans reflect our commitment to
                    making your NEET Counselling Process a smooth, hassle-free experience.
                    Choose the one that best suits your goal and budget!
                </p>
                <div className="mb-8 flex justify-center">
                    <button
                        className={`rounded-bl-full rounded-tl-full px-16 py-4 font-bold ${planType === "UG"
                                ? "bg-indigo-900 text-white"
                                : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setPlanType("UG")}
                    >
                        UG
                    </button>
                    <button
                        className={`rounded-br-full rounded-tr-full px-16 py-4 font-bold ${planType === "PG"
                                ? "bg-indigo-900 text-white"
                                : "bg-gray-300 text-gray-800"
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
                    <div className="flex space-x-4 md:justify-center md:space-x-0">
                        {renderPricingPlans()}
                    </div>
                </div>

                <div className="mb-8 mt-20 text-center text-4xl  font-bold text-indigo-900">
                    Get the
                    <span className="text-amber-600 font-bold"> Achieve Plan </span>
                    For Free !
                </div>
                <div className="text-l mb-4 text-center text-gray-800">
                    Have you scored an All-India Ranking within the top 5000? Let’s reward
                    you with a complimentary plan!
                </div>
                <div className="mb-8 text-center text-xl font-bold text-gray-600">
                    *Terms and Conditions Apply
                </div>
            </div>
        </div>
    );
};

export default PricingComponent;