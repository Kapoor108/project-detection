import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
              InsureTech Pro
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
            <Link to="/form" className="text-gray-300 hover:text-emerald-400 transition-colors">Insurance Form</Link>
            <Link to="/chatbot" className="text-gray-300 hover:text-emerald-400 transition-colors">Chatbot</Link>
            <Link to="/login" className="text-gray-300 hover:text-emerald-400 transition-colors">Login</Link>
            <Link to="/signup" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors">
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-emerald-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
              <Link to="/form" className="text-gray-300 hover:text-emerald-400 transition-colors">Insurance Form</Link>
              <Link to="/chatbot" className="text-gray-300 hover:text-emerald-400 transition-colors">Chatbot</Link>
              <Link to="/login" className="text-gray-300 hover:text-emerald-400 transition-colors">Login</Link>
              <Link to="/signup" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
