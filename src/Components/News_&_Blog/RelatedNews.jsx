import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Divider from "../Helper/Divider";
const RelatedNews = ({ currNews, setCurrNews }) => {
  const fetchRelatedNews = async () => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/get-related-news`,
      currNews,
    );
    return data?.relatedNews;
  };
  // console.log(currNews);
  const { data, isLoading, error } = useQuery({
    queryKey: ["relatedNews"],
    queryFn: fetchRelatedNews,
  });

  return (
    <>
      <div className="mx-2 my-4 max-h-80 max-w-sm overflow-x-auto shadow-lg">
        <div className="sticky top-0 z-[99] bg-white p-1">
          <h1 className="rounded bg-gray-200 p-1 text-xs font-extrabold text-primary-color lg:text-xl">
            Related News
          </h1>
          <Divider
            className={"my-1.5 h-1 w-12 rounded-full bg-primary-color lg:my-2"}
          />
        </div>
        <div className="m-2 rounded bg-gray-200/50 p-2">
          {!isLoading ? (
            data.length !== 0 &&
            data
              ?.filter(
                (elem, index) =>
                  elem?.generatedHTML !== currNews?.generatedHTML,
              )
              ?.map((news, index) => {
                return (
                  <>
                    <div
                      onClick={() => setCurrNews(news?._id)}
                      className="my-2 flex cursor-pointer rounded p-2 bg-white shadow shadow-black border-black hover:shadow-none transition-all hover:border-b-2 hover:border-l-2 hover:border-yellow-600 hover:bg-white"
                    >
                      <span className="mx-1 font-bold text-primary-color">
                        {index + 1}.)
                      </span>
                      <div
                        className="line-clamp-2 text-xs lg:text-sm"
                        dangerouslySetInnerHTML={{
                          __html: news?.generatedHTML?.substring(0, 120),
                        }}
                      ></div>
                    </div>
                  </>
                );
              })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default RelatedNews;
