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
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/products/product1" className="link">
                  Product 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/product2" className="link">
                  Product 2
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/product3" className="link">
                  Product 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-content">
            <NavLink to="/aboutus" className="link">
              About Us
            </NavLink>
          </li>
          <li className="nav-content">
            <NavLink to="/gallery" className="link">
              Gallery
            </NavLink>
          </li>
          <li className="nav-content">
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
        {/* <img src={require("../Carousel/Amax_logo.JPG")} className="logo" /> */}
      </nav>
    </>
  );
}
