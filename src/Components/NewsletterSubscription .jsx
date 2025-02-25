import { FaEnvelope } from "react-icons/fa";

const NewsletterSubscription = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center px-33 py-16">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-4xl" />
        <div>
          <h2 className="text-xl font-bold">Subscribe Newsletter</h2>
          <p className="text-sm text-gray-400">
            Get weekly news & latest updates from Pawrex!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex bg-white rounded-full overflow-hidden">
        <input
          type="email"
          placeholder="Your Email ..."
          className="px-4 py-2 outline-none text-black w-60"
        />
        <button className="bg-orange-600 text-white px-6 py-2 font-bold">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
