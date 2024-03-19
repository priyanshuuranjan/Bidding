import React from 'react'
import "./Header.css"
const Navbar = ({theme,setTheme}) => {
   

  return (
    <div className="navbar">
      <img src="/assets/logo-black.png" alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Feature</li>
        <li>About</li>
      </ul>
      <diV className="search-box">
        <input type="text" placeholder="Search" />
        <img src="/assets/search-w.png" alt="" />
      </diV>
      <img src="/assets/night.png" alt="" className="toggle-icon" />
    </div>
  )
}

export default Navbar