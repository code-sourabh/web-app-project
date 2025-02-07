// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import img1 from '../../image/Untitled design (5).png';
// import img3 from '../../image/Untitled design (6).png';
// import back4 from '../../image/back4.png';
// import back2 from '../../image/back2.jpg';
// import back3 from '../../image/back3.png';
// import "./hero.css";


// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       title: 'Unleash Your Creativity',
//       description: 'Discover powerful tools to bring your ideas to life. Explore our intuitive platform and unlock your creative potential.',
//       imgSrc: img1, // Placeholder image URL
//       imgAlt: 'Hero Image 1'
//     },
//     {
//       title: 'Elevate Your Workflow',
//       description: 'Streamline your processes and boost productivity with our cutting-edge tools. Unlock new levels of efficiency and success.',
//       imgSrc: back3, // Placeholder image URL
//       imgAlt: 'Hero Image 2'
//     }
//   ];
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) =>
//         prevSlide === slides.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handlePrevClick = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
//   };

//   const handleNextClick = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//   };

//   return (
//     <>
  
//     <section className="carousel-section">
//     <div className="carousel-container">
//       <div aria-roledescription="carousel" className="carousel" role="region">
//         <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} aria-roledescription="slide" className="carousel-slide" role="group">
//               <div className="carousel-content-wrapper" style={{ backgroundImage: `url(${back2})`}}>
//                 <div className="carousel-content">
//                   <div className="carousel-text">
//                     <h2 className="carousel-title">
//                       {slide.title}
//                     </h2>
//                     <p className="carousel-description">
//                       {slide.description}
//                     </p>
//                     <div className="carousel-buttons">
//                       <Link to="/" className="btn btn-primary" >
//                         Get Started
//                       </Link>
//                       <Link to={"/about"} className="btn btn-secondary" >
//                         Learn More
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="carousel-image-wrapper">
//                     <img
//                       src={slide.imgSrc}
//                       alt={slide.imgAlt}
//                       className="carousel-image"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={handlePrevClick}
//         className="carousel-button prev-button"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-4 w-4">
//           <path d="m12 19-7-7 7-7"></path>
//           <path d="M19 12H5"></path>
//         </svg>
//         <span className="sr-only">Previous slide</span>
//       </button>
//       <button
//         onClick={handleNextClick}
//         className="carousel-button next-button"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
//           <path d="M5 12h14"></path>
//           <path d="m12 5 7 7-7 7"></path>
//         </svg>
//         <span className="sr-only">Next slide</span>
//       </button>
//     </div>
//   </section>
  
//   </>
//   );
// }

// export default Hero;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img1 from '../../image/Untitled design (5).png';
import img3 from '../../image/Untitled design (6).png';
import back2 from '../../image/back2.jpg';
import back3 from '../../image/back3.png';
import './hero.css';

function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: t('hero.slides.0.title'),
      description: t('hero.slides.0.description'),
      imgSrc: img1,
      imgAlt: 'Hero Image 1'
    },
    {
      title: t('hero.slides.1.title'),
      description: t('hero.slides.1.description'),
      imgSrc: back3,
      imgAlt: 'Hero Image 2'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="carousel-section ">
      <div className="carousel-container">
        <div aria-roledescription="carousel" className="carousel" role="region">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} aria-roledescription="slide" className="carousel-slide" role="group">
                <div className="carousel-content-wrapper" style={{ backgroundImage: `url(${back2})` }}>
                  <div className="carousel-content">
                    <div className="carousel-text">
                      <h2 className=" text-[3.75rem] sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">{slide.title}</h2>
                      <p className="text-xl text-gray-300 mb-6">{slide.description}</p>
                      <div className="carousel-buttons">
                        <Link to="/contact" className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-6 border border-white rounded-lg transition duration-300 flex items-center">
                          {t('hero.slides.0.getStarted')}
                        </Link>
                        
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <img src={slide.imgSrc} alt={slide.imgAlt} className="carousel-image" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handlePrevClick} className="carousel-button prev-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-4 w-4">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
        <button onClick={handleNextClick} className="carousel-button next-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
