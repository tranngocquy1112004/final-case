// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
// import { SearchProvider } from './SearchContext';
import CartPage from './page/CartPage';
import ProductPage from './page/ProductPage';
import ProductList from './component/product/ProductList';
import Header from './component/header/Header';
// import MainLayouts from './layout/MainLayouts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductPage/>} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
     
    </>
  )
}

export default App
