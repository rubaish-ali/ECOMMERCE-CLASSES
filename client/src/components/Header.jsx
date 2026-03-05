import React from 'react'

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold" style={{ color: '#6367FF' }}>Zoomify.com</h1>
        <div className="flex-1">
          <ul className="flex gap-8 ml-60">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/products" className="hover:text-blue-600 transition">Products</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
            <li><a href="/cart" className="hover:text-blue-600 transition">Cart</a></li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 border-2 rounded-lg font-semibold transition" style={{ borderColor: '#6367FF', color: '#6367FF' }}> <a href="/login">Login In</a> </button>
          <button className="px-6 py-2 rounded-lg font-semibold text-white transition" style={{ backgroundColor: '#6367FF' }}> <a href="/register">Register</a> </button>
        </div>
      </div>
    </div>
  )
}

export default Header
