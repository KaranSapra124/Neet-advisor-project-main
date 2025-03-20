import React from "react";
import { FaBookOpen, FaClipboardCheck, FaClock, FaChartPie } from "react-icons/fa";

const Dashboard = () => {
  const mockStats = [
    {
      title: "Total Questions Practiced",
      value: "1,250",
      icon: <FaBookOpen className="text-blue-500 text-3xl" />,
    },
    {
      title: "Mock Tests Taken",
      value: "18",
      icon: <FaClipboardCheck className="text-green-500 text-3xl" />,
    },
    {
      title: "Average Accuracy",
      value: "87%",
      icon: <FaChartPie className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Time Spent (hrs)",
      value: "56",
      icon: <FaClock className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-6">NEET Dashboard</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-lg rounded-xl flex items-center space-x-4"
          >
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <h2 className="text-gray-600">{stat.title}</h2>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
