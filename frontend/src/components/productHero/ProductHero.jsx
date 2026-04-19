import React from "react";

function ProductHero() {
  return (
    <div className="px-4 py-8 mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto text-center">
        <h1 className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
          Zerodha Products
        </h1>
        <p className="mt-4 text-xl text-gray-600">Sleek, modern, and intuitive trading platforms</p>
        <p className="mt-4">Check out our <span className="text-blue-700">investment offerings →</span></p>
      </div>

      <div className="w-full mx-auto mt-10 border-t border-gray-200 lg:mt-16 sm:mt-20 2xl:w-7xl" />
    </div>
  );
}

export default ProductHero;
