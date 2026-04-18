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
        <Route path="/" element={<About />} />
        <Route path="/" element={<Pricing />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Support />} />
        <Route path="/" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
