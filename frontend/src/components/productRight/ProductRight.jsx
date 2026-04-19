import React from "react";
import { coin, kiteconnect } from "../../assets/assets";

function ProductRight() {
  return (
    <>
      <div className="px-4 py-12 sm:px-6 md:px-10 lg:px-16">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto">
          <div className="flex justify-center lg:justify-start">
            <img
              src={coin}
              alt="Kite"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-5 mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-2xl font-medium sm:text-3xl">Kite</h2>

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 sm:px-6 md:px-10 lg:px-16">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto">
          <div className="flex flex-col order-2 max-w-xl gap-5 mx-auto text-center lg:text-left lg:mx-0 lg:order-1">
            <h2 className="text-2xl font-medium sm:text-3xl">Console</h2>

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              The central dashboard for your Zerodha account. Gain insights into
              your trades and investments with in-depth reports and
              visualisations.
            </p>
          </div>

          <div className="flex justify-center order-1 lg:justify-end lg:order-2">
            <img
              src={kiteconnect}
              alt="Console"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRight;
