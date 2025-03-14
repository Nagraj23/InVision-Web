import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added state
  const [error, setError] = useState(""); // Added state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password || !name || !confirmPassword) {
      setError("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://invision-1.onrender.com/register", { // Changed port to 5000
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, email, password }),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-black text-white p-10 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Platform!</h2>
          <p className="text-center mb-6">Stay connected and continue learning with us.</p>
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>

        {/* Right Side - Registration */}
        <div className="w-full md:w-1/2 p-10 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Create an Account</h2>
          <div className="flex justify-center space-x-4 my-4 text-black">
            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-700" />
            <FaGoogle className="text-2xl cursor-pointer hover:text-gray-700" />
            <FaLinkedinIn className="text-2xl cursor-pointer hover:text-gray-700" />
          </div>
          <p className="text-center text-gray-600 text-sm mb-4">or use your email for registration</p>
          
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-md"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
