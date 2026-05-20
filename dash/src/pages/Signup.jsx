import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Account Created Successfully");

      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#071028] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#071028] via-[#0b1736] to-[#12204a]">
        {/* GLOW EFFECTS */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-3xl -top-20 -left-20"></div>

        <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-3xl bottom-0 right-0"></div>

        {/* CONTENT */}
        <div className="z-10 text-center px-10">
          <h1 className="text-7xl font-extrabold text-white tracking-widest drop-shadow-2xl">
            SMART
          </h1>

          <h1 className="text-7xl font-extrabold text-pink-500 tracking-widest drop-shadow-2xl mt-2">
            WEB
          </h1>

          <h1 className="text-7xl font-extrabold text-blue-400 tracking-widest drop-shadow-2xl mt-2">
            RWANDA
          </h1>

          <p className="mt-8 text-slate-300 text-xl leading-9 max-w-lg">
            Modern ecommerce dashboard,
            analytics system, online
            gaming, live chat and smart
            management platform.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center justify-center px-6 py-10 bg-[#0b1224]">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 w-11 h-11 rounded-full bg-[#111c3d] border border-slate-700 flex items-center justify-center text-white hover:bg-pink-500 transition-all duration-300 shadow-lg"
        >
          <FaArrowLeft />
        </button>

        {/* CARD */}
        <div className="w-full max-w-md bg-[#111c3d] border border-slate-700 rounded-3xl shadow-2xl p-10">
          
          {/* TOP */}
          <div className="mb-8">
            <h2 className="text-4xl text-center font-bold text-white">
              Create Account
            </h2>

            <p className="text-slate-400 mt-3">
              Signup to continue to Smart
              Web Rwanda
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >
            {/* NAME */}
            <div>
              <label className="text-sm font-semibold text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full mt-2 p-4 rounded-xl bg-[#071028] border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 transition-all"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-2 p-4 rounded-xl bg-[#071028] border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 transition-all"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full mt-2 p-4 rounded-xl bg-[#071028] border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 transition-all"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          {/* LOGIN */}
          <p className="mt-6 text-slate-400 text-center">
            Already have an account?{" "}
            <span
              className="text-pink-500 font-bold cursor-pointer hover:text-pink-400"
              onClick={() =>
                navigate("/login")
              }
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;