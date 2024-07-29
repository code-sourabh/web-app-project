import React, { useState, useEffect } from 'react';
import './solutionbody.css';
import { Link } from 'react-router-dom';

function CardBody({ cards }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to generate random number within a range
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Generate particles for the galaxy effect
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
      const numParticles = 100; // Number of particles
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${randomInRange(0, 100)}vw`; // Random horizontal position
        particle.style.top = `${randomInRange(0, 100)}vh`; // Random vertical position
        particle.style.width = `${randomInRange(2, 4)}px`; // Random width
        particle.style.height = particle.style.width; // Make particle square
        particle.style.animationDuration = `${randomInRange(10, 20)}s`; // Random animation duration
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  const openPopup = (description) => {
    setPopupContent(description);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent('');
  };

  const handleCardClick = (index, description) => {
    setSelectedCard(index);
    openPopup(description);
  };

  return (
    <div className="cards-section">
      <h1>Our Services</h1>
      <div id="particles-container" className="particles-container">
        {/* Particles will be dynamically generated here */}
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${selectedCard === index ? 'active' : ''}`} onClick={() => handleCardClick(index, card.description)}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2>{card.title}</h2>
            {/* <p>{card.description}</p> */}
            <Link to={`/methodologies/${card.name}`}><button className="learn-more" onClick={(e) => { e.stopPropagation(); handleCardClick(index, card.description); }}>Learn More</button></Link>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default CardBody;
