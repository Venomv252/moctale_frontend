const handleSubmit = async ({ formData }) => {
  const processData = {
    ...formData,
    timestamp: Date.now(),
  };

  const res = await axios.post("http://localhost:8080/signup", processData);

  const result = await res.data;

  console.log(result);

  return result;
};
export default handleSubmit;
