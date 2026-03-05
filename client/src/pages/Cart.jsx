// pages/Cart.js
import React, { useState } from 'react'

const Cart = () => {
    // Sample products (in real app, fetch from API)
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product A', price: 49.99, quantity: 1 },
        { id: 2, name: 'Product B', price: 29.99, quantity: 2 },
        { id: 3, name: 'Product C', price: 19.99, quantity: 1 },
    ])

    // Update quantity
    const handleQuantityChange = (id, qty) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
            )
        )
    }

    // Remove item
    const handleRemove = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    // Calculate total
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-[#6367FF] mb-6 text-center">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
                            >
                                <div>
                                    <h2 className="font-semibold text-gray-700">{item.name}</h2>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        className="w-16 text-center border border-gray-300 rounded-lg py-1 focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
                                    />
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-500 hover:text-red-700 font-semibold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Total */}
                        <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
                            <span className="text-lg font-semibold text-gray-700">Total:</span>
                            <span className="text-lg font-bold text-[#6367FF]">${total}</span>
                        </div>

                        {/* Checkout Button */}
                        <button className="w-full mt-4 bg-[#6367FF] text-white py-3 rounded-lg font-semibold hover:bg-[#4f54d1] shadow-md hover:shadow-lg transition-all">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart