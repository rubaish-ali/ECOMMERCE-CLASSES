import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#8494FF] text-white fixed left-0 top-0 p-6">
      <h2 className="text-2xl font-bold mb-8">Zoomify</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="block hover:bg-white/20 p-2 rounded">
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/products" className="block hover:bg-white/20 p-2 rounded">
            📦 Products
          </Link>

         
        </li>
        <li>
           <Link to="/all-products" className="block hover:bg-white/20 p-2 rounded">
            📦 All Products
          </Link>
        </li>
      </ul>
    </div>
  );
}