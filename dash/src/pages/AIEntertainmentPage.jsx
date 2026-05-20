import React from "react";
import {
  FaRobot,
  FaArrowRight,
  FaPlay,
  FaPlus,
} from "react-icons/fa";

export default function AIEntertainmentPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden flex items-center justify-center px-6 relative">
      
      {/* BRAIN BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
        alt="AI Brain"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-5xl text-center">
        
        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg mb-10">
          <FaRobot className="text-yellow-400" />
          <span className="text-sm tracking-wider">
            Smart Web Rwanda
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
          Ask Modern
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
            AI Assistant
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Smart AI for entertainment, ecommerce, gaming and modern digital experiences.
        </p>

        {/* ASK INPUT */}
        <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center gap-4">
            
            {/* UPLOAD */}
            <button className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition flex items-center justify-center text-xl">
              <FaPlus />
            </button>

            {/* INPUT */}
            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-slate-500"
            />

            {/* SEND */}
            <button className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center text-xl hover:scale-105 transition duration-300">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* MINI BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            AI Music
          </button>

          <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Gaming
          </button>

          <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Ecommerce
          </button>

          <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-3">
            <FaPlay />
            Demo
          </button>
        </div>
      </div>
    </div>
  );
}