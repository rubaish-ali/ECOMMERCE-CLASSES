

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import CreateProduct from "./pages/CreateProduct";
import AllProducts from "./pages/AllProducts";
 import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./components/HomePage.jsx"
import Header from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/Register" element={<Register /> } />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/header" element={<Header />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
