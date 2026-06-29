import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/page_index";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DashboardSkeleton } from "./components/component_index"
import { AppContext } from "./context/AppContext";

function App() {
  const { loading } = useContext(AppContext);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 4000,

          style: {
            background: "#ffffff",
            color: "#424242",
            border: "1px solid #e5e7eb",
            padding: "14px 18px",
            fontSize: "14px",
            borderRadius: "6px",
          },

          success: {
            iconTheme: {
              primary: "#387ed1",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <AnimatePresence mode="wait">

        {loading ? (

          <DashboardSkeleton key="dashboard-skeleton" />

        ) : (

          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default App;