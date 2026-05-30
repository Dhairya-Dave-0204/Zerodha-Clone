import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="px-4 py-10 bg-gray-50 sm:px-6 md:px-10">
      <div className="max-w-xl mx-auto">
        <div className="p-6 bg-white border border-gray-200 shadow-sm sm:p-8">

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-medium text-gray-800">
              Create Account
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Join the platform and start your investing journey.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

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

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="flex-1 px-6 py-3 font-medium text-white duration-200 rounded-sm cursor-pointer bg-primary hover:opacity-90"
              >
                Create Account
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

          <div className="pt-8 mt-8 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="inline-block mt-2 text-sm font-medium duration-200 text-primary hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;