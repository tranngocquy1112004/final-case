import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🏪 Mobile Store</h1>
      <Link to="/products">
        <button>🛒 Xem Sản Phẩm</button>
      </Link>
    </div>
  );
};

export default Home;
