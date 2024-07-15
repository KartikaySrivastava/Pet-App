import * as React from "react";
import Logo from "./Images/Logo.png";
import { useRef } from "react";
import Dashboard from "./Dashboard";


export default function Login() {
  const email = useRef();
  const password = useRef();

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "123456"
    )
      localStorage.setItem("emailData", "abc@gmail.com");
    localStorage.setItem("passwordData", "12345");
  };

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <form onSubmit={handleSubmit}>
      {getEmail && getPassword ? (
        <Dashboard/>
      ) : (
        <div className="flex w-full h-screen">
          <div className=" w-full lg:w-1/2 flex items-center justify-center h-screen">
            <div className=" bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 hover:scale-[1.01] ease-in-out transition">
              <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold font-sans text-blue-950">
                Welcome to Furevere
              </h1>
              <p className="font-medium  text-xl sm:text-sm md:text-md lg:text-lg text-blue-900 mt-4">
                Please enter your details.
              </p>

              <div className="mt-8">
                <div>
                  <label className="text-xl sm:text-md md:text-lg font-medium">
                    <p className=" text-blue-900">Email</p>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                    placeholder="Enter your email"
                    type="email"
                    ref={email}
                  />
                </div>

                <div>
                  <label className="text-xl sm:text-md md:text-lg font-medium">
                    <p className=" text-blue-900">Password</p>
                  </label>
                  <input
                    className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                    placeholder="Enter your Password"
                    type="password"
                    ref={password}
                  />
                </div>

                {/* <div className="mt=8 flex justify-between items-center">
                  <button className="font-medium text-md sm:text-sm md:text-md lg:text-base text-blue-900">
                    Forgot Password
                  </button>
                </div> */}

                <div className="mt-8 flex flex-col justify-center gap-y-4">
                  <button
                    onClick={handleClick}
                    className="hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-blue-900 text-white text-lg sm:text-md md:text-md lg:text-lg font-bold"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:flex items-center justify-center w-1/2 h-full bg-gray-200">
            <div className="">
              {/*Div for landing page logo*/}
              <img
                className="hover:scale-110 ease-in-out duration-300 max-w-full h-auto classes"
                src={Logo}
              />
            </div>
            <div className="w-full h-1/2 absolute bottom-0 bg-white/10/"></div>
          </div>
        </div>
      )}
    </form>
  );
}
