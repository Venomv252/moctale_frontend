import axios from "axios";

const handleSubmit = async ({ formData }) => {
  const processData = {
    ...formData,
    timestamp: Date.now(),
  };

  const res = await axios.post(
    "https://moctale-backend.onrender.com/api/auth/signup",
    processData
  );

  console.log(res.data);

  return res.data;
};

export default handleSubmit;