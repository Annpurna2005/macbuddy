import React from "react";
import { motion } from "framer-motion";
import { FaDog, FaBone, FaPaw } from "react-icons/fa";

const services = [
  {
    icon: <FaDog className="text-orange-500 text-5xl" />,
    title: "We Heal Pets",
    description: "Quick Veterinary Services",
  },
  {
    icon: <FaBone className="text-yellow-500 text-5xl" />,
    title: "We Care Pets",
    description: "Pet Sheltering & Adoption",
  },
  {
    icon: <FaPaw className="text-purple-600 text-5xl" />,
    title: "We Love Pets",
    description: "Show Love & Donate Us",
  },
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-orange-600 p-4 rounded-full shadow-lg">
            <FaPaw className="text-white text-4xl" />
          </div>
          <p className="mt-4 text-center text-white text-xl italic  bg-opacity-20 px-4 py-2 rounded-lg">
            Because We Really Care About Your Pets
          </p>
        </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-2xl rounded-xl p-6 flex items-center space-x-4 w-full md:w-1/3 
                      transition-transform transform hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div>{service.icon}</div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
