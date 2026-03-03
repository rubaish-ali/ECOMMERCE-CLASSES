// components/StatsCard.js
import React from 'react';

export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-[#355872]">{value}</p>
        </div>
        <div className="w-12 h-12 bg-[#355872] bg-opacity-10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}