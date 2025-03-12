import React, { useEffect, useState } from "react";
import Root from "../Components/Helper/Root";
import NewsLetter from "../Components/News_&_Blog/NewsLetter";
import Hero from "../Components/News_&_Blog/Hero";
import Schedule from "../Components/News_&_Blog/Schedule";
import scrollToTop from "../Utils/ScrollToTop";
import axios from "axios";
import "../Components/News_&_Blog/News.css";
import LatestNews from "../Components/News_&_Blog/LatestNews";
const News_Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}super-admin/get-news`,
        );
        setNews(data?.allNews[3]?.generatedHTML);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
    scrollToTop();
    const newsLetterTimeout = setTimeout(() => setIsOpen(true), 2000);
    return clearTimeout(() => newsLetterTimeout);
  }, []);
  return (
    <>
      {isOpen && <NewsLetter isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Root>
        <div>
          <div
            className="newsPageDiv max-w-[900px]"
            dangerouslySetInnerHTML={{ __html: news }}
          ></div>
          <LatestNews />
        </div>
        {/* <Hero />
        <Schedule/> */}
      </Root>
    </>
  );
};

export default News_Blog;
