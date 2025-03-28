import React, { useState, useEffect } from "react";
import { Switch, Dropdown, Input } from "antd";
import Container from "../Helper/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const fetchSeminars = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminars`,
    {
      withCredentials: true,
    },
  );
  return data?.cookie;
};
const Hero = () => {
  const checkState = (state) => {
    if (
      state === "National Capital Territory of Delhi" ||
      state === "Haryana" ||
      state === "Punjab" ||
      state === "Uttar Pradesh"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["requestedState"],
    queryFn: () => fetchSeminars(),
  });

  return (
    <Container className="flex items-center justify-center bg-gray-100/90">
      {/* <div className="absolute  h-full mb-16 w-full bg-gray-500/90"></div> */}
      <div className="container mx-auto px-4">
        <div className="text-center lg:mb-8">
          <h1 className="text-lg font-semibold text-yellow-600 lg:text-4xl">
            Reach Out{" "}
            <span className="font-extrabold text-primary-color">To Us!</span>
          </h1>
          <p className="mx-auto my-2 text-[0.5rem] font-semibold text-gray-800 lg:my-4 lg:max-w-sm lg:text-xs">
            Get in touch with our <strong>Mentors</strong>, fill out the form
            below!
          </p>
          <hr className="mx-auto my-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:my-4 lg:h-1" />
        </div>
        <FormComponent requestedState={data} checkState={checkState} />
      </div>
    </Container>
  );
};

const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const FormComponent = ({ requestedState, checkState }) => {
  const [formData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    State: "",
    Description: "",
    captcha: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.captcha === false) {
      alert("Please verify the Captcha!");
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-query`,
        formData,
        { withCredentials: true },
      );
      toast.success(data?.message);
      setFormData({
        Name: "",
        PhoneNumber: "",
        Email: "",
        State: "",
        Description: "",
        captcha: false,
        termsAccepted: false,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
    // setIsOpen(false);
  };

  return (
    <div className={"flex flex-col lg:flex-row"}>
      <div className="relative mx-2 w-full rounded-md bg-gray-500/5 p-3 shadow-xl md:w-1/2 lg:p-6">
        <img
          src="call.gif"
          className="absolute -left-5 -top-5 h-8 w-8 rounded-full shadow-md shadow-yellow-600 lg:h-10 lg:w-10"
          alt="call icon"
        />

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              placeholder="Enter Your Name..."
              type="text"
              name="Name"
              onChange={handleChange}
              className="w-full rounded-lg bg-white px-4 py-2 text-xs text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 lg:text-sm"
            />
            <input
              placeholder="Enter Your Number..."
              type="number"
              name="PhoneNumber"
              onChange={handleChange}
              className="w-full rounded-lg bg-white px-4 py-2 text-xs text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 lg:text-sm"
            />
            <input
              placeholder="Enter Your Email..."
              type="email"
              name="Email"
              onChange={handleChange}
              className="w-full rounded-lg bg-white px-4 py-2 text-xs text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 md:col-span-2 lg:text-sm"
            />
          </div>

          <select
            name="State"
            onChange={handleChange}
            className="w-full rounded-lg bg-white px-4 py-2 text-xs text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 lg:text-sm"
          >
            <option value="">Select Your State</option>
            {statesList.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <textarea
            name="Description"
            placeholder="Description (Optional)"
            rows={3}
            onChange={handleChange}
            className="w-full resize-none rounded-lg bg-white px-4 py-2 text-xs text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 lg:text-sm"
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 focus:ring-yellow-600"
            />
            <label className="text-xs text-gray-600 lg:text-sm">
              I agree to receive promotional & informational communication from
              <span className="font-semibold text-yellow-600">
                {" "}
                NEET ADVISOR
              </span>
              through emails, calls, or SMS messages.*
            </label>
          </div>
          <div className="float-left flex">
            <Input type="checkbox" name="captcha" onChange={handleChange} />
            <p className="mx-2 text-xs font-semibold text-gray-800">
              ReCAPTCHA
            </p>
            {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={(value) => setForm({ ...form, captcha: value })} /> */}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full transform rounded-lg bg-yellow-600 py-2 text-xs font-extrabold text-white transition-colors hover:scale-[1.02] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 lg:py-3 lg:text-sm lg:font-bold"
          >
            Send
          </button>
        </div>
      </div>

      {checkState(requestedState) ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0180566231634!2d77.2802189754974!3d28.539176975715858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce386847e1c93%3A0x535231df782a3e3d!2sNEET%20ADVISOR!5e0!3m2!1sen!2sin!4v1736235673499!5m2!1sen!2sin"
          className="m-2 w-full rounded-lg shadow-xl transition-transform hover:scale-105 lg:m-0 lg:h-96 lg:w-1/2"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.836943225087!2d72.8611785!3d19.1148079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c827160d6221%3A0x2d16cae2ae28a379!2sNEET%20ADVISOR!5e0!3m2!1sen!2sin!4v1742364176493!5m2!1sen!2sin"
          className="m-2 w-full rounded-lg shadow-xl transition-transform hover:scale-105 lg:m-0 lg:h-96 lg:w-1/2"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default Hero;
