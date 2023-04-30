import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="ul-navbar">
          <li className="nav-content">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="nav-content">
            <NavLink to="/products" className="link">
              Products
            </NavLink>
          </li>
          <li className="nav-content">
            <NavLink to="/aboutus" className="link">
              About Us
            </NavLink>
          </li>
          <li className="nav-content">
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
        <img src={require("../Carousel/Amax_logo.JPG")} className="logo" />
      </nav>
    </>
  );
}
