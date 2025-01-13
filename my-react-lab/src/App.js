import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/ProductDetail";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
