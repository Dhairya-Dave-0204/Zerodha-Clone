import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function SignIn() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

  const usernameOrEmail = formData.usernameOrEmail.trim();
  const password = formData.password.trim();

  if (!usernameOrEmail) {
    toast.error("Username or Email is required");
    return;
  }

  if (!password) {
    toast.error("Password is required");
    return;
  }

  const isEmail = emailRegex.test(usernameOrEmail);

  if (usernameOrEmail.includes("@") && !isEmail) {
    toast.error("Please enter a valid email address");
    return;
  }

  if (!usernameOrEmail.includes("@")) {
    if (usernameOrEmail.length < 3) {
      toast.error("Username must be at least 3 characters long");
      return;
    }

    if (usernameOrEmail.length > 20) {
      toast.error("Username cannot exceed 20 characters");
      return;
    }
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return;
  }

  try {
    setLoading(true);

    const payload = {
      password,
      ...(isEmail
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }),
    };

    const promise = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/login`,
      payload,
      {
        withCredentials: true,
      },
    );

    toast.promise(promise, {
      loading: "Signing in...",
      success: "Login successful",
      error: "Login failed",
    });

    const response = await promise;

    if (response.data.success === false) {
      throw new Error(response.data.message);
    }

    handleReset();

    window.location.href = import.meta.env.VITE_DASHBOARD_URL;
    // navigate(`${import.meta.env.VITE_DASHBOARD_URL}`);
  } catch (error) {
    console.error(error);

    toast.error(
      error?.response?.data?.message || "Invalid credentials",
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="px-4 py-10 bg-gray-50 sm:px-6 md:px-10">
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="p-6 bg-white border border-gray-200 shadow-sm sm:p-8">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <h1 className="text-3xl font-medium text-gray-800">Welcome Back</h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Sign in to access your dashboard and portfolio.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
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

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                min={8}
                max={18}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 font-medium text-white duration-200 rounded-sm cursor-pointer bg-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 px-6 py-3 font-medium text-gray-700 duration-200 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-50"
              >
                Reset
              </button>
            </div>
          </motion.form>

          <motion.div
            className="pt-8 mt-8 text-center border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <p className="text-sm text-gray-500">Don't have an account?</p>

            <Link
              to="/signup"
              className="inline-block mt-2 text-sm font-medium duration-200 text-primary hover:underline"
            >
              Create Account
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SignIn;
