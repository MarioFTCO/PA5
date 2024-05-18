import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="/public/Icon.gif" alt="Logo" /></a>
      </div>
      <div className="navbar-brand">
          <Link to="/">LJEZ.com</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
        <a href="https://github.com/MarioFTCO" className="nav-link" target="_blank">gitHub</a>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
           Inciar Sesión
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Regristrate
          </Link>
        </li>
      </ul>
    </nav>

    <Outlet />
    </div>
  );
}

export default Navbar;
