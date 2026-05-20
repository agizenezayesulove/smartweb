import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Projects from "./pages/Projects";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* ONLINE GAMING PAGE */
import OnlineGaming from "./pages/OnlineGaming";

/* CHAT DASHBOARD PAGE */
import ChatDashboard from "./pages/ChatDashboard";

/* ADVERTISEMENT PAGE */
import Advertisement from "./pages/Advertisement";

/* AI MODERN PAGE */
import AIEntertainmentPage from "./pages/AIEntertainmentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH PAGES */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD PAGES */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/projects" element={<Projects />} />

        {/* ONLINE GAMING */}
        <Route
          path="/gaming"
          element={<OnlineGaming />}
        />

        {/* CHAT DASHBOARD */}
        <Route
          path="/chat"
          element={<ChatDashboard />}
        />

        {/* ADVERTISEMENT */}
        <Route
          path="/advertisement"
          element={<Advertisement />}
        />

        {/* MODERN AI ENTERTAINMENT & ECOMMERCE */}
        <Route
          path="/ai-entertainment"
          element={<AIEntertainmentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;