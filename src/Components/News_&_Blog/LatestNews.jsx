import axios from "axios";
import React from "react";
const fetchLatestNews =async()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}super-admin/get-latest-news`)
  console.log(data)
}

const LatestNews = () => {
  fetchLatestNews()
  return (
    <>
      <div></div>
    </>
  );
};

export default LatestNews;
