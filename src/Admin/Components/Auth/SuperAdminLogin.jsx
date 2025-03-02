import React, { useState } from "react";
import Container from "../../../Components/Helper/Container";
import Divider from "../../../Components/Helper/Divider";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
const SuperAdminLogin = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/send-super-admin-otp`,
      { email: email },
    );
    setEmail("");
    toast.success(data?.message);
  };
  return (
    <>
      <Container>
        <div className="mx-auto flex w-fit flex-col-reverse rounded border lg:max-w-screen-lg lg:flex-row">
          <img
            className="w-80 lg:w-1/2"
            src="https://img.freepik.com/free-vector/business-decisions-concept-illustration_114360-4393.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid"
            alt=""
            srcset=""
          />
          <div className="flex w-80 flex-col items-center justify-center border py-2 lg:w-1/2 lg:py-4">
            <h1 className="text-md text-center font-semibold text-primary-color lg:text-lg lg:font-extrabold">
              Super Admin Login
            </h1>
            <Divider
              className={"my-2 h-1 w-12 rounded-full bg-primary-color"}
            />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-4"
            >
              <label className="flex flex-col text-sm font-semibold text-primary-color lg:text-lg">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  className="lg:text-md rounded p-2 text-xs font-bold shadow-sm shadow-gray-400 outline-none"
                  name=""
                  placeholder="Enter Your Registered Mail..."
                  id=""
                />
              </label>
              {/* <label className="flex flex-col text-sm font-semibold text-primary-color lg:text-lg">
                Password:
                <input
                  type="password"
                  className="lg:text-md rounded p-2 text-xs font-bold shadow-sm shadow-gray-400"
                  name=""
                  placeholder="Enter Your Username..."
                  id=""
                />
              </label> */}
              <button
                type="submit"
                className="flex w-fit items-center gap-2 rounded bg-yellow-600 px-1.5 py-2 text-xs font-medium text-white shadow shadow-black lg:text-sm"
              >
                Get OTP <FaPaperPlane className="text-xs text-white" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SuperAdminLogin;
