import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
const OTPsignup = ({ setisAuthForm, serverOtp }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const isOtpComplete = otp.join("").length === 6;

  const inputsRef = useRef([]);

  const handleResend = () => {
    toast.success(serverOtp);
  };

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    //Move forward

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="w-full max-w-[424px] px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full relative mb-5">
        <div
          className="md:motion-safe:animate-slide md:motion-reduce:animate-none"
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="bg-white w-full max-w-[90vw] md:max-w-[400px] lg:max-w-[424px] rounded-lg p-4 sm:p-6 flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-dark text-center mb-3 sm:mb-4">
              Signup
            </h1>
            <form>
              <div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    OTP
                  </label>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full aspect-square text-center 
                rounded-md border border-gray-300 bg-white
                text-black text-lg font-medium 
                focus:outline-none focus:ring-1 focus:ring-black/90"
                    />
                  ))}
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    className="underline text-gray-500 text-sm hover:text-gray-700"
                    onClick={handleResend}
                  >
                    Reset password
                  </button>
                </div>
                <div className="w-full flex mt-6 gap-2">
                  <button
                    type="button"
                    className="flex flex-1 justify-center items-center rounded-md border-gray-300 "
                    onClick={() => setisAuthForm("Sign Up")}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!isOtpComplete}
                    className={`flex flex-1 items-center
                   font-medium rounded-md border
                    border-gray-200  
                    transition-colors h-[40px] justify-center 
                    ${isOtpComplete ? "bg-[#740DF6] text-white" : "bg-white text-black"}
                    `}
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPsignup;
