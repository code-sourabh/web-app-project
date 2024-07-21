import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bg-white p-4 sm:p-8 flex justify-center items-center overflow-hidden">
      <div className="bg-orange-500 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row justify-between items-center rounded-md w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-8 transform ">
        <div className="transform  w-full">
          <h2 className="text-black text-[2rem] sm:text-3xl md:text-4xl font-bold text-center md:text-start mb-4 md:mb-0">
            LET'S GET YOUR PROJECT STARTED.
          </h2>
        </div>
        <div className="flex flex-col items-center md:items-start transform ">
          <Link onClick={() => window.scrollTo(0,0)}
            to="/contact" 
            className="relative bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md overflow-hidden group"
          >
            <div className="relative z-10 text-sm sm:text-base text-[1rem]">CONTACT WITH US</div>
            <div className="absolute inset-0 bg-gray-700 transform group-hover:translate-x-0 transition-transform duration-300 translate-x-full"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;