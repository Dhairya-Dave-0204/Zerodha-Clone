import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  WatchList,
  Summary,
  Orders,
  Holdings,
  Positions,
  Funds,
  Apps,
} from "../component_index";

function Dashboard() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <div className="hidden lg:block">
        <WatchList />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
