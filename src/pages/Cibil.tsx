import React, { useState } from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';

const CibilScore = () => {
  const [formData, setFormData] = useState({
    panCard: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
          <div className="px-8 py-6">
            <div className="text-center mb-8">
              <CreditCard className="mx-auto h-12 w-12 text-emerald-500" />
              <h2 className="mt-4 text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Check Your CIBIL Score
              </h2>
              <p className="mt-2 text-gray-400">Get your credit score instantly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.panCard}
                    onChange={(e) => setFormData({...formData, panCard: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="PAN Card Number"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="relative group">
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Phone Number"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Email Address"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </div>

              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <AlertCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p>Your credit score check will not impact your CIBIL score. This is a soft inquiry only.</p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
              >
                Check CIBIL Score
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CibilScore;