import React, { useState } from 'react';
import { FileText, Upload, CheckCircle } from 'lucide-react';

const Document = () => {
  const [documents, setDocuments] = useState<{
    [key: string]: File | null;
  }>({
    panCard: null,
    aadharCard: null,
    photo: null,
    addressProof: null,
    bankStatement: null
  });

  const handleFileChange = (documentType: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments({
        ...documents,
        [documentType]: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(documents);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
          <div className="px-8 py-6">
            <div className="text-center mb-8">
              <FileText className="mx-auto h-12 w-12 text-emerald-500" />
              <h2 className="mt-4 text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Document Verification
              </h2>
              <p className="mt-2 text-gray-400">Upload your documents for verification</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PAN Card Upload */}
                <div className="relative group">
                  <div className="bg-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600 transition-colors">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange('panCard', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*,.pdf"
                    />
                    <Upload className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <p className="text-sm font-medium">Upload PAN Card</p>
                    {documents.panCard && (
                      <div className="flex items-center justify-center mt-2 text-emerald-500">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Aadhar Card Upload */}
                <div className="relative group">
                  <div className="bg-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600 transition-colors">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange('aadharCard', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*,.pdf"
                    />
                    <Upload className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <p className="text-sm font-medium">Upload Aadhar Card</p>
                    {documents.aadharCard && (
                      <div className="flex items-center justify-center mt-2 text-emerald-500">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="relative group">
                  <div className="bg-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600 transition-colors">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange('photo', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*"
                    />
                    <Upload className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <p className="text-sm font-medium">Upload Recent Photo</p>
                    {documents.photo && (
                      <div className="flex items-center justify-center mt-2 text-emerald-500">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address Proof Upload */}
                <div className="relative group">
                  <div className="bg-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600 transition-colors">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange('addressProof', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*,.pdf"
                    />
                    <Upload className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <p className="text-sm font-medium">Upload Address Proof</p>
                    {documents.addressProof && (
                      <div className="flex items-center justify-center mt-2 text-emerald-500">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bank Statement Upload */}
                <div className="relative group md:col-span-2">
                  <div className="bg-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600 transition-colors">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange('bankStatement', e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf"
                    />
                    <Upload className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
                    <p className="text-sm font-medium">Upload Bank Statement (Last 3 months)</p>
                    {documents.bankStatement && (
                      <div className="flex items-center justify-center mt-2 text-emerald-500">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
                >
                  Submit Documents
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;