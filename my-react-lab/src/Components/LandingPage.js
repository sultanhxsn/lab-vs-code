import React from "react";
import "../Styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 style={{ fontSize: '56px' }}>
          Taste the <span className="highlight" style={{ fontSize: '56px' }}>KababJees</span> Magic
        </h1>
        <p style={{ fontSize: '22px' }}>Crispy, Delicious Chicken that Keeps You Coming Back!</p>
        <button className="order-now-btn">Order Now</button>
      </div>
      <div className="image">
        <img
          src="https://images.deliveryhero.io/image/fd-pk/LH/qcve-listing.jpg" /* Replace this with the actual image URL */
          alt="Delicious Chicken"
          className="rounded-image"
        />
      </div>
    </div>
  );
}

export default LandingPage;





