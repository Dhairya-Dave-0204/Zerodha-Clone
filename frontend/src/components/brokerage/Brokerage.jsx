import React from "react";

function Brokerage() {
  return (
    <div className="px-4 py-12 sm:mt-16 sm:px-6 md:px-10 lg:px-16">
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        <div className="px-4 pt-12 mb-20 text-center sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
              Brokerage
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Transparent and competitive pricing across all segments.
              Understand the complete breakdown of brokerage, taxes, and charges
              applied on your trades and investments.
            </p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4"></th>
                <th className="p-4 font-medium">Equity delivery</th>
                <th className="p-4 font-medium">Equity intraday</th>
                <th className="p-4 font-medium">F&O - Futures</th>
                <th className="p-4 font-medium">F&O - Options</th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              {/* Brokerage */}
              <tr className="border-t">
                <td className="p-4 font-medium">Brokerage</td>
                <td className="p-4">Zero Brokerage</td>
                <td className="p-4">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-4">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-4">Flat Rs. 20 per executed order</td>
              </tr>

              {/* STT */}
              <tr className="border-t">
                <td className="p-4 font-medium">STT/CTT</td>
                <td className="p-4">0.1% on buy & sell</td>
                <td className="p-4">0.025% on the sell side</td>
                <td className="p-4">0.05% on the sell side</td>
                <td className="p-4">
                  • 0.15% of intrinsic value on options that are bought and
                  exercised <br />• 0.15% on sell side (on premium)
                </td>
              </tr>

              {/* Transaction */}
              <tr className="border-t">
                <td className="p-4 font-medium">Transaction charges</td>
                <td className="p-4">
                  NSE: 0.00307% <br /> BSE: 0.00375%
                </td>
                <td className="p-4">
                  NSE: 0.00307% <br /> BSE: 0.00375%
                </td>
                <td className="p-4">
                  NSE: 0.00183% <br /> BSE: 0
                </td>
                <td className="p-4">
                  NSE: 0.03553% <br /> BSE: 0.0325%
                </td>
              </tr>

              {/* GST */}
              <tr className="border-t">
                <td className="p-4 font-medium">GST</td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              {/* SEBI */}
              <tr className="border-t">
                <td className="p-4 font-medium">SEBI charges</td>
                <td className="p-4">₹10 / crore</td>
                <td className="p-4">₹10 / crore</td>
                <td className="p-4">₹10 / crore</td>
                <td className="p-4">₹10 / crore</td>
              </tr>

              {/* Stamp */}
              <tr className="border-t">
                <td className="p-4 font-medium">Stamp charges</td>
                <td className="p-4">0.015% or ₹1500 / crore on buy side</td>
                <td className="p-4">0.003% or ₹300 / crore on buy side</td>
                <td className="p-4">0.002% or ₹200 / crore on buy side</td>
                <td className="p-4">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          {[
            {
              title: "Equity delivery",
              data: [
                ["Brokerage", "Zero Brokerage"],
                ["STT/CTT", "0.1% on buy & sell"],
                ["Transaction", "NSE: 0.00307%, BSE: 0.00375%"],
                ["GST", "18% applicable"],
                ["SEBI", "₹10 / crore"],
                ["Stamp", "0.015% or ₹1500 / crore"],
              ],
            },
            {
              title: "Equity intraday",
              data: [
                ["Brokerage", "0.03% or ₹20/order"],
                ["STT/CTT", "0.025% on sell"],
                ["Transaction", "NSE: 0.00307%, BSE: 0.00375%"],
                ["GST", "18% applicable"],
                ["SEBI", "₹10 / crore"],
                ["Stamp", "0.003% or ₹300 / crore"],
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="mb-3 text-base font-medium">{item.title}</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                {item.data.map(([label, value], i) => (
                  <div key={i} className="flex justify-between gap-4">
                    <span className="font-medium">{label}</span>
                    <span className="text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
