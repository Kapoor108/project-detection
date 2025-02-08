import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, FileCheck, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
              Next-Gen Insurance Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8">
              Secure your future with our advanced insurance solutions powered by cutting-edge technology
            </p>
            <div className="flex justify-center flex-wrap space-x-4 gap-4">
              <Link
                to="/form"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 transform -skew-y-6"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-6">
              <Shield className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Secure Coverage</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Comprehensive protection for you and your loved ones
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-6">
              <Users className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Expert Support</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Professional guidance throughout your journey
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-6">
              <FileCheck className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Easy Claims</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Streamlined process for quick claim settlements
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-6">
              <TrendingUp className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Smart Benefits</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Innovative features for maximum value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
