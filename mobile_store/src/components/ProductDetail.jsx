import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("ID sản phẩm:", id); // Debug ID
    fetch(`http://localhost:4000/products/${id}`)
    .then((res) => {
        if (!res.ok) throw new Error("Sản phẩm không tồn tại!");
        return res.json();
      })
      .then((data) => {
        console.log("Dữ liệu sản phẩm:", data); // Debug dữ liệu
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>⏳ Đang tải...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;
  if (!product) return <p>⚠ Không có dữ liệu sản phẩm!</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p>💰 Giá: {product.price} VNĐ</p>
      <p>📜 Mô tả: {product.description}</p>
      <Link to="/products">
        <button>⬅ Quay lại</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
