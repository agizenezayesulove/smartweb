import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  FaChartLine,
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaArrowUp,
  FaArrowDown,
  FaDownload,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Reports() {
  const navigate = useNavigate();

  // ================= SALES REPORTS =================
  const salesReports = [
    {
      title: "Total Revenue",
      value: "$125,000",
      growth: "+12.5%",
      icon: <FaDollarSign />,
      color: "from-green-500 to-green-700",
      up: true,
    },

    {
      title: "Orders",
      value: "3,245",
      growth: "+8.2%",
      icon: <FaShoppingCart />,
      color: "from-blue-500 to-blue-700",
      up: true,
    },

    {
      title: "Customers",
      value: "1,580",
      growth: "-2.4%",
      icon: <FaUsers />,
      color: "from-pink-500 to-pink-700",
      up: false,
    },

    {
      title: "Profit",
      value: "$45,800",
      growth: "+18.7%",
      icon: <FaChartLine />,
      color: "from-orange-500 to-orange-700",
      up: true,
    },
  ];

  // ================= RECENT REPORTS =================
  const recentReports = [
    {
      name: "Monthly Sales Report",
      date: "12 May 2026",
      status: "Completed",
    },

    {
      name: "Customer Analytics",
      date: "10 May 2026",
      status: "Pending",
    },

    {
      name: "Inventory Report",
      date: "08 May 2026",
      status: "Completed",
    },

    {
      name: "Financial Overview",
      date: "05 May 2026",
      status: "Processing",
    },
  ];

  // ================= CHART DATA =================
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 7000 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 8500 },
    { month: "Jul", sales: 9500 },
  ];

  return (
    <div className="min-h-screen bg-[#071028] text-white p-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            Reports Dashboard
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Monitor sales, analytics,
            customers and financial
            performance reports.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center gap-4">
          {/* LOGOUT BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="
              flex items-center gap-3
              bg-pink-600
              hover:bg-pink-700
              px-6 py-4
              rounded-2xl
              shadow-xl
              transition-all
              duration-300
              font-semibold
            "
          >
            <FaSignOutAlt />

            Logout
          </button>

          <button
            className="
              flex items-center gap-3
              bg-[#18253d]
              hover:bg-slate-700
              px-6 py-4
              rounded-2xl
              shadow-xl
              transition-all
              duration-300
            "
          >
            <FaCalendarAlt />

            This Month
          </button>

          <button
            className="
              flex items-center gap-3
              bg-blue-600
              hover:bg-blue-700
              px-6 py-4
              rounded-2xl
              shadow-xl
              transition-all
              duration-300
              font-semibold
            "
          >
            <FaDownload />

            Export
          </button>
        </div>
      </div>

      {/* REPORT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {salesReports.map((report, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-r
              ${report.color}
              p-6
              rounded-3xl
              shadow-2xl
              hover:scale-105
              transition-all
              duration-500
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">
                  {report.title}
                </p>

                <h2 className="text-4xl font-bold mt-3">
                  {report.value}
                </h2>
              </div>

              <div className="text-5xl opacity-80">
                {report.icon}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {report.up ? (
                <FaArrowUp className="text-green-200" />
              ) : (
                <FaArrowDown className="text-red-200" />
              )}

              <span className="font-semibold">
                {report.growth}
              </span>

              <span className="text-sm opacity-80">
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* SALES ANALYTICS */}
        <div
          className="
            xl:col-span-2
            bg-[#18253d]
            rounded-3xl
            p-8
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                Sales Analytics
              </h2>

              <p className="text-gray-400 mt-2">
                Revenue performance over
                the last months.
              </p>
            </div>

            <button
              className="
                bg-slate-700
                hover:bg-slate-600
                px-5 py-3
                rounded-2xl
                transition-all
              "
            >
              View Details
            </button>
          </div>

          {/* REAL CHART */}
          <div className="h-[350px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="sales"
                  fill="#3B82F6"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RECENT REPORTS */}
        <div
          className="
            bg-[#18253d]
            rounded-3xl
            p-6
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Recent Reports
            </h2>

            <button className="text-blue-400 hover:text-blue-300">
              See All
            </button>
          </div>

          <div className="space-y-5">
            {recentReports.map(
              (report, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-800
                    p-5
                    rounded-2xl
                    hover:bg-slate-700
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">
                        {report.name}
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        {report.date}
                      </p>
                    </div>

                    <span
                      className={`
                        px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          report.status ===
                          "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : report.status ===
                              "Pending"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-pink-500/20 text-pink-400"
                        }
                      `}
                    >
                      {report.status}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;