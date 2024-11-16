import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-blue-600 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
           {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home">

            <span className="text-white  hover:text-gray-300 transition duration-300">Home</span>
          </Link>
          <Link href="/AboutUs">
            <span className="text-white hover:text-gray-300 transition duration-300">AboutUs</span>
          </Link>
          <Link href="contact">
            <span className="text-white hover:text-gray-300 transition duration-300">Contact</span>
          </Link>
          <Link href="/Services">
            <span className="text-white hover:text-gray-300 transition duration-300">Services</span>
          </Link>
          <Link href="/display">

            <span className="text-white hover:text-gray-300 transition duration-300">Display</span>
          </Link>
        </div>

        {/* Auth Links (Sign In, Login) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/signin">
            <span className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition duration-300 bg-green-600 m-2">Sign Up</span>
          </Link>
          <Link href="login">
            <span className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition duration-300 bg-red-500">Login</span>
          </Link>
        
        {/* Mobile Menu Button */}
        
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">path</path>
            </svg>
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
}
