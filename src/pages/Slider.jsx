import React, { useState } from 'react';
import "./slide.css";

const useCases = [
  {
    icon: '☁️',
    title: 'Cloud Transformation',
    content: {
      title: 'Cloud Transformation Helped ABFL Enhance Delivery Time by Nearly 30-40%',
      description: 'Aditya Birla Finance Ltd. (ABFL) is a leading provider of end-to-end lending, financing and wealth management solutions to consumers across India.',
    },
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    content: {
      title: 'AI Integration Boosted Customer Satisfaction by 50%',
      description: 'Implementation of AI-driven chatbots and predictive analytics significantly improved customer experience and operational efficiency.',
    },
  },
  {
    icon: '🔒',
    title: 'Enhanced Security',
    content: {
      title: 'Enhanced Security Measures Reduced Fraud by 70%',
      description: 'Advanced encryption and multi-factor authentication systems strengthened the overall security infrastructure, protecting sensitive financial data.',
    },
  },
];

const UseCasesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const nextSlide = () => {
    setSlideDirection('slide-left');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length);
      setSlideDirection('');
    }, 300);
  };

  const prevSlide = () => {
    setSlideDirection('slide-right');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
      setSlideDirection('');
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Use Cases</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-64">
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center border-b md:border-b-0 md:border-r">
            <div className={`text-center ${slideDirection}`}>
              <div className="text-6xl mb-4">{useCases[currentSlide].icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">{useCases[currentSlide].title}</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-orange-500 p-6 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">{useCases[currentSlide].content.title}</h2>
              <p className="text-white mb-4">{useCases[currentSlide].content.description}</p>
              <a href="#" className="text-white hover:underline">Read More ➔</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <button
          onClick={prevSlide}
          className="bg-orange-500 text-white px-4 py-2 rounded-l hover:bg-orange-600 transition-colors"
        >
          ❮ 
        </button>
        <button
          onClick={nextSlide}
          className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default UseCasesSlider;
