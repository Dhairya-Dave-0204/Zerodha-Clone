import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext"

const Summary = () => {
  const { user } = useContext(AppContext)
  
  return (
    <div className="w-full">
      <div className="mb-8">
        <h6 className="text-2xl font-normal text-gray-700">Hi, {user?.username || "User"}!</h6>

        <hr className="mt-5 border-gray-200" />
      </div>

      <div className="pb-6">
        <span className="flex items-center mb-5">
          <p className="text-xl font-light text-gray-700">Equity</p>
        </span>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl font-light text-gray-700 sm:text-5xl">
              3.74k
            </h3>

            <p className="mt-2 text-sm text-gray-500">Margin available</p>
          </div>

          <div className="hidden w-px h-20 bg-gray-200 lg:block"></div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 whitespace-nowrap">
              Margins used
              <span className="ml-3 text-gray-700">0</span>
            </p>

            <p className="text-sm text-gray-500 whitespace-nowrap">
              Opening balance
              <span className="ml-3 text-gray-700">3.74k</span>
            </p>
          </div>
        </div>

        <hr className="mt-8 border-gray-200" />
      </div>

      <div className="pb-6 mt-8">
        <span className="flex items-center mb-5">
          <p className="text-xl font-light text-gray-700">Holdings (13)</p>
        </span>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl font-light text-green-500 sm:text-5xl">
              1.55k
              <small className="ml-2 text-sm text-green-500">+5.20%</small>
            </h3>

            <p className="mt-2 text-sm text-gray-500">P&amp;L</p>
          </div>

          <div className="hidden w-px h-20 bg-gray-200 lg:block"></div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 whitespace-nowrap">
              Current Value
              <span className="ml-3 text-gray-700">31.43k</span>
            </p>

            <p className="text-sm text-gray-500 whitespace-nowrap">
              Investment
              <span className="ml-3 text-gray-700">29.88k</span>
            </p>
          </div>
        </div>

        <hr className="mt-8 border-gray-200" />
      </div>
    </div>
  );
};

export default Summary;
