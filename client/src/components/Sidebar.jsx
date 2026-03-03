import { Link } from "react-router-dom";
import React from "react";
export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5 ">
      <h2 className="text-xl font-bold mb-8">Product Admin</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/" className="block p-2 hover:bg-yellow-500 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/create-product" className="block p-2 hover:bg-yellow-500 rounded">
            Create Product
          </Link>
        </li>
        <li>
          <Link to="/all-products" className="block p-2 hover:bg-yellow-500 rounded">
            All Products
          </Link>
        </li>
      </ul>
    </div>
  );
}