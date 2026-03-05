// pages/Login.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password
      })
      toast.success('Successfully logged in!')
      localStorage.setItem("id", response.data.data._id)
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userName", response.data.data.name)
      localStorage.setItem("userEmail", response.data.data.email)
      
      setTimeout(() => {
        navigate("/")
      }, 1500)
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!")
    } finally {
      setLoading(false)
    }
  }

  const goToDashboard = () => navigate("/dashboard")
  const goToProducts = () => navigate("/products")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#6367FF] mb-6">Login to Your Account</h2>
        <form onSubmit={submit} className="space-y-5">

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

          {/* Password */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <Link to="/forgot-password" className="text-xs text-[#6367FF] hover:underline">Forgot password?</Link>
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
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-[#6367FF] border-gray-300 rounded focus:ring-[#6367FF]"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6367FF] text-white py-3 rounded-lg font-semibold hover:bg-[#4f54d1] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>

          {/* Dashboard & Products Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button
              type="button"
              onClick={goToDashboard}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              📊 Dashboard
            </button>
            <button
              type="button"
              onClick={goToProducts}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              🛒 Products
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account? <Link to="/register" className="text-[#6367FF] font-medium hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login