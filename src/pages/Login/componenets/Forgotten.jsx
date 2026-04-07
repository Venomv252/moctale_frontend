import React, { useState } from "react";
import India from "../../../assets/india.svg";
import toast from "react-hot-toast";

const Forgotten = ({ isAuthForm, setisAuthForm }) => {
  const [phone, setPhone] = useState("");

  const isDisabled = phone.length !== 10;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      toast.error("Enter valid 10 digit phone number");
      return;
    }
    setisAuthForm("OTPforgot");
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
              Forgot Password
            </h1>

            <form onSubmit={handleSubmit}>
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
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    maxLength={"10"}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setPhone(value.slice(0, 10));
                    }}
                    className="w-full h-8 sm:h-9
                  pr-3 sm:pr-3 pl-[5rem] border
                  border-gray-300 rounded-md
                  text-black focus:outline-none
                  focus:ring-1 focus:ring-black/20 text-sm"
                  />
                </div>
              </div>
              <div className="flex mt-6 w-full gap-2">
                <button
                  type="button"
                  className="flex-1 font-medium rounded-md flex items-center bg-gray-200 hover:bg-gray-300 text-black transition-colors h-[40px] justify-center"
                  onClick={() => setisAuthForm("Username")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`flex-1 h-[40px] text-white rounded-md flex items-center justify-center font-medium
                  ${isDisabled ? "bg-black/40" : "bg-black"}
                  
                  `}
                  onClick={() => setisAuthForm("OTPforgot")}
                >
                  Send Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotten;
