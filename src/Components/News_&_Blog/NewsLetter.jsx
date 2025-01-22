import { Modal } from "antd";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Divider from "../Helper/Divider";

const NewsLetter = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");

  return (
    <Modal
      open={isOpen}
      closable={true}
      footer={false}
      onCancel={() => setIsOpen(false)}
      closeIcon={<MdClose className="text-gray-100 text-xl hover:font-bold transition-colors" />}
      width={500}
      
      
    >
      <div className="p-4">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-xl md:text-3xl font-bold text-yellow-600 leading-tight">
              Want to stay updated with{" "}
              <span className="font-extrabold text-primary-color block mt-1">
                information about <strong>Neet</strong>
              </span>
            </h1>
            <p className="text-gray-700 font-semibold text-sm">
              Sign up for our newsletter!
            </p>
          </div>

          {/* Divider */}
       <Divider className={"h-1 w-12 bg-yellow-600 rounded-full mx-auto my-2 "}/>

          {/* Input Section */}
          <div className="relative max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-600 focus:outline-none pr-12 text-gray-700 placeholder-gray-400 transition-all duration-200"
            />
            <button 
              className="absolute right-3 top-1/2   -translate-y-1/2 text-yellow-600 hover:text-yellow-700 transition-colors duration-200"
              aria-label="Subscribe"
            >
              <FaPaperPlane className="text-xl" />
            </button>
          </div>

          {/* Additional Info */}
          <p className="text-center text-xs text-gray-700">
            Join thousands of students getting updates every week
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default NewsLetter;