import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/assets";

const Menu = () => {
  const { user } = useContext(AppContext);

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      const promise = axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/logout`,
        user._id,
        {
          withCredentials: true,
        },
      );

      toast.promise(promise, {
        loading: "Logging out...",
        success: "Logout successful",
        error: "Logout failed",
      });

      const response = await promise

      if (response.data.success === false) {
        throw new Error(response.data.message);
      }

      window.location.href = import.meta.env.VITE_FRONTEND_URL;
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Failed to Logout");
    }
  };

  return (
    <div className="relative flex items-center justify-between w-full">
      <img
        src={Logo}
        alt="Logo"
        className="object-contain w-10 cursor-pointer sm:w-12"
      />
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            <li>
              <Link
                to="/"
                onClick={() => handleMenuClick(0)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 0 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                onClick={() => handleMenuClick(1)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 1 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Orders
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/holdings"
                onClick={() => handleMenuClick(2)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 2 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Holdings
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/positions"
                onClick={() => handleMenuClick(3)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 3 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Positions
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/funds"
                onClick={() => handleMenuClick(4)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 4 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Funds
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/apps"
                onClick={() => handleMenuClick(5)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 5 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Apps
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-purple-500 bg-purple-100 rounded-full">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <p className="hidden text-sm font-medium text-gray-700 sm:block">
            {user?.username || "User"}
          </p>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="text-2xl text-gray-700 ri-menu-line"></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm top-16 lg:hidden">
          <ul className="flex flex-col px-4 py-4">
            <li>
              <Link
                to="/"
                onClick={() => handleMenuClick(0)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
                    selectedMenu === 0 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/watchlist"
                onClick={() => handleMenuClick(4)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
                    selectedMenu === 1 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Watchlist
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                onClick={() => handleMenuClick(1)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
                    selectedMenu === 2 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Orders
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/holdings"
                onClick={() => handleMenuClick(2)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
                    selectedMenu === 3 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Holdings
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/positions"
                onClick={() => handleMenuClick(3)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
                    selectedMenu === 4 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Positions
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/funds"
                onClick={() => handleMenuClick(4)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
                    selectedMenu === 5 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Funds
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/apps"
                onClick={() => handleMenuClick(5)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium hover:text-primary ${
                    selectedMenu === 6 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Apps
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {isProfileDropdownOpen && (
        <>
          <div
            className="fixed inset-0 z-999 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setIsProfileDropdownOpen(false)}
          />
          
          <div className="fixed top-1/2 left-1/2 z-1000 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2">
            <div className="p-6 bg-white border border-gray-200 shadow-xl rounded-xl sm:p-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto text-3xl font-semibold text-purple-500 bg-purple-100 rounded-full">
                  {user?.username?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                  {user?.fullName || "User"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  @{user?.username || "username"}
                </p>
              </div>

              <div className="pt-6 mt-6 space-y-5 border-t border-gray-200">
                <div>
                  <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                    Email
                  </p>

                  <p className="mt-1 text-gray-700">{user?.email || "-"}</p>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                    Member Since
                  </p>

                  <p className="mt-1 text-gray-700">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "-"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                    User ID
                  </p>

                  <p className="mt-1 text-gray-700 break-all">
                    {user?._id || "-"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <button onClick={handleLogout} className="w-full py-3 font-medium text-white duration-200 rounded cursor-pointer bg-primary hover:opacity-90">
                  Logout
                </button>

                <button
                  onClick={() => setIsProfileDropdownOpen(false)}
                  className="w-full py-3 font-medium text-gray-700 duration-200 border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
