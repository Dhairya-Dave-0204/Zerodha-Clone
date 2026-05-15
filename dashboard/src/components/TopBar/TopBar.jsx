import React from "react";
import { Menu } from "../component_index";

const TopBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Left Section */}
        <div className="items-center hidden gap-8 md:flex lg:gap-10">

          {/* NIFTY */}
          <div className="flex items-center gap-3">
            <p className="text-xs font-medium tracking-wide text-gray-700">
              NIFTY 50
            </p>

            <p className="text-sm font-medium text-red-400">
              100.2
            </p>

            <p className="text-xs text-gray-400">
              0
            </p>
          </div>

          {/* SENSEX */}
          <div className="flex items-center gap-3">
            <p className="text-xs font-medium tracking-wide text-gray-700">
              SENSEX
            </p>

            <p className="text-sm font-medium text-red-400">
              100.2
            </p>

            <p className="text-xs text-gray-400">
              0
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="hidden w-px h-16 mx-6 bg-gray-200 md:block"></div>

        {/* Right Section */}
        <div className="flex-1">
          <Menu />
        </div>

      </div>
    </div>
  );
};

export default TopBar;