import React from "react";
import { Play } from "lucide-react";

const FeaturedVideo = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch">
      {/* Left Section: Video Placeholder */}
      <div className="relative w-full md:w-1/2 bg-black flex items-center justify-center h-auto md:h-[500px]">
        <span className="text-white text-6xl"></span>
        <button className="absolute flex flex-col items-center text-white text-lg mt-2">
        </button>
      </div>

      {/* Right Section: Features */}
      <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center h-auto md:h-[500px]">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtvLje6j3cAPvnBosS6oDuKrImBrMBa5IQQ&s" alt="Shelter" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Largest non-profit pet’s shelter</h3>
              <p className="text-gray-600 text-sm">
                Well gaudy hound inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd9wm1HIGrNQZwrh4tN3WkKU9hFiRegIHYoW97fwcWIvm_ZwLYIjpXey5WDykBGqmPPM&usqp=CAU" alt="Adoption" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Convenient pet adoption for public</h3>
              <p className="text-gray-600 text-sm">
                Well gaudy hound inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97IojEmX9sW8pp5UPmsaJEKDrEeMViVX2WA&s" alt="Innovation" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Innovative ways to help animals</h3>
              <p className="text-gray-600 text-sm">
                Well gaudy hound inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
