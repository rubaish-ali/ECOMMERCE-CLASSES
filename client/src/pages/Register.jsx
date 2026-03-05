// pages/Register.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"

const Register = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function submit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const data = await axios.post("http://localhost:8080/register", {
                name,
                email,
                password,
                phone
            })
            toast.success('Successfully registered!')
            setTimeout(() => navigate("/login"), 2000)
        } catch (error) {
            toast.error(error.response?.data?.message || "Please try again later!")
        } finally {
            setLoading(false)
        }
    }

    const goToLogin = () => navigate("/login")

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-[#6367FF] mb-6">Create an Account</h2>
                <form onSubmit={submit} className="space-y-5">

                    {/* Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400 text-lg">👤</span>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6367FF] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400 text-lg">📧</span>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6367FF] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400 text-lg">📱</span>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6367FF] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <Link to="/forgot-password" className="text-xs text-[#6367FF] hover:underline">Forgot?</Link>
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400 text-lg">🔒</span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6367FF] focus:border-transparent transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="w-4 h-4 text-[#6367FF] border-gray-300 rounded focus:ring-[#6367FF]"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the{' '}
                            <a href="#" className="text-[#6367FF] hover:underline">Terms</a> and{' '}
                            <a href="#" className="text-[#6367FF] hover:underline">Privacy Policy</a>
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#6367FF] text-white py-3 rounded-lg font-semibold hover:bg-[#4f54d1] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                                    <span>Creating Account...</span>
                                </div>
                            ) : (
                                "Create Account"
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={goToLogin}
                            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            🔐 Already have an account? Login
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-5">
                        Or <Link to="/login" className="text-[#6367FF] font-medium hover:underline">Login here</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Register