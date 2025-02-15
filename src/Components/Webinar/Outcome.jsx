import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Container from "../Helper/Container";
import Divider from "../Helper/Divider";
import { BsHandIndexFill } from "react-icons/bs";

const Outcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stackedCards, setStackedCards] = useState([]);
  const [isChanged, setIsChanged] = useState(true);
  const cards = [
    {
      image: "./Webinar/mission.gif",
      title: "Enhanced Knowledge and Skills",
      description:
        "Participants gain a deeper understanding of specific topics and develop new skills relevant to their field of study.",
    },
    {
      image: "./Webinar/mission.gif",
      title: "Networking Opportunities",
      description:
        "Attendees can connect with peers and engage with industry professionals, fostering valuable relationships for future collaborations.",
    },
    {
      image: "./Webinar/mission.gif",
      title: "Improved Engagement and Motivation",
      description:
        "Interactive elements like Q&A sessions and polls enhance participant engagement and motivation during the learning process.",
    },
    {
      image: "./Webinar/mission.gif",
      title: "Access to Resources and Materials",
      description:
        "Participants receive supplementary materials, including slides and recordings, to aid in further study and understanding.",
    },
    {
      image: "./Webinar/mission.gif",
      title: "Increased Confidence and Professional Development",
      description:
        "Engaging in discussions boosts participants' confidence in their knowledge and prepares them for future job opportunities.",
    },
    {
      image: "./Webinar/mission.gif",
      title: "Flexibility and Convenience",
      description:
        "Webinars allow participants to attend from anywhere, making it easier to fit learning into their schedules and choose from a variety of topics.",
    },
  ];

  const handleNext = () => {
    setIsChanged(!isChanged);

    setCurrentIndex((prevIndex) => {
      if (prevIndex < cards.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        setStackedCards((prevCards) => prevCards.slice(0, -1));
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    const changeOutcome = setInterval(() => {
      handleNext();
    }, 2000);
    return clearInterval(changeOutcome);
  }, []);

  useEffect(() => {
    setStackedCards((prevCards) => {
      return [...prevCards, currentIndex];
    });
  }, [isChanged]);

  const getCardStyle = (index) => {
    let transform = `translateX(${(index - currentIndex) * 320}px)`;
    let zIndex = 1;
    let left = "0px";

    if (stackedCards.includes(index)) {
      const stackPosition = stackedCards.indexOf(index);
      const leftOffset = stackPosition * 10;
      transform = `translateY(${stackPosition * 0}px)`;
      left = `${5 + leftOffset}px`;
      zIndex = 100 + stackPosition;
    }

    return {
      transform,
      zIndex,
      left,
      transition: "all 0.5s ease-in-out",
      position: "absolute",
      top: 0,
    };
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000);
  // }, []);

  return (
    <Container className={"bg-gray-200/40"}>
      <h1 className="my-2 text-center text-3xl font-bold text-yellow-600">
        Webinar{" "}
        <span className="font-extrabold text-primary-color">Outcomes</span>
      </h1>
      <p className="my-4 text-center text-xs font-bold text-gray-800">
        Follow our webinar and ace <strong>NEET</strong>
      </p>
      <Divider className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"} />

      <div className="relative flex h-52 flex-col items-center">
        <div className="absolute w-full overflow-hidden">
          <div className="relative h-96" style={{ perspective: "1200px" }}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute top-0 mx-5 my-2 flex h-44 w-[19rem] flex-col rounded-md border-b-2 border-l-2 border-yellow-600 bg-gradient-to-br from-white to-gray-50 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
                style={getCardStyle(index)}
              >
                <img
                  src={card.image}
                  className="absolute -top-2 left-[17.5rem] h-8 w-8 rounded-full shadow-sm shadow-yellow-600"
                  alt=""
                />
                <h3 className="text-sm font-semibold text-primary-color">
                  {card.title}
                </h3>
                <Divider
                  className={"my-1 h-0.5 w-12 rounded-full bg-yellow-600"}
                />
                <p className="text-justify text-xs font-semibold leading-relaxed text-gray-800">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative top-52 flex">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full bg-yellow-600 p-2 text-white shadow-lg transition-colors hover:bg-yellow-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaArrowLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="mx-5 rounded-full bg-yellow-600 p-2 text-white shadow-lg transition-colors hover:bg-yellow-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Outcome;
