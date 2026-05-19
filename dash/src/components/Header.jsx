import React from "react";

import {
  FaSearch,
  FaBars,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Header({
  darkMode,
  setDarkMode,
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();

  return (
    <header
      className={`
        sticky top-0 z-40
        h-20 px-6
        flex items-center justify-between
        border-b shadow-md
        ${
          darkMode
            ? "bg-[#18253d] border-slate-700"
            : "bg-white border-gray-200"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <button
          className="text-2xl"
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        >
          <FaBars />
        </button>

        <h1 className="text-2xl font-bold text-pink">
          Smart Web Rwanda
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`
            hidden md:flex
            items-center gap-3
            px-4 py-2
            rounded-full
            shadow-lg
            w-[280px]
            ${
              darkMode
                ? "bg-slate-700 border border-slate-600"
                : "bg-white border border-gray-300"
            }
          `}
        >
          <FaSearch />

          <input
            type="text"
            placeholder="Search service..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* 🔥 ADDED BUTTONS ONLY */}
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2  bg-white-600 text-pink"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2  bg-white-600 text-pink"
        >
          Signup
        </button>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="
            px-5 py-2
            rounded-xl
            bg-pink-600
            text-red
          "
        >
          {darkMode ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
}

export default Header;