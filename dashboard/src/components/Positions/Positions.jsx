import React from "react";
import { positions } from "../../data/data";

const Positions = () => {
  return (
    <div className="w-full">
      <h3 className="mb-8 text-2xl font-normal text-gray-700">
        Positions ({positions.length})
      </h3>

      <div className="w-full overflow-x-auto border border-gray-200">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Product
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Instrument
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Qty.
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Avg.
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                LTP
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                P&amp;L
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Chg.
              </th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;

              const isProfit = curValue - stock.avg * stock.qty >= 0.0;

              const profitClass = isProfit ? "text-green-500" : "text-red-500";

              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.product}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.name}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.qty}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.avg.toFixed(2)}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.price.toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-4 text-sm whitespace-nowrap ${profitClass}`}
                  >
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-4 text-sm whitespace-nowrap ${dayClass}`}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
