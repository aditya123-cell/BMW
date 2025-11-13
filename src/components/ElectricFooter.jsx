import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ElectricFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About BMW Electric */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">BMW Electric</h2>
          <p className="text-gray-400 text-sm">
            Experience the future of driving with BMW’s electric lineup.  
            Luxury, performance, and sustainability in perfect harmony.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#intro" className="hover:text-blue-500 transition-colors">
                Introduction
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-blue-500 transition-colors">
                Benefits
              </a>
            </li>
            <li>
              <a href="#models" className="hover:text-blue-500 transition-colors">
                Models
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info + Social Icons */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 text-sm mb-2">BMW Showroom, India</p>
          <p className="text-gray-400 text-sm mb-2">Phone: +91 12345 67890</p>
          <p className="text-gray-400 text-sm mb-4">Email: info@bmw.com</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BMW. All rights reserved.
      </div>
    </footer>
  );
};

export default ElectricFooter ;
