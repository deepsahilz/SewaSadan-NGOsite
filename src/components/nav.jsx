import React, { useState } from 'react';

const Nav = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <div className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 border w-full h-[4rem] top-0 z-10 fixed px-5 md:px-20 flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <h1 className="text-white font-bold text-lg uppercase">
          <span className="text-yellow-600">Seva</span> Sadan
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-xl text-white font-medium">
        <a href="#" className="hover:text-yellow-600 transition duration-300">
          Home
        </a>
        <a href="#" className="hover:text-yellow-600 transition duration-300">
          Achievements
        </a>
        <a href="#" className="hover:text-yellow-600 transition duration-300">
          Care Takers
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white cursor-pointer"
        onClick={() => setMobileView(!mobileView)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={mobileView ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </div>

      {/* Mobile Navigation */}
      {mobileView && (
        <div className="absolute top-[4rem] left-0 w-full bg-orange-500 text-white flex flex-col items-center gap-4 py-4 md:hidden z-20">
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => setMobileView(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => setMobileView(false)}
          >
            Achievements
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => setMobileView(false)}
          >
            Care Takers
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
