import React, { useState } from "react";

import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+250 788 111 222",
      location: "Kigali",
      status: "Active",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

    {
      id: 2,
      name: "Alice Smith",
      email: "alice@gmail.com",
      phone: "+250 788 333 444",
      location: "Musanze",
      status: "Pending",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      id: 3,
      name: "Michael Brown",
      email: "michael@gmail.com",
      phone: "+250 788 555 666",
      location: "Huye",
      status: "Active",
      image:
        "https://randomuser.me/api/portraits/men/51.jpg",
    },

    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@gmail.com",
      phone: "+250 788 777 888",
      location: "Rubavu",
      status: "Inactive",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#071028] text-white p-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            Users Dashboard
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Manage customers, monitor
            active users and track user
            activities.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-wrap items-center gap-4">
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
              placeholder="Search users..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* LOGOUT */}
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
        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {/* TOTAL USERS */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Total Users
              </p>

              <h2 className="text-4xl font-bold mt-3">
                12,450
              </h2>
            </div>

            <FaUsers className="text-5xl opacity-80" />
          </div>
        </div>

        {/* ACTIVE */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Active Users
              </p>

              <h2 className="text-4xl font-bold mt-3">
                9,845
              </h2>
            </div>

            <FaUserCheck className="text-5xl opacity-80" />
          </div>
        </div>

        {/* PENDING */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Pending Users
              </p>

              <h2 className="text-4xl font-bold mt-3">
                1,230
              </h2>
            </div>

            <FaUserClock className="text-5xl opacity-80" />
          </div>
        </div>

        {/* INACTIVE */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Inactive Users
              </p>

              <h2 className="text-4xl font-bold mt-3">
                540
              </h2>
            </div>

            <FaUsers className="text-5xl opacity-80" />
          </div>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="bg-[#18253d] rounded-3xl shadow-2xl overflow-hidden">
        {/* TABLE HEADER */}
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-3xl font-bold">
            Users List
          </h2>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-5">
                  User
                </th>

                <th className="text-left p-5">
                  Email
                </th>

                <th className="text-left p-5">
                  Phone
                </th>

                <th className="text-left p-5">
                  Location
                </th>

                <th className="text-left p-5">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="
                    border-b border-slate-700
                    hover:bg-slate-800
                    transition-all
                    duration-300
                  "
                >
                  {/* USER */}
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="font-bold text-lg">
                          {user.name}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          Customer
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-blue-400" />

                      {user.email}
                    </div>
                  </td>

                  {/* PHONE */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-400" />

                      {user.phone}
                    </div>
                  </td>

                  {/* LOCATION */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-pink-400" />

                      {user.location}
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="p-5">
                    <span
                      className={`
                        px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          user.status ===
                          "Active"
                            ? "bg-green-500/20 text-green-400"
                            : user.status ===
                              "Pending"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-red-500/20 text-red-400"
                        }
                      `}
                    >
                      {user.status}
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

export default Users;