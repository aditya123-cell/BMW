import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ModelFooter({ modelName = "BMW", year = new Date().getFullYear() }) {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: Brand + short */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-wide text-white">{modelName}</h3>
            <p className="mt-2 text-sm text-gray-300 max-w-md">
              Experience the blend of performance and luxury. Explore specifications, financing options and the nearest showroom for a test drive.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="p-2 rounded-md hover:bg-gray-800">
                <FaFacebookF />
              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-gray-800">
                <FaTwitter />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-md hover:bg-gray-800">
                <FaInstagram />
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-md hover:bg-gray-800">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Model</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-white">Overview</a></li>
                <li><a href="#" className="hover:text-white">Specifications</a></li>
                <li><a href="#" className="hover:text-white">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Ownership</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-white">Financing</a></li>
                <li><a href="#" className="hover:text-white">Insurance</a></li>
                <li><a href="#" className="hover:text-white">Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Find a Dealer</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Book a test drive</h4>
            <p className="text-sm text-gray-300 mb-4">Book a free test drive at your nearest showroom.</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="#"
                className="inline-block px-5 py-3 bg-white text-gray-900 rounded-md font-medium shadow-sm hover:shadow-md transition"
              >
                Book Now
              </a>
              <a
                href="#"
                className="inline-block px-4 py-3 border border-gray-700 rounded-md text-sm text-gray-300 hover:text-white"
              >
                Locate Dealer
              </a>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <div>{modelName} © {year}</div>
              <div className="mt-1">Terms & Conditions • Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}