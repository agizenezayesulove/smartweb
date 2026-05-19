import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 relative overflow-hidden">
        
        {/* DECORATION */}
        <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -top-20 -left-20"></div>

        <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full bottom-0 right-0"></div>

        {/* CONTENT */}
        <div className="z-10 text-center px-10">
          <h1 className="text-7xl font-extrabold text-white tracking-wider drop-shadow-2xl">
            SMART
          </h1>

          <h1 className="text-7xl font-extrabold text-white tracking-wider drop-shadow-2xl mt-2">
            WEB
          </h1>

          <h1 className="text-7xl font-extrabold text-white tracking-wider drop-shadow-2xl mt-2">
            RWANDA
          </h1>

          <p className="mt-8 text-white/90 text-xl leading-9 max-w-lg">
            Modern ecommerce and analytics platform for shopping,
            dashboard management and smart online services.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-[#f8fafc] px-6">
        
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
          
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-slate-800">
              Create Account.
            </h2>

            <p className="text-slate-500 mt-3">
              Signup to continue to Smart Web Rwanda
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full mt-2 p-4 rounded-xl border border-slate-200 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full mt-2 p-4 rounded-xl border border-slate-200 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Password"
                className="w-full mt-2 p-4 rounded-xl border border-slate-200 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-pink-300 transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-slate-600 text-center">
            Already have account?{" "}
            <span
              className="text-pink-500 font-bold cursor-pointer hover:text-pink-600"
              onClick={() => navigate("/login")}
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