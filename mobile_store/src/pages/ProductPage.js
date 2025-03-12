import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext"; // Import Context
import { Link, useNavigate } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Lấy hàm thêm giỏ hàng
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate(); // 👉 Dùng để chuyển hướng sau khi đăng xuất

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
      // Lấy user đang đăng nhập từ localStorage
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);
// 👉 Xử lý đăng xuất
const handleLogout = () => {
  localStorage.removeItem("currentUser"); // Xóa user khỏi localStorage
  setCurrentUser(null); // Cập nhật state
  navigate("/"); // Chuyển hướng về trang đăng nhập
};
  return (
    <div className="container">
       <header className="header">
        <Link to={`/Home`} className="store-title">
          MobileStore
        </Link>

        {currentUser ? (
          <div className="user-section">
            <p className="welcome-msg">👋 Xin chào, {currentUser.username}!</p>
            <button className="logout-button" onClick={handleLogout}>
              🚪 Đăng xuất
            </button>
          </div>
        ) : (
          <Link to="/" className="login-link">Đăng nhập</Link>
        )}
      </header>

      <h2 className="product-title">📱 Danh sách sản phẩm</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
              <p className="product-price">💰 {product.price} VNĐ</p>
            </Link>
            <button onClick={() => addToCart(product)}>🛒 Thêm vào giỏ</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
