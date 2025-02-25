import React from "react";
import { FaPaw } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">

      {/* Orange Box */}
      <div className="bg-orange-600 px-12 py-6 rounded-lg shadow-lg w-[500px] relative">
        {/* White Box (Inside Orange Box) */}
        <div className="bg-white p-12 rounded-lg shadow-md relative -top-8 w-[480px]">
          {/* Top Decoration */}
          <div className="flex justify-center">
            <span className="text-orange-600 text-3xl">🐾</span>
          </div>

          {/* Login Heading */}
          <h2 className="text-center text-2xl font-bold mt-2 text-black">Login</h2>
          <p className="text-center text-gray-500 italic">
            Because We Really Care About Your Pets
          </p>

          {/* Login Form */}
          <form className="mt-6">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2"
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full text-orange-600 font-semibold text-right mt-4">
              SIGN IN
            </button>
          </form>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-sm text-white mt-4">
          <a href="#" className="mr-4 hover:underline">
            Register
          </a>
          |
          <a href="#" className="ml-4 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
