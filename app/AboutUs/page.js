// import Image from "next/image";
"use Client"
export default function AboutUs() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side (Text Section) */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              About Our Company
            </h2>
            <p className="text-lg text-center lg:text-left">
              We are a premier car rental company committed to providing quality vehicles with top-tier services to our customers. With a wide range of cars, from luxury to everyday models, we ensure that your transportation needs are always met with excellence.
            </p>
            <p className="text-lg text-center lg:text-left">
              Whether you're traveling for business, vacation, or any other reason, we offer a variety of options to fit your needs. Explore our fleet and book your perfect ride today!
            </p>
          </div>

          {/* Right Side (Image Section) */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm h-72 lg:h-auto">
              <img src="/Bmwm3.jpeg" alt="bmw"/>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
