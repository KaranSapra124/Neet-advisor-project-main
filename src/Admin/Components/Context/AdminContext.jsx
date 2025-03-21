import axios from "axios";
import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const { createContext } = require("react");

const adminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    console.log(admin);
  }, [admin]);
  useEffect(() => {
    console.log("Fetch Admin");
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
        return err;
      }
    };
    fetchAdmin();
  }, [adminContext, children]);
  return (
    <adminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </adminContext.Provider>
  );
};

export const useAdminAuth = () => useContext(adminContext);
