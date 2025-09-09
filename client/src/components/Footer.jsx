import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";


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