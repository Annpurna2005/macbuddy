import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaYoutube, FaPinterestP, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaw } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold font-serif">Pawrex</h2>
            <p className="text-sm text-gray-600 mt-2">About Your Pets</p>
            <p className="text-sm mt-4 leading-relaxed">
              This prodigiously grew tortoise charact stupidly pernicious jeepers along while accordingly under useful much salacious walking fars before some supp aesthetically wow shuddered.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 text-gray-500">
              <FaTwitter className="text-xl cursor-pointer hover:text-gray-800" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-gray-800" />
              <FaGooglePlusG className="text-xl cursor-pointer hover:text-gray-800" />
              <FaYoutube className="text-xl cursor-pointer hover:text-gray-800" />
              <FaPinterestP className="text-xl cursor-pointer hover:text-gray-800" />
            </div>
          </div>

          {/* Web Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Web Links</h3>
            <ul className="space-y-2">
              {["Home Page", "About Us", "Our Services", "Our News", "Contact Us"].map((link, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600 hover:text-black cursor-pointer">
                  <FaPaw className="text-gray-400" />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>32 BellSouth, Harley Street, Florida 33968</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <span>+1 (234) 567 8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <span>support@pawrex.com</span>
              </li>
            </ul>
          </div>

          {/* Subscribe to RSS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to RSS</h3>
            <p className="text-sm text-gray-600 mb-4">One jeepers along while do accord under useful much darn.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-gray-600 text-sm">
          <p>Copyright © 2022 <span className="font-bold">PAWREX</span> • All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
