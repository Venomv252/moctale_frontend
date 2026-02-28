import React, { useState } from "react";
import Forgotten from "./Forgotten.jsx";
import LoginSign from "./LoginSign.jsx";
import Signup from "./Signup.jsx";


const Auth = () => {
  const [isAuthForm, setisAuthForm] = useState("Sign Up");

  return (
    // logo
    <div className="flex w-full max-w-full h-screen overflow-x-hidden">
      <div className=" lg:flex fixed left-0 top-0 w-1/2 h-screen bg-[#eb1818]"></div>
      <div className="w-full lg:w-1/2 lg:ml-[50vw] min-h-screen bg-gradient-to-r from-[#080808] to-[#131313]  flex flex-col items-center justify-start">
        <div className="w-full flex flex-col items-center pt-[15%] md:pt-[7%]">
          <div className="mb-[4vh] w-full flex justify-center">
            <img
              src="https://www.moctale.in/media/moctale.png"
              style={{ color: "transparent" }}
              className="h-auto w-[192px] sm:w-[212px] md:w-[244px] lg:w-[260px] max-w-[75vw]"
              decoding="async"
              data-nimg="1"
              width="196"
              height="42"
              alt="logo"
            />
          </div>
          // Form
          {isAuthForm === "Forgot" ? (
            <Forgotten />
          ) : isAuthForm === "Username" || isAuthForm === "Phone" ? (
            <LoginSign isAuthForm={isAuthForm} setisAuthForm={setisAuthForm} />
          ) : (
            <Signup />
          )}
        </div>
        {isAuthForm === "Signup" ? (
          <div className="mt-4 text-center">
            <p className="text-sm sm:text-base font-medium text-white">
              {"Already have an account? "}
              <button
                type="button"
                className="font-semibold hover:underline text-white"
                onClick={() => setisAuthForm("Username")}
              >
                Log in
              </button>
            </p>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-sm sm:text-base font-medium text-white">
              {"Don't have an account? "}
              <button
                type="button"
                className="font-semibold hover:underline text-white"
                onClick={() => setisAuthForm("Signup")}
              >
                Sign Up
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
