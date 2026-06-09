import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      usernameOrEmail: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Backend integration comes next
    console.log(formData);
  };

  return (
    <div className="px-4 py-10 bg-gray-50 sm:px-6 md:px-10">
      <div className="max-w-lg mx-auto">
        <div className="p-6 bg-white border border-gray-200 shadow-sm sm:p-8">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-medium text-gray-800">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Sign in to access your dashboard and portfolio.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Username / Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username or Email
              </label>

              <input
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                placeholder="Enter username or email"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="flex-1 px-6 py-3 font-medium text-white duration-200 rounded-sm cursor-pointer bg-primary hover:opacity-90"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 px-6 py-3 font-medium text-gray-700 duration-200 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-50"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="pt-8 mt-8 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Don't have an account?
            </p>

            <Link
              to="/signup"
              className="inline-block mt-2 text-sm font-medium duration-200 text-primary hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;