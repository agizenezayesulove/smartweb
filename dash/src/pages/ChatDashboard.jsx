import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaPaperPlane,
  FaGamepad,
  FaBell,
  FaCrown,
  FaUsers,
} from "react-icons/fa";

function ChatDashboard() {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/gaming");
  };

  const users = [
    {
      name: "John",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emma",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Daniel",
      image:
        "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Sophia",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James",
      image:
        "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Olivia",
      image:
        "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  const messages = [
    {
      user: "John",
      text: "Hello everyone 👋",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      user: "Emma",
      text: "Who wants to play today?",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      user: "Daniel",
      text: "Let's start the match 🔥",
      image:
        "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      user: "Sophia",
      text: "I am ready for battle ⚔️",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#081028] to-slate-900 text-white flex overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
        
        {/* PROFILE */}
        <div className="flex items-center gap-4 mb-10 bg-white/5 p-4 rounded-3xl border border-white/10">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt=""
            className="w-16 h-16 rounded-full object-cover border-4 border-purple-500"
          />

          <div>
            <h2 className="text-2xl font-bold">
              Admin User
            </h2>

            <p className="text-green-400 text-sm mt-1">
              ● Online
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mb-8">
          <FaSearch className="absolute top-4 left-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search players..."
            className="w-full bg-white/5 border border-white/10 text-white p-4 pl-12 rounded-2xl outline-none focus:border-purple-500"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 rounded-2xl shadow-xl">
            <FaUsers className="text-3xl mb-3" />

            <h2 className="text-3xl font-bold">
              120
            </h2>

            <p className="text-sm text-white/80">
              Players Online
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-5 rounded-2xl shadow-xl">
            <FaGamepad className="text-3xl mb-3" />

            <h2 className="text-3xl font-bold">
              45
            </h2>

            <p className="text-sm text-white/80">
              Live Games
            </p>
          </div>
        </div>

        {/* ACTIVE USERS */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold">
            Active Users
          </h3>

          <div className="bg-purple-600 px-3 py-1 rounded-full text-sm">
            24
          </div>
        </div>

        <div className="space-y-4 overflow-y-auto pr-2">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 rounded-2xl border border-white/5 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={user.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <span className="font-semibold text-lg">
                    {user.name}
                  </span>

                  <p className="text-sm text-slate-400">
                    Ready to play
                  </p>
                </div>
              </div>

              <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* TOP HEADER */}
        <div className="h-24 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-8">
          
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Gaming Chat Room
            </h1>

            <p className="text-slate-400 mt-1">
              Connect and chat with gamers worldwide
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer">
              <FaBell className="text-2xl text-slate-300" />

              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center">
                3
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>

        {/* CHAT STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
            <h3 className="text-slate-400 mb-2">
              Total Messages
            </h3>

            <h1 className="text-4xl font-extrabold">
              12.5K
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
            <h3 className="text-slate-400 mb-2">
              Online Users
            </h3>

            <h1 className="text-4xl font-extrabold text-green-400">
              2.1K
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
            <h3 className="text-slate-400 mb-2">
              Top Gamer
            </h3>

            <div className="flex items-center gap-3 mt-3">
              <FaCrown className="text-yellow-400 text-3xl" />

              <h1 className="text-2xl font-bold">
                Daniel
              </h1>
            </div>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 max-w-2xl flex gap-5 shadow-xl"
            >
              <img
                src={msg.image}
                alt=""
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
              />

              <div>
                <h3 className="font-bold text-xl text-purple-400">
                  {msg.user}
                </h3>

                <p className="text-slate-300 mt-3 text-lg">
                  {msg.text}
                </p>

                <p className="text-xs text-slate-500 mt-3">
                  2 min ago
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SEND MESSAGE */}
        <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-xl">
          
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="flex-1 bg-slate-900/70 border border-white/10 text-white p-5 rounded-2xl outline-none focus:border-purple-500 text-lg"
            />

            <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all duration-300 px-8 rounded-2xl font-bold shadow-2xl flex items-center gap-3">
              <FaPaperPlane />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDashboard;