import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

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
            setTimeout(() => {
                navigate("/login")
            }, 2000)
        } catch (error) {
            toast.error(error.response?.data?.message || "Please try again later!")
        } finally {
            setLoading(false)
        }
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (

                <form onSubmit={(e) => submit(e)} className="space-y-5">
                    {/* Name Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">
                            Full Name
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">👤</span>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter your full name"
                                required
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
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
                                required
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">
                            Phone Number
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">📱</span>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Link to="/forgot-password" className="text-xs text-[#355872] hover:text-[#2a4660]">
                                Forgot?
                            </Link>
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
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
                        <p className="text-xs text-gray-500 mt-1">
                            Password must be at least 8 characters
                        </p>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-[#355872] border-gray-300 rounded focus:ring-[#355872]"
                            required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the{' '}
                            <a href="#" className="text-[#355872] hover:underline">
                                Terms
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-[#355872] hover:underline">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    {/* Buttons Container */}
                    <div className="space-y-3">
                        {/* Create Account Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#355872] text-white py-3 rounded-lg font-semibold hover:bg-[#2a4660] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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

                        {/* Direct Login Button */}
                        <button
                            type="button"
                            onClick={goToLogin}
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <span>🔐</span>
                            Already have an account? Login
                        </button>
                    </div>
                </form>

               
               
    )
}

export default Register