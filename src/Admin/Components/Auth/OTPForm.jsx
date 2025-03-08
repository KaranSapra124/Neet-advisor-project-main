import React, { useEffect, useRef, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Divider from "../../../Components/Helper/Divider";

const OTPForm = ({title}) => {
  const location = useLocation();
  const { email } = location?.state || {};

  const [otp, setOTP] = useState([]);
  const [otpCount, setOtpCount] = useState(6);
  const [time, setTime] = useState(0);
  const inputRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });
    value && index < otpCount && inputRef?.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = "";
        return newOTP;
      });
      inputRef?.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalOTP = otp.join("");
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/verify-otp`,
        { email, otp: finalOTP },
        {
          withCredentials: true,
        },
      );
      toast.success(data?.message);
      navigate("/admin");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const handleResendOTP = async () => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/send-super-admin-otp`,
      { email },
      {
        withCredentials: true,
      },
    );
    toast.success(data?.message);
  };

  useEffect(() => {
    if (time >= 30) return;
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <Container>
      <div className="mx-auto w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-yellow-600">
          Enter OTP
        </h1>
        <Divider className="mx-auto my-3 h-1 w-16 rounded-full bg-yellow-600" />
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-2">
            {Array.from({ length: otpCount }).map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRef.current[index] = el)}
                type="text"
                maxLength={1}
                className="h-12 w-12 rounded-lg border border-gray-400 bg-gray-100 text-center text-lg font-semibold text-gray-900 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-500 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:focus:bg-gray-300"
                placeholder="•"
                value={otp[index] || ""}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          {time !== 30 ? (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Resend OTP in {time < 10 ? `0${time}` : time}s
            </p>
          ) : (
            <p
              onClick={handleResendOTP}
              className="mt-2 cursor-pointer text-sm font-medium text-yellow-600 hover:underline"
            >
              Resend OTP
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-yellow-600 py-2 text-lg font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:bg-yellow-700"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default OTPForm;
