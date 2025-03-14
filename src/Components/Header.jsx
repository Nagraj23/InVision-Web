import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
        >
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-gray-900">InVision</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["features", "how-it-works", "faq"].map((item, i) => (
            <motion.button
              key={item}
              onClick={() => navigate(`/${item}`)}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              {item.replace("-", " ").toUpperCase()}
            </motion.button>
          ))}
        </nav>

        {/* Buttons & Mobile Menu Icon */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="hidden md:flex text-sm font-medium text-gray-700 hover:text-primary transition"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>

          {/* Styled Button */}
          <button
            className="relative px-6 py-2.5 text-white font-semibold rounded-lg overflow-hidden bg-black hover:bg-zinc-800 transition"
            onClick={() => navigate("/register")}
          >
            <span className="relative z-10">Get Started</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed left-0 right-0 top-16 bg-white shadow-lg rounded-b-md py-4 px-6 z-50"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {["features", "how-it-works", "pricing", "faq"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  navigate(`/${item}`);
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium text-gray-700 hover:text-primary transition"
              >
                {item.replace("-", " ").toUpperCase()}
              </button>
            ))}
            <button
              className="w-full text-center text-sm font-medium text-gray-700 hover:text-primary transition"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;