import React from "react";
import { intradayTrades, pricingEquity, pricingMF } from "../../assets/assets";

function PricingHero() {
  return (
    <div className="px-4 py-8 mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto text-center">
        <h1 className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
          Charges
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          List of all charges and taxes
        </p>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <img src={pricingEquity} alt="Equity"  className="w-56"/>
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div>
          <img src={intradayTrades} alt="Intraday" className="w-56"/>
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div>
          <img src={pricingMF} alt="Mutual Fund" className="w-56"/>
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingHero;
