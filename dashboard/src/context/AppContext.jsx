import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${backendUrl}/user/current-user`, {
        withCredentials: true,
      });
      console.log(res.data)
      if (res.data.success) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    user,
    setUser,
    backendUrl,
    loading,
    setLoading,
    fetchUser,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
