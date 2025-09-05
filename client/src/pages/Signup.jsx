import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Nikhil's
            </span>
            <span className="fontbold">Blog</span>
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can Sign Up with your email and password
            or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="username" className="block mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-400 rounded p-2 w-full"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-gray-400 rounded p-2 w-full"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="border border-gray-400 rounded p-2 w-full"
                placeholder="Enter your Password"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white font-medium py-2 px-4 rounded-lg 
                 bg-gradient-to-r from-purple-500 to-pink-500 
                 hover:from-purple-600 hover:to-pink-600 
                 focus:outline-none focus:ring-2 focus:ring-purple-300 
                 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have a Account?</span>
            <Link to='/sign-in' className="text-blue-500">
            Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
