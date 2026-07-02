import axios from "axios";
import React from "react";

const GetOtp = async (phone) => {
  try {
    const res = await axios.post("https://moctale-backend.onrender.com/api/utils/getOtp", {
      phone: phone,
    });

    return res.data.otp;
  } catch (error) {
    console.error("OTP request failed : ", error);
    throw error;
  }
};

export default GetOtp;
