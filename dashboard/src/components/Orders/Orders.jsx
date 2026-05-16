import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[90vh]">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-base font-light text-gray-400 sm:text-lg">
          You haven't placed any orders today
        </p>

        <Link
          to="/"
          className="px-6 py-3 mt-6 text-sm font-medium text-white duration-200 rounded-sm sm:text-base bg-primary hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
