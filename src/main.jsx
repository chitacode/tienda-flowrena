import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { CartProvider } from './context/CartContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <CartProvider>
        <App />
   </CartProvider>
 </BrowserRouter>
);
