import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-8 md:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1️⃣ Brand Section */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-3 tracking-wide">
            BMW
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            BMW redefines the future of mobility — blending precision engineering
            with timeless design. Experience sheer driving pleasure in every
            journey.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#0A84FF]" /> Mumbai, India
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#0A84FF]" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#0A84FF]" /> info@bmw-india.in
            </p>
          </div>
        </div>

        {/* 2️⃣ Explore Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Models", "Experience", "Dealerships", "Contact"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="relative text-gray-400 hover:text-[#0A84FF] transition-all duration-300
                    before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 
                    before:h-[2px] before:bg-[#0A84FF] hover:before:w-full before:transition-all before:duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* 3️⃣ Support Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "FAQs",
              "Book a Test Drive",
              "Financing Options",
              "Service & Maintenance",
              "Careers",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative text-gray-400 hover:text-[#0A84FF] transition-all duration-300
                  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 
                  before:h-[2px] before:bg-[#0A84FF] hover:before:w-full before:transition-all before:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Follow BMW India for the latest updates, models, and driving experiences.
          </p>
          <div className="flex space-x-5 text-2xl">
            {[FaInstagram, FaYoutube, FaTwitter, FaLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-[#0A84FF] transition-all duration-300 transform hover:scale-110"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} BMW India. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/privacy"
            className="hover:text-[#0A84FF] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-[#0A84FF] transition-colors duration-300"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
