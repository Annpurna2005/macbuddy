import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BlogPage = () => {
  const posts = Array(6).fill({
    title: "Blog Image Post",
    description:
      "Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.",
    category: "Fashion, Wordpress",
    date: "September 25, 2024",
  });

  return (
    <div className="container mx-auto py-10 px-4 md:px-10 flex flex-col md:flex-row">
      {/* Blog Section */}
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <div className="bg-gray-900 flex justify-center items-center text-white text-xl h-[415px]">
                555 × 415
              </div>
              <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.category} | {post.date}</p>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <button className="text-orange-500 font-semibold mt-4">READ MORE</button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="bg-gray-300 px-4 py-2 rounded-full"><FaArrowLeft /></button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full">1</button>
          <button className="bg-gray-300  text-white px-4 py-2 rounded-full">2</button>
          <button className="bg-gray-300  text-white px-4 py-2 rounded-full">3</button>
          <button className="bg-gray-300 px-4 py-2 rounded-full"><FaArrowRight /></button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:pl-8 mt-10 md:mt-0">
        {/* Categories */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">CATEGORIES</h3>
          <ul className="mt-2 text-gray-600">
            <li>Pet Care Tips</li>
            <li>Adoption Stories</li>
            <li>Pet Nutrition</li>
            <li>Health & Safety</li>
          </ul>
        </div>

        {/* For Adoptions */}
        <div className="bg-white shadow-md p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold">FOR ADOPTIONS</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-gray-900 h-16 w-16"></div>
            <div className="bg-gray-900 h-16 w-16"></div>
            <div className="bg-gray-900 h-16 w-16"></div>
            <div className="bg-gray-900 h-16 w-16"></div>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white shadow-md p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold">TAGS</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">Pets</span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">Adoption</span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">Health</span>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white shadow-md p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold">RECENT POSTS</h3>
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-gray-900 h-12 w-12"></div>
              <p className="text-sm text-gray-600">Amazing Pet Stories</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-900 h-12 w-12"></div>
              <p className="text-sm text-gray-600">Healthy Pet Guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
