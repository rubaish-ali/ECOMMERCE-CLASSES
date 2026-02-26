import React from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 600 },
];

export default function Dashboard() {
  return (
    <div className="ml-64 p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Header />

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <StatsCard
            title="Total Products"
            value="23"
            icon={
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
        </div>

        <div className="transform hover:scale-105 transition-transform duration-300">
          <StatsCard
            title="Total Sales"
            value="120"
            icon={
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            }
          />
        </div>

        <div className="transform hover:scale-105 transition-transform duration-300">
          <StatsCard
            title="Revenue"
            value="$5200"
            icon={
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg mt-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">📊 Analytics Overview</h2>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="text-sm text-gray-600">Monthly Sales</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 14 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 14 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#F3F4F6',
                padding: '8px 12px'
              }}
              labelStyle={{ color: '#9CA3AF', fontWeight: 'bold' }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#facc15"
              strokeWidth={3}
              dot={{ fill: '#facc15', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#fbbf24' }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Chart Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>📈 Sales trend for last 5 months</span>
          <span className="font-semibold text-yellow-500">↑ 15% growth</span>
        </div>
      </div>
    </div>
  );
}