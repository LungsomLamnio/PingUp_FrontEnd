import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSingup";
import ChatPage from "./pages/ChatPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/user-chats" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
