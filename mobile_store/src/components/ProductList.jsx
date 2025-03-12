import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(p => p.id === Number(id));
        if (!foundProduct) throw new Error("Sản phẩm không tồn tại!");
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h2>📱 Danh sách sản phẩm</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>💰 Giá: ${product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>Chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
