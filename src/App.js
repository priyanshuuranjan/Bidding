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
import PaymentDetails from "./component/auctions/PaymentDetails";
import HashLoader from "react-spinners/HashLoader";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

const App = () => {
  const currentTheme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(currentTheme || "light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AuthProvider>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <HashLoader
            color={"#36d7b7"}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h3>Loading...</h3>
        </div>
      ) : (
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
            <Route exact path="/PaymentDetails" element={<PaymentDetails />} />
          </Routes>
          <Footer />
        </div>
      )}
    </AuthProvider>
  );
};

export default App;
