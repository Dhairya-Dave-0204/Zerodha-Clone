import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SignUp() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = formData.fullName.trim();
    const username = formData.username.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    // Required fields
    if (!fullName || !username || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    // Full name validation
    if (fullName.length < 3) {
      toast.error("Full name must be at least 3 characters long");
      return;
    }

    if (fullName.length > 50) {
      toast.error("Full name cannot exceed 50 characters");
      return;
    }

    // Username validation
    if (username.length < 3) {
      toast.error("Username must be at least 3 characters long");
      return;
    }

    if (username.length > 20) {
      toast.error("Username cannot exceed 20 characters");
      return;
    }

    if (!usernameRegex.test(username)) {
      toast.error("Username can only contain letters, numbers and underscores");
      return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must contain at least one special character");
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const promise = axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/register`,
        {
          fullName,
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      toast.promise(promise, {
        loading: "Creating account...",
        success: "Account created successfully",
        error: "Registration failed",
      });

      await promise;

      handleReset();

      navigate("/signin");
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 bg-gray-50 sm:px-6 md:px-10">
      <motion.div
        className="max-w-xl mx-auto"
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
            <h1 className="text-3xl font-medium text-gray-800">
              Create Account
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Join the platform and start your investing journey.
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
                min={8}
                max={18}
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
                disabled={loading}
                className="flex-1 px-6 py-3 font-medium text-white duration-200 rounded-sm cursor-pointer bg-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create Account"}
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
            <p className="text-sm text-gray-500">Already have an account?</p>

            <Link
              to="/signin"
              className="inline-block mt-2 text-sm font-medium duration-200 text-primary hover:underline"
            >
              Sign In
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SignUp;
