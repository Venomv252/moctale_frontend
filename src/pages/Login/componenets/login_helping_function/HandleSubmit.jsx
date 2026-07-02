import axios from "axios";
export const submit = async ({ formData }) => {
  const processData = {
    ...formData,
    timestamp: Date.now(),
  };

  const res = await axios.post("https://moctale-backend.onrender.com/",processData)

  const result = await res.data;

  return result;
};
