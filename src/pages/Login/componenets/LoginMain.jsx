import React, { useState } from "react";

const LoginMain = () => {

  const [isActive,setisActive] = useState("one")

  const btnclass1 = () => 
     "flex-1 py-2 text-sm font-medium rounded-md transition-all bg-white text-dark shadow-sm";

  const btnclass2 =() =>
    "flex-1 py-2 text-sm font-medium rounded-md transition-all text-gray-500 hover:text-dark"
  return (
    <div className="flex w-full max-w-full h-screen overflow-x-hidden">
      <div className=" lg:flex fixed left-0 top-0 w-1/2 h-screen bg-[#eb1818]"></div>
      <div className="w-full lg:w-1/2 lg:ml-[50vw] min-h-screen bg-gradient-to-r from-[#080808] to-[#131313]  flex flex-col items-center justify-start">
        <div className="w-full flex flex-col items-center pt-[15%] md:pt-[7%]">
          <div className="mb-[4vh] w-full flex justify-center">
            <img
              src="https://www.moctale.in/media/moctale.png"
              style={{ color: "transparent" }}
              className="h-auto w-[192px] sm:w-[212px] md-[244px] lg:w-[260px] max-w-[75vw]"
              decoding="async"
              data-nimg="1"
              width="196"
              height="42"
              alt="logo"
            />
          </div>
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
                    <button type="button" className={isActive === "one" ? btnclass1(): btnclass2()} onClick={() => setisActive("one") }>Username</button>
                    <button type="button" className={isActive === "two" ? btnclass1(): btnclass2() } onClick={() => setisActive("two")} > Phone</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
