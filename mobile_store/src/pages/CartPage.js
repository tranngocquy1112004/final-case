import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛍 Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <p className="cart-name">{item.name}</p>
              <p className="cart-price">💰 {item.price} VNĐ</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
