import React from "react";

import {
  FaUsers,
  FaBoxOpen,
  FaChartLine,
  FaFolder,
  FaTimes,
  FaGamepad,
  FaBullhorn,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Sidebar({
  darkMode,
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();

  const menuItems = [
   
    {
      icon: <FaFolder />,
      name: "Projects",
      path: "/projects",
    },
    {
      icon: <FaUsers />,
      name: "Users",
      path: "/users",
    },
    {
      icon: <FaBoxOpen />,
      name: "Products",
      path: "/products",
    },
    {
      icon: <FaChartLine />,
      name: "Reports",
      path: "/reports",
    },

    /* ONLINE GAMING */
    {
      icon: <FaGamepad />,
      name: "Online Gaming",
      path: "/gaming",
    },

    /* ADVERTISEMENT */
    {
      icon: <FaBullhorn />,
      name: "Advertisement",
      path: "/advertisement",
    },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-screen
        transition-all duration-300
        border-r
        ${
          sidebarOpen
            ? "w-64"
            : "w-0 overflow-hidden"
        }
        ${
          darkMode
            ? "bg-[#18253d] border-slate-700"
            : "bg-white border-gray-200"
        }
      `}
    >
      <div className="h-20 px-6 flex items-center justify-between border-b border-slate-700">
        <h1 className="text-3xl ">
          sidebar
        </h1>

        <button
          onClick={() =>
            setSidebarOpen(false)
          }
        >
          <FaTimes />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(item.path)
            }
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-700"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;