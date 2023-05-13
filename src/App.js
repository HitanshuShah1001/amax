import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products/Products";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Product1 from "./Products/Product1/Product1";
import Product2 from "./Products/Product2/Product2";
import Product3 from "./Products/Product3/Product3";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/product2" element={<Product2 />} />
        <Route path="/products/product3" element={<Product3 />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
