import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products/Products";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
