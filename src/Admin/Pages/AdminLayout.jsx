import { useState } from "react";
import { FaTachometerAlt, FaComments, FaVideo, FaQuestionCircle, FaBell, FaBlog } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <RiDashboardFill /> },
    { name: "Testimonials", icon: <FaComments /> },
    { name: "Webinars", icon: <FaVideo /> },
    { name: "Queries", icon: <FaQuestionCircle /> },
    { name: "Alerts & News", icon: <FaBell /> },
    { name: "Blogs", icon: <FaBlog /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-[#272E6A] text-white p-4 shadow-md">
        <h1 className="text-lg font-semibold text-center text-white">Admin Panel</h1>
        <ul className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition ${
                  activeTab === item.name ? "bg-white text-gray-900" : "hover:bg-white hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                <span className="mr-2 text-base">{item.icon}</span> {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h2 className="text-2xl font-semibold text-[#272E6A]">{activeTab}</h2>
        <div className="mt-3 p-5 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">
            Welcome to the <span className="font-medium">{activeTab}</span> section; here, you can manage all the
            necessary details and information related to your selected category.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
