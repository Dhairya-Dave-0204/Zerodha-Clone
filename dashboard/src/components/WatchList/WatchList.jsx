import React, { useState } from "react";

import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../../data/data";

const WatchList = () => {
  return (
    <div className="h-full overflow-y-auto bg-white border-l border-gray-200 w-xl">
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, nifty, reliance..."
          className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
        />

        <span className="ml-4 text-xs font-medium text-gray-400 whitespace-nowrap">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="pb-10">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="relative px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="flex items-center justify-between">
        <p
          className={`text-sm font-medium ${
            stock.isDown ? "text-red-500" : "text-green-500"
          }`}
        >
          {stock.name}
        </p>

        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-medium ${
              stock.isDown ? "text-red-500" : "text-green-500"
            }`}
          >
            {stock.percent}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500! text-lg!" />
          ) : (
            <KeyboardArrowUp className="text-green-500! text-lg!" />
          )}

          <span
            className={`text-sm font-medium ${
              stock.isDown ? "text-red-500" : "text-green-500"
            }`}
          >
            {stock.price}
          </span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions />}
    </li>
  );
};

const WatchListActions = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-end gap-2 px-4 bg-white/95">
      <button className="px-3 py-1 text-xs font-medium text-white duration-200 rounded bg-primary hover:opacity-90">
        Buy
      </button>

      <button className="px-3 py-1 text-xs font-medium text-white duration-200 bg-orange-500 rounded hover:bg-orange-400">
        Sell
      </button>

      <button className="flex items-center justify-center w-8 h-8 duration-200 bg-white border border-gray-300 rounded hover:bg-gray-100">
        <BarChartOutlined className="text-gray-600! text-base!" />
      </button>

      <button className="flex items-center justify-center w-8 h-8 duration-200 bg-white border border-gray-300 rounded hover:bg-gray-100">
        <MoreHoriz className="text-gray-600! text-base!" />
      </button>
    </div>
  );
};
