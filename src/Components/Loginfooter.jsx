import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaYoutube, FaPinterestP, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Loginfooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-serif">Pawrex</h2>
          <p className="text-sm text-gray-400 mt-2">
            This prodigiously grew tortoise character stupidly pernicious jeepers along while accordingly under useful much salacious walking fars before some supp aesthetically wow shuddered.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaGooglePlusG className="cursor-pointer hover:text-gray-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300" />
            <FaPinterestP className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Web Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Web Links</h3>
          <ul className="space-y-2">
            {["Home Page", "About us", "Our Services", "Our News", "Contact Us"].map((link) => (
              <li key={link} className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
                <span>🐾</span>
                <span>{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
          <div className="flex space-x-4 mb-4">
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center text-xs text-gray-400">80 x 80</div>
            <div>
              <h4 className="text-md font-semibold">We Have Best Pet Grooming Services</h4>
              <p className="text-xs text-gray-400">Feb 15, 2022</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center text-xs text-gray-400">80 x 80</div>
            <div>
              <h4 className="text-md font-semibold">Less Time Is Required For Cat Grooming</h4>
              <p className="text-xs text-gray-400">Feb 15, 2022</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>32 BellSouth, Harley Street, Florida 33968</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone />
              <span>+1 234 567 8900</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>support@pawrex.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        Copyrights 2022 <span className="text-white font-semibold">PAWREX Grooming Services</span> • All Rights Reserved.
      </div>
    </footer>
  );
};

export default Loginfooter;
