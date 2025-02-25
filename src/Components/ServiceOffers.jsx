// import Image from "next/image"; // If using Next.js, otherwise use <img>
import { FaPaw } from "react-icons/fa";

const services = [
  { title: "Pet Grooming" },
  { title: "Pet Adoption" },
  { title: "Pet Training" },
  { title: "Pet Sitting & Walking" },
  { title: "Pet DayCare" },
  { title: "Pet Vaccination" },
];

const ServiceOffers = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center text-orange-500 text-2xl">
          <FaPaw />
        </div>
        <p className="text-gray-500 mt-2">Because We Really Care About Your Pets</p>
        <h2 className="text-3xl font-bold text-gray-800">More Service Offers</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 text-center rounded-lg">
            <div className="bg-gray-900 flex justify-center items-center text-white text-xl h-[308px] w-full">
              370 × 308
            </div>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 text-sm mt-2">
              Due thanks blissfully reverent that outside pled along some goldfish did chromatic gosh sloth sedas instead coincident.
            </p>
            <button className="text-orange-500 font-semibold mt-4">READ MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOffers;
