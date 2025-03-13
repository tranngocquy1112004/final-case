import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./ProductPage.css";

// Constants
const PRODUCTS_PER_PAGE = 8;
const API_URL = "http://localhost:4000/products";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Fetch products and user on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    

    const loadUser = () => {
      const savedUser = JSON.parse(localStorage.getItem("currentUser"));
      if (savedUser) {
        setCurrentUser(savedUser);
      }
    };

    fetchProducts();
    loadUser();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Render sakura falling animation
  const renderSakuraSpans = () => {
    return Array.from({ length: 30 }, (_, index) => <span key={index} />);
  };

  return (
    <div className="container">
      <div className="sakura-fall">{renderSakuraSpans()}</div>

      <header className="header">
        <Link to="/home" className="store-title">
        📱MobileStore
        </Link>

        <div className="header-actions">
          {currentUser ? (
            <div className="user-section">
              <p className="welcome-msg">👋 Xin chào, {currentUser.username}!</p>
              <button className="logout-button" onClick={handleLogout}>
                🚪 Đăng xuất
              </button>
            </div>
          ) : (
            <Link to="/" className="login-link">
              Đăng nhập
            </Link>
          )}
          <Link to="/cart" className="cart-link">
            🛒 Xem giỏ hàng
          </Link>
        </div>
      </header>

      <section className="product-section">
        <h2 className="product-title"> Danh sách sản phẩm</h2>
        <div className="product-grid">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-link">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <p className="product-name">{product.name}</p>
                <p className="product-price">💰 {product.price} VNĐ</p>
              </Link>
              <Link to={`/products/${product.id}`}>
                <button className="product-button">Xem chi tiết</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          ⬅ Trang trước
        </button>
        <span>Trang {currentPage}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Trang sau ➡
        </button>
      </div>
    </div>
  );
};

export default ProductPage;