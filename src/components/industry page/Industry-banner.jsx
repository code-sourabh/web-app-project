import React from 'react';
import { useNavigate } from 'react-router-dom';

const industries = [
  { name: 'Banking & Insurance', icon: '🏦', path: '/industries/banking' },
  { name: 'Financial Services', icon: '💰', path: '/industries/finance' },
  { name: 'Media & Entertainment', icon: '🎥', path: '/industries/media' },
  { name: 'Telecom', icon: '📡', path: '/industries/telecom' },
  { name: 'Technology ', icon: '💻', path: '/industries/technology' },
];

const Industries = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-pink-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            onClick={() => navigate(industry.path)}
            className="w-64 md:w-48 h-48 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 cursor-pointer transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <div className="text-xl font-medium text-center">{industry.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
