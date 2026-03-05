import axios from "axios"
import React, { useEffect, useState } from "react"

export default function CreateProduct() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [data, setData] = useState([])
  const [editId, setEditId] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    axios.get("http://localhost:8080/getAllProducts")
      .then(res => setData(res.data.data))
  }

  function resetForm() {
    setTitle("")
    setDescription("")
    setCategory("")
    setImageUrl("")
    setPrice("")
    setEditId(null)
    getData()
  }

  function submit(e) {
    e.preventDefault()

    if (editId) {
      axios.put("http://localhost:8080/updateProduct/" + editId, {
        title, description, price, category, imageUrl
      }).then(() => resetForm())
    } else {
      axios.post("http://localhost:8080/createProduct", {
        title, description, price, category, imageUrl
      }).then(() => resetForm())
    }
  }

  function deleteData(id) {
    axios.delete("http://localhost:8080/deleteProduct/" + id)
      .then(() => getData())
  }

  function editProduct(item) {
    setEditId(item._id)
    setTitle(item.title)
    setDescription(item.description)
    setCategory(item.category)
    setImageUrl(item.imageUrl)
    setPrice(item.price)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function addToCart(item) {
    setCart([...cart, item])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* ================= FORM SECTION ================= */}
      <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-3xl p-8 mb-12">

        <h1 className="text-3xl font-bold text-center text-[#6367FF] mb-8">
          {editId ? "Update Product" : "Create Product"}
        </h1>

        <form onSubmit={submit} className="space-y-5">

          <input
            type="text"
            placeholder="Product Title"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#6367FF] outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#6367FF] outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Price"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#6367FF] outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              placeholder="Category"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#6367FF] outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#6367FF] outline-none"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6367FF] to-indigo-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            {editId ? "Update Product" : "Create Product"}
          </button>

        </form>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {data.map(item => (
          <div key={item._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-52 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-[#6367FF] font-bold text-lg">${item.price}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => editProduct(item)}
                  className="bg-yellow-400 px-3 py-1 rounded-lg text-sm">
                  Edit
                </button>

                <button
                  onClick={() => deleteData(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
                  Delete
                </button>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#6367FF] text-white px-3 py-1 rounded-lg text-sm">
                  Add
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* ================= CART SECTION ================= */}
      {cart.length > 0 && (
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-[#6367FF] mb-6">Cart</h2>

          {cart.map((item, index) => (
            <div key={index}
              className="flex justify-between border-b py-3">

              <span>{item.title}</span>
              <span className="font-semibold">${item.price}</span>

            </div>
          ))}
        </div>
      )}

    </div>
  )
}