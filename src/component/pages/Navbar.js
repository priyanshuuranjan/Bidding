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
      <img
        src={
          theme === "light"
            ? "/assets/logo-black.png"
            : "/assets/logo-white.png"
        }
        alt="Logo"
      />
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/bidds">
          <li>Bidds</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
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
