import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="max-w-7xl w-full bg-white p-10 rounded-lg flex flex-col md:flex-row gap-10">
        {/* Left: Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 mt-2 italic text-sm">
            Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.
          </p>
          <form className="mt-6">
            <label className="block text-gray-700  mb-1 ">Email Address*</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-500 outline-none mb-4"
              placeholder="Your email"
            />

            <label className="block text-gray-700 mb-1">Subject*</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-500 outline-none mb-4"
              placeholder="Subject"
            />

            <label className="block text-gray-700 mb-1">Your Message*</label>
            <textarea
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-500 outline-none mb-4"
              rows="4"
              placeholder="Type your message here"
            ></textarea>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded-md font-bold w-full md:w-auto hover:bg-yellow-600">
              Submit now
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 border-l pl-10 hidden md:block">
          <h3 className="text-lg font-semibold text-gray-900">Address:</h3>
          <p className="text-gray-700">52A, Talistoi Town 5238</p>
          <p className="text-gray-700">La city, IA 85796</p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-4">Phone:</h3>
          <p className="text-gray-700">+(1) 234 567 8900</p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-4">Email:</h3>
          <p className="text-gray-700">support@pawrex.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
