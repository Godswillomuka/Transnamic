'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CarsPage = () => {
  const [cars, setCars] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/cars') 
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
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
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;

