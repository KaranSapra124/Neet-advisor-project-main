import { Modal, Input, Button, Select } from "antd";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
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

const ContactModal = ({ open, setIsOpen }) => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    AlternatePhoneNumber: "",
    state: "",
    City: "",
    courseEnquiry: "",
    captcha: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "captcha" ? e.target.checked : e.target.value,
    });
  };

  const handleStateChange = (value) => setForm({ ...form, state: value });
  const handleCourseChange = (value) =>
    setForm({ ...form, courseEnquiry: value });

  const handleSubmit = async () => {
    if (form.captcha === false) {
      alert("Please verify the Captcha!");
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-query`,
        form,
        { withCredentials: true },
      );
      toast.success(data?.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
    setIsOpen(false);
  };

  return (
    <Modal
      open={open}

      onCancel={() => setIsOpen(false)}
      centered
      footer={<div className="h-2"></div>}
      className="rounded-lg "
    >
      <div className="px-9 pt-2">
        <h2 className="text-center text-sm font-extrabold text-primary-color lg:text-xl">
          Enquiry Form
        </h2>
      </div>

      <div className="modal-bg m-2 space-y-3 rounded bg-cover  p-4">
        <div className="grid grid-cols-2 gap-1.5">
          <Input
            name="Name"
            placeholder="Your Name*"
            onChange={handleChange}
            className="rounded-md p-2"
          />
          <Input
            name="Email"
            placeholder="Email*"
            onChange={handleChange}
            className="rounded-md p-2"
          />
        </div>
        <Input
          name="PhoneNumber"
          placeholder="Phone Number*"
          onChange={handleChange}
          className="rounded-md p-2"
        />
        <Input
          name="AlternatePhoneNumber"
          placeholder="Alternate Phone Number"
          onChange={handleChange}
          className="rounded-md p-2"
        />
        <Select
          placeholder="Select State*"
          className="w-full rounded-md"
          onChange={handleStateChange}
          options={states.map((state) => ({ label: state, value: state }))}
        />
        <Input
          name="City"
          placeholder="City"
          onChange={handleChange}
          className="rounded-md p-2"
        />
        <Select
          placeholder="Course Enquiry*"
          className="w-full rounded-md"
          onChange={handleCourseChange}
          options={["Neet UG", "Neet PG"].map((elem) => ({
            label: elem,
            value: elem,
          }))}
        />
        <div className="flex">
          <Input
            className="h-5 w-5"
            type="checkbox"
            name="captcha"
            onChange={handleChange}
          />
          <p className="mx-2 text-xs font-semibold text-white">
            I agree to receive information from Neet Advisor
          </p>
        </div>
        <center>
          <button
            disabled={!form.captcha}
            onClick={handleSubmit}
            className="mx-auto rounded bg-yellow-600 p-2 py-1 font-semibold text-white hover:bg-yellow-700"
          >
            Submit
          </button>
        </center>
      </div>
    </Modal>
  );
};

export default ContactModal;
