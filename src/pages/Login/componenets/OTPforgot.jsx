import React, { useState, useRef, useEffect } from "react";
import { HidePassword, PasswordShow } from "./LoginForm";
import { analyzePassword } from "../../../utilis/PasswordStrength";
import toast from "react-hot-toast";

const OTPforgot = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [storedOtp, setStoredOtp] = useState("");
  const inputsRef = useRef([]);

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
  const { score, label } = analyzePassword(password);
  const level = Math.ceil(score / 20); // 0 to 5

  const generateOtpOnce = () => {
    if (!storedOtp) {
      const newOtp = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");

      setStoredOtp(newOtp);
      toast.success(`Otp - ${newOtp}`);
    } else {
      toast.success(`Otp - ${storedOtp}`);
    }
  };
  useEffect(() => {
    generateOtpOnce();
  }, []);

  // const isDisabled =

  return (
    <div className="w-full max-w-[424px] px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full relative mb-5">
        <div
          className="md:motion-safe:animate-slide md:motion-reduce:animate-none"
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="bg-white w-full max-w-[90vw] md:max-w-[400px] lg:max-w-[424px] rounded-lg p-4 sm:p-6 flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-dark text-center mb-3 sm:mb-4">
              Forgot Password
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
                <div className="pt-2">
                  <label className="text-sm font-medium text-black">
                    New Password{" "}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={password}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[40px] px-2 sm:px-3
                    bg-white rounded-md border  border-gray-300
                    text-black placeholder:text-placeholder
                    focus:outline-none focus:ring-1 focus:ring-black/20 pr-10"
                    />
                    <button
                      className="absolute right-0 inset-y-0 pr-3 
                      flex items-center text-sm
                      leading-5 text-gray-500 hover:text-gray-700"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <div className="relative h-5 w-5">
                        {showPassword ? <HidePassword /> : <PasswordShow />}
                      </div>
                    </button>
                  </div>
                  <div className="w-full h-1 flex gap-0.5 mt-2">
                    {[1, 2, 3, 4, 5].map((bar) => (
                      <div
                        key={bar}
                        className={`h-full flex-1 rounded-full transition-all duration-300 ${
                          bar <= level
                            ? score < 30
                              ? "bg-red-500"
                              : score < 50
                                ? "bg-orange-500"
                                : score < 70
                                  ? "bg-yellow-500"
                                  : score < 90
                                    ? "bg-green-500"
                                    : "bg-emerald-600"
                            : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p
                    className={`text-sm mt-2 font-medium transition-colors duration-300 ${
                      score < 30
                        ? "text-red-600"
                        : score < 50
                          ? "text-orange-500"
                          : score < 70
                            ? "text-yellow-500"
                            : score < 90
                              ? "text-green-600"
                              : "text-emerald-700"
                    }`}
                  >
                    {label}
                  </p>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    className="underline text-gray-500 text-sm hover:text-gray-700"
                    onClick={generateOtpOnce}
                  >
                    Reset password
                  </button>
                </div>
                <div className="w-full flex mt-6 gap-2">
                  <button className="flex flex-1 justify-center items-center rounded-md border-gray-300 ">
                    Cancel
                  </button>
                  <button className="flex flex-1 items-center font-medium rounded-md border border-gray-200 text-black transition-colors h-[40px] justify-center">
                    Reset
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
export default OTPforgot;
