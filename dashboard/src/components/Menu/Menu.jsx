import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/assets";

const Menu = () => {
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

  return (
    <div className="relative flex items-center justify-between w-full">
      <img
        src={Logo}
        alt="Logo"
        className="object-contain w-10 cursor-pointer sm:w-12"
      />
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden md:block">
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
                to="/watchlist"
                onClick={() => handleMenuClick(4)}
                className="no-underline"
              >
                <p
                  className={`text-sm font-medium duration-200 cursor-pointer hover:text-primary ${
                    selectedMenu === 4 ? "text-primary" : "text-gray-600"
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
            ZU
          </div>

          <p className="hidden text-sm font-medium text-gray-700 sm:block">
            USERID
          </p>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="text-2xl text-gray-700 ri-menu-line"></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm top-16 md:hidden">
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
                to="/orders"
                onClick={() => handleMenuClick(1)}
                className="no-underline"
              >
                <p
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
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
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
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
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
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
                  className={`py-3 text-sm font-medium border-b border-gray-100 hover:text-primary ${
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
                  className={`py-3 text-sm font-medium hover:text-primary ${
                    selectedMenu === 5 ? "text-primary" : "text-gray-600"
                  }`}
                >
                  Apps
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
