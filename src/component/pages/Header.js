import React, { useState } from "react";
// import "./Header.css"
import Navbar from "./Navbar";
function Header() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
    </>
  );
}

export default Header;
