import React from "react";
import Navbar from "../Home/Navbar";
// import { Outlet } from 'react-router-dom'
import Footer from "../Home/Footer";
import QuickLinks from "./QuickLinks";

const Root = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex w-full overflow-x-hidden">
        <div className="">{children}</div>
        <div className=" ">
          <QuickLinks />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Root;
