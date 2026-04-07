import { useEffect,useState } from "react";

const useCheckUsername = (username) => {
  const [isAvailable, setAvailable] = useState(null);
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!username) return;

      const res = await fetch(`http://localhost:8080/check-username/${username}`);
      const data = await res.json();

      setAvailable(data.available);
    }, 300);

    return () => clearTimeout(timer);
  }, [username]);

  return isAvailable;
  
};

export default useCheckUsername;
