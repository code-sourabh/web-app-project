import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white p-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-black text-3xl md:text-5xl font-bold mb-4">
            WE ARE ALWAYS HERE TO HELP YOU.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            There are many variants of passages the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">VISIT US</h3>
                <p className="text-gray-700">66 Broklyn Street, New York, USA</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">EMAIL ADDRESS</h3>
                <p className="text-gray-700">softoweb1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">CALL NOW</h3>
                <p className="text-gray-700">01934565397</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-md w-full">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                <input type="email" placeholder="Email Address" className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input type="text" placeholder="Phone Number" className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                <input type="text" placeholder="Subject" className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              </div>
              <textarea placeholder="Write Message" className="w-full p-4 rounded-md border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              <div className="text-right">
                <button type="submit" className="bg-red-500 text-white py-2 px-8 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
