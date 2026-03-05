import React from 'react'
import Header from '../components/Header'
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 mt-30">
        <div className="flex items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#6367FF' }}>Welcome to Zoomify.com!</h2>
            <p className="text-lg text-gray-700 mb-8">Zoomify is a modern and innovative digital platform designed to bring valuable <br />content closer to you. We focus on delivering fresh ideas, trending updates, and <br /> engaging experiences all in one place.</p>
            <button className="px-6 py-3 rounded-lg font-semibold text-white transition" style={{ backgroundColor: '#6367FF' }}>Shop Now</button>
          </div>
          {/* <div className="flex-1">
            <img src="./images/zoomify-platform-illustration.png" alt="Zoomify platform illustration" className="w-full h-auto rounded-lg" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
