import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Routes, HashRouter as Router, Route } from "react-router-dom";
import Products from "./Products/Products";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}

export default App;
