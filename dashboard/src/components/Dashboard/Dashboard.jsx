import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { WatchList } from "../component_index";
import DashboardPageLoader from "../DashboardPageLoader/DashboardPageLoader";

// Lazy Loaded Dashboard Pages
const Summary = lazy(() => import("../Summary/Summary"));
const Orders = lazy(() => import("../Orders/Orders"));
const Holdings = lazy(() => import("../Holdings/Holdings"));
const Positions = lazy(() => import("../Positions/Positions"));
const Funds = lazy(() => import("../Funds/Funds"));
const Apps = lazy(() => import("../Apps/Apps"));

function Dashboard() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Desktop Watchlist */}
      <div className="hidden lg:block">
        <WatchList />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto lg:px-10 lg:py-8">
        <Suspense fallback={<DashboardPageLoader />}>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;
