import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const Contact = () => {
  // State for the input fields and form submission
  const [url, setUrl] = useState('');
  const [carType, setCarType] = useState('');
  const [carModel, setCarModel] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the form submission for adding a car
  const handleAddCar = async (e) => {
    e.preventDefault();

    const newCar = {
      url,
      carType,
      carModel,
    };

    try {
      const response = await fetch('http://localhost:5000/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
      });

      if (response.ok) {
        alert('Car added successfully!');
        // Optionally reset form fields
        setUrl('');
        setCarType('');
        setCarModel('');
      } else {
        alert('Failed to add car.');
      }
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Error adding car.');
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // You can now perform a search based on the query
    // If using a real API, make an API request here to search the database
  };

  return (
    <div>
      <Navbar />

      <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-800 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">

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

          {/* Car Information Form */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add Car Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Car</h2>
              <form onSubmit={handleAddCar} className="space-y-4 w-full max-w-md mx-auto">
                <div>
                  <label htmlFor="url" className="block text-gray-700">Car URL</label>
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="carType" className="block text-gray-700">Car Type</label>
                  <input
                    type="text"
                    id="carType"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="carModel" className="block text-gray-700">Car Model</label>
                  <input
                    type="text"
                    id="carModel"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                >
                  Add Car
                </button>
              </form>
            </div>
          </div>

          {/* Search Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Search for Cars</h2>
            <form onSubmit={handleSearch} className="flex justify-center items-center space-x-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300"
                placeholder="Enter car type or model"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
              >
                Search
              </button>
            </form>
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
  );
};

export default Contact;
