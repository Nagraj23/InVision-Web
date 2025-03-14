import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Chat from "./Components/Chat";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* If user is authenticated, redirect to Chat; otherwise, show Landing */}
        <Route path="/" element={isAuthenticated() ? <Navigate to="/Chat" /> : <Landing />} />

        {/* Public routes */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/Chat" /> : <Login />} />
        <Route path="/register" element={isAuthenticated() ? <Navigate to="/Chat" /> : <Register />} />

        {/* Protected route for Chat */}
        <Route path="/Chat" element={<Chat />} />

        {/* Redirect unknown routes to Landing */}
        <Route path="*" element={<Navigate to="/landing" />} />
      </Routes>
    </Router>
  );
}

export default App;
