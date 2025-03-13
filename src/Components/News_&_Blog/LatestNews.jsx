import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Divider from "../Helper/Divider";
const fetchLatestNews = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-latest-news`,
  );
  const { data } = res;
  return data?.latestNews;
};

const LatestNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["LatestNews"],
    queryFn: fetchLatestNews,
  });
  return (
    <>
      <div className="max-h-80 my-4 mx-2 max-w-sm overflow-x-auto shadow-lg">
        <div className="sticky top-0 z-[99] bg-white p-2">
          <h1 className="rounded bg-gray-200 p-1 text-xs font-extrabold text-primary-color lg:text-xl">
            Latest News
          </h1>
          <Divider className={"my-2 h-1 w-12 rounded-full bg-primary-color"} />
        </div>
        <div className="m-2 rounded bg-gray-200/50 p-2">
          {!isLoading ? (
            data?.map((news, index) => {
              return (
                <>
                  <div className="my-2 hover:bg-white p-2 rounded  hover:border-l-2 hover:border-b-2 hover:border-yellow-600 transition-all   flex cursor-pointer">
                    <span className="mx-1  font-bold text-primary-color">
                      {index + 1}.)
                    </span>
                    <div
                      className="text-xs lg:text-sm line-clamp-2 "
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
