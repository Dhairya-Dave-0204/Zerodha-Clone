import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/component_index";
import {
  Home,
  About,
  Pricing,
  Products,
  Support,
  NotFound,
  SignUp,
} from "./pages/page_index";
import { Toaster } from "react-hot-toast";

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
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
