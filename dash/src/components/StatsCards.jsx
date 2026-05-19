import React from "react";

import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function StatsCards({ stats }) {
  const navigate = useNavigate();

  const cardStyle =
    "p-6 rounded-2xl shadow-xl flex justify-between items-center cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-md bg-opacity-95";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <div
        onClick={() =>
          navigate("/users")
        }
        className={`${cardStyle} bg-gradient-to-r from-blue-500/95 to-blue-700/95`}
      >
        <div>
          <p>Users</p>
          <h2 className="text-3xl font-bold">
            {stats.users}
          </h2>

          <span className="text-sm mt-2 inline-block">
            Learn More →
          </span>
        </div>

        <FaUsers className="text-4xl" />
      </div>

      <div
        onClick={() =>
          navigate("/products")
        }
        className={`${cardStyle} bg-gradient-to-r from-green-500/95 to-green-700/95`}
      >
        <div>
          <p>Revenue</p>
          <h2 className="text-3xl font-bold">
            ${stats.revenue}
          </h2>

          <span className="text-sm mt-2 inline-block">
            Learn More →
          </span>
        </div>

        <FaBoxOpen className="text-4xl" />
      </div>

      <div
        onClick={() =>
          navigate("/orders")
        }
        className={`${cardStyle} bg-gradient-to-r from-orange-500/95 to-orange-700/95`}
      >
        <div>
          <p>Orders</p>
          <h2 className="text-3xl font-bold">
            {stats.orders}
          </h2>

          <span className="text-sm mt-2 inline-block">
            Learn More →
          </span>
        </div>

        <FaShoppingCart className="text-4xl" />
      </div>

      <div
        onClick={() =>
          navigate("/reports")
        }
        className={`${cardStyle} bg-gradient-to-r from-pink-500/95 to-pink-700/95`}
      >
        <div>
          <p>Growth</p>
          <h2 className="text-3xl font-bold">
            +24%
          </h2>

          <span className="text-sm mt-2 inline-block">
            Learn More →
          </span>
        </div>

        <FaChartLine className="text-4xl" />
      </div>
    </div>
  );
}

export default StatsCards;