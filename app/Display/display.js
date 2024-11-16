import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Display() {
  const [cars, setCars] = useState([]);

  // Fetch car data from db.json
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch('http://localhost:3000/cars');
        const data = await res.json();
        setCars(data.cars); // Assuming 'cars' is the key holding car data in db.json
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Available Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.car_id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Car Image */}
                <img src={car.images[0]} alt={car.make} className="w-full h-64 object-cover" />
                
                <div className="p-4">
                  {/* Car Info */}
                  <h2 className="text-xl font-semibold">{car.make} {car.model} ({car.year})</h2>
                  <p className="text-gray-600">Location: {car.location}</p>
                  <p className="text-gray-600">Price per Day: ${car.price_per_day}</p>

                  {/* Features */}
                  <div className="mt-2">
                    <p className="font-semibold">Features:</p>
                    <ul className="list-disc pl-5">
                      {car.features.map((feature, index) => (
                        <li key={index} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Ratings */}
                  <div className="mt-4">
                    <p className="font-semibold">Ratings:</p>
                    <div className="flex space-x-1">
                      {car.ratings.map((rating, index) => (
                        <span key={index} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <Link href={`/car/${car.car_id}`}>
                    <a className="text-blue-600 mt-4 inline-block">View More</a>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg">No cars available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
