import React, { useState } from 'react'

const nav2 = () => {
    const [mobileView, setMobileView] = useState(false);
    return (
        // bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400
        <div className="backdrop-blur-lg bg-zinc-100 bg-opacity-25 border-b  border-transparent w-full h-[5rem]  top-0 z-30 fixed px-5 md:px-20 flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <h1 className="text-orange-400 font-bold font-rejouice text-[1.45rem] uppercase">
              <span className=" text-orange-500 ">SGNDSJ</span>SSS
            </h1>
          </div>
    
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 text-[18px] text-black font-medium">
            <a href="#" className="text-orange-500 transition duration-300">
              Home
            </a>
            <a href="#" className="hover:text-orange-500 transition duration-300">
              Achievements
            </a>
            <a href="#" className="hover:text-orange-500 transition duration-300">
              Care Takers
            </a>
          </div>
    
          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-black cursor-pointer"
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
}

export default nav2