import { useLocation, useNavigate } from "react-router-dom";
import {
  FaComments,
  FaQuestionCircle,
  FaBell,
  FaBlog,
  FaGraduationCap,
  FaUser,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { userSuperAdminAuth } from "../Components/Context/SuperAdminContext";
import { BsFileBarGraph, BsGraphUp } from "react-icons/bs";
import { useAdminAuth } from "../Components/Context/AdminContext";
import { FaPeopleGroup, FaShield } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const AdminLayout = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // console.log(user,'USER')

  const SuperAdminContext =
    user === "Super-Admin" ? userSuperAdminAuth() : useAdminAuth();

  const menuItems = useMemo(
    () => [
      {
        name: "Dashboard",
        link: user === "Super-Admin" ? "/super-admin" : "/sub-admin",
        icon: <RiDashboardFill />,
      },
      {
        name: "Testimonials",
        link: `/${user.toLowerCase()}/testimonial`,
        icon: <FaComments />,
      },
      { name: "Queries", link: "/", icon: <FaQuestionCircle /> },
      {
        name: "Services",
        link: `/${user.toLowerCase()}/services`,
        icon: <BsFileBarGraph />,
      },
      {
        name: "Alerts & News",
        link: `/${user.toLowerCase()}/news`,
        icon: <FaBell />,
      },
      // { name: "Blogs", link: `/${user.toLowerCase()}/news`, icon: <FaBlog /> },
      {
        name: "Students",
        link: `/${user.toLowerCase()}/students`,
        icon: <FaGraduationCap />,
      },
      {
        name: "Webinars",
        link: `/${user.toLowerCase()}/webinars`,
        icon: <FaChalkboardTeacher />,
      },
      {
        name: "Seminars",
        link: `/${user?.toLowerCase()}/seminar`,
        icon: <FaPeopleGroup />,
      },
      {
        name: "Seminar Progress",
        link: `/super-admin/seminar-progress`,
        icon: <BsGraphUp />,
      },
      {
        name: "Permissions",
        link: `/${user?.toLowerCase()}/permissions`,
        icon: <FaShield />,
      },
    ],
    [user],
  );

  const activeTab = useMemo(
    () =>
      menuItems.find((item) => item.link === location.pathname)?.name ||
      "Admin Panel",
    [location.pathname, menuItems],
  );

  const authAdmin = useCallback(async () => {
    try {
      const endpoint =
        user === "Super-Admin" ? "super-admin-auth" : "get-admin";
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint === "get-admin" ? "admin" : user.toLowerCase()}/${endpoint}`,
        {},
        { withCredentials: true },
      );
      toast.success(data?.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
      navigate(`/${user.toLowerCase()}/login`);
    }
  }, [user]);

  useEffect(() => {
    if (!SuperAdminContext?.admin) {
      authAdmin();
    }
  }, [authAdmin, SuperAdminContext]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`h-screen ${sidebarOpen ? "w-64" : "w-20"} flex flex-col bg-[#272E6A] p-6 text-white shadow-lg transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          <h1
            className={`text-xl font-bold transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "hidden opacity-0"}`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mx-auto text-xl focus:outline-none"
          >
            {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <nav className="mt-6 flex-1">
          <ul className="space-y-3">
            {menuItems.map(({ name, link, icon }) => {
              const isDisabled =
                user !== "Super-Admin" &&
                !SuperAdminContext?.admin?.adminPermissions?.some(
                  (perm) =>
                    perm.toLowerCase().trim() === name.toLowerCase().trim(),
                );
              const isActive = location.pathname === link;
              return (
                <li
                  key={name}
                  className={`group transition ${isDisabled ? "cursor-not-allowed opacity-50" : "rounded hover:bg-white hover:text-gray-900"} ${isActive ? "rounded bg-white text-gray-900" : ""}`}
                >
                  <Link
                    to={isDisabled ? "#" : link}
                    className={`flex items-center gap-3 rounded-md transition ${sidebarOpen ? "px-4 py-3" : "px-1.5 py-2"}`}
                    onClick={(e) =>
                      isDisabled &&
                      (e.preventDefault(), toast.error("Access Denied"))
                    }
                  >
                    <span className="text-lg">{icon}</span>
                    <span
                      className={`text-sm font-medium transition-all ${sidebarOpen ? "opacity-100" : "hidden opacity-0"}`}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h2 className="mb-4 text-2xl font-bold text-[#272E6A]">{activeTab}</h2>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
