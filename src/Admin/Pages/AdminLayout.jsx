import { useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaComments,
  FaVideo,
  FaQuestionCircle,
  FaBell,
  FaBlog,
} from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation(); // Get current path

  const menuItems = [
    { name: "Dashboard", link: "/admin", icon: <RiDashboardFill /> },
    { name: "Testimonials", link: "/admin/testimonial", icon: <FaComments /> },
    { name: "Webinars", link: "/", icon: <FaVideo /> },
    { name: "Queries", link: "/", icon: <FaQuestionCircle /> },
    { name: "Alerts & News", link: "/", icon: <FaBell /> },
    { name: "Blogs", link: "/", icon: <FaBlog /> },
  ];

  // Find the active tab based on the current route
  const activeTab = menuItems.find((item) => item.link === location.pathname)?.name || "Admin Panel";

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <div className="w- h-screen bg-[#272E6A] p-4 text-white shadow-md">
        <h1 className="text-center text-lg font-semibold text-white">
          Admin Panel
        </h1>
        <ul className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition ${
                  location.pathname === item.link
                    ? "bg-white text-gray-900"
                    : "hover:bg-white hover:text-gray-900"
                }`}
                to={item.link}
              >
                <span className="mr-2 text-base">{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
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
