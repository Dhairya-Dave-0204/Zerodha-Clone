import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/component_index";
import { Home } from "./pages/page_index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
