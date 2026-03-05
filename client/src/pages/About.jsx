// pages/About.js
import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-[#6367FF] mb-6 text-center">About Zoomify</h1>

                {/* Company Description */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Zoomify is a modern platform designed to simplify your workflow and help you manage your business efficiently. 
                        Our mission is to provide intuitive tools that save time, increase productivity, and empower users to achieve their goals.
                    </p>
                </section>

                {/* Mission & Vision */}
                <section className="mb-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-[#6367FF] text-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                        <p>
                            To deliver a seamless experience for individuals and businesses to organize, track, and grow their activities with ease.
                        </p>
                    </div>
                    <div className="bg-[#6367FF] text-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                        <p>
                            To become the go-to platform for productivity and business management by creating tools that are simple, powerful, and accessible to all.
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                            <div className="text-4xl mb-2">👤</div>
                            <h4 className="font-semibold text-gray-700">Alice Johnson</h4>
                            <p className="text-gray-500 text-sm">CEO & Founder</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                            <div className="text-4xl mb-2">👤</div>
                            <h4 className="font-semibold text-gray-700">Bob Smith</h4>
                            <p className="text-gray-500 text-sm">CTO</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                            <div className="text-4xl mb-2">👤</div>
                            <h4 className="font-semibold text-gray-700">Carol Lee</h4>
                            <p className="text-gray-500 text-sm">Product Manager</p>
                        </div>
                    </div>
                </section>

                {/* Footer Note */}
                <p className="text-center text-gray-400 mt-6">
                    © {new Date().getFullYear()} Zoomify. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default About