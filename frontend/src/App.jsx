import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/component_index";
import { NotFound } from "./pages/page_index";
import { Toaster } from "react-hot-toast";

import PageLoader from "./components/PageLoader/PageLoader";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/landing/home/Home"));
const About = lazy(() => import("./pages/landing/about/About"));
const Pricing = lazy(() => import("./pages/landing/pricing/Pricing"));
const Products = lazy(() => import("./pages/landing/products/Products"));
const Support = lazy(() => import("./pages/landing/support/Support"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));

function App() {
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

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
