import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef } from "react";
import Divider from "../Helper/Divider";
const fetchLatestNews = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-latest-news`,
  );
  const { data } = res;
  return data?.latestNews;
};

const LatestNews = ({ currNews, setCurrNews }) => {
  const latestNewsDivRef = document.getElementById("latestNewsDivRef");

  const { data, isLoading, error } = useQuery({
    queryKey: ["LatestNews"],
    queryFn: fetchLatestNews,
  });
  
  return (
    <>
      <div
        id="latestNewsDivRef"
        className="mx-2 scroll-smooth my-4 h-[50lvh] max-w-sm overflow-x-auto shadow-lg"
      >
        <div className="sticky top-0 z-[99] bg-white p-1">
          <h1 className="rounded bg-gray-200 p-1 text-xs font-extrabold text-primary-color lg:text-xl">
            Latest News
          </h1>
          <Divider
            className={"my-1.5 h-1 w-12 rounded-full bg-primary-color lg:my-2"}
          />
        </div>
        <div className="m-2 rounded bg-gray-200/50 p-2">
          {!isLoading ? (
            data
              ?.filter((elem, index) => elem?._id !== currNews)
              ?.sort((a, b) => (a?.createdAt > b?.createdAt ? -1 : 1))
              ?.map((news, index) => {
                return (
                  <>
                    <div
                      onClick={() => setCurrNews(news?._id)}
                      className="my-2 flex cursor-pointer rounded border-black bg-white p-2 shadow shadow-black transition-all hover:border-b-2 hover:border-l-2 hover:border-yellow-600 hover:bg-white hover:shadow-none"
                    >
                      <span className="mx-1">👉</span>
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

export default LatestNews;
