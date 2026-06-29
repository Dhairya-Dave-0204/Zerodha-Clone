import { useState, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./AppContext";

const MIN_LOADING_TIME = 650;

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const startTime = Date.now();

    try {
      const res = await axios.get(`${backendUrl}/user/current-user`, {
        withCredentials: true,
      });

      console.log(res.data);

      if (res.data.success) {
        setUser(res.data.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      console.error(error.response?.data);
      console.error(error.response?.status);

      setUser(null);
    } finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    user,
    setUser,
    loading,
    fetchUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
