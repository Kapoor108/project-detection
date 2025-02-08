import React from 'react';

const ViewResults = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#003087] mb-4">View Results</h2>
        <p className="text-gray-600 mb-4">
          After uploading the loan application data, click below to analyze and view fraud detection results.
        </p>
        <button className="bg-[#003087] text-white px-4 py-2 rounded hover:bg-[#002266] transition-colors">
          Analyze Data
        </button>
      </div>
    </div>
  );
};

export default ViewResults;