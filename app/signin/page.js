'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function SignUp() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Basic validation for required fields (First Name, Last Name, etc.)
    if (!firstName || !lastName || !contact || !idNumber || !dob) {
      setError('Please fill in all fields');
      return;
    }

    // Here you can handle the signup logic, like sending a request to an API
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Contact:', contact);
    console.log('ID Number:', idNumber);
    console.log('Date of Birth:', dob);

    // Clear the error and fields upon successful form submission
    setError('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setContact('');
    setIdNumber('');
    setDob('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black rounded-r-md bg-pink-400 rounded-lg">SignUp</h2>

        {/* Show error message if there's any */}
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              pattern="[0-9]{10}"
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter 10-digit phone number"
            />
          </div>

          {/* ID Number */}
          <div className="mb-4">
            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number:</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
