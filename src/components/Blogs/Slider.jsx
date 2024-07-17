import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        title: "Steel vs. Resin Pools: The Ultimate Showdown",
        author: "Ryan Carney",
        date: "July 9, 2023",
        excerpt: "Are you in the market for a new pool but unsure whether to go with a steel or resin option? Don't worry, you're not alone. The battle between steel and resin pools has been ongoing for years, with enthusiasts on both sides fiercely defending their choice. But fear...",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK-jpDgNcKPrH5abmk9Z7AapluS9TziPkcA&s',
      },
      {
        title: "How to Maintain Your Pool in Summer",
        author: "Jane Doe",
        date: "June 21, 2023",
        excerpt: "Summer is here, and it’s time to ensure your pool is in perfect condition for all the fun...",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK-jpDgNcKPrH5abmk9Z7AapluS9TziPkcA&s',
      },
      {
        title: "Top 10 Pool Cleaning Hacks",
        author: "John Smith",
        date: "August 15, 2023",
        excerpt: "Keeping your pool clean doesn’t have to be a hassle. Here are the top 10 hacks to make pool cleaning easier...",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK-jpDgNcKPrH5abmk9Z7AapluS9TziPkcA&s',
      }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleReadMore = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">RenoSys Blog</h1>
      </div>

      {/* Slider */}
      <div className="relative flex-grow bg-blue-600 text-white p-4 md:p-8 lg:p-12">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-sm text-blue-200 mb-2">by {slide.author} | {slide.date}</p>
                    <p className="text-sm md:text-base mb-4">{slide.excerpt}</p>
                  </div>
                  <button
                    onClick={handleReadMore}
                    className="mt-4 px-6 py-2 bg-yellow-500 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-4xl bg-black bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:bg-opacity-50"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-4xl bg-black bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:bg-opacity-50"
        >
          &#8250;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;