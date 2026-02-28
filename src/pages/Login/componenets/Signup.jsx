import React, { useState } from "react";
import { PasswordShow, HidePassword } from "./LoginForm.jsx";
import India from "../../../assets/india.svg";
import { analyzePassword } from "../../../utilis/PasswordStrength.jsx";

const Signup = ({ isAuthForm, setisAuthForm }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { score, label } = analyzePassword(formData.password);
  const level = Math.ceil(score / 20); // 0 to 5

  return (
    <div className="w-full max-w-[424px] px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full relative mb-5">
        <div
          className="md:motion-safe:animate-slide md:motion-reduce:animate-none"
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="bg-white w-full max-w-[90vw] md:max-w-[400px] lg:max-w-[424px] rounded-lg p-4 sm:p-6 flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-dark text-center mb-3 sm:mb-4">
              Sign Up
            </h1>

            <form className="space-y-2.5 sm:space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {/* //firstName */}
                <div>
                  <label className="block text-sm font-medium mb-0.5 ">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-8 sm:h-9 px-2 sm:px-3 rounded-md border bg-white border-gray-300 text-black focus:outline-none focus:ring-1 focus:ring-black/20 text-sm"
                  />
                  <div className="mt-1.5 space-y-1 transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
                    <div className="flex items-center gap-1 text-xs transform transition-transform duration-300 ease-in-out">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 352 512"
                        className="text-red-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                      </svg>
                      <span className="text-red-600 transition-colors duration-300">
                        Must contain at least one letter
                      </span>
                    </div>
                  </div>
                </div>
                {/* lastName */}
                <div>
                  <label className="block text-sm font-medium mb-0.5 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-8 sm:h-9 px-2 sm:px-3 rounded-md border bg-white border-gray-300 text-black focus:outline-none focus:ring-1 focus:ring-back/20 text-sm"
                  />
                  <div className="mt-1.5 space-y-1 transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
                    <div className="flex items-center gap-1 text-xs transform transition-transform duration-300 ease-in-out">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 352 512"
                        className="text-red-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                      </svg>
                      <span className="text-red-600 transition-colors duration-300">
                        Must contain at least one letter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Username */}
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <label className="block text-sm font-medium text-black">
                    Username
                  </label>
                </div>
                <input
                  className="w-full h-8 
                  sm:h-9 px-2 sm:px-3 
                  rounded-md border 
                  bg-white border-gray-300 
                  text-black focus:outline-none 
                  focus:ring-1 focus:ring-black/20 text-sm"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="username"
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                  maxlength="25"
                  spellCheck="false"
                  placeholder="Choose a username"
                />
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="block text-sm font-medium text-black">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full h-8 sm:h-9 px-2 sm:px-3 pr-10 border border-gray-300 rounded-md focus:outline-none bg-white focus:ring-1 focus:ring-black/20"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Create a password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-500 hover:text-black transition-colors duration-200"
                    >
                      <div className="w-5 h-5">
                        {showPassword ? <PasswordShow /> : <HidePassword />}
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
              </div>

              <div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    Phone
                  </label>
                </div>
                <div className="relative flex-1 min-w-[140px]">
                  <div className="absolute left-0 inset-y-0 flex items-center pl-3 gap-1 pointer-events-none">
                    <img
                      alt="India"
                      loading="lazy"
                      width="24"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-4 object-contain"
                      src={India}
                      style={{ color: "transparent" }}
                    />
                    <span className="text-gray-500 text-sm">+91 - </span>
                  </div>

                  <input
                    className="w-full h-8 
                    sm:h-9 pr-3 sm:pr-3 pl-[5rem]
                    rounded-md border
                    bg-white border-gray-300
                    text-black focus:outline-none
                    focus:ring-1 focus:ring-black/20 text-sm"
                    type="number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder="Enter phone number "
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full h-[40px] rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300
                  ${
                    !formData.firstName ||
                    !formData.password ||
                    !formData.phone ||
                    !formData.lastName ||
                    !formData.username
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed opacity-70 hover:opacity-70"
                      : " bg-gradient-to-r from-[#B048FF] to-[#8F44F0] text-white"
                  } `}
                >
                  Get Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
