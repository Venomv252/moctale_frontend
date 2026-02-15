import React from "react";
import Nagi from "../../../assets/Nagi.jpg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="relative pt-2  z-20 bg-[#080808]">
        <div className="text-white mb-2 text-3xl font-bold text-center ">
          Meet the Developer
        </div>
        <div
          className="flex flex-col gap-[10px] items-center"
          style={{ height: "500px" }}
        >
          <img
            className="rounded-xl"
            src={Nagi}
            alt="developer image"
            style={{ height: "70%", aspectRatio: "2/3" }}
          />
          <div className="flex">
            <LinkedInIcon className="text-white" sx={{ fontSize: 40 }} />
          </div>
        </div>

        <div id = "div1" className=" relative w-full bg-[linear-gradient(to_top,#B048FF_-50%,transparent_100%)] pt-32 pb-12 md:pt-48 md:pb-16 -mt-[100px] z-20">
          <div id= "div2" className="container mx-auto pl-3 pr-4 lg:pl-6 lg:pr-8 xl:pl-14 xl:pr-16 2xl:pl-[120px] 2xl:pr-[128px]">
            <div id = "div3" className="flex flex-col md:flex-row justify-between items-center gap-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">

                Create your account 
                <br className="hidden md:block"/>and experience 
                <br className="hidden md:block"/>Moctale for yourself
                </h2>
            <Link to= "/login"><button className="bg-[#8F41F0] text-white px-8 py-4 rounded-[12px] font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(143,68,240,0.5)]"> Login</button></Link>
            </div>
          </div>

         
        </div>
      </footer>
    </>
  );
};

export default Footer;
