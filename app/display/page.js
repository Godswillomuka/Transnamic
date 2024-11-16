'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const CarsPage = () => {
  const [cars, setCars] = useState([]); // Initialize as an empty array
  const [rentedCars, setRentedCars] = useState({}); // Track rented status for cars

  useEffect(() => {
    fetch('http://localhost:3000/cars') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  // Handle Rent Now button click
  const handleRentClick = (carId) => {
    setRentedCars((prev) => ({ ...prev, [carId]: true }));
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-800 min-h-screen py-12 px-5">
    <Navbar />
      <h1 className="text-2xl font-bold mb-6">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            key={car.car_id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <Image
              src={car.images?.[0] || '/placeholder.png'} // Fallback to placeholder image
              alt={`${car.make} ${car.model}`}
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">
              {car.make} {car.model}
            </h2>
            <p className="text-sm text-gray-600">Year: {car.year}</p>
            <p className="text-sm text-gray-600">Location: {car.location}</p>
            <p className="text-sm text-gray-600">
              Price/Day: ${car.price_per_day}
            </p>
            <div className="mt-2">
              <p className="text-sm font-medium">Features:</p>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                {car.features?.slice(0, 3).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-4 px-4 py-2 rounded transition ${
                rentedCars[car.car_id]
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              onClick={() => handleRentClick(car.car_id)}
              disabled={rentedCars[car.car_id]}
            >
              {rentedCars[car.car_id] ? 'Rented' : 'Rent Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
