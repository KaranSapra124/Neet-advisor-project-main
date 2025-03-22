import { Modal, Input, Button, Select } from "antd";
// import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

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
    name: "",
    email: "",
    phone: "",
    state: "",
    captcha: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleStateChange = (value) => setForm({ ...form, state: value });

  const handleSubmit = () => {
    if (!form.captcha) return alert("Please verify the Captcha!");
    console.log("Form Submitted:", form);
    setIsOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setIsOpen(false)}
      footer={null}
      centered
      className="rounded-lg p-4"
    >
      <div className="px-9 pt-2">
        <h2 className="text-center text-sm font-extrabold text-gray-800 lg:text-sm">
          Want to get a medical seat by Smart Counselling?
        </h2>
        <h2 className="lg:text-md text-center text-sm font-bold text-primary-color">
          "Book free one-to-one session"
        </h2>
      </div>

      <div className="space-y-3 p-4">
        <div className="grid grid-cols-2 gap-1.5">
          {" "}
          <Input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="rounded-md p-2 focus:outline-none hover:ring-0"
          />
          <Input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="rounded-md p-2"
          />
        </div>
        <Input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="rounded-md p-2"
        />

        <Select
          placeholder="Select State"
          className="w-full rounded-md"
          onChange={handleStateChange}
          options={states.map((state) => ({ label: state, value: state }))}
        />

        {/* <div className="flex justify-center">
          <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={(value) => setForm({ ...form, captcha: value })} />
        </div> */}

        <button className="w-full rounded bg-yellow-600 py-1 font-semibold text-white hover:bg-yellow-700">
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
