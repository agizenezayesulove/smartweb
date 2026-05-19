import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

function AnalyticsChart({ darkMode }) {
  const pieData = [
    { name: "Products", value: 400 },
    { name: "Orders", value: 300 },
    { name: "Customers", value: 200 },
    { name: "Revenue", value: 500 },
  ];

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EC4899",
  ];

  return (
    <div
      className={`rounded-2xl p-6 shadow-xl ${
        darkMode
          ? "bg-[#18253d]"
          : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6">
        Analytics
      </h2>

      <div className="w-full h-[320px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;