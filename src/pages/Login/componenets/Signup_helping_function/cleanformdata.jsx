const getCleanedFormData = (formData) => {
  return {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    username: formData.username.trim().toLowerCase(),
    password: formData.password.trim(),
    phone: formData.phone.trim(),
  };
};
export default getCleanedFormData;