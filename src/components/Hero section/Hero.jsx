import { useState } from "react";
import "./hero.css";
import img1 from '../../image/pngegg (4).png'
import img2 from '../../image/frontpage2.png'


function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Unleash Your Creativity',
      description: 'Discover powerful tools to bring your ideas to life. Explore our intuitive platform and unlock your creative potential.',
      imgSrc: img1, // Placeholder image URL
      imgAlt: 'Hero Image 1'
    },
    {
      title: 'Elevate Your Workflow',
      description: 'Streamline your processes and boost productivity with our cutting-edge tools. Unlock new levels of efficiency and success.',
      imgSrc: img2, // Placeholder image URL
      imgAlt: 'Hero Image 2'
    }
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
  
    <section className="carousel-section">
    <div className="carousel-container">
      <div aria-roledescription="carousel" className="carousel" role="region">
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} aria-roledescription="slide" className="carousel-slide" role="group">
              <div className="carousel-content-wrapper" style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjUyOXwwfDF8c2VhcmNofDR8fHRlY2h8ZW58MHx8fHwxNjI5NDA1NTkw&ixlib=rb-1.2.1&q=80&w=1080"})` }}>
                <div className="carousel-content">
                  <div className="carousel-text">
                    <h2 className="carousel-title">
                      {slide.title}
                    </h2>
                    <p className="carousel-description">
                      {slide.description}
                    </p>
                    <div className="carousel-buttons">
                      <a className="btn btn-primary" href="#">
                        Get Started
                      </a>
                      <a className="btn btn-secondary" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="carousel-image-wrapper">
                    <img
                      src={slide.imgSrc}
                      alt={slide.imgAlt}
                      className="carousel-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrevClick}
        className="carousel-button prev-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-4 w-4">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        onClick={handleNextClick}
        className="carousel-button next-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  </section>
  
  </>
  );
}

export default Hero;
