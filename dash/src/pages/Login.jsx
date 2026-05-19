import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white relative overflow-hidden">
        
        {/* Decorative Circle */}
        <div className="absolute w-[500px] h-[500px] bg-pink-100 rounded-full -top-32 -left-32 blur-3xl opacity-70"></div>

        <div className="z-10 text-center px-10">
          <h1 className="text-6xl font-extrabold text-pink-500 tracking-wide">
            Smart WebRwanda
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Modern platform for shopping, analytics,
            dashboard management and smart online services.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
            <div className="w-4 h-4 bg-pink-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f8fafc]">
        <div className="w-[90%] max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue with your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-4 rounded-xl border border-gray-200 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-4 rounded-xl border border-gray-200 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
      
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-pink-300"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between mt-5 text-sm">
            <span className="text-gray-500 cursor-pointer hover:text-pink-500">
              Forgot password?
            </span>

            <span
              className="text-pink-500 font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;