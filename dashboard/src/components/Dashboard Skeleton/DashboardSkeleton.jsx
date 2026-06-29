import React from "react";
import { motion } from "framer-motion";
import "./DashboardSkeleton.css"

function DashboardSkeleton() {
  return (
    <motion.div
      className="dashboard-skeleton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <header className="skeleton-navbar">
        <div className="skeleton-market">
          <div className="skeleton-box small"></div>
          <div className="skeleton-box small"></div>
        </div>

        <div className="skeleton-logo"></div>

        <div className="skeleton-nav-links">
          <div className="skeleton-box nav"></div>
          <div className="skeleton-box nav"></div>
          <div className="skeleton-box nav"></div>
          <div className="skeleton-box nav"></div>
          <div className="skeleton-box nav"></div>
          <div className="skeleton-box nav"></div>
        </div>

        <div className="skeleton-profile">
          <div className="skeleton-avatar"></div>
          <div className="skeleton-box profile-name"></div>
        </div>
      </header>

      <div className="skeleton-body">
        <aside className="skeleton-sidebar">
          <div className="skeleton-search"></div>

          <div className="skeleton-stock-list">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="skeleton-stock-row">
                <div className="skeleton-stock-name"></div>

                <div className="skeleton-stock-values">
                  <div className="skeleton-price small"></div>
                  <div className="skeleton-price"></div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="skeleton-content">
          <section className="skeleton-section">
            <div className="skeleton-heading large"></div>
          </section>

          <section className="skeleton-section">
            <div className="skeleton-subheading"></div>

            <div className="skeleton-card">
              <div className="skeleton-card-left">
                <div className="skeleton-number large"></div>

                <div className="skeleton-line medium"></div>
              </div>

              <div className="skeleton-divider"></div>

              <div className="skeleton-card-right">
                <div className="skeleton-line small"></div>

                <div className="skeleton-line small"></div>
              </div>
            </div>
          </section>

          <section className="skeleton-section">
            <div className="skeleton-subheading"></div>

            <div className="skeleton-card">
              <div className="skeleton-card-left">
                <div className="skeleton-number large"></div>

                <div className="skeleton-line medium"></div>
              </div>

              <div className="skeleton-divider"></div>

              <div className="skeleton-card-right">
                <div className="skeleton-line small"></div>

                <div className="skeleton-line small"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </motion.div>
  );
}

export default DashboardSkeleton;
