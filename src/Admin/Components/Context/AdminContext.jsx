import axios from "axios";
import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const { createContext } = require("react");

const adminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}admin/get-admin`,
          {},
          { withCredentials: true },
        );
        const userData = data?.admin;
        setAdmin((prev) => ({
          ...prev,
          ...userData,
          role: "sub-admin",
        }));
      } catch (err) {
        return;
      }
    };
    fetchAdmin();
  }, []);
  return (
    <adminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </adminContext.Provider>
  );
};

export const useAdminAuth = () => useContext(adminContext);
