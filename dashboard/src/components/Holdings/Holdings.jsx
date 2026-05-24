import React, { useState, useEffect } from "react";
import axios from "axios";
// import { holdings } from "../../data/data";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/holdings/all").then((res) => {

      if (!res.data.data.length > 0) {
        console.error("Error in getting the holdings data from the backend");
      }

      setHoldings(res.data.data)
    });
  }, []);

  const labels = holdings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvestment = holdings.reduce(
    (total, stock) => total + stock.average * stock.quantity,
    0,
  );

  const currentValue = holdings.reduce(
    (total, stock) => total + stock.price * stock.quantity,
    0,
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercentage = ((pnl / totalInvestment) * 100).toFixed(2);

  return (
    <div className="w-full">
      <h3 className="mb-8 text-2xl font-normal text-gray-700">
        Holdings ({holdings.length})
      </h3>

      <div className="w-full overflow-x-auto border border-gray-200">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Instrument
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Qty.
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Avg. cost
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                LTP
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Cur. val
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                P&amp;L
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Net chg.
              </th>

              <th className="px-4 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase">
                Day chg.
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.quantity;

              const isProfit = curValue - stock.average * stock.quantity >= 0.0;

              const profitClass = isProfit ? "text-green-500" : "text-red-500";

              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.name}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.quantity}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.average.toFixed(2)}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {stock.price.toFixed(2)}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {curValue.toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-4 text-sm whitespace-nowrap ${profitClass}`}
                  >
                    {(curValue - stock.average * stock.quantity).toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-4 text-sm whitespace-nowrap ${profitClass}`}
                  >
                    {stock.net}
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

      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3">
        <div className="flex flex-col">
          <h5 className="text-3xl font-light text-gray-700">
            {totalInvestment.toFixed(2)}
          </h5>

          <p className="mt-2 text-sm text-gray-500">Total investment</p>
        </div>

        <div className="flex flex-col">
          <h5 className="text-3xl font-light text-gray-700">
            {currentValue.toFixed(2)}
          </h5>

          <p className="mt-2 text-sm text-gray-500">Current value</p>
        </div>

        <div className="flex flex-col">
          <h5
            className={`text-3xl font-light ${
              pnl >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {pnl.toFixed(2)} ({pnlPercentage}%)
          </h5>

          <p className="mt-2 text-sm text-gray-500">P&amp;L</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
