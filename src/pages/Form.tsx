import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    age: '19',
    occupation: '',
    productType: '',
    sumAssured: '100000',
    premium: '2',
    paymentMode: '',
    annualIncome: '40000000',
    maritalStatus: '',
    requirementFlag: '',
    postcode: '',
    channel: '',
    status: '',
    subStatus: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
          <div className="px-8 py-6">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
              Insurance Application Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age Field */}
                <div className="relative group">
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Age"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Occupation Field */}
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Occupation"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Product Type Field */}
                <div className="relative group">
                  <select
                    value={formData.productType}
                    onChange={(e) => setFormData({...formData, productType: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select Product Type</option>
                    <option value="term">Term Insurance</option>
                    <option value="health">Health Insurance</option>
                    <option value="life">Life Insurance</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Sum Assured Field */}
                <div className="relative group">
                  <input
                    type="number"
                    value={formData.sumAssured}
                    onChange={(e) => setFormData({...formData, sumAssured: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Policy Sum Assured"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Premium Field */}
                <div className="relative group">
                  <input
                    type="number"
                    value={formData.premium}
                    onChange={(e) => setFormData({...formData, premium: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Premium"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Payment Mode Field */}
                <div className="relative group">
                  <select
                    value={formData.paymentMode}
                    onChange={(e) => setFormData({...formData, paymentMode: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select Payment Mode</option>
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Annual Income Field */}
                <div className="relative group">
                  <input
                    type="number"
                    value={formData.annualIncome}
                    onChange={(e) => setFormData({...formData, annualIncome: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Annual Income"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Marital Status Field */}
                <div className="relative group">
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Requirement Flag Field */}
                <div className="relative group">
                  <select
                    value={formData.requirementFlag}
                    onChange={(e) => setFormData({...formData, requirementFlag: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select Requirement Flag</option>
                    <option value="medical">Medical</option>
                    <option value="non-medical">Non Medical</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Postcode Field */}
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Postcode"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Channel Field */}
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.channel}
                    onChange={(e) => setFormData({...formData, channel: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="Channel"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Status Field */}
                <div className="relative group">
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="claim">Claim</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Sub Status Field */}
                <div className="relative group">
                  <select
                    value={formData.subStatus}
                    onChange={(e) => setFormData({...formData, subStatus: e.target.value})}
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select Sub Status</option>
                    <option value="death-claim-paid">Death Claim Paid</option>
                    <option value="claim-pending">Claim Pending</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;