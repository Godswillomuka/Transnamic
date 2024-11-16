'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const CarsPage = () => {
  const [cars, setCars] = useState([]); // Initialize as an empty array
  const [rentedCars, setRentedCars] = useState({}); // Track rented status for cars
  const [searchQuery, setSearchQuery] = useState(''); // For search input
  const [url, setUrl] = useState('');
  const [carType, setCarType] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carLocation, setCarLocation] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [features, setFeatures] = useState('');

  // Fetch cars from the API
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

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/cars?q=${searchQuery}`) // Assuming your API can handle query params
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error searching cars:', error));
  };

  // Handle Add Car form submission
  const handleAddCar = async (e) => {
    e.preventDefault();

    const newCar = {
      url,
      carType,
      make: carMake,
      model: carModel,
      year: carYear,
      location: carLocation,
      price_per_day: pricePerDay,
      features: features.split(',').map((feature) => feature.trim()), // Split comma-separated features into an array
    };

    try {
      const response = await fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
      });

      if (response.ok) {
        const newCarData = await response.json();
        setCars((prevCars) => [...prevCars, newCarData]); // Update cars state with new car
        alert('Car added successfully!');
      } else {
        alert('Failed to add car.');
      }
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Error adding car.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 py-12">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6 text-black-500">Available Cars</h1>

      {/* Search Section */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Search by make, model, year"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Search
          </button>
        </form>
      </div>

      {/* Add Car Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-black-500 mb-4">Add a New Car</h2>
        <form onSubmit={handleAddCar} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-black-500">Car URL</label>
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
            <label htmlFor="carType" className="block text-black-500">Car Type</label>
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
            <label htmlFor="carMake" className="block text-black-500">Car Make</label>
            <input
              type="text"
              id="carMake"
              value={carMake}
              onChange={(e) => setCarMake(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="carModel" className="block text-black-500">Car Model</label>
            <input
              type="text"
              id="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="carYear" className="block text-black-500">Car Year</label>
            <input
              type="number"
              id="carYear"
              value={carYear}
              onChange={(e) => setCarYear(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="carLocation" className="block text-black-500">Car Location</label>
            <input
              type="text"
              id="carLocation"
              value={carLocation}
              onChange={(e) => setCarLocation(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="pricePerDay" className="block text-black-500">Price Per Day ($)</label>
            <input
              type="number"
              id="pricePerDay"
              value={pricePerDay}
              onChange={(e) => setPricePerDay(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="features" className="block text-black-500">Features (comma separated)</label>
            <input
              type="text"
              id="features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Add Car
          </button>
        </form>
      </div>

      {/* Display Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div key={car.car_id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <Image
              src={car.images?.[0] || '/placeholder.png'} // Fallback to placeholder image
              alt={`${car.make} ${car.model}`}
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
            <h2 className="text-lg font-semibold mt-2 text-black-500">
              {car.make} {car.model}
            </h2>
            <p className="text-sm text-black-500">Year: {car.year}</p>
            <p className="text-sm text-black-500">Location: {car.location}</p>
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
                rentedCars[car.car_id] ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
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
