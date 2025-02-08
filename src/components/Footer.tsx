import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* AyurCare Pro Branding */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
            InsureTech Pro
            </h3>
            <p className="text-gray-400">Traditional healing meets modern healthcare</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Practitioners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Phone className="h-5 w-5" /> <span>+91 123 456 7890</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Mail className="h-5 w-5" /> <span>contact@ayurcare.pro</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <MapPin className="h-5 w-5" /> <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400">Subscribe for updates and offers</p>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 w-full sm:w-auto outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
