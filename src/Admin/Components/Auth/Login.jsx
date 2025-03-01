import React from "react";
import Container from "../../../Components/Helper/Container";
const Login = () => {
  return (
    <>
      <Container>
        <div className="mx-auto lg:flex-row  w-fit rounded  flex-col-reverse flex lg:max-w-screen-lg border">
          <img
            className="lg:w-1/2 w-80"
            src="https://img.freepik.com/free-vector/business-decisions-concept-illustration_114360-4393.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid"
            alt=""
            srcset=""
          />
          <div className="lg:w-1/2 lg:py-4 py-2 flex flex-col items-center justify-center  w-80 border">
            <h1 className="text-center lg:text-xl text-md my-2  lg:font-bold font-semibold text-primary-color">
              Admin Login
            </h1>
            <div className="flex gap-4 flex-col justify-center items-center ">
              <label className="flex text-sm lg:text-lg font-semibold text-primary-color flex-col">
                Username:
                <input
                  type="text"
                  className="lg:text-md  text-xs font-bold shadow-sm p-2 shadow-gray-400 rounded"
                  name=""
                  placeholder="Enter Your Username..."
                  id=""
                />
              </label>
              <label className="flex text-sm lg:text-lg font-semibold text-primary-color flex-col">
                Password:
                <input
                  type="password"
                  className="text-xs lg:text-md font-bold shadow-sm p-2 shadow-gray-400 rounded"
                  name=""
                  placeholder="Enter Your Username..."
                  id=""
                />
              </label>
              <button className="text-white lg:text-sm text-xs py-2 bg-yellow-600 w-fit px-1.5 rounded   font-semibold ">Get Me In!</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
