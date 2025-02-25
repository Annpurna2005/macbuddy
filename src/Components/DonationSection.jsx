import React from "react";

const DonationSection = () => {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-4xl md:text-6xl font-semibold">Help Us & Save More Pets</h2>
      <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        More forwardly echidna outside tiger split thanks vibrantly gosh hence pangolin
        however notwithstanding leapt untruthful gauchely yikes komodo successful concentrically dully more.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:space-x-0.5 space-y-6 md:space-y-0">
        <div className="text-center w-full md:w-1/4">
          <h3 className="text-4xl md:text-5xl font-bold">$35</h3>
          <button className="mt-3 bg-red-600 text-white text-lg md:text-2xl font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full">
            For Pets Food
          </button>
        </div>
        <div className="hidden md:block border-l-2 border-gray-300 h-20"></div>
        <div className="text-center w-full md:w-1/4">
          <h3 className="text-4xl md:text-5xl font-bold">$60</h3>
          <button className="mt-3 bg-yellow-500 text-white text-lg md:text-2xl font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full">
            For Medicine
          </button>
        </div>
        <div className="hidden md:block border-l-2 border-gray-300 h-20"></div>
        <div className="text-center w-full md:w-1/4">
          <h3 className="text-4xl md:text-5xl font-bold">$85</h3>
          <button className="mt-3 bg-purple-700 text-white text-lg md:text-2xl font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full">
            For Vet Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
