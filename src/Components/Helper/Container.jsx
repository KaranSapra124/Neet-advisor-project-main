import React, { useState } from "react";
import ContactModal from "../../Utils/ContactModal";

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
    </>
  );
};

export default Container;
