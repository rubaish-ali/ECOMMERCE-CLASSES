

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct.jsx"
import Cart from "./pages/Cart.jsx";
 import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./components/HomePage.jsx"
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/createproducts" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
