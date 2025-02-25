import React from "react";
import { FaTwitter, FaFacebook, FaGoogle, FaPinterest } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

const teamMembers = [
  { name: "Thomas Nick", role: "FOUNDER", image: "https://i.pinimg.com/200x/fb/33/5b/fb335b46d9dcf4859308b416da6600a3.jpg" },
  { name: "James Harry", role: "PET LOVER", image: "https://i.pinimg.com/200x/fb/33/5b/fb335b46d9dcf4859308b416da6600a3.jpg" },
  { name: "Lucy Anderson", role: "DONATOR", image: "https://i.pinimg.com/200x/fb/33/5b/fb335b46d9dcf4859308b416da6600a3.jpg" },
  { name: "Daniel Jacob", role: "PET ADOPTER", image: "https://i.pinimg.com/200x/fb/33/5b/fb335b46d9dcf4859308b416da6600a3.jpg" },
];

const TeamSection = () => {
  return (
    <section className="text-center py-12">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-orange-600 p-4 rounded-full shadow-lg">
            <FaPaw className="text-white text-4xl" />
          </div>
          <p className="mt-4 text-center text-white text-xl italic  bg-opacity-20 px-4 py-2 rounded-lg">
            Because We Really Care About Your Pets
          </p>
        </div>
      <h3 className="text-xl italic text-gray-500">Because We Really Care About Your Pets</h3>
      <h2 className="text-4xl font-bold mt-2">Our Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-68 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <div className="w-16 border-t border-gray-300 mx-auto my-2"></div>
              <p className="text-gray-500 uppercase text-sm">{member.role}</p>
              <div className="flex justify-center space-x-3 mt-3 text-gray-500">
                <a href="#" className="hover:text-black"><FaTwitter /></a>
                <a href="#" className="hover:text-black"><FaFacebook /></a>
                <a href="#" className="hover:text-black"><FaGoogle /></a>
                <a href="#" className="hover:text-black"><FaPinterest /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
