import { useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaComments,
  FaVideo,
  FaQuestionCircle,
  FaBell,
  FaBlog,
  FaGraduationCap,
  FaUser,
} from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { userSuperAdminAuth } from "../Components/Context/SuperAdminContext";
import { BsFileBarGraph } from "react-icons/bs";
import { useAdminAuth } from "../Components/Context/AdminContext";

const AdminLayout = ({ user }) => {
  const location = useLocation(); // Get current path
  const navigate = useNavigate();
  const SuperAdminContext =
    user === "Super-Admin" ? userSuperAdminAuth() : useAdminAuth();
  console.log(SuperAdminContext);

  const menuItems =
    user === "Super-Admin"
      ? [
          { name: "Dashboard", link: "/admin", icon: <RiDashboardFill /> },
          {
            name: "Testimonials",
            link: "/admin/testimonial",
            icon: <FaComments />,
          },
          { name: "Queries", link: "/", icon: <FaQuestionCircle /> },
          {
            name: "Services",
            link: "/admin/services",
            icon: <BsFileBarGraph />,
          },
          { name: "Alerts & News", link: "/", icon: <FaBell /> },
          { name: "Blogs", link: "/", icon: <FaBlog /> },
          {
            name: "Students",
            link: "/admin/students",
            icon: <FaGraduationCap />,
          },
          { name: "Permissions", link: "/admin/permissions", icon: <FaUser /> },
        ]
      : [
          { name: "Dashboard", link: "/sub-admin", icon: <RiDashboardFill /> },
          {
            name: "Testimonials",
            link: "/sub-admin/testimonial",
            icon: <FaComments />,
          },
          { name: "Queries", link: "/", icon: <FaQuestionCircle /> },
          {
            name: "Services",
            link: "/sub-admin/services",
            icon: <BsFileBarGraph />,
          },
          { name: "Alerts & News", link: "/", icon: <FaBell /> },
          { name: "Blogs", link: "/", icon: <FaBlog /> },
          {
            name: "Students",
            link: "/sub-admin/students",
            icon: <FaGraduationCap />,
          },
          // { name: "Permissions", link: "/admin/permissions", icon: <FaUser /> },
        ];

  // Find the active tab based on the current route
  const activeTab =
    menuItems.find((item) => item.link === location.pathname)?.name ||
    "Admin Panel";

  useEffect(() => {
    const authAdmin = async () => {
      // console.log(user)
      try {
        user === "Super-Admin"
          ? (async () => {
              const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}super-admin/super-admin-auth`,
                {},
                { withCredentials: true },
              );
              toast.success(data?.message);
            })()
          : (async () => {
              console.log(user);
              const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}admin/get-admin`,
                {},
                { withCredentials: true },
              );
              toast.success(data?.message);
            })();
      } catch (err) {
        toast.error(err?.response?.data);
        navigate("/admin/login");
      }
    };
    authAdmin();
  }, []);

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <div className="h-screen bg-[#272E6A] p-4 text-white shadow-md">
        <h1 className="text-center text-lg font-semibold text-white">
          Admin Panel
        </h1>
        <ul className="mt-4 space-y-2">
          {user !== "Super-Admin"
            ? menuItems.map((item) => {
                const isDisabled =
                  !SuperAdminContext?.admin?.adminPermissions?.some(
                    (element) =>
                      element?.toLowerCase().trim() ===
                      item?.name?.toLowerCase()?.trim(),
                  );

                return (
                  <li
                    key={item.name}
                    style={{
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      opacity: isDisabled ? 0.5 : 1,
                    }}
                  >
                    <Link
                      className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition ${
                        location.pathname === item.link
                          ? "bg-white text-gray-900"
                          : "hover:bg-white hover:text-gray-900"
                      }`}
                      to={!isDisabled ? "#" : item.link} // ✅ Link pe click hone se rok diya
                      onClick={(e) => {
                        if (isDisabled) {
                          e.preventDefault();
                          toast.error(
                            "You don't have permission to access this section.",
                          );
                        }
                      }}
                    >
                      <span className="mr-2 text-base">{item.icon}</span>{" "}
                      {item.name}
                    </Link>
                  </li>
                );
              })
            : menuItems.map((item) => {
               
                return (
                  <li
                    key={item.name}
                    
                  >
                    <Link
                      className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition ${
                        location.pathname === item.link
                          ? "bg-white text-gray-900"
                          : "hover:bg-white hover:text-gray-900"
                      }`}
                      to={item.link} // ✅ Link pe click hone se rok diya
                      // onClick={(e) => {
                      //   if (isDisabled) {
                      //     e.preventDefault();
                      //     toast.error(
                      //       "You don't have permission to access this section.",
                      //     );
                      //   }
                      // }}
                    >
                      <span className="mr-2 text-base">{item.icon}</span>{" "}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h2 className="text-2xl font-semibold text-[#272E6A]">{activeTab}</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
