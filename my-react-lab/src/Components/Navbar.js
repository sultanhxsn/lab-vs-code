import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuCqF-y46CtWSswTYuDXGKCFVED-CCpbhlg&s" /* Replace this with your actual logo URL */
          alt="Logo"
          className="logo-image"
        />
        <span className="logo-text">KababJees Fried Chicken</span>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <button className="order-btn">Order</button>
      </div>
    </nav>
  );
}

export default Navbar;





