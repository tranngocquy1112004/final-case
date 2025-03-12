import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate  } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // 🛠 Hook điều hướng
  // 🧮 Tính tổng tiền phải thanh toán
  const handleCheckout = () => {
    alert("Đặt hàng thành công!");
    clearCart(); // 🧹 Xóa giỏ hàng
    navigate("/products"); // 🔄 Chuyển về trang ProductPage
  };
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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

              {/* 🔼🔽 Tăng/Giảm số lượng */}
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              {/* 🗑 Xóa sản phẩm */}
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}

      {/* 💰 Hiển thị tổng tiền */}
      <h3 className="total-price">Tổng tiền: {totalPrice} VNĐ</h3>

      {/* 🛍 Mua hàng */}
      {cart.length > 0 && (
        <button className="checkout-button" onClick={() => { alert("Đặt hàng thành công!"); clearCart(); }}>
          🛍 Mua hàng
        </button>
      )}

      {/* 🔙 Quay lại cửa hàng */}
      <Link to="/home" className="back-button">⬅ Quay lại cửa hàng</Link>
    </div>
  );
};

export default CartPage;
