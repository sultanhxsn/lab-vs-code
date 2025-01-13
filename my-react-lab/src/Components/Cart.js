import React, { useState } from "react";
import '../Styles/Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => addItemToCart({ name: "Item 1", price: 20 })}>
        Add Item 1
      </button>
      <button onClick={() => addItemToCart({ name: "Item 2", price: 30 })}>
        Add Item 2
      </button>

      <h2>Items in Cart:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

