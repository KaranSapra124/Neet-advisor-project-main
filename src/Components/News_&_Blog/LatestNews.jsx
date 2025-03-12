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
      <div className="max-h-96  max-w-sm overflow-x-auto border p-2">
        <h1 className="rounded bg-gray-200 p-1 text-xs font-extrabold text-primary-color lg:text-xl">
          Latest News
        </h1>
        <Divider className={"my-2 h-1 w-12 rounded-full bg-primary-color"} />
        <div className="rounded bg-gray-200/50 p-2">
          {!isLoading ? (
            data?.map((news, index) => {
              return (
                <>
              <div className="flex my-2 cursor-pointer">
              <span className="mx-1 font-bold text-primary-color">{index+1}.)</span>
                <div
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
