import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export default function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imageUrl: ""
  });

  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/products/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/products", form);
    }

    setForm({
      title: "",
      description: "",
      price: "",
      category: "",
      imageUrl: ""
    });

    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="ml-64 p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">📦 Manage Products</h2>
        <p className="text-gray-600">Add, edit or delete your products</p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {editId ? "✏️ Edit Product" : "➕ Add New Product"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Product Title"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              required
            />

            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price ($)"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              required
            />

            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {editId ? "✏️ Update Product" : "➕ Add Product"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setForm({
                  title: "",
                  description: "",
                  price: "",
                  category: "",
                  imageUrl: ""
                });
              }}
              className="ml-4 bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      {/* Products Grid */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">📋 Products List ({products.length})</h3>

        {products.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
            <p className="text-gray-500 text-lg">No products yet. Add your first product above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="h-48 overflow-hidden bg-gray-100">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded">
                      {product.category || "Uncategorized"}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description || "No description available"}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-500">${product.price}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1 text-sm font-medium"
                    >
                      <span>✏️</span> Edit
                    </button>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-1 text-sm font-medium"
                    >
                      <span>🗑️</span> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}