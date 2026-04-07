import { useState, useEffect } from "react";

const useCheckPhone = (phone) => {
  const [available, setAvailable] = useState(null);
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!phone) {
        setAvailable(null);
        return;
      }
      if (phone.length !== 10) {
        setAvailable(null);
        return;
      }

      const res = await fetch(`http://localhost:8080/checkPhone/${phone}`);
      const data = await res.json();

      setAvailable(data.available);
    }, 300);
    return () => clearTimeout(timer);
  }, [phone]);

  return available;
};

export default useCheckPhone;
