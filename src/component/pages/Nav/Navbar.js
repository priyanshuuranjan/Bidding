import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";



const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [isMobile, setMobile] = useState(false);

  return (
    <div className="navbar">
      <div
        className="navbar-logo"
        style={{ fontWeight: "700", fontSize: "1.5em" }}
      >
        {theme === "light" ? "BIDSTER" : "BIDSTER"}
      </div>

      <ul
        className={`nav-links ${isMobile ? "nav-links-mobile" : ""} ${
          theme === "light" ? "light-theme" : "dark-theme"
        }`}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/bids">
          <li>Bids</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>
            login
          </li>
        </Link>
        <Link to="/register">
          <li>
          Register
          </li>
        </Link>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={
            theme === "light" ? "/assets/search-w.png" : "/assets/search-b.png"
          }
          alt=""
        />
      </div>
      <img
        onClick={toggle_mode}
        src={theme === "light" ? "/assets/night.png" : "/assets/day.png"}
        alt=""
        className="toggle-icon"
      />
      <button className="mobile-menu-icon" onClick={() => setMobile(!isMobile)}>
        {isMobile ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
