import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

const superAdminContext = createContext(null);

export const SuperAdminProvider = ({ children }) => {
  const [superAdmin, setSuperAdmin] = useState(null);

  useEffect(() => {
    const fetchSuperAdmin = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}super-admin/super-admin-auth`,
          {},
          { withCredentials: true },
        );

        setSuperAdmin(data?.superAdmin);
      } catch (err) {
        throw new Error(err.response);
      }
    };
    fetchSuperAdmin();
  });
  return (
    <superAdminContext.Provider value={{ superAdmin, setSuperAdmin }}>
      {children}
    </superAdminContext.Provider>
  );
};

export const superAdminAuth = () => useContext(superAdminContext);
