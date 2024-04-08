import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-800 mt-3 mb-4">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <img src="https://i.ibb.co/4MNxK7F/paypal-logo.jpg" alt="logo" className="h-10 sm:h-12" />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-blue-800  py-2 px-4 rounded transition-all duration-300 hover:-translate-y-1"
                >
                  Personal
                </a>
                <a
                  href="#"
                  className="text-blue-800 py-2   px-4 rounded transition-all duration-300 hover:-translate-y-1"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="text-blue-800 py-2 px-4  rounded transition-all duration-300 hover:-translate-y-1"
                >
                  Developer
                </a>
                <a
                  href="#"
                  className="text-blue-800 py-2 px-4  rounded transition-all duration-300 hover:-translate-y-1"
                >
                  Help
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="#"
                className="text-blue-800 text-sm sm:text-sm px-5 py-1  font-medium border-2 mr-3 border-blue-800 w-30 md:w-18 md:mr-1 md:text-center rounded-2xl hover:bg-blue-800 hover:text-white transition-all duration-300"
              >
                Log In
              </a>
              <a
                href="#"
                className="text-white px-4 text-sm sm:text-md py-1 bg-blue-800 rounded-2xl font-medium border-2 border-blue-800 w-30 md:w-18 md:mr-0 md:text-center  hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden justify-center`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  text-center">
            <a
              href="#"
              className="block text-blue-800 py-2 px-4 rounded transition-all duration-300 hover:-translate-y-1"
            >
              Personal
            </a>
            <a
              href="#"
              className="block text-blue-800 py-2 px-4 rounded transition-all duration-300 hover:-translate-y-1"
            >
              Business
            </a>
            <a
              href="#"
              className="block text-blue-800 py-2 px-4 rounded transition-all duration-300 hover:-translate-y-1"
            >
              Developer
            </a>
            <a
              href="#"
              className="block text-blue-800 py-2 px-4 rounded transition-all duration-300 hover:-translate-y-1"
            >
              Help
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
