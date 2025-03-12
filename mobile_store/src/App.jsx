import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import Account from "./account/Account";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./pages/CartContext";
  const App = () => {
  return (

    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>
    </CartProvider>

  );
};

export default App;
