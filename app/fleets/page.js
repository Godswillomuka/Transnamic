import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import Navbar from "@/components/Navbar";

export default function Fleets() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 min-h-screen py-12">
        <h4 className="uppercase font-semibold text-center mb-1 text-white">
          Let's go get the ride
        </h4>
        <h2 className="poppins text-center font-semi text-5xl mt-5">
          Choose your Taxi to ride!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {/* First Fleet Card */}
          <div className="bg-[#111113] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/bg.jpeg"
                alt="Business Class"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-2 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Business Class</h3>
              <p className="text-white">Mazda CX-5 series / Similar</p>
              <div className="mt-2 text-white p-2">
                <p>3 passengers, 2 comfortable</p>
              </div>
              <div className="mt-2 text-white p-1">
                <p>2 large, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Second Fleet Card */}
          <div className="bg-[#1c1e24] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/gtau.jpeg"
                alt="Family Class"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Family Class</h3>
              <p className="text-white">Noah Series / Similar</p>
              <p className="text-white">5 passengers, 2 comfortable</p>
              <div className="mt-2 text-white p-1">
                <p>5 large Briefcases, 8 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Third Fleet Card */}
          <div className="bg-[#202227] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/Rover.jpeg"
                alt="Luxury Class"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Luxury Class</h3>
              <p className="text-white">Range Rover / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>5 passengers, 2 comfortable</p>
                <p>3 large Briefcases, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Fourth Fleet Card */}
          <div className="bg-[#1f2125] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/Prado.jpeg"
                alt="Premium Class"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Premium Class</h3>
              <p className="text-white">Prado Series / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>5 passengers, 2 comfortable</p>
                <p>5 large, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Fifth Fleet Card (Benz) */}
          <div className="bg-[#1f2125] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/E 350.jpeg"
                alt="Benz"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Premium Class</h3>
              <p className="text-white">E 350 Series / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>2 passengers, 2 comfortable</p>
                <p>2 large Briefcases, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Sixth Fleet Card (Tata Harrier) */}
          <div className="bg-[#1f2125] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/2020 Tata Harrier .jpeg"
                alt="Tata Harrier"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Premium Class</h3>
              <p className="text-white">Tata Harrier Series / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>2 passengers, 2 comfortable</p>
                <p>2 large Briefcases, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Seventh Fleet Card (RangeSv) */}
          <div className="bg-[#1f2125] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/RangeSv.jpeg"
                alt="Range"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Premium Class</h3>
              <p className="text-white">Range Series / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>2 passengers, 2 comfortable</p>
                <p>2 large Briefcases, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>

          {/* Eighth Fleet Card (G-Class) */}
          <div className="bg-[#1f2125] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/G-Class.jpeg"
                alt="G-Class"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Premium Class</h3>
              <p className="text-white">G-Class Series / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>2 passengers, 2 comfortable</p>
                <p>2 large Briefcases, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2.5 px-5 text-white text-center rounded-lg">
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
