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

    /* SMART TRAFFIC AI */
    {
      icon: <FaChartLine />,
      name: "Smart Traffic AI",
      path: "/smart-traffic",
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
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-green-700"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* AI INTELLIGENT ROTATION CIRCLE */}
      <button
        onClick={() =>
          navigate("/ai-entertainment")
        }
      >
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          
          <div className="relative w-12 h-12 flex items-center justify-center">

            {/* ROTATING GOLD RING BEHIND */}
            <div className="absolute inset-0 rounded-full border-[3px] border-yellow-400 border-t-transparent animate-spin shadow-[0_0_25px_rgba(255,215,0,1)]"></div>

            {/* AI LOGO CENTER */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-black font-black text-xs shadow-[0_0_20px_rgba(255,215,0,1)] z-10">
              IA
            </div>

          </div>

        </div>
      </button>
    </aside>
  );
}

export default Sidebar;