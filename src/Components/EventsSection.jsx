import React from "react";
import { FaPaw } from "react-icons/fa";

const events = [
  { date: "25", month: "Feb", color: "bg-orange-600", category: "PETS", comments: 20, title: "Some toughly useful much darn elacious walking before" },
  { date: "28", month: "Feb", color: "bg-yellow-500", category: "GROOMINGS", comments: 20, title: "Unjustifiably wetted above dalmatian yet skeptic dear precise" },
  { date: "30", month: "Feb", color: "bg-purple-700", category: "PETS SHELTER", comments: 20, title: "Excited less malicious one soulful sincerely naively much" },
];

const EventsSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-gray-200">
      {/* Heading with Icon */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="bg-orange-600 p-4 rounded-full shadow-lg flex items-center justify-center w-16 h-16">
          <FaPaw className="text-white text-4xl" />
        </div>
        <p className="text-gray-500 italic text-lg mt-4">Because We Really Care About Your Pets</p>
        <h2 className="text-4xl font-bold mt-2">What’s Happening</h2>
      </div>

      {/* Events Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-300 p-4 relative rounded-lg shadow-lg">
            {/* Date Badge */}
            <div className={`absolute top-4 left-4 w-12 h-12 flex flex-col items-center justify-center rounded-full text-white font-bold ${event.color}`}>
              <span className="text-lg">{event.date}</span>
              <span className="text-xs">{event.month}</span>
            </div>

            {/* Image Placeholder */}
            <div className="h-[308px] flex items-center justify-center text-gray-500 text-2xl bg-black rounded-md">370 x 308</div>

            {/* Category and Comments */}
            <p className={`text-gray-600 text-sm mt-4 uppercase tracking-wide font-semibold ${event.category === "GROOMINGS" ? "text-gray-700" : ""}`}>
              {event.category} • {event.comments} COMMENTS
            </p>

            {/* Event Title */}
            <h3 className="text-lg font-semibold mt-2 text-black">{event.title}</h3>

            {/* Read More */}
            <p className="text-red-500 font-semibold mt-2 cursor-pointer">READ MORE</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
