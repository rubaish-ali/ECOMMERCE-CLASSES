// pages/Dashboard.js
import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#6367FF]">Zoomify Dashboard</h1>
        <div>
          <button className="bg-[#6367FF] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#4f54d1] transition-all">
            <a href="/">Logout</a>
          </button>
        </div>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-[#6367FF]">1,250</p>
        </div>

        {/* Products Card */}
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Products</h2>
          <p className="text-3xl font-bold text-[#6367FF]">340</p>
        </div>

        {/* Orders Card */}
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Orders Today</h2>
          <p className="text-3xl font-bold text-[#6367FF]">75</p>
        </div>

        {/* Revenue Card */}
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-[#6367FF]">$12,450</p>
        </div>

        {/* Messages Card */}
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Messages</h2>
          <p className="text-3xl font-bold text-[#6367FF]">23</p>
        </div>

        {/* Notifications Card */}
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Notifications</h2>
          <p className="text-3xl font-bold text-[#6367FF]">5</p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="flex justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all">
            <span>User John Doe signed up</span>
            <span className="text-gray-400 text-sm">2 hours ago</span>
          </li>
          <li className="flex justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all">
            <span>Order #245 completed</span>
            <span className="text-gray-400 text-sm">3 hours ago</span>
          </li>
          <li className="flex justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all">
            <span>New message from Sarah</span>
            <span className="text-gray-400 text-sm">5 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard