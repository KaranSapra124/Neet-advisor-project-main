import React, { useState, useEffect } from "react";
import { Switch, Dropdown } from "antd";
import Container from "../Helper/Container"

const Hero = () => {
  return (
    <Container className="flex  items-center justify-center bg-gray-100/90">
      {/* <div className="absolute  h-full mb-16 w-full bg-gray-500/90"></div> */}
      <div className="container mx-auto px-4">
        <div className="lg:mb-8   text-center">
          <h1 className="lg:text-4xl text-lg font-semibold text-yellow-600">
            Reach Out{" "}
            <span className="font-extrabold  text-primary-color">To Us!</span>
          </h1>
          <p className="lg:my-4 my-2 lg:max-w-sm mx-auto lg:text-xs text-[0.5rem] font-semibold text-gray-800">
            Get in touch with our <strong>Mentors</strong>, fill out the form
            below!
          </p>
          <hr className="mx-auto lg:my-4 my-2 lg:h-1 h-0.5 w-12 rounded-full bg-yellow-600" />
        </div>
        <FormComponent />
      </div>
    </Container>
  );
};

const FormComponent = () => {
  const [isUG, setIsUg] = useState(true);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const courseOptions = [
    {
      key: 1,
      label: "General Query",
      value: "GeneralQuery",
    },
    {
      key: 2,
      label: "Escalation",
      value: "Escalation",
    },
  ];

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      exam: isUG ? "Ug" : "Pg",
    }));
  }, [isUG]);

  return (
  <div className={"flex lg:flex-row flex-col"}>

      <div className="w-full mx-2 relative rounded-md bg-gray-500/5 lg:p-6 p-3 shadow-xl md:w-1/2">
        <img src="call.gif" className="absolute lg:h-10 h-8  -left-5 -top-5 rounded-full shadow-md shadow-yellow-600 lg:w-10 w-8" alt="" srcset="" />

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              placeholder="Enter Your Name..."
              type="text"
              name="Name"
              onChange={handleChange}
              className="w-full lg:text-sm text-xs rounded-lg bg-white px-4 py-2 text-gray-500 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              placeholder="Enter Your Number..."
              type="number"
              min={0}
              name="phoneNumber"
              onChange={handleChange}
              className="w-full lg:text-sm text-xs rounded-lg bg-white px-4 py-2 text-gray-500 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              placeholder="Enter Your Email..."
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full lg:text-sm text-xs rounded-lg bg-white px-4 py-2 text-gray-500 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 md:col-span-2"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Switch
                checkedChildren="UG"
                unCheckedChildren="PG"
                defaultChecked
                checked={isUG}
                onChange={(checked) => setIsUg(checked)}
                className="bg-yellow-600 lg:!text-sm !text-xs "
              />

              <Dropdown
                menu={{
                  items: courseOptions.map((option) => ({
                    key: option.key,
                    label: (
                      <div className="lg:text-sm text-xs"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            courseDetail: option.value,
                          }))
                        }
                      >
                        {option.label}
                      </div>
                    ),
                  })),
                }}
              >
                <button className="rounded-lg lg:text-sm text-xs bg-white px-4 py-2 text-gray-400 shadow-md transition-colors hover:bg-gray-300">
                  Select Option
                </button>
              </Dropdown>
            </div>

            <textarea
              name="description"
              placeholder="Description (Optional)"
              rows={3}
              onChange={handleChange}
              className="w-full lg:text-sm text-xs resize-none rounded-lg bg-white px-4 py-2 text-gray-500 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <button
            onClick={() => console.log(formData)}
            className="w-full lg:text-sm text-xs font-extrabold lg:font-bold transform rounded-lg bg-yellow-600 py-2 lg:py-3 text-white transition-colors hover:scale-[1.02] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send
          </button>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0180566231634!2d77.2802189754974!3d28.539176975715858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce386847e1c93%3A0x535231df782a3e3d!2sNEET%20ADVISOR!5e0!3m2!1sen!2sin!4v1736235673499!5m2!1sen!2sin"
        className="lg:h-96 lg:m-0 m-2 w-full rounded-lg shadow-xl transition-transform hover:scale-105 lg:w-1/2"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
  </div>

  );
};

export default Hero;
