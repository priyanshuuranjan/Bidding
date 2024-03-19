import React, { useState, useEffect } from "react";
import Navbar from "./component/pages/Navbar";
import Hero from "./component/pages/Hero";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // Retrieve the current theme from local storage
  const currentTheme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(currentTheme || "light");

  // Update local storage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Routes>
        <Route exact path="/about" element={About} />
        <Route exact path="/contact" element={Contact} />
        <Route exact path="/login" element={Login} />
      </Routes>
    </div>
  );
};

export default App;
