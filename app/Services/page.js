"use Client"
import React from 'react'


const Services = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Our Premium Taxi Services
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
            Choose the perfect ride for your needs with Transnamic Car Hire. From business to luxury, we have a fleet for every occasion.
          </p>
          <a
            href="#services"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>

        {/* Services Section */}
        <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business Class Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="text-4xl text-teal-500 mb-4">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Business Class</h3>
              <p className="text-lg text-gray-600 mb-4">
                Travel in comfort and style with our Business Class service. Perfect for business meetings or airport transfers.
              </p>
              <a
                href="#"
                className="text-teal-500 hover:text-teal-600 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Family Class Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="text-4xl text-indigo-600 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Family Class</h3>
              <p className="text-lg text-gray-600 mb-4">
                Our Family Class service is perfect for family trips. Spacious, comfortable, and safe – travel together with ease.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Luxury Class Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="text-4xl text-yellow-500 mb-4">
                <i className="fas fa-crown"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Luxury Class</h3>
              <p className="text-lg text-gray-600 mb-4">
                Travel like royalty with our Luxury Class service. Our top-of-the-line cars offer unmatched comfort and elegance.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-600 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Premium Class Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="text-4xl text-purple-600 mb-4">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Premium Class</h3>
              <p className="text-lg text-gray-600 mb-4">
                For those who want the perfect blend of luxury and functionality. Premium cars, exceptional service.
              </p>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Taxi Booking Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="text-4xl text-teal-600 mb-4">
                <i className="fas fa-taxi"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Taxi Booking</h3>
              <p className="text-lg text-gray-600 mb-4">
                Need a quick ride? Our taxi booking service is available on-demand, anytime, anywhere.
              </p>
              <a
                href="#"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Airport Transfer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="text-4xl text-indigo-700 mb-4">
                <i className="fas fa-plane-departure"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Airport Transfers</h3>
              <p className="text-lg text-gray-600 mb-4">
                We provide reliable airport transfers to and from major airports. Travel stress-free with Transnamic.
              </p>
              <a
                href="#"
                className="text-indigo-700 hover:text-indigo-800 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-white mb-4">
            Ready to book your next ride with Transnamic?
          </p>
          <a
            href="#"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
