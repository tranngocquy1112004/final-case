import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext"; // Import Context
import { Link, useNavigate } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // ✅ 6 sản phẩm mỗi trang
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));

    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  // 👉 Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  // ✅ Phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="sakura-fall">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
      <header className="header">
        <Link to={`/home`} className="store-title">MobileStore</Link>

        {currentUser ? (
          <div className="user-section">
            <p className="welcome-msg">👋 Xin chào, {currentUser.username}!</p>
            <button className="logout-button" onClick={handleLogout}>🚪 Đăng xuất</button>
          </div>
        ) : (
          <Link to="/" className="login-link">Đăng nhập</Link>
        )}
        <Link to="/cart" className="cart-link">🛒 Xem giỏ hàng</Link>
      </header>

      <h2 className="product-title">📱 Danh sách sản phẩm</h2>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
              <p className="product-price">💰 {product.price} VNĐ</p>
            </Link>
            <Link to={`/products/${product.id}`}>
              <button className="product-button">Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>

      {/* 🔀 Nút chuyển trang */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>⬅ Trang trước</button>
        <span>Trang {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>Trang sau ➡</button>
      </div>
    </div>
  );
};

export default ProductPage;
