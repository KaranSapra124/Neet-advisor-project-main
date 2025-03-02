import React, { useEffect, useRef, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const OTPForm = () => {
  const location = useLocation();
  //   const { state } = location;
  //   console.log(location)
  const { email } = location?.state || {};

  const [otp, setOTP] = useState([]);
  const [otpCount, setOtpCount] = useState(6);
  const [currIndex, setCurrIndex] = useState(0);
  const inputRef = useRef([]);
  const handleChange = (e, index) => {
    //Change fn for filling OTP
    const { value } = e.target;
    setOTP(() => {
      const newOTP = [...otp];
      newOTP[index] = value;
      return newOTP;
    });
    value && index < otpCount && inputRef?.current[index + 1]?.focus();
  };
  const handleKeyDown = (e, index) => {
    //Fn for backspace
    if (e.key === "Backspace") {
      const newOTP = [...otp];
      if (index > 0) {
        newOTP[index] = "";
        inputRef?.current[index - 1]?.focus();
      }
      setOTP(newOTP);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOTP = otp.join("");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/verify-otp`,
      { email: email, otp: finalOTP },
    );
    toast.success(data?.message);
  };

  return (
    <>
      <Container>
        <div className="mx-auto flex w-full max-w-sm flex-col rounded py-4 shadow shadow-black">
          <h1 className="my-2 text-center text-xl font-bold">Fill The OTP</h1>
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex flex-col items-center justify-evenly"
          >
            <div>
              {Array.from({ length: otpCount }).map((elem, index) => {
                return (
                  <input
                    key={index}
                    ref={(el) => (inputRef.current[index] = el)}
                    type="text"
                    maxLength={1}
                    min={0}
                    className="mx-1 h-7 w-7 rounded border border-black text-center"
                    placeholder="0"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                );
              })}
            </div>
            <button
              type="submit"
              className="mx-auto my-2 w-fit rounded-md bg-yellow-600 p-1 font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default OTPForm;
