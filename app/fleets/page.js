import React from "react";
import Image from "next/image"; // Import Image component from Next.js

import Navbar from "@/components/Navbar";

export default function Fleets() {
  return (
    <div>
      <Navbar />
      <div className="py-24 bg-gray-600">
        <h4 className="uppercase font-semibold text-center mb-1 text-white">
          Let's go get us
        </h4>
        <h2 className="poppins text-center font-semi text-5xl mt-5">
          Choose your Taxi to ride!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 mt-10">
          {/* First Fleet Card */}
          <div className="bg-[#111113] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <img
                src="/bg.jpeg"
                alt="Business Class"
                className="object-cover w-full h-full rounded-t-md"
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
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2 w-fit text-white text-center">
                Book Now
              </div>
            </div>
          </div>

          {/* Second Fleet Card */}
          <div className="bg-[#1c1e24] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <img
                src="/gtau.jpeg"
                alt="Family Class"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Family Class</h3>
              <p className="text-white">Noah Series / Similar</p>
              <p className="text-white">5 passengers, 2 comfortable</p>
              <div className="mt-2 text-white p-1">
                <p>5 large Briefcases, 8 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2 w-fit text-white text-center">
                Book Now
              </div>
            </div>
          </div>

          {/* Third Fleet Card */}
          <div className="bg-[#202227] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <img
                src="/Rover.jpeg"
                alt="Luxury Class"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Luxury Class</h3>
              <p className="text-white">Range Rover / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>5 passengers, 2 comfortable</p>
                <p>3 large Briefcases, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2 w-fit text-white text-center">
                Book Now
              </div>
            </div>
          </div>

          {/* Fourth Fleet Card */}
          <div className="bg-[#1f2125] shadow-md rounded-md flex flex-col">
            <div className="relative w-full h-48">
              <img
                src="/Prado.jpeg"
                alt="Premium Class"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="p-5 flex flex-col items-start">
              <h3 className="poppins mb-1 text-xl text-white">Premium Class</h3>
              <p className="text-white">Prado Series / Similar</p>
              <div className="mt-2 text-white p-1">
                <p>5 passengers 2 comfortable</p>
                <p>5 large, 2 small bags</p>
              </div>
              <div className="mt-5 bg-red-500 hover:bg-gray-700 py-2 w-fit text-white text-center">
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
