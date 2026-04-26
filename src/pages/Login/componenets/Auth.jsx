import React, { useState } from "react";
import Forgotten from "./Forgotten.jsx";
import LoginSign from "./LoginSign.jsx";
import Signup from "./Signup.jsx";
import OTPsignup from "./OTPsignup.jsx";
import OTPforgot from "./OTPforgot.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Auth = () => {
  const [isAuthForm, setisAuthForm] = useState("Username");
  const [serverOtp, SetServerOtp] = useState(null);

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-r from-[#080808] to-[#131313] flex flex-col items-center justify-start">

      {/* LOGO */}
      <div className="w-full flex flex-col items-center pt-[15%] md:pt-[7%]">
        <div className="mb-[4vh] w-full flex justify-center">
          <img
            src="https://www.moctale.in/media/moctale.png"
            className="h-auto w-[192px] sm:w-[212px] md:w-[244px] lg:w-[260px] max-w-[75vw]"
            alt="logo"
          />
        </div>

        {/* FORM ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isAuthForm}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
          >
            {isAuthForm === "Forgot" ? (
              <Forgotten
                isAuthForm={isAuthForm}
                setisAuthForm={setisAuthForm}
              />
            ) : isAuthForm === "Username" || isAuthForm === "Phone" ? (
              <LoginSign
                isAuthForm={isAuthForm}
                setisAuthForm={setisAuthForm}
              />
            ) : isAuthForm === "Sign Up" ? (
              <Signup
                isAuthForm={isAuthForm}
                SetServerOtp={SetServerOtp}
                setisAuthForm={setisAuthForm}
              />
            ) : isAuthForm === "OTPforgot" ? (
              <OTPforgot setisAuthForm={setisAuthForm} />
            ) : isAuthForm === "OTP" ? (
              <OTPsignup
                setisAuthForm={setisAuthForm}
                serverOtp={serverOtp}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SWITCH LINKS */}
      {isAuthForm === "Sign Up" ? (
        <div className="mt-4 text-center">
          <p className="text-sm sm:text-base font-medium text-white">
            Already have an account?{" "}
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
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold hover:underline text-white"
              onClick={() => setisAuthForm("Sign Up")}
            >
              Sign Up
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;