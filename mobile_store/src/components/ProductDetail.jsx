import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../pages/CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // ✅ State cho thông báo

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Sản phẩm không tồn tại!");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // ✅ Hàm thêm vào giỏ + hiển thị thông báo
  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage("✅ Thêm vào giỏ hàng thành công!");

    // Ẩn thông báo sau 2 giây
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  if (loading) return <p className="loading">⏳ Đang tải...</p>;
  if (error) return <p className="error">❌ {error}</p>;
  if (!product) return <p className="warning">⚠ Không có dữ liệu sản phẩm!</p>;

  return (
    <div className="product-detail">
      {/* Header */}
      <header className="header">
        <Link to="/home" className="store-title">📱 MobileStore</Link>
        <Link to="/cart" className="cart-button">🛍 Giỏ hàng ({cart.length})</Link>
      </header>

      {/* Nội dung sản phẩm */}
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p className="price">💰 {product.price.toLocaleString()} VNĐ</p>
      <p className="description">{product.description}</p>

      {/* Thông số kỹ thuật */}
      <div className="specs">
        <h3>⚙️ Thông số kỹ thuật</h3>
        <ul>
          <li>📱 Màn hình: {product.screen}</li>
          <li>⚡ Chip: {product.chip}</li>
          <li>💾 RAM: {product.ram}</li>
          <li>💽 Bộ nhớ: {product.storage}</li>
          <li>📷 Camera: {product.camera}</li>
          <li>🔋 Pin: {product.battery}</li>
        </ul>
      </div>

      {/* ✅ Hiển thị thông báo khi thêm vào giỏ hàng */}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Nút thao tác */}
      <div className="button-group">
        <button className="add-to-cart" onClick={handleAddToCart}>🛒 Thêm vào giỏ</button>
        <Link to="/home">
          <button className="back-button">⬅ Quay lại</button> {/* Đảm bảo có thẻ button */}
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;