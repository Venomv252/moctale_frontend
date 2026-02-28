import React, { useState } from "react";
import LoginFormUser from "./LoginForm";
import LoginFormPhone from "./LoginFormPhone";

const LoginSign = ({ isAuthForm, setisAuthForm }) => {
  const btnclass1 = () =>
    "flex-1 py-2 text-sm font-medium rounded-md transition-all bg-white text-dark shadow-sm";

  const btnclass2 = () =>
    "flex-1 py-2 text-sm font-medium rounded-md transition-all text-gray-500 hover:text-dark";

  return (
    <div className="w-full max-w-[424px] px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full relative mb-5">
        <div
          className="md:motion-safe:animate-slide md:motion-reduce:animate-none"
          style={{ opacity: "1", transform: "none" }}
        >
          <div
            className="bg-white 
                                w-full max-w-[90vw] md:max-w-[400px] lg:max-w-[424px]
                                rounded-lg p-4 sm:p-6 flex flex-col items-center"
          >
            <h1 className="text-xl sm:text-2xl font-semibold text-dark text-center mb-3 sm:mb-4">
              Login
            </h1>
            <div className="w-full flex mb-4 bg-gray-100 p-1 rounded-lg">
              <button
                type="button"
                className={
                  isAuthForm === "Username" ? btnclass1() : btnclass2()
                }
                onClick={() => setisAuthForm("Username")}
              >
                Username
              </button>
              <button
                type="button"
                className={isAuthForm === "Phone" ? btnclass1() : btnclass2()}
                onClick={() => setisAuthForm("Phone")}
              >
                {" "}
                Phone
              </button>
            </div>
            {isAuthForm === "Username" ? <LoginFormUser /> : <LoginFormPhone />}
            <button
              className="text-sm text-dark/80 hover:text-dark underline mt-3"
              type="button"
              onClick={() => setisAuthForm("Forgot")}
            >
              Forgot password ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSign;
