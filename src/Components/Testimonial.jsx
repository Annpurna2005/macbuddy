import React from "react";
import { FaPaw } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Top Icon */}
        <div className="bg-orange-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg mx-auto">
          <FaPaw className="text-white text-4xl" />
        </div>

        <p className="text-orange-500 italic text-base mt-4">
          Because We Really Care About Your Pets
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-bold mt-2">Read Testimonials</h2>

        {/* Quote */}
        <div className="mt-6 text-yellow-500 text-3xl">“</div>
        <p className="text-gray-600 italic mt-4 px-6">
          And taped a amazingly lazily far gosh oh bald oh raffishly ouch ladybug far that the and
          alas slapped alas far brusque pridefully kneeled python horse alas sound because more
          prodigiously outgrew tortoise characteristic stupidly barring therefore so sniffed before
          drank.
        </p>

        {/* Author */}
        <div className="mt-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
            70 x 70
          </div>
          <h3 className="mt-4 text-lg font-semibold">Tina Cambell</h3>
          <p className="text-gray-500 text-sm">PET OWNER</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
