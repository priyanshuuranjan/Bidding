import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/pages/Nav/Navbar";
import Hero from "./component/pages/Hero/Hero";
import About from "./component/pages/About/About";
import Contact from "./component/pages/Contact/Contact";
import Login from "./component/pages/Login/Login";
import Feature from "./component/pages/Feature/Feature";
import Footer from "./component/pages/Footer/Footer";

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
      <Feature subtitle="OUR PROGRAM" title="WHAT WE OFFER" />
      <Contact/>
      <Footer/>
      <Routes>
        <Route exact path="/about" element={About} />
        <Route exact path="/contact" element={Contact} />
        <Route exact path="/login" element={Login} />
      </Routes>
    </div>
  );
};

export default App;
