import React from "react";

const Forgotten = () => {
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

            <button type="button">
              <div className=" text-sm text-dark/80 hover:text-dark underline mt-3">
                Forgoten password
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotten;
