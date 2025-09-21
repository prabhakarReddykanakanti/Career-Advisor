import { useState } from "react";
import { Login } from "../Login";
import { Signup } from "../signup";
export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 px-6 py-4 w-full shadow-2xl">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 
                  10.586 7.707 9.293a1 1 0 00-1.414 
                  1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold tracking-tight">Career Advisor</h1>
              <p className="text-gray-400 text-xs">For J&amp;K Students</p>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Colleges</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Mentorship</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Resources</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Tracker</a>
          </div>

          {/* Login Button */}
          <button
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            Log In
          </button>
        </div>
      </nav>

      {/* Conditionally render Login / Signup */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
      {showSignup && (
        <Signup onClose={() => setShowSignup(false)} />
      )}
    </>
  );
};
