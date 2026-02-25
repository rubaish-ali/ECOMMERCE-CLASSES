import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Manage Products</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6 space-y-4">
        <input name="title" value={form.title} onChange={handleChange}
          placeholder="Title" className="w-full border p-2 rounded" required />

        <input name="description" value={form.description} onChange={handleChange}
          placeholder="Description" className="w-full border p-2 rounded" />

        <input name="price" type="number" value={form.price} onChange={handleChange}
          placeholder="Price" className="w-full border p-2 rounded" required />

        <input name="category" value={form.category} onChange={handleChange}
          placeholder="Category" className="w-full border p-2 rounded" />

        <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
          placeholder="Image URL" className="w-full border p-2 rounded" />

        <button className="bg-yellow-500 text-white px-6 py-2 rounded">
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded shadow">
            <img src={product.imageUrl} alt=""
              className="h-40 w-full object-cover rounded mb-3" />

            <h3 className="font-bold">{product.title}</h3>
            <p>{product.category}</p>
            <p className="font-semibold">${product.price}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>

              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}