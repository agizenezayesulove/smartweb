import React, { useState } from "react";

import {
  FaFolder,
  FaShoppingBag,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaSearch,
  FaSignOutAlt,
  FaPlus,
  FaStore,
  FaTruck,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const [projects] = useState([
    {
      id: 1,
      name: "Online Shoes Store",
      team: "E-Commerce Team",
      status: "Completed",
      progress: "100%",
      deadline: "12 May 2026",
      budget: "$12,000",
    },

    {
      id: 2,
      name: "Smartphones Marketplace",
      team: "Marketing Team",
      status: "In Progress",
      progress: "75%",
      deadline: "20 May 2026",
      budget: "$18,500",
    },

    {
      id: 3,
      name: "Furniture Delivery System",
      team: "Delivery Team",
      status: "Pending",
      progress: "40%",
      deadline: "28 May 2026",
      budget: "$9,800",
    },

    {
      id: 4,
      name: "Luxury Cars Platform",
      team: "Sales Team",
      status: "Completed",
      progress: "100%",
      deadline: "05 May 2026",
      budget: "$25,000",
    },

    {
      id: 5,
      name: "Electronics Inventory",
      team: "Warehouse Team",
      status: "In Progress",
      progress: "68%",
      deadline: "30 May 2026",
      budget: "$15,200",
    },
  ]);

  const graphData = [
    {
      month: "Jan",
      value: 45,
    },
    {
      month: "Feb",
      value: 70,
    },
    {
      month: "Mar",
      value: 55,
    },
    {
      month: "Apr",
      value: 90,
    },
    {
      month: "May",
      value: 65,
    },
    {
      month: "Jun",
      value: 85,
    },
    {
      month: "Jul",
      value: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-[#071028] text-white p-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-bold">
            Business Projects
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Manage store projects,
            e-commerce systems,
            deliveries, inventory and
            business operations.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 ml-auto">
          {/* SEARCH */}
          <div
            className="
              flex items-center gap-3
              bg-[#18253d]
              px-5 py-4
              rounded-2xl
              shadow-xl
              w-full lg:w-[320px]
            "
          >
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search business projects..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* DASHBOARD BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="
              flex items-center gap-2
              bg-pink-600
              hover:bg-pink-700
              px-5 py-3
              rounded-2xl
              shadow-xl
              transition-all
              duration-300
              font-semibold
            "
          >
            <FaSignOutAlt />

            Dashboard
          </button>
        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {/* TOTAL */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80 text-sm">
                Total Projects
              </p>

              <h2 className="text-4xl font-bold mt-3">
                48
              </h2>
            </div>

            <FaFolder className="text-5xl" />
          </div>
        </div>

        {/* STORES */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80 text-sm">
                Online Stores
              </p>

              <h2 className="text-4xl font-bold mt-3">
                16
              </h2>
            </div>

            <FaStore className="text-5xl" />
          </div>
        </div>

        {/* DELIVERIES */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80 text-sm">
                Deliveries
              </p>

              <h2 className="text-4xl font-bold mt-3">
                1,240
              </h2>
            </div>

            <FaTruck className="text-5xl" />
          </div>
        </div>

        {/* REVENUE */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80 text-sm">
                Revenue
              </p>

              <h2 className="text-4xl font-bold mt-3">
                $320K
              </h2>
            </div>

            <FaDollarSign className="text-5xl" />
          </div>
        </div>
      </div>

      {/* BUSINESS OVERVIEW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">
        {/* LEFT */}
        <div className="xl:col-span-2 bg-[#18253d] rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                Business Growth
              </h2>

              <p className="text-gray-400 mt-2">
                Sales and business
                performance this year.
              </p>
            </div>

            <button
              className="
                flex items-center gap-2
                bg-blue-600
                hover:bg-blue-700
                px-5 py-3
                rounded-2xl
                shadow-lg
                transition-all
              "
            >
              <FaPlus />

              New Project
            </button>
          </div>

          {/* MODERN GRAPH */}
          <div className="bg-[#0f172a] rounded-3xl p-6 h-[420px] relative overflow-hidden">
            {/* GRID LINES */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-20">
              <div className="border-b border-slate-500"></div>
              <div className="border-b border-slate-500"></div>
              <div className="border-b border-slate-500"></div>
              <div className="border-b border-slate-500"></div>
              <div className="border-b border-slate-500"></div>
            </div>

            {/* GRAPH CONTENT */}
            <div className="relative h-full flex items-end justify-between gap-4">
              {graphData.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  {/* VALUE */}
                  <span className="mb-3 text-sm font-semibold text-cyan-400">
                    {item.value}%
                  </span>

                  {/* BAR */}
                  <div
                    style={{
                      height: `${item.value * 3}px`,
                    }}
                    className="
                      w-full
                      max-w-[70px]
                      rounded-t-[30px]
                      bg-gradient-to-t
                      from-cyan-400
                      via-blue-500
                      to-blue-700
                      shadow-[0_0_30px_rgba(59,130,246,0.5)]
                      hover:scale-105
                      hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]
                      transition-all
                      duration-500
                      relative
                      group
                    "
                  >
                    {/* GLOW */}
                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        w-full
                        h-8
                        bg-white/20
                        rounded-t-[30px]
                      "
                    ></div>
                  </div>

                  {/* MONTH */}
                  <span className="mt-4 text-gray-400 font-medium">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#18253d] rounded-3xl p-6 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">
            Business Summary
          </h2>

          <div className="space-y-5">
            <div className="bg-slate-800 p-5 rounded-2xl hover:bg-slate-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">
                    Products Sold
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    12,540
                  </h3>
                </div>

                <FaShoppingBag className="text-5xl text-blue-400" />
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl hover:bg-slate-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">
                    Customers
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    4,820
                  </h3>
                </div>

                <FaUsers className="text-5xl text-green-400" />
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl hover:bg-slate-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">
                    Active Orders
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    326
                  </h3>
                </div>

                <FaTruck className="text-5xl text-orange-400" />
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl hover:bg-slate-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">
                    Business Growth
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    +24%
                  </h3>
                </div>

                <FaChartLine className="text-5xl text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS TABLE */}
      <div className="bg-[#18253d] rounded-3xl shadow-2xl overflow-hidden">
        {/* TABLE HEADER */}
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Recent Business Projects
            </h2>

            <p className="text-gray-400 mt-2">
              Track all business and
              store operations.
            </p>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-5">
                  Project
                </th>

                <th className="text-left p-5">
                  Team
                </th>

                <th className="text-left p-5">
                  Progress
                </th>

                <th className="text-left p-5">
                  Budget
                </th>

                <th className="text-left p-5">
                  Deadline
                </th>

                <th className="text-left p-5">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="
                    border-b border-slate-700
                    hover:bg-slate-800
                    transition-all duration-300
                  "
                >
                  {/* PROJECT */}
                  <td className="p-5 font-semibold">
                    {project.name}
                  </td>

                  {/* TEAM */}
                  <td className="p-5">
                    {project.team}
                  </td>

                  {/* PROGRESS */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-[120px] h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          style={{
                            width:
                              project.progress,
                          }}
                          className="h-full bg-blue-500 rounded-full"
                        ></div>
                      </div>

                      <span>
                        {project.progress}
                      </span>
                    </div>
                  </td>

                  {/* BUDGET */}
                  <td className="p-5 text-green-400 font-semibold">
                    {project.budget}
                  </td>

                  {/* DEADLINE */}
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-orange-400" />

                      {project.deadline}
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="p-5">
                    <span
                      className={`
                        px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          project.status ===
                          "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : project.status ===
                              "Pending"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-blue-500/20 text-blue-400"
                        }
                      `}
                    >
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Projects;