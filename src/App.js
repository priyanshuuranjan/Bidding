import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/pages/Nav/Navbar";
import Hero from "./component/pages/Hero/Hero";
import About from "./component/pages/About/About";
import Contact from "./component/pages/Contact/Contact";
import Feature from "./component/pages/Feature/Feature";
import Footer from "./component/pages/Footer/Footer";
import Slider from "./component/pages/Testimonials/Slider";
import LoginSignup from "./component/authentication/LoginSignup";
import Body from "./component/auctions/Body";
import AuctionEnd from "./component/auctions/AuctionEnd";
import Register from "./component/authentication/Register";
import Home from "./component/Zoom/Home";
import Video from "./component/Zoom/Video";
import { AuthProvider } from "./context/AuthContext";



const App = () => {
  const currentTheme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(currentTheme || "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <AuthProvider>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <Feature subtitle="OUR PROGRAM" title="WHAT WE OFFER" />
                {/* <Body /> */}
                {/* <AuctionEnd/> */}
                <Slider />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/bids" element={<Body />} />
          <Route exact path="/video" element={<Home />} />
          <Route exact path="/room/:id" element={<Video />} />
          <Route exact path="/endauction" element={<AuctionEnd />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;






