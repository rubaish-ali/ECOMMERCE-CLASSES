

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./page/Dashboard.jsx";
import CreateProduct from "./pages/CreateProduct";
import AllProducts from "./pages/AllProducts";
 import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/Register" element={<Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
