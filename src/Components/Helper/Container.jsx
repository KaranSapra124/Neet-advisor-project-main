import React, { useState } from "react";
import ContactModal from "../../Utils/ContactModal";
import { FaWhatsapp } from "react-icons/fa6";

const Container = ({ children, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <ContactModal open={open} setIsOpen={() => setOpen(false)} />}
      <div className={`${className} relative mx-auto p-10 lg:p-12`}>
        {/* Button with absolute positioning and rotation */}

        {children}
      </div>
      <button
        onClick={() => setOpen(true)}
        className="fixed -right-10 top-1/2 z-10 -translate-y-1/2 rotate-90 transform rounded bg-primary-color p-1 text-lg font-bold text-white"
      >
        Enquire Now
      </button>
      <FaWhatsapp className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-1 text-5xl cursor-pointer text-white  shadow-lg transition-all duration-300 hover:bg-green-600" />
    </>
  );
};

export default Container;
