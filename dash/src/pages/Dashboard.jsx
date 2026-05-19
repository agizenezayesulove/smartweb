import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import AnalyticsChart from "../components/AnalyticsChart";
import ImageSlider from "../components/ImageSlider";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    revenue: 0,
  });

  // UPDATED PRODUCT IMAGES (Modern Shop Rwanda)
  const shopImages = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/analytics/stats")
      .then((res) => setStats(res.data))
      .catch(() => {
        setStats({
          users: 1200,
          orders: 850,
          revenue: 25000,
        });
      });
  }, []);

  return (
    <div
      className={`min-h-screen flex transition-all duration-500 ${
        darkMode
          ? "bg-[#071028] text-white"
          : "bg-gradient-to-br from-[#f8fafc] via-white to-[#eef4ff] text-slate-900"
      }`}
    >
      {/* SIDEBAR */}
      <Sidebar
        darkMode={darkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* HEADER */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* CONTENT */}
        <main className="flex-1 p-6 space-y-6">
          <StatsCards stats={stats} />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <AnalyticsChart darkMode={darkMode} />

            <ImageSlider darkMode={darkMode} images={shopImages} />
          </div>
        </main>

        {/* FOOTER */}
        <footer
          className={`mt-10 px-8 py-10 border-t transition-all duration-500 ${
            darkMode
              ? "bg-gray-900 border-slate-700"
              : "bg-white border-slate-200 shadow-[0_-2px_20px_rgba(0,0,0,0.05)]"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* BRAND */}
            <div>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                   Smart Web Rwanda
              </h2>

              <p
                className={`leading-8 text-[15px] ${
                  darkMode ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Professional shopping platform located in Kicukiro -
                Kagarama. We provide modern products including electronics,
                fashion, cars, houses, office equipment and home accessories.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h2
                className={`text-2xl font-bold mb-5 ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                Contact Us
              </h2>

              <div className="space-y-4">
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  📍 Kicukiro - Kagarama, Rwanda
                </p>

                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  📞 0798439385
                </p>

                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  ✉️ Smart Web Rwanda@gmail.com
                </p>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h2
                className={`text-2xl font-bold mb-5 ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                Follow Us
              </h2>

              <div className="flex flex-wrap gap-5">
                {/* FACEBOOK */}
                <div
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-[#18253d] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <FaFacebook className="text-2xl text-blue-500" />
                  <span className="font-medium">
                        Smart Web Rwanda
                  </span>
                </div>

                {/* INSTAGRAM */}
                <div
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-[#18253d] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <FaInstagram className="text-2xl text-pink-500" />
                  <span className="font-medium">
                       Smart Web Rwanda
                  </span>
                </div>

                {/* YOUTUBE */}
                <div
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-[#18253d] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <FaYoutube className="text-2xl text-red-500" />
                  <span className="font-medium">
                        Smart Web Rwanda
                  </span>
                </div>

                {/* TIKTOK */}
                <div
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-[#18253d] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <FaTiktok className="text-2xl" />
                  <span className="font-medium">
                        Smart Web Rwanda
                  </span>
                </div>

                {/* TWITTER */}
                <div
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-[#18253d] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <FaXTwitter className="text-2xl" />
                  <span className="font-medium">
                    Smart Web Rwanda
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            className={`mt-10 pt-6 border-t text-center transition-all duration-300 ${
              darkMode
                ? "border-slate-700 text-gray-500"
                : "border-slate-200 text-slate-500"
            }`}
          >
            © 2026 Smart Web Rwanda. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;