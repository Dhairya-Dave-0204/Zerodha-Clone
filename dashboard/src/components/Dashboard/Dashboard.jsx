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
    <div>
    <WatchList />
      <div>
        <Routes>
          <Route path="/" element={<Summary />} />
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
