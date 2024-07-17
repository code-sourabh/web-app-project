import React, { useState } from 'react';
import './Description.css';

const Description = () => {
  const [activeSection, setActiveSection] = useState('innovate');

  const handleFooterButtonClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="header-title">
          A.I.M.<span className="header-subtitle">ing to Build Your Next</span>
        </h1>
      </header>
      <section className={`section ${activeSection}-section`}>
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">{activeSection === 'innovate' ? 'Innovate' : activeSection === 'accelerate' ? 'Accelerate' : 'Multiply'}</h2>
            <p className="section-description">
              {activeSection === 'innovate' && (
                'Explore disruptive building blocks unique to Blazeclan to manage the infrastructure with a birds-eye view and optimize expenditure. Deliver high-performance applications, implement proactive infrastructure security, and maximize the value of the business.'
              )}
              {activeSection === 'accelerate' && (
                'Accelerate your business processes and workflows with cutting-edge solutions designed to boost efficiency and speed.'
              )}
              {activeSection === 'multiply' && (
                'Multiply your business value through scalable and sustainable practices that ensure long-term growth and success.'
              )}
            </p>
          </div>
          <div className="image-content">
            <img
              src={
                activeSection === 'innovate'
                  ? 'https://via.placeholder.com/550x400' // Placeholder image URL for Innovate
                  : activeSection === 'accelerate'
                  ? 'https://via.placeholder.com/550x400/FF5733' // Placeholder image URL for Accelerate
                  : 'https://via.placeholder.com/550x400/FFC300' // Placeholder image URL for Multiply
              }
              alt={activeSection === 'innovate' ? 'Innovate' : activeSection === 'accelerate' ? 'Accelerate' : 'Multiply'}
              className="section-image"
            />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-links">
          <button
            className={`footer-button ${activeSection === 'accelerate' ? 'active' : ''}`}
            onClick={() => handleFooterButtonClick('accelerate')}
          >
            Accelerate
          </button>
          <button
            className={`footer-button ${activeSection === 'innovate' ? 'active' : ''}`}
            onClick={() => handleFooterButtonClick('innovate')}
          >
            Innovate
          </button>
          <button
            className={`footer-button ${activeSection === 'multiply' ? 'active' : ''}`}
            onClick={() => handleFooterButtonClick('multiply')}
          >
            Multiply
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Description;