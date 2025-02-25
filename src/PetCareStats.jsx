import React, { useState, useEffect, useRef } from "react";
import { FaAward, FaPaw, FaDollarSign, FaBrush } from "react-icons/fa";

const stats = [
  { icon: <FaPaw className="text-yellow-500 text-4xl" />, number: 748, label: "Pet Adoptions" },
  { icon: <FaAward className="text-orange-500 text-4xl" />, number: 120, label: "Pet Awards" },
  { icon: <FaBrush className="text-yellow-500 text-4xl" />, number: 350, label: "Pets Grooming" },
  { icon: <FaDollarSign className="text-orange-500 text-4xl" />, number: 916, label: "Our Donators" },
];

const PetCareStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                newCounts[index] = start;
                return newCounts;
              });
              if (start >= end) clearInterval(timer);
            }, stepTime);
          });
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.current.observe(sectionRef.current);
    return () => observer.current && observer.current.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="text-center py-8 bg-black text-white relative">
      <div className="absolute inset-x-0 -bottom-2 h-6 bg-gradient-to-t from-black to-transparent"></div>
      <h1 className="text-5xl font-bold mt-2 text-white">We Offers The Best </h1>
      <h1 className="text-5xl font-bold mt-2 text-white">Pet Care Solutions</h1>
      
      <div className="relative mt-16 bg-white shadow-white shadow-lg rounded-lg p-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="border-2 border-dashed border-orange-500 p-4 rounded-lg inline-block">{stat.icon}</div>
            <h3 className="text-3xl font-bold mt-4 text-black">{counts[index]}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetCareStats;
