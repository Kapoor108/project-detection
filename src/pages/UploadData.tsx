import React from 'react';

const UploadData = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#003087] mb-4">Upload Loan Data</h2>
        
        <div className="mt-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="text-gray-600">
              Drag and drop files here or click to upload
            </div>
            <button className="mt-4 bg-[#003087] text-white px-4 py-2 rounded hover:bg-[#002266] transition-colors">
              Browse Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData;