// pages/Contact.js
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // Example: fake submit
        setTimeout(() => {
            toast.success("Message sent successfully!")
            setName("")
            setEmail("")
            setMessage("")
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-[#6367FF] mb-6 text-center">Contact Us</h1>

                {/* Contact Info */}
                <section className="mb-8 grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700">Get in Touch</h2>
                        <p className="text-gray-600">
                            Have questions or feedback? Reach out to us and we’ll get back to you as soon as possible.
                        </p>
                        <div className="text-gray-600 space-y-2">
                            <p>📧 Email: support@zoomify.com</p>
                            <p>📞 Phone: +1 234 567 890</p>
                            <p>🏢 Address: 123 Zoomify Street, City, Country</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#6367FF] transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#6367FF] transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Message</label>
                            <textarea
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-[#6367FF] transition-all resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#6367FF] text-white py-3 rounded-lg font-semibold hover:bg-[#4f54d1] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </section>

                <p className="text-center text-gray-400 mt-6">
                    © {new Date().getFullYear()} Zoomify. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Contact