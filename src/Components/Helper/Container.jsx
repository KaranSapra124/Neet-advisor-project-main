import React from "react";

const Container = ({ children, className }) => {
  return (
    <>
      <div className={`${className} relative mx-auto p-10 lg:p-12`}>
        {/* Button with absolute positioning and rotation */}

        {children}
      </div>
      <button
        className="fixed -right-10 top-1/2 -translate-y-1/2 rotate-90 transform rounded bg-primary-color p-1 text-lg font-bold text-white"
        style={{ zIndex: 10 }}
      >
        Enquire Now
      </button>
    </>
  );
};

export default Container;
