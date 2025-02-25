import { useState } from "react";
import { FaPaw } from "react-icons/fa";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    petCategory: "",
    serviceType: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-orange-600 opacity-90">
        <div className="absolute inset-0 bg-[url('/path-to-paw-print.png')] bg-cover opacity-10"></div>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-transparent p-8 rounded-3xl w-full max-w-7xl relative z-10"
      >
        {/* Centered Icon and Tagline */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-orange-600 p-4 rounded-full shadow-lg">
            <FaPaw className="text-white text-4xl" />
          </div>
          <p className="mt-4 text-center text-white text-xl italic  bg-opacity-20 px-4 py-2 rounded-lg">
            Because We Really Care About Your Pets
          </p>
        </div>

        {/* Form Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Get An Appointment
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          {/* Date & Time */}
          <div className="flex flex-col">
            <div className="relative">
              <input
                type="datetime-local"
                name="dateTime"
                className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 w-full"
                onChange={handleChange}
              />
              <span className="absolute right-4 top-3 text-orange-500">📅</span>
            </div>
          </div>

          {/* Pet Category */}
          <div className="flex flex-col">
            <input
              type="text"
              name="petCategory"
              placeholder="Enter pet category"
              className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          {/* Service Type */}
          <div className="flex flex-col">
            <input
              type="text"
              name="serviceType"
              placeholder="Enter service type"
              className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Comments */}
        <div className="mt-6 flex flex-col">
          <textarea
            name="comments"
            placeholder="Enter your comments..."
            className="p-3 border border-orange-300 rounded-3xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 h-32"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-8 py-3 rounded-3xl hover:bg-yellow-600 font-semibold transition duration-300 w-48"
          >
            SEND REQUEST
          </button>
        </div>
      </form>
    </div>
  );
}