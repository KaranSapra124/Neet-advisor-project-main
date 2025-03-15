import axios from "axios";
import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { toast } from "react-toastify";

// const { createContext } = require("react");

const superAdminContext = createContext(null);

export const SuperAdminProvider = ({ children }) => {
  const [superAdmin, setSuperAdmin] = useState(null);

  useEffect(() => {
    const fetchSuperAdmin = async () => {
      try {
        const { data } = await axios?.post(
          `${import.meta.env.VITE_BACKEND_URL}super-admin/super-admin-auth`,
          {},
          { withCredentials: true },
        );
        const userData = data?.superAdmin;
        setSuperAdmin((prev) => ({
          ...prev,
          ...userData,
          role: "Super Admin",
        }));
      } catch (err) {
        toast.error(err?.response?.data?.message);
        return;
      }
    };
    fetchSuperAdmin();
  }, []);
  return (
    <superAdminContext.Provider value={{ superAdmin, setSuperAdmin }}>
      {children}
    </superAdminContext.Provider>
  );
};

export const userSuperAdminAuth = () => useContext(superAdminContext);
