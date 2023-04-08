import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="list">
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
        </ul>
      </nav>
    </>
  );
}
