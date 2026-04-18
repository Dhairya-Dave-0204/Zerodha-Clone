import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/component_index";
import { Home, About, Pricing, Products, Support, Signup } from "./pages/page_index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
