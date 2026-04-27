import React from "react";

function SupportHero() {
  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      
      {/* Container */}
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
          Support
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
          Search for answers or browse help topics to resolve your queries quickly.
        </p>

        {/* Search Bar */}
        <div className="flex items-center max-w-2xl px-4 py-3 mx-auto mt-8 border border-gray-200 rounded-md sm:mt-10 focus-within:border-primary">
          <i className="mr-3 text-lg text-gray-400 ri-search-line"></i>
          <input
            type="text"
            placeholder="Eg: how do I open an account?"
            className="w-full text-sm outline-none sm:text-base"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm sm:mt-10 sm:text-base text-primary">
          <button className="hover:underline">Track account opening</button>
          <button className="hover:underline">Track segment activation</button>
          <button className="hover:underline">Intraday margins</button>
          <button className="hover:underline">Kite user manual</button>
        </div>

      </div>

    </div>
  );
}

export default SupportHero;