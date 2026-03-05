import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/${editId}`, form);
        toast.success("Product updated successfully!");
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/products", form);
        toast.success("Product created successfully!");
      }

      setForm({
        title: "",
        description: "",
        price: "",
        category: "",
        imageUrl: ""
      });

      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        toast.success("Product deleted successfully!");
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product");
      }
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
  
    <div className="ml-64 w-full p-8 bg-gradient-to-br from-[#EEF0FF] to-[#F8F9FF] min-h-screen">
    
      <Sidebar />
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">📦 Manage Products</h2>
          <p className="text-gray-600">Add, edit or delete your products</p>
        </div>
        <button
          onClick={goToLogin}
          className="bg-[#6367FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5458E6] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          🔐 Login
        </button>
      </div>

      {/* Form */}
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
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
              required
            />

            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
            />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price ($)"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
              required
            />

            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#6367FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5458E6] transform hover:scale-105 transition-all duration-300 shadow-md disabled:opacity-50"
          >
            {loading ? "Processing..." : editId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Products */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          📋 Products List ({products.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
                  <span className="bg-[#6367FF]/10 text-[#6367FF] text-xs font-semibold px-2 py-1 rounded">
                    {product.category || "Uncategorized"}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  {product.description || "No description available"}
                </p>

                <div className="text-2xl font-bold text-[#6367FF] mb-4">
                  ${product.price}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="flex-1 bg-[#6367FF] text-white px-3 py-2 rounded-lg hover:bg-[#5458E6] transition-colors text-sm"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}