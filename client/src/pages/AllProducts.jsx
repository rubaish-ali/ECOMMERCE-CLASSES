import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        toast.success("Product deleted successfully!");
        fetchProducts(); // Refresh the list
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price?.toString().includes(searchTerm)
  );

  return (
    <div className="ml-64 p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="mt-8">
        {/* Header with Search and Add Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">📋 All Products</h2>
            <p className="text-gray-600 mt-1">Manage and view all your products</p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            
            {/* Add Product Button */}
            <button
              onClick={() => navigate("/create-product")}
              className="bg-[#355872] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2a4660] transition-colors flex items-center gap-2"
            >
              <span>➕</span> Add Product
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 border-l-4 border-[#355872]">
            <p className="text-sm text-gray-600">Total Products</p>
            <p className="text-2xl font-bold text-gray-800">{products.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
            <p className="text-sm text-gray-600">Categories</p>
            <p className="text-2xl font-bold text-gray-800">
              {new Set(products.map(p => p.category)).size}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">Total Value</p>
            <p className="text-2xl font-bold text-gray-800">
              ${products.reduce((sum, p) => sum + (Number(p.price) || 0), 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Products Table Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#355872]"></div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center p-12">
                <p className="text-gray-500 text-lg mb-2">No products found</p>
                <p className="text-gray-400">
                  {searchTerm ? "Try a different search term" : "Add some products to get started"}
                </p>
                {!searchTerm && (
                  <button
                    onClick={() => navigate("/create-product")}
                    className="mt-4 bg-[#355872] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2a4660] transition-colors"
                  >
                    Add Your First Product
                  </button>
                )}
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">S.No</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Image</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Product Name</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((product, index) => (
                    <tr
                      key={product._id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="p-4 text-gray-600">{index + 1}</td>
                      <td className="p-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                          {product.imageUrl ? (
                            <img
                              src={product.imageUrl}
                              alt={product.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/48?text=No+Img";
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                              No img
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 font-medium text-gray-800">{product.title || "N/A"}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-[#355872] bg-opacity-10 text-[#355872] rounded-full text-xs font-medium">
                          {product.category || "Uncategorized"}
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-green-600">${product.price || 0}</td>
                      <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                        {product.description || "No description"}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                          >
                            <span>🗑️</span> Delete
                          </button>
                          <button
                            onClick={() => handleEdit(product._id)}
                            className="bg-[#355872] hover:bg-[#2a4660] text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                          >
                            <span>✏️</span> Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Table Footer */}
          {!loading && filteredProducts.length > 0 && (
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="text-sm text-[#355872] hover:text-[#2a4660] font-medium"
                >
                  Go to Dashboard →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}