import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaYoutube, FaPinterestP, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Function to handle login button click
  const handleLogin = () => {
    // Add your login logic here
    console.log("Login button clicked");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar (Hidden on Small Screens) */}
      <div className="hidden lg:flex bg-orange-600 text-white py-2 px-6 justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            Jabalpur, Madhya Pradesh 482001
          </span>
          <span className="flex items-center">
            <FaPhone className="mr-1" />
            (+91) 1234567890
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-1" />
            support@abc.com
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogin}
            className="bg-white text-black px-4 py-1 rounded-full font-semibold"
          >
            LOGIN
          </button>
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaGooglePlusG className="cursor-pointer hover:text-gray-300" />
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
          <FaPinterestP className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://banner2.cleanpng.com/20180106/btw/av2pixw15.webp" alt="Logo" className="h-10" />
          <h1 className="text-xl md:text-2xl font-bold font-serif text-black">PawRex</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-semibold items-center">
          {["HOME", "ABOUT", "SERVICES", "BLOG", "CONTACT", "SHOP", "CART","PETS"].map((item) => (
            <li
              key={item}
              className="text-black hover:text-yellow-500 cursor-pointer transition duration-300"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
          {/* Search Icon & Input */}
          <li>
            {!showSearch ? (
              <FaSearch className="cursor-pointer text-lg text-black hover:text-yellow-500 transition duration-300" onClick={() => setShowSearch(true)} />
            ) : (
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 border rounded-md text-black focus:outline-none"
                onBlur={() => setShowSearch(false)}
                autoFocus
              />
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-black">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 text-white shadow-md p-4 space-y-4">
          {["HOME", "ABOUT", "SERVICES", "BLOG", "CONTACT", "SHOP", "CART","PETS"].map((item) => (
            <div
              key={item}
              className="text-white hover:text-yellow-500 cursor-pointer font-semibold transition duration-300"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </div>
          ))}
          {/* Mobile Search Icon & Input */}
          <div className="flex items-center">
            {!showSearch ? (
              <FaSearch className="cursor-pointer text-lg hover:text-yellow-500 transition duration-300" onClick={() => setShowSearch(true)} />
            ) : (
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-1 border rounded-md text-black focus:outline-none"
                onBlur={() => setShowSearch(false)}
                autoFocus
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;