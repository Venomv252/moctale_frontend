import axios from "axios";
import React from "react";

const GetOtp = async (phone) => {
  try {
    const res = await axios.post("http://localhost:8080/get-otp", {
      phone: phone,
    });

    return res.data.otp;
  } catch (error) {
    console.error("OTP request failed : ", error);
    throw error;
  }
};

export default GetOtp;
