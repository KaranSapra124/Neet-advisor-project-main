import React, { useEffect, useState } from "react";
import Root from "../Components/Helper/Root";
import NewsLetter from "../Components/News_&_Blog/NewsLetter";
import scrollToTop from "../Utils/ScrollToTop";

const News_Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    scrollToTop();
    const newsLetterTimeout = setTimeout(() => setIsOpen(true), 2000);
    return clearTimeout(() => newsLetterTimeout);
  }, []);
  return (
    <>
      {isOpen && <NewsLetter isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Root>
        <div className="content"></div>
      </Root>
    </>
  );
};

export default News_Blog;
