import { Modal, Select, Input, Button } from "antd";
import { useState } from "react";

const states = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
  "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other"
];

const ContactModal = ({ open, setIsOpen }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", state: "", captcha: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStateChange = (value) => {
    setFormData({ ...formData, state: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.state || !formData.captcha) {
      alert("All fields are required!");
      return;
    }
    console.log("Form Submitted", formData);
    setIsOpen(false);
  };

  return (
    <Modal open={open} onCancel={() => setIsOpen(false)} footer={null} title="Contact Us">
      <div className="flex flex-col space-y-3">
        <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Select placeholder="Select State" value={formData.state} onChange={handleStateChange}>
          {states.map((state) => (
            <Select.Option key={state} value={state}>{state}</Select.Option>
          ))}
        </Select>
        {/* Captcha Placeholder */}
        <div className="captcha-box">[Captcha Component Here]</div>
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default ContactModal;
