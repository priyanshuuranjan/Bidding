import React from "react";
import "./navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Feature</li>
        <li>About</li>
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
    </div>
  );
};

export default Navbar;
