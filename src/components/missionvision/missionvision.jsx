import React, { useState } from 'react';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="mission-vision-container bg-gray-100 p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-4 md:space-y-8">
            <div
              className={`text-2xl md:text-4xl font-medium cursor-pointer ${
                activeTab === 'mission' ? 'text-orange-500' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </div>
            <div
              className={`text-2xl md:text-4xl font-medium cursor-pointer ${
                activeTab === 'vision' ? 'text-orange-500' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </div>
          </div>
          <div className="flex space-x-2 md:hidden">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <div className="bg-gray-800 text-white p-8 rounded-lg">
            <p className="text-lg md:text-xl">
              {activeTab === 'mission'
                ? 'At our core, we are architects of change, dedicated to redefining possibilities through a fusion of cutting-edge technology and human ingenuity. With a relentless pursuit of excellence, we collaborate with our clients and partners to co-create value and transformative solutions that propel them towards success in the digital age'
                : 'Empowering businesses through the art of digital innovation, we envision a future where technology seamlessly integrates with human potential to unlock unprecedented opportunities and drive collective progress.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
