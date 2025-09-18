// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
// import { FaMoon } from "react-icons/fa";
// import { useSelector } from "react-redux";

// export const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { currentUser } = useSelector((state) => state.user);

//   return (
//     <header className="border-b-2 bg-white dark:bg-gray-900">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//         >
//           <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//             Nikhil's
//           </span>
//           <span className="fontbold">Blog</span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-6 ml-6">
//           <Link
//             to="/"
//             className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//           >
//             About
//           </Link>
//           <Link
//             to="/projects"
//             className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//           >
//             Projects
//           </Link>
//         </nav>

//         {/* Right Side (Desktop + Mobile icons) */}
//         <div className="flex items-center gap-3">
//           {/* Search (box only on desktop, icon on mobile) */}
//           <div className="relative hidden lg:block">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
//             />
//             <AiOutlineSearch className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400" />
//           </div>
//           <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
//             <AiOutlineSearch />
//           </button>

//           {/* Dark Mode */}
//           <button
//             onClick={() => document.documentElement.classList.toggle("dark")}
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
//           >
//             <FaMoon />
//           </button>

//           {/* Sign In */}
//           {/* Desktop Sign In Button */}
//           {currentUser ? (
//             <Dropdown>
//               arrowIcon={false}
//               inline
//               label={
//                 <Avatar
//                 alt = 'user'
//                 img={currentUser.profilePicture}
//                 rounded 
//                 />
//               }
//               <Dropdown.Header>
//                 <span className="block text-sm">
//                   @{currentUser.username}
//                 </span>
//                 <span className="block text-sm font-medium truncate">
//                   @{currentUser.email}
//                 </span>
//               </Dropdown.Header>
//               <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.item>
//                 Profile
//               </Dropdown.item>
//               <Dropdown.Divider />
//               <Dropdown.item>
//                 Sign out
//               </Dropdown.item>
//               </Link>
//             </Dropdown>
//           ):
//           (
//             <Link to="/sign-in" className="hidden md:inline-block">
//               <div className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] transition-all duration-300">
//                 <button
//                   className="w-full h-full px-4 py-2 rounded-lg bg-white text-black text-sm font-medium transition-all duration-300
//         hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </Link>
  

//           )
//         }
//             {/* Mobile Sign In Button */}
//             <Link to="/sign-in" className="md:hidden">
//               <button className="w-full h-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500  text-white text-xs font-medium ">
//                 Sign In
//               </button>
//             </Link>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
//           >
//             {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (only pages) */}
//       {menuOpen && (
//         <nav className="md:hidden flex flex-col gap-4 px-4 py-4 border-t bg-gray-50 dark:bg-gray-800">
//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//             className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//           >
//             About
//           </Link>
//           <Link
//             to="/projects"
//             onClick={() => setMenuOpen(false)}
//             className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
//           >
//             Projects
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// };


import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { currentUser } = useSelector((state) => state.user);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <span className="ml-2">Blog</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 ml-6">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            Projects
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search */}
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

          {/* Dark Mode Toggle */}
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <FaMoon />
          </button>

          {/* User Dropdown or Sign In */}
          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300"
              >
                <img
                  src={currentUser.profilePicture}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="font-medium">@{currentUser.username}</div>
                    <div className="truncate">{currentUser.email}</div>
                  </div>
                  <div className="border-t dark:border-gray-700">
                    <Link
                      to="/dashboard?tab=profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        // handle logout logic here
                        setDropdownOpen(false);
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Desktop Sign In */}
              <Link to="/sign-in" className="hidden md:inline-block">
                <div className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] transition-all duration-300">
                  <button
                    className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white"
                  >
                    Sign In
                  </button>
                </div>
              </Link>

              {/* Mobile Sign In */}
              <Link to="/sign-in" className="md:hidden">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium">
                  Sign In
                </button>
              </Link>
            </>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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