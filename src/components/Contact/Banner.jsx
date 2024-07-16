import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white p-8 flex justify-center items-center">
      <div className="bg-orange-500 p-12 flex justify-between items-center rounded-md w-full max-w-4xl space-x-8 transform -skew-x-6">
        <h2 className="text-black text-4xl font-bold text-start transform skew-x-6">LET'S GET YOUR PROJECT STARTED.</h2>
        <button className="relative bg-black text-white py-1 px-8 rounded-md overflow-hidden group transform skew-x-6">
          <span className="relative z-10">CONTACT WITH US</span>
          <div className="absolute inset-0 bg-gray-700 transform group-hover:translate-x-0 transition-transform duration-300 translate-x-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
