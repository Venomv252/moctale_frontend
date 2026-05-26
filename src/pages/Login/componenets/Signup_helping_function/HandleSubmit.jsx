import axios from "axios";

const handleSubmit = async ({ formData }) => {
  const processData = {
    ...formData,
    timestamp: Date.now(),
  };

  const res = await axios.post(
    "http://localhost:8080/api/auth/signup",
    processData
  );

  console.log(res.data);

  return res.data;
};

export default handleSubmit;