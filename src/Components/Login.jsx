import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setError("");
  
    if (!email || !password) {
      setError("Please fill all fields!");
      return;
    }
  
    try {
      const response = await fetch("https://invision-1.onrender.com/login", { // Updated port to 5000
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        
        // Store token and user details in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        console.log(localStorage.setItem("user", JSON.stringify(data.user)))
  
        alert("Login successful!");
        navigate("/Chat");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Server error. Please try again later.");
    }
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl mb-3 font-extrabold text-black">
            Login Here
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome back! Enter your details to continue your journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-10 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-md"
            />
            <input
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-10 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-md"
            />
            <div className="text-right text-sm text-black cursor-pointer hover:underline">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="w-1/2 bg-black text-white py-2 rounded-md text-lg font-semibold shadow-md hover:bg-gray-800 transition duration-300 mx-auto block"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">Or sign in with</p>
          <div className="flex justify-center space-x-4 mt-3">
            <img src={google} alt="Google" className="h-10 mr-2" />
          </div>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <span
              className="text-black cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </p>
        </div>

        {/* Right Side - Welcome Section */}
        <div className="w-full md:w-1/2 bg-black text-white p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-extrabold mb-4">Welcome Back 👋</h2>
          <p className="mb-6 text-gray-300">
            Your journey towards knowledge and success continues. Stay
            connected!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
