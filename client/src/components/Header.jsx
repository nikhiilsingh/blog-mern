import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b-2 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Nikhil's
          </span>
          <span className="fontbold">Blog</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 ml-6">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            About
          </Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            Projects
          </Link>
        </nav>

        {/* Right Side (Desktop + Mobile icons) */}
        <div className="flex items-center gap-3">
          {/* Search (box only on desktop, icon on mobile) */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
            />
            <AiOutlineSearch className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400" />
          </div>
          <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <AiOutlineSearch />
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <FaMoon />
          </button>

          {/* Sign In */}
          <Link to="/sign-in" className="hidden md:block">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium">
              Sign In
            </button>
          </Link>
          <Link to="/sign-in" className="md:hidden">
            <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium">
              Sign In
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only pages) */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-4 py-4 border-t bg-gray-50 dark:bg-gray-800">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            Projects
          </Link>
        </nav>
      )}
    </header>
  );
};