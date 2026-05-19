// src/pages/OnlineGaming.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaComments } from "react-icons/fa";

function OnlineGaming() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleChat = () => {
    navigate("/chat");
  };

  const games = [
    {
      name: "Tic Tac Toe",
      description: "Play multiplayer online",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      name: "Quiz Battle",
      description: "Answer questions and win rewards",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      name: "Car Racing",
      description: "Race with other players online",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      name: "Memory Game",
      description: "Match cards and earn points",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      name: "Spin & Win",
      description: "Win coupons and discounts",
      image:
        "https://images.unsplash.com/photo-1511882150382-421056c89033",
    },
    {
      name: "Football Challenge",
      description: "Score goals and rank up",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={handleChat}
            className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl flex items-center gap-3"
          >
            <FaComments />
            Chat
          </button>

          <h1 className="text-4xl font-bold text-white">
            Online Gaming Center
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-white">
                {game.name}
              </h2>

              <p className="text-slate-400 mt-2">
                {game.description}
              </p>

              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Play Game
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineGaming;