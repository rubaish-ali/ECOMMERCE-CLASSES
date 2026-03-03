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

  const goToDashboard = () => {
    navigate("/dashboard")
  }

  const goToProducts = () => {
    navigate("/products")
  }

  return (
        <form onSubmit={(e) => submit(e)} className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📧</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="/forgot-password" className="text-xs text-[#355872] hover:text-[#355872] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">🔒</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                required
                className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-[#355872] border-gray-300 rounded focus:ring-[#355872]"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#355872] text-white py-3 rounded-lg font-semibold hover:bg-[#2a4660] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={goToDashboard}
                className="bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1"
              >
                <span>📊</span>
                Dashboard
              </button>

              <button
                type="button"
                onClick={goToProducts}
                className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1"
              >
                <span>🛒</span>
                Products
              </button>
            </div>
          </div>
        </form>

        
  )
}

export default Login