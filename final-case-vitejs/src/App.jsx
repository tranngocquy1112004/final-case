import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import CartPage from './page/CartPage';
import ProductPage from './page/ProductPage';
import MainLayouts from './layout/MainLayouts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayouts/>} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
