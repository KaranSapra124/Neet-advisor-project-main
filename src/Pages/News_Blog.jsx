import React, { useEffect, useState } from "react";
import Root from "../Components/Helper/Root";
import NewsLetter from "../Components/News_&_Blog/NewsLetter";
import Hero from "../Components/News_&_Blog/Hero";
import Schedule from "../Components/News_&_Blog/Schedule";
import scrollToTop from "../Utils/ScrollToTop";
import axios from "axios";
import "../Components/News_&_Blog/News.css";
import LatestNews from "../Components/News_&_Blog/LatestNews";
import RelatedNews from "../Components/News_&_Blog/RelatedNews";
import { useLocation } from "react-router-dom";
import { TbCurrencyKroneSwedish } from "react-icons/tb";
const News_Blog = () => {
  const location = useLocation();
  const { state } = location;
  const [currNews, setCurrNews] = useState("67d0326b63a098e6ea79f1a6");
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}super-admin/get-news/${currNews}`,
        );
        console.log(data);
        setNews(data?.newsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [currNews]);

  useEffect(() => {
    scrollToTop();
    const newsLetterTimeout = setTimeout(() => setIsOpen(true), 2000);
    return clearTimeout(() => newsLetterTimeout);
  }, []);

  return (
    <>
      {isOpen && <NewsLetter isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Root>
        <div className="flex justify-evenly">
          <div
            className="newsPageDiv max-w-[900px]"
            dangerouslySetInnerHTML={{ __html: news?.generatedHTML }}
          ></div>
          <div>
            <LatestNews currNews={currNews} setCurrNews={setCurrNews} />
            {news?.hashtags && (
              <RelatedNews currNews={news} setCurrNews={setCurrNews} />
            )}
          </div>
        </div>
        {/* <Hero />
        <Schedule/> */}
      </Root>
    </>
  );
};

export default News_Blog;
