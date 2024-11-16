'use client'

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState(null); // For showing the success/error message

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Simulate a form submission (in a real scenario, you'd call an API here)
    try {
      console.log("Form submitted:", formData);
      setFormStatus("Thank you for contacting us! We will get back to you shortly.");
      // You can reset the form fields if needed
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("There was an error submitting the form. Please try again.");
    }
  };

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
              <img src="/Bmwm3.jpeg" alt="bmw" />
            </div>
          </div>
        </div>

        {/* Email Us Form Section */}
        <div className="mt-12 text-white">
          <h3 className="text-2xl font-semibold text-center">Email Us</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-lg">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Form Submission Status */}
          {formStatus && (
            <div className={`mt-6 text-center text-lg ${formStatus.includes("error") ? "text-red-500" : "text-green-500"}`}>
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
