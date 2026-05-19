import React, { useState } from "react";

import {
  FaShoppingCart,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [orders] = useState([
    {
      id: "#ORD-1001",
      customer: "John Doe",
      product: "Gaming Laptop",
      amount: "$1200",
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      customer: "Alice Smith",
      product: "Wireless Headphones",
      amount: "$250",
      status: "Pending",
    },
    {
      id: "#ORD-1003",
      customer: "Michael Brown",
      product: "Smart Watch",
      amount: "$450",
      status: "Shipping",
    },
    {
      id: "#ORD-1004",
      customer: "David Wilson",
      product: "iPhone 15",
      amount: "$1500",
      status: "Delivered",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#071028] text-white p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold">
            Orders Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Manage customer orders and
            track delivery status.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 ml-auto">
          {/* SEARCH */}
          <div className="flex items-center gap-3 bg-[#18253d] px-4 py-3 rounded-2xl w-full md:w-[320px]">
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search orders..."
              className="bg-transparent outline-none w-full text-sm"
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

     Logout
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {/* TOTAL */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">
                Total Orders
              </p>

              <h2 className="text-3xl font-bold mt-2">
                1,245
              </h2>
            </div>

            <FaShoppingCart className="text-4xl" />
          </div>
        </div>

        {/* DELIVERED */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">
                Delivered
              </p>

              <h2 className="text-3xl font-bold mt-2">
                985
              </h2>
            </div>

            <FaCheckCircle className="text-4xl" />
          </div>
        </div>

        {/* PENDING */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">
                Pending
              </p>

              <h2 className="text-3xl font-bold mt-2">
                120
              </h2>
            </div>

            <FaClock className="text-4xl" />
          </div>
        </div>

        {/* SHIPPING */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">
                Shipping
              </p>

              <h2 className="text-3xl font-bold mt-2">
                140
              </h2>
            </div>

            <FaTruck className="text-4xl" />
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#18253d] rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold">
            Recent Orders
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-5">
                  Order ID
                </th>

                <th className="text-left p-5">
                  Customer
                </th>

                <th className="text-left p-5">
                  Product
                </th>

                <th className="text-left p-5">
                  Amount
                </th>

                <th className="text-left p-5">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700 hover:bg-slate-800 transition-all duration-300"
                >
                  <td className="p-5 font-semibold">
                    {order.id}
                  </td>

                  <td className="p-5">
                    {order.customer}
                  </td>

                  <td className="p-5">
                    {order.product}
                  </td>

                  <td className="p-5">
                    {order.amount}
                  </td>

                  <td className="p-5">
                    <span
                      className={`
                        px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          order.status ===
                          "Delivered"
                            ? "bg-green-500/20 text-green-400"
                            : order.status ===
                              "Pending"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-pink-500/20 text-pink-400"
                        }
                      `}
                    >
                      {order.status}
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

export default Orders;