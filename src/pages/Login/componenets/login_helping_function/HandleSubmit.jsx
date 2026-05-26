import axios from "axios";
export const submit = async ({ formData }) => {
  const processData = {
    ...formData,
    timestamp: Date.now(),
  };

  const res = await axios.post("http://localhost:8080/",processData)

  const result = await res.data;

  return result;
};
