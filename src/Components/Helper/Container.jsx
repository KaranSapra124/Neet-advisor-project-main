import React, { useState } from "react";
import ContactModal from "../../Utils/ContactModal";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";

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
      <div className="fixed bottom-5 right-2 animate-pulse z-50">
        {/* Container for both the icon and the circular text */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* SVG for circular text */}
          <svg className="absolute h-full w-full" viewBox="0 0 100 100">
            {/* Define the circular path */}
            <path
              id="textCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />

            {/* Text that follows the path */}
            <text className="fill-black text-sm font-bold uppercase">
              <textPath
                className="text-sm"
                href="#textCirclePath"
                startOffset="0%"
              >
                👋 Ask Me
              </textPath>
            </text>
          </svg>

          {/* Icon in the center */}
          <div className="z-10">
            <BiMessageRounded className="cursor-pointer rounded-full bg-yellow-600 p-2 text-5xl text-white shadow-lg transition-all duration-300 hover:bg-green-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
