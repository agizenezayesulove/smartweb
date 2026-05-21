import React, { useState } from "react";

import {
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const [showPayment, setShowPayment] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [cardNumber, setCardNumber] =
    useState("");

  const [mobileNumber, setMobileNumber] =
    useState("");

  const [products] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      category: "Shoes",
      price: "$220",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "Phones",
      price: "$1500",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Luxury House",
      category: "Real Estate",
      price: "$250,000",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "BMW M4",
      category: "Cars",
      price: "$85,000",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 5,
      name: "Office Chair",
      category: "Office",
      price: "$350",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 6,
      name: "Smart Television",
      category: "Electronics",
      price: "$950",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 7,
      name: "Modern Sofa",
      category: "Home Furniture",
      price: "$1200",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 8,
      name: "Gaming Laptop",
      category: "Computers",
      price: "$2400",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#071028] text-white p-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            Products Store
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Explore shoes, phones,
            vehicles, houses, electronics,
            office products and more.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* SEARCH */}
          <div className="flex items-center gap-3 bg-[#18253d] px-5 py-4 rounded-2xl w-full lg:w-[350px] shadow-xl">
            <FaSearch className="text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="
              flex items-center gap-3
              bg-red-600
              hover:bg-red-700
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

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-3xl shadow-2xl">
          <h2 className="text-lg opacity-80">
            Total Products
          </h2>

          <p className="text-4xl font-bold mt-3">
            12,500+
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-3xl shadow-2xl">
          <h2 className="text-lg opacity-80">
            Electronics
          </h2>

          <p className="text-4xl font-bold mt-3">
            2,300+
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-3xl shadow-2xl">
          <h2 className="text-lg opacity-80">
            Vehicles
          </h2>

          <p className="text-4xl font-bold mt-3">
            520+
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 rounded-3xl shadow-2xl">
          <h2 className="text-lg opacity-80">
            Houses
          </h2>

          <p className="text-4xl font-bold mt-3">
            180+
          </p>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              bg-[#18253d]
              rounded-3xl
              overflow-hidden
              shadow-2xl
              hover:scale-105
              transition-all
              duration-500
              group
            "
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-[250px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />

              <button
                className="
                  absolute top-4 right-4
                  bg-white/20 backdrop-blur-md
                  p-3 rounded-full
                  hover:bg-pink-500
                  transition-all
                "
              >
                <FaHeart className="text-white" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />

                  <span className="text-sm">
                    {product.rating}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {product.name}
              </h2>

              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-green-400">
                  {product.price}
                </p>

                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowPayment(true);
                  }}
                  className="
                    flex items-center gap-2
                    bg-blue-600
                    hover:bg-blue-700
                    px-4 py-3
                    rounded-xl
                    transition-all
                    duration-300
                  "
                >
                  <FaShoppingCart />

                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div
          className="
            fixed inset-0
            bg-black/70
            flex items-center justify-center
            z-50
            p-4
          "
        >
          <div
            className="
              bg-[#18253d]
              w-full max-w-md
              rounded-3xl
              p-8
              shadow-2xl
            "
          >
            <h2 className="text-3xl font-bold mb-2 text-center">
              Payment
            </h2>

            <p className="text-gray-400 mb-6 text-center">
              {selectedProduct?.name}
            </p>

            {/* METHOD */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() =>
                  setPaymentMethod("card")
                }
                className={`
                  flex-1 py-3 rounded-xl
                  ${
                    paymentMethod === "card"
                      ? "bg-blue-600"
                      : "bg-[#22304d]"
                  }
                `}
              >
                Credit Card
              </button>

              <button
                onClick={() =>
                  setPaymentMethod("mobile")
                }
                className={`
                  flex-1 py-3 rounded-xl
                  ${
                    paymentMethod === "mobile"
                      ? "bg-green-600"
                      : "bg-[#22304d]"
                  }
                `}
              >
                Mobile
              </button>
            </div>

            {/* CREDIT CARD */}
            {paymentMethod === "card" && (
              <input
                type="text"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(e.target.value)
                }
                className="
                  w-full
                  bg-[#22304d]
                  p-4
                  rounded-xl
                  outline-none
                  mb-6
                "
              />
            )}

            {/* MOBILE NUMBER */}
            {paymentMethod === "mobile" && (
              <input
                type="text"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) =>
                  setMobileNumber(
                    e.target.value
                  )
                }
                className="
                  w-full
                  bg-[#22304d]
                  p-4
                  rounded-xl
                  outline-none
                  mb-6
                "
              />
            )}

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={() =>
                  setShowPayment(false)
                }
                className="
                  flex-1
                  bg-gray-600
                  hover:bg-gray-700
                  py-3 rounded-xl
                "
              >
                Cancel
              </button>

              <button
                
                className="
                  flex-1
                  bg-blue-600
                  hover:bg-blue-700
                  py-3 rounded-xl
                "
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;