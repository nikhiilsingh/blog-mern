import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import OAuth from "../components/OAuth";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // console.log(e.target.value);
  };

  // console.log(formData); // it shows on console
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
    }finally{
      setLoading(false);
    }
  };

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-400 rounded p-2 w-full"
                placeholder="Enter your Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-400 rounded p-2 w-full"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-medium py-2 px-4 rounded-lg 
                 bg-gradient-to-r from-purple-500 to-pink-500 
                 hover:from-purple-600 hover:to-pink-600 
                 focus:outline-none focus:ring-2 focus:ring-purple-300 
                 transition duration-200"
            >
              {/* Sign Up */}
              {loading ? (
                <>
                <div className="flex items-center justify-center gap-2">
                  {/* 🔄 Spinner on the left */}
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </div>
                </>
              ) : (
                "Sign Up"
              )}
            </button>

              <OAuth />

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have a Account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <div className="mt-5 p-3 rounded-lg bg-red-100 border border-red-400 text-red-700">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
