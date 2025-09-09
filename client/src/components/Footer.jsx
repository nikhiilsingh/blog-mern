// import React from "react";
// import { Link } from "react-router-dom";
// import {BsFacebook , BsInstagram , BsTwitter , BsGithub} from "react-icons/bs"

// export default function FooterCom() {
//   return (
//     <Footer container className="border border-t-8 border-teal-500">
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="grid w-full justify-between sm:flex md:grid-cols-1">
//           <div className="mt-5">
//             <Link
//               to="/"
//               className="flex items-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
//             >
//               <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//                 Nikhil's
//               </span>
//               <span className="fontbold">Blog</span>
//             </Link>
//             </div>
//             <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
//               <div>
//                 <Footer.Title title="About" />
//                 <Footer.LinkGroup col>
//                   <Footer.Link
//                     href="https://www.google.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >2 JS Projects
//                   </Footer.Link>
//                   <Footer.Link
//                     href="/about"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >Nikhil Blog
//                   </Footer.Link>
//                 </Footer.LinkGroup>
//               </div>
//               <div>
//                 <Footer.Title title="Follow Us" />
//                 <Footer.LinkGroup col>
//                   <Footer.Link
//                     href="https://www.github.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Github
//                   </Footer.Link>
//                   <Footer.Link
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Facebook
//                   </Footer.Link>
//                 </Footer.LinkGroup>
//               </div>
//               <div>
//                 <Footer.Title title="Legal" />
//                 <Footer.LinkGroup col>
//                   <Footer.Link
//                     href="#"
//                     // target="_blank"
//                     // rel="noopener noreferrer"
//                   >
//                     Privacy Policy
//                   </Footer.Link>
//                   <Footer.Link
//                     href="#"
//                     // target="_blank"
//                     // rel="noopener noreferrer"
//                   >
//                     Terms &amp; Conditions
//                   </Footer.Link>
//                 </Footer.LinkGroup>
//               </div>
//             </div>
//           </div>
//           <Footer.Divider/>
//           <div className="w-full sm:flex sm:items-center sm:justify-between">
//             <Footer.Copyright href='#' by="Nikhil's Blog" year={new Date().getFullYear} />
//             <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
//               <Footer.Icon href="#" icon={BsFacebook} />
//               <Footer.Icon href="#" icon={BsInstagram} />
//               <Footer.Icon href="#" icon={BsTwitter} />
//               <Footer.Icon href="#" icon={BsGithub} />
//             </div>
//           </div>
//         </div>
//     </Footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
// import * as BsIcons from "react-icons/bs";


export default function FooterCom() {
  return (
    <footer className="border-t-8 border-teal-500 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* Logo Section */}
          <div className="mb-6 sm:mb-0">
            <Link
              to="/"
              className="flex items-center whitespace-nowrap text-lg sm:text-xl font-semibold text-gray-900 dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Nikhil's
              </span>
              <span className="ml-1 font-bold">Blog</span>
            </Link>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* About */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                About
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.google.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2 JS Projects
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:underline"
                  >
                    Nikhil Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow Us
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.github.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
              Nikhil's Blog
            </Link>
            . All rights reserved.
          </span>

          <div className="flex mt-4 sm:mt-0 space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsFacebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsInstagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}