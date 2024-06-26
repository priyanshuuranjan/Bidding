import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [isMobile, setMobile] = useState(false);
  const { currentUser, logout } = useContext(AuthContext); 

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
          <li>Live Auctions</li>
        </Link>
        <Link to="/paymentDetails">
          <li>Payment Details</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/video">
          <li>Zoom</li>
        </Link>
        {currentUser ? (
          <div className="currentUser">
            <div className="user-email">{currentUser.email}</div>
            <div className="logout" onClick={logout}>
              Logout
            </div>
          </div>
        ) : (
          <>
            <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </>
        )}
      </ul>
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
