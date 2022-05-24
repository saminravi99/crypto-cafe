import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  //Declaring State
  const [token, setToken] = useState("");

  //useEffect Hook to Create JWT Token during Login And Sign Up
  useEffect(() => {
    const getToken = async () => {
      const email = user?.email;
      if (email) {
        const { data } = await axios.post("http://localhost:5000/login", {
          email,
        });
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
