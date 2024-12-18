import React from "react";
import "../Styles/SpecialtyMenu.css";

function SpecialtyMenu({ menuItems }) {
  const menuImages = [
    "https://images.deliveryhero.io/image/fd-pk/Products/49411247.jpg?width=%s",
    "https://images.deliveryhero.io/image/fd-pk/Products/26761665.jpg?width=%s",
    "https://images.deliveryhero.io/image/fd-pk/Products/58219340.jpg?width=%s",
  ];

  return (
    <div className="specialty-menu">
      <h2>Our Specialty Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={menuImages[index]} alt={item.title} className="menu-image" />
            <h3 style={{ color: 'maroon' }}>{item.title}</h3>
            <p style={{ color: 'maroon' }}>{item.description}</p>
            <p className="price">Rs. {item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialtyMenu;
