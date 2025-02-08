import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
          <div className="px-8 py-6">
            <div className="text-center mb-8">
              <LogIn className="mx-auto h-12 w-12 text-emerald-500" />
              <h2 className="mt-4 text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Welcome Back
              </h2>
              <p className="mt-2 text-gray-400">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-700 rounded-lg pl-10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="Email address"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-gray-700 rounded-lg pl-10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="Password"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-gray-400">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;