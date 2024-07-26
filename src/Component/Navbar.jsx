import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/ddtLogo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="-ml-4">
      <div className="max-w-full mx-none  sm:px-6 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex  item-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 ">
              <img
                className="h-16 pt-1 mr-0.5 shadow-lg shadow-slate-500/50 w-18  "
                src={Logo}
                alt="Workflow"
              />
            </div>
            <div class='bg-black border-gray-400 shadow-lg shadow-slate-500/50 p  mt-1 mr-3   font-mono text-3xl flex items-center justify-center font-extrabold w-[31vw] '>
                 Delhi Drive Tech
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-16 ml-12 py-2 mt-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-16 mx-36 py-2 mt-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-16 mx-40 py-2 mt-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white pl-16 pr-16  ml-40 py-2 mt-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link to="/booking" className=' '>
                {/* <button  className="text-gray-300 shadow-md shadow-slate-500/50 bg-yellow-600 hover:bg-gray-700 hover:text-blue-800 px-6 py-2 mx-36 rounded-md text-sm font-medium">Sign/Sign Up</button> */}
                <button  className="text-gray-300 shadow-md shadow-slate-500/50 bg-yellow-600 hover:bg-gray-700 hover:text-blue-800 px-8 py-2 mt-2 rounded-md text-sm font-medium">Booking</button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 ">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
