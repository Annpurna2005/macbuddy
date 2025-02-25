import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mb-8">
                <div className="bg-orange-600 p-4 rounded-full shadow-lg">
                  <FaPaw className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-center text-white text-xl italic  bg-opacity-20 px-4 py-2 rounded-lg">
                  Because We Really Care About Your Pets
                </p>
              </div>
      {/* Top Heading */}
      <div className="text-center px-4">
        <p className="text-orange-500 italic text-sm md:text-lg">
          Because We Really Care About Your Pets
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
          Welcome to Pawrex
        </h2>
      </div>

      {/* Main Content - Image & Text */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 w-full max-w-5xl">
        {/* Left Side: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.pinimg.com/736x/fb/33/5b/fb335b46d9dcf4859308b416da6600a3.jpg"
            alt="Pet Care"
            className="rounded-lg shadow-lg w-64 h-64 md:w-full md:h-100 object-cover"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            We provide the best care and services for your lovely pets.
          </p>

          {/* Bullet Points */}
          <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
            <li>✅ <strong>Abore et dolore magna aliqua ut enim veniam</strong></li>
            <li>✅ <strong>Quis nostrud exercitation ullamco laboris nisi aliquip</strong></li>
            <li>✅ <strong>Eiusmod tempor incididunt labore.</strong></li>
          </ul>

          {/* Call to Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-yellow-600 transition duration-300"
          >
            VIEW OUR SERVICES
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
