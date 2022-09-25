import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#">Service</a>
        <a href="#">Contact Us</a>
        <a href="#">Login</a>
        <a href="#">Try Free</a>
        <Outlet />
      </nav>
    </header>
  );
}

export default Navbar;
