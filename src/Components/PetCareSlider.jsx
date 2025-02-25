import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 hover:bg-gray-900 transition"
  >
    <FaArrowLeft size={20} />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 hover:bg-gray-900 transition"
  >
    <FaArrowRight size={20} />
  </button>
);

const PetCareSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const slides = [
    { title: "We Give Special Care", subTitle: "to Your Loving Pets", btnText: "Book Appointment" },
    { title: "Your Pet Deserves the", subTitle: "Best Care", btnText: "Learn More" },
    { title: "Professional Pet Grooming", subTitle: "Services", btnText: "Get Grooming" },
    { title: "24/7 Emergency Pet Care", subTitle: "", btnText: "Call Now" },
    { title: "Premium Pet Food Available", subTitle: "", btnText: "Buy Now" }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full py-16 bg-gray-200 overflow-hidden">
      <div className="flex items-center justify-center h-[500px] relative">
        {/* Animated Slide Content */}
        <motion.div
          key={currentSlide}
          className="text-center px-6 absolute w-full"
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold">
            {slides[currentSlide].title} <br /> <span className="font-bold">{slides[currentSlide].subTitle}</span>
          </h2>

          <p className="mt-4">We provide high-quality pet services with love and care.</p>

          <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
            {slides[currentSlide].btnText}
          </button>
        </motion.div>

        {/* Navigation Buttons */}
        <PrevArrow onClick={handlePrev} />
        <NextArrow onClick={handleNext} />
      </div>
    </div>
  );
};

export default PetCareSlider;
