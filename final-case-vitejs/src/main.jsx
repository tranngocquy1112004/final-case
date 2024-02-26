import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
// import { SearchProvider } from './context/search-context.jsx'
import SearchProvider from './context/search-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>
    <App />
    </SearchProvider>
  </BrowserRouter> 
)
