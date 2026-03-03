// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "User",
    email: "",
    profilePicture: null
  });

  useEffect(() => {
    const name = localStorage.getItem("userName") || "Admin User";
    const email = localStorage.getItem("userEmail") || "admin@example.com";
    const profilePic = localStorage.getItem("profilePicture");
    
    setUserData({
      name: name,
      email: email,
      profilePicture: profilePic
    });
  }, []);

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=355872&color=fff&size=128&bold=true&length=2`;

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#355872] hover:bg-gray-100 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#355872] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block">Admin<span className="text-[#355872]">Panel</span></span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 ml-8">
              <Link to="/dashboard" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#355872] hover:bg-gray-100 transition-colors">
                Dashboard
              </Link>
              <Link to="/products" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#355872] hover:bg-gray-100 transition-colors">
                Products
              </Link>
              <Link to="/create-product" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#355872] hover:bg-gray-100 transition-colors">
                Create Product
              </Link>
              <Link to="/all-products" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#355872] hover:bg-gray-100 transition-colors">
                All Products
              </Link>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#355872] focus:border-transparent"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button className="relative p-2 text-gray-600 hover:text-[#355872] hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="relative p-2 text-gray-600 hover:text-[#355872] hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </button>

            <div className="relative profile-dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#355872]">
                  <img
                    src={userData.profilePicture || defaultAvatar}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultAvatar;
                    }}
                  />
                </div>
                
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-700">{userData.name}</p>
                  <p className="text-xs text-gray-500">{userData.email}</p>
                </div>
                
                <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-200 z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-800">{userData.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{userData.email}</p>
                  </div>

                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="mr-3 text-lg">👤</span>
                    <div>
                      <p className="font-medium">Your Profile</p>
                      <p className="text-xs text-gray-500">View and edit profile</p>
                    </div>
                  </Link>

                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="mr-3 text-lg">⚙️</span>
                    <div>
                      <p className="font-medium">Settings</p>
                      <p className="text-xs text-gray-500">Account preferences</p>
                    </div>
                  </Link>

                  <Link
                    to="/analytics"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="mr-3 text-lg">📊</span>
                    <div>
                      <p className="font-medium">Analytics</p>
                      <p className="text-xs text-gray-500">View reports</p>
                    </div>
                  </Link>

                  <hr className="my-2 border-gray-200" />

                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <span className="mr-3 text-lg">🚪</span>
                    <div className="text-left">
                      <p className="font-medium">Logout</p>
                      <p className="text-xs text-red-400">Sign out of account</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#355872]"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <nav className="space-y-1">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📊 Dashboard
              </Link>
              <Link
                to="/products"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📦 Products
              </Link>
              <Link
                to="/create-product"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ➕ Create Product
              </Link>
              <Link
                to="/all-products"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📋 All Products
              </Link>
              <hr className="my-2 border-gray-200" />
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👤 Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#355872] hover:text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ⚙️ Settings
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}