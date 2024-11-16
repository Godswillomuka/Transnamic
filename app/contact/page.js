import Navbar from '@/components/Navbar'

import React from 'react'

const Contact = () => {
  return (
    <div>
    <Navbar />
    
    <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
            Get in Touch with Us!
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
            Whether you have questions, feedback, or need assistance, we are always here to help!
          </p>
          <a
            href="mailto:Transnamic@gmail.com"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Email Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reach Us */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reach Us</h2>
            <div className="space-y-2">
              <p className="text-lg text-gray-600">📲: +254 ***</p>
              <p className="text-lg text-gray-600">
                Email: <a href="mailto:Transnamic@gmail.com" className="text-indigo-600 hover:underline">Transnamic@gmail.com</a>
              </p>
              <p className="text-sm text-center text-gray-500 mt-4">
                We're here for any queries. Feel free to reach out to us!
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h2>
            <div className="space-y-3">
              <a href="https://facebook.com" target="_blank" className="text-indigo-600 hover:underline text-lg">Facebook</a>
              <a href="https://linkedin.com" target="_blank" className="text-indigo-600 hover:underline text-lg">LinkedIn</a>
              <a href="https://wa.me" target="_blank" className="text-indigo-600 hover:underline text-lg">WhatsApp</a>
              <a href="https://instagram.com" target="_blank" className="text-indigo-600 hover:underline text-lg">Instagram</a>
            </div>
          </div>

          {/* Thanks Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thanks for Choosing Us</h2>
            <p className="text-lg text-gray-600 text-center">
              We appreciate your business and are always here to help. Safe travels with Transnamic!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-white">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Transnamic. All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
