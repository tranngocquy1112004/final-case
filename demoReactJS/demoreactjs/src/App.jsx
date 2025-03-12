import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Thu vien cua ReactJS
import ProductList from "./ProductList";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page/:pageNumber" element={<ProductList />} />
        <Route path="*" element={<ProductList />} /> {/* Mặc định trang đầu tiên */}
      </Routes>
    </Router>
  );
};

export default App;
