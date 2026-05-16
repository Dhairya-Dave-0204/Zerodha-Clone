import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start justify-between gap-4 mb-10 sm:flex-row sm:items-center">
        <p className="text-sm text-gray-500">
          Instant, zero-cost fund transfers with UPI
        </p>

        <div className="flex items-center gap-3">
          <Link className="px-5 py-2 text-sm font-medium text-white duration-200 bg-green-500 rounded-sm hover:bg-green-400">
            Add funds
          </Link>

          <Link className="px-5 py-2 text-sm font-medium text-white duration-200 rounded-sm bg-primary hover:opacity-90">
            Withdraw
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="flex items-center mb-5">
            <p className="text-xl font-light text-gray-700">Equity</p>
          </span>

          <div className="px-6 py-6 border border-gray-200 sm:px-8">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">Available margin</p>

              <p className="text-2xl font-light text-primary">4,043.10</p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">Used margin</p>

              <p className="text-2xl font-light text-gray-700">3,757.30</p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">Available cash</p>

              <p className="text-2xl font-light text-gray-700">4,043.10</p>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Opening Balance</p>
                <p className="text-sm text-gray-700">4,043.10</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Opening Balance</p>
                <p className="text-sm text-gray-700">3736.40</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Payin</p>
                <p className="text-sm text-gray-700">4064.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">SPAN</p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Delivery margin</p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Exposure</p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Options premium</p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Collateral (Liquid funds)
                </p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Collateral (Equity)</p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Total Collateral</p>
                <p className="text-sm text-gray-700">0.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full px-6 py-10 text-center border border-gray-200">
            <p className="mb-8 text-sm text-gray-400">
              You don't have a commodity account
            </p>

            <Link className="inline-block px-5 py-2 text-sm font-medium text-white duration-200 rounded-sm bg-primary hover:opacity-90">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
