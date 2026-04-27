import React from "react";
import { intradayTrades, pricingEquity, pricingMF } from "../../assets/assets";

function PricingHero() {
  return (
    <div className="px-4 py-12 sm:mt-16 sm sm:px-6 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-medium leading-tight md:text-3xl lg:text-4xl">
          Charges
        </h1>
        <p className="mt-4 text-sm text-gray-600 sm:text-base md:text-lg">
          List of all charges and taxes
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl lg:mx-auto">
        {/* Item 1 */}
        <div className="flex flex-col items-center max-w-xs gap-4 mx-auto text-center">
          <img
            src={pricingEquity}
            alt="Equity"
            className="object-contain h-28 sm:h-52"
          />
          <h3 className="text-base font-medium sm:text-lg">
            Free equity delivery
          </h3>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center max-w-xs gap-4 mx-auto text-center">
          <img
            src={intradayTrades}
            alt="Intraday"
            className="object-contain h-28 sm:h-52"
          />
          <h3 className="text-base font-medium sm:text-lg">
            Intraday and F&O trades
          </h3>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center max-w-xs gap-4 mx-auto text-center">
          <img
            src={pricingMF}
            alt="Mutual Fund"
            className="object-contain h-28 sm:h-52"
          />
          <h3 className="text-base font-medium sm:text-lg">Free direct MF</h3>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingHero;
